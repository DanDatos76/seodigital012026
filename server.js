const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
const envPath = path.join(__dirname, '.env.local');
let apiKey = process.env.RESEND_API_KEY;
let firebaseUrl = process.env.FIREBASE_URL;
let adminPassword = process.env.ADMIN_PASSWORD || 'seodigital2026';

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  const resendMatch = envContent.match(/RESEND_API_KEY\s*=\s*([^\s]+)/);
  if (resendMatch && resendMatch[1]) {
    apiKey = resendMatch[1].trim();
  }

  const firebaseMatch = envContent.match(/FIREBASE_URL\s*=\s*([^\s]+)/);
  if (firebaseMatch && firebaseMatch[1]) {
    firebaseUrl = firebaseMatch[1].trim();
  }

  const passwordMatch = envContent.match(/ADMIN_PASSWORD\s*=\s*([^\s]+)/);
  if (passwordMatch && passwordMatch[1]) {
    adminPassword = passwordMatch[1].trim();
  }
}

const PORT = process.env.PORT || 5001;
const localDbPath = path.join(__dirname, 'contact-requests.json');

// --- DATABASE FUNCTIONS (FIREBASE + LOCAL FALLBACK) ---

function saveToLocal(data, callback) {
  getLocalRequests((err, list) => {
    const newList = [...list, { ...data, id: Date.now().toString() }];
    fs.writeFile(localDbPath, JSON.stringify(newList, null, 2), 'utf8', (err) => {
      if (err) return callback(err);
      callback(null, data);
    });
  });
}

function getLocalRequests(callback) {
  if (!fs.existsSync(localDbPath)) {
    return callback(null, []);
  }
  fs.readFile(localDbPath, 'utf8', (err, content) => {
    if (err) return callback(err);
    try {
      callback(null, JSON.parse(content || '[]'));
    } catch (e) {
      callback(null, []);
    }
  });
}

function saveContactRequest(requestData, callback) {
  const dataWithTime = {
    ...requestData,
    timestamp: Date.now()
  };

  if (firebaseUrl) {
    try {
      const cleanUrl = firebaseUrl.endsWith('/') ? firebaseUrl : `${firebaseUrl}/`;
      const targetUrl = new URL(`${cleanUrl}contact-requests.json`);
      
      const reqBody = JSON.stringify(dataWithTime);
      const options = {
        hostname: targetUrl.hostname,
        port: 443,
        path: targetUrl.pathname + targetUrl.search,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(reqBody)
        }
      };

      const fbReq = https.request(options, (fbRes) => {
        let body = '';
        fbRes.on('data', d => body += d);
        fbRes.on('end', () => {
          if (fbRes.statusCode >= 200 && fbRes.statusCode < 300) {
            callback(null, JSON.parse(body));
          } else {
            console.warn(`Firebase status ${fbRes.statusCode}, saving locally.`);
            saveToLocal(dataWithTime, callback);
          }
        });
      });

      fbReq.on('error', (e) => {
        console.error('Firebase save error, falling back to local file:', e);
        saveToLocal(dataWithTime, callback);
      });

      fbReq.write(reqBody);
      fbReq.end();
    } catch (err) {
      console.error('Invalid Firebase URL format, saving locally:', err);
      saveToLocal(dataWithTime, callback);
    }
  } else {
    saveToLocal(dataWithTime, callback);
  }
}

function getContactRequests(callback) {
  if (firebaseUrl) {
    try {
      const cleanUrl = firebaseUrl.endsWith('/') ? firebaseUrl : `${firebaseUrl}/`;
      const targetUrl = new URL(`${cleanUrl}contact-requests.json`);
      
      const options = {
        hostname: targetUrl.hostname,
        port: 443,
        path: targetUrl.pathname + targetUrl.search,
        method: 'GET'
      };

      const fbReq = https.request(options, (fbRes) => {
        let body = '';
        fbRes.on('data', d => body += d);
        fbRes.on('end', () => {
          if (fbRes.statusCode >= 200 && fbRes.statusCode < 300) {
            try {
              const data = JSON.parse(body || '{}');
              if (data && typeof data === 'object') {
                const list = Object.keys(data).map(key => ({
                  id: key,
                  ...data[key]
                }));
                // Sort by newest first
                list.sort((a, b) => b.timestamp - a.timestamp);
                callback(null, list);
              } else {
                callback(null, []);
              }
            } catch (e) {
              console.error('Error parsing Firebase responses, getting local database.');
              getLocalRequests(callback);
            }
          } else {
            getLocalRequests(callback);
          }
        });
      });

      fbReq.on('error', (e) => {
        console.error('Firebase read error, loading from local file:', e);
        getLocalRequests(callback);
      });

      fbReq.end();
    } catch (err) {
      console.error('Invalid Firebase URL format, reading local database:', err);
      getLocalRequests(callback);
    }
  } else {
    getLocalRequests((err, list) => {
      if (err) return callback(err);
      const sorted = [...list].sort((a, b) => b.timestamp - a.timestamp);
      callback(null, sorted);
    });
  }
}

