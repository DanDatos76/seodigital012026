 // src/components/Footer.jsx
import React from "react";
import "../styles/footer.css";
import { 
  Linkedin, 
  Facebook, 
  Instagram, 
  MessageCircle 
} from "lucide-react";

// Icono de TikTok en formato SVG (estilo Lucide)
const TikTokIcon = ({ size = 20 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          
          {/* Columna 1 */}
          <div className="footer-column">
            <h4>Descubre la magia de SEOdigital</h4>
            <ul>
              <li><a href="/nuestroslideres"> Líderes</a></li>
              <li><a href="/tecnologicos">Equipo técnico</a></li>
              <li><a href="/prensa">Prensa</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="footer-column">
            <h4> Aval</h4>
            <ul>
              <li><a href="/premios"> Premios</a></li>
              <li><a href="/certificacione">Certificados</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="footer-column">
            <h4>Carreras</h4>
            <ul>
              <li><a href="/vacantes">Oportunidades Laborales</a></li>
              <li><a href="/trabajar"> Trabajar en SEOdigital</a></li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="footer-column social-section">
            <h4>Síguenos</h4>
            <div className="social-grid-display">
              <a 
                href="https://www.linkedin.com/company/seodigital-oficial/" 
                className="social-item" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/seodigital.ar" 
                className="social-item" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              
              <a 
                href="https://www.tiktok.com/@seodigital_" 
                className="social-item" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="TikTok"
              >
                <TikTokIcon size={20} />
                <span>Tik Tok</span>
              </a>

              <a 
                href="https://www.facebook.com/seodigital.ar" 
                className="social-item" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
            </div>
            <button className="whatsapp-cta" onClick={() => window.open('https://wa.me/5491176550907', '_blank')}>
              <MessageCircle size={18} />
              Contacto Directo
            </button>
          </div>

        </div>

        {/* Parte inferior legal */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos de Servicio</a>
          </div>
          <p className="copyright">© 2025 SEOdigital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}