// --- SERVER INSTANCE ---

const server = http.createServer((req, res) => {
  // CORS Headers for secure client communication
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Route: Verify Admin Password
  if (req.url === '/api/admin/verify' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        if (payload.password === adminPassword) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true }));
        } else {
          res.writeHead(401, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Contraseña incorrecta' }));
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Cuerpo de JSON inválido' }));
      }
    });
    return;
  }

  // API Route: Get all contact requests (Admin Dashboard)
  if (req.url === '/api/contact-requests' && req.method === 'GET') {
    const authHeader = req.headers['authorization'];
    if (!authHeader || authHeader !== `Bearer ${adminPassword}`) {
      res.writeHead(401, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'No autorizado' }));
      return;
    }

    getContactRequests((err, list) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Fallo al recuperar los mensajes' }));
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(list));
      }
    });
    return;
  }

  // API Route: Send Email via Resend & Save in Firebase
  if (req.url === '/api/send-email' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const { name, email, subject, message } = payload;

        if (!name || !email || !message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Faltan campos obligatorios' }));
          return;
        }

        // 1. Save to Database (Firebase / Local Fallback)
        saveContactRequest({ name, email, subject, message }, (dbErr, savedData) => {
          if (dbErr) {
            console.error('Error al guardar datos de contacto:', dbErr);
          } else {
            console.log('Mensaje guardado con éxito en Base de Datos:', savedData);
          }
        });

        // 2. Send email via Resend if API key is configured
        if (!apiKey) {
          console.warn('RESEND_API_KEY no configurada. Saltando envío de correo (los datos fueron guardados).');
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: 'Datos guardados, pero omitido envío de correo por falta de API Key.' }));
          return;
        }

        const emailData = JSON.stringify({
          from: 'onboarding@resend.dev',
          to: 'juanma.herflo@gmail.com', // Verified target recipient
          subject: subject ? `${subject} - de ${name}` : `Nuevo mensaje de contacto de ${name}`,
          html: `
            <div style="font-family: sans-serif; padding: 20px; color: #111827; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
              <h2 style="color: #6223cc; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">Nuevo Mensaje de Contacto</h2>
              <p style="margin: 10px 0;"><strong>Nombre:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #6223cc; text-decoration: none;">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Asunto:</strong> ${subject || 'Consulta General'}</p>
              <div style="margin-top: 20px;">
                <strong style="display: block; margin-bottom: 8px;">Mensaje:</strong>
                <div style="white-space: pre-wrap; background-color: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; line-height: 1.5; color: #374151;">${message}</div>
              </div>
              <footer style="margin-top: 30px; font-size: 12px; color: #6b7280; text-align: center; border-top: 1px solid #e5e7eb; padding-top: 15px;">
                Este es un correo enviado automáticamente desde el formulario de contacto de SEOdigital.
              </footer>
            </div>
          `
        });

        const options = {
          hostname: 'api.resend.com',
          port: 443,
          path: '/emails',
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(emailData)
          }
        };

        const resendReq = https.request(options, (resendRes) => {
          let resendBody = '';
          resendRes.on('data', d => {
            resendBody += d;
          });
          resendRes.on('end', () => {
            res.writeHead(resendRes.statusCode, { 'Content-Type': 'application/json' });
            res.end(resendBody);
          });
        });

        resendReq.on('error', e => {
          console.error('Error al solicitar envío a Resend:', e);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Error interno al enviar a Resend' }));
        });

        resendReq.write(emailData);
        resendReq.end();

      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Cuerpo de JSON inválido' }));
      }
    });
    return;
  }

  // Serve static compiled SPA files in production
  const buildPath = path.join(__dirname, 'build');
  if (fs.existsSync(buildPath)) {
    let filePath = path.join(buildPath, req.url === '/' ? 'index.html' : req.url);
    
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(buildPath, 'index.html');
    }

    const extname = path.extname(filePath);
    let contentType = 'text/html';
    
    switch (extname) {
      case '.js':
        contentType = 'text/javascript';
        break;
      case '.css':
        contentType = 'text/css';
        break;
      case '.json':
        contentType = 'application/json';
        break;
      case '.png':
        contentType = 'image/png';
        break;
      case '.jpg':
        contentType = 'image/jpg';
        break;
      case '.svg':
        contentType = 'image/svg+xml';
        break;
    }

    fs.readFile(filePath, (err, content) => {
      if (err) {
        res.writeHead(500);
        res.end('Error del Servidor');
      } else {
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('No Encontrado (Ejecuta npm run build para compilar el frontend)');
  }
});

server.listen(PORT, () => {
  console.log(`Node Secure Proxy server running on port ${PORT}`);
});
