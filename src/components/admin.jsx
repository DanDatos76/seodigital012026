import React, { useState, useEffect } from "react";
import { 
  Mail, 
  User, 
  Tag, 
  Calendar, 
  MessageSquare, 
  Search, 
  RefreshCw, 
  FileText,
  AlertCircle,
  Lock,
  Eye,
  EyeOff,
  LogIn,
  LogOut
} from "lucide-react";
import "../styles/admin.css";

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("seodigital_admin_pwd");
    setPassword("");
    setIsAuthenticated(false);
    setRequests([]);
  };

  const fetchRequests = async (isSilent = false) => {
    if (!isSilent) setLoading(true);
    setError("");
    try {
      const apiURL = process.env.NODE_ENV === "production"
        ? "/api/contact-requests"
        : "http://localhost:5001/api/contact-requests";

      const response = await fetch(apiURL, {
        headers: {
          "Authorization": `Bearer ${password}`
        }
      });

      if (response.status === 401) {
        handleLogout();
        throw new Error("Sesión no autorizada o expirada.");
      }

      if (!response.ok) {
        throw new Error("No se pudo obtener la lista de mensajes.");
      }
      const data = await response.json();
      setRequests(data);
    } catch (err) {
      console.error("Error fetching contact requests:", err);
      setError(err.message || "Error de conexión con el servidor.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!password) {
      setLoginError("Por favor ingrese la contraseña.");
      return;
    }

    setLoginLoading(true);
    setLoginError("");

    try {
      const apiURL = process.env.NODE_ENV === "production"
        ? "/api/admin/verify"
        : "http://localhost:5001/api/admin/verify";

      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ password })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        sessionStorage.setItem("seodigital_admin_pwd", password);
        setIsAuthenticated(true);
      } else {
        setLoginError(data.error || "Contraseña incorrecta.");
      }
    } catch (err) {
      console.error("Login verification error:", err);
      setLoginError("Error de conexión con el servidor de autenticación.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Check session storage on mount
  useEffect(() => {
    const savedPassword = sessionStorage.getItem("seodigital_admin_pwd");
    if (savedPassword) {
      setPassword(savedPassword);
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch requests when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchRequests();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchRequests(true);
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "Fecha no disponible";
    const date = new Date(timestamp);
    return date.toLocaleString("es-ES", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };

  const filteredRequests = requests.filter((req) => {
    const query = searchQuery.toLowerCase();
    return (
      (req.name && req.name.toLowerCase().includes(query)) ||
      (req.email && req.email.toLowerCase().includes(query)) ||
      (req.message && req.message.toLowerCase().includes(query)) ||
      (req.subject && req.subject.toLowerCase().includes(query))
    );
  });

  // Calculate statistics
  const totalRequests = requests.length;
  const last24Hours = requests.filter(req => {
    if (!req.timestamp) return false;
    const diff = Date.now() - req.timestamp;
    return diff < 24 * 60 * 60 * 1000;
  }).length;

  const subjectCounts = requests.reduce((acc, req) => {
    const sub = req.subject || "Consulta General";
    acc[sub] = (acc[sub] || 0) + 1;
    return acc;
  }, {});

  const mostFrequentSubject = Object.entries(subjectCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Ninguno";

  // --- RENDER LOGIN GATE ---
  if (!isAuthenticated) {
    return (
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-logo-container">
            <div className="login-icon-glow">
              <Lock size={30} />
            </div>
            <h2>Acceso Restringido</h2>
            <p>Por favor ingresá la contraseña de administrador para ver las solicitudes de contacto.</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="login-form">
            <div className="login-form-group">
              <label htmlFor="admin-pwd">Contraseña</label>
              <div className="login-input-wrapper">
                <input
                  id="admin-pwd"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loginLoading}
                />
                <button
                  type="button"
                  className="login-toggle-pwd"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loginLoading}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {loginError && (
              <div className="login-error">
                <AlertCircle size={16} />
                <span>{loginError}</span>
              </div>
            )}

            <button type="submit" className="login-submit-btn" disabled={loginLoading}>
              {loginLoading ? (
                <>
                  <RefreshCw size={18} className="spinning" />
                  Verificando...
                </>
              ) : (
                <>
                  <LogIn size={18} />
                  Ingresar
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- RENDER DASHBOARD ---
  return (
    <div className="admin-wrapper">
      <div className="admin-header">
        <div>
          <span className="admin-badge">DASHBOARD</span>
          <h1>Panel de Administración</h1>
          <p className="admin-subtitle">Gestión de Solicitudes de Contacto (/contact-requests)</p>
        </div>
        <div className="admin-header-actions">
          <button 
            onClick={handleRefresh} 
            className={`refresh-btn ${refreshing ? "spinning" : ""}`}
            disabled={loading || refreshing}
          >
            <RefreshCw size={18} />
            {refreshing ? "Actualizando..." : "Actualizar"}
          </button>
          <button 
            onClick={handleLogout} 
            className="logout-btn"
          >
            <LogOut size={18} />
            Cerrar Sesión
          </button>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon purple">
            <Mail size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Total Recibidos</span>
            <h3 className="stat-value">{totalRequests}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <Calendar size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Últimas 24 Horas</span>
            <h3 className="stat-value">{last24Hours}</h3>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            <Tag size={24} />
          </div>
          <div className="stat-content">
            <span className="stat-label">Motivo Principal</span>
            <h3 className="stat-value text-ellipsis" title={mostFrequentSubject}>{mostFrequentSubject}</h3>
          </div>
        </div>
      </div>

      {/* SEARCH AND MAIN CONTENT */}
      <div className="admin-content-card">
        <div className="search-bar-container">
          <Search className="search-icon" size={18} />
          <input
            type="text"
            placeholder="Buscar por nombre, correo, mensaje..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {error && (
          <div className="error-alert">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        {loading ? (
          <div className="admin-loading">
            <RefreshCw size={36} className="spinning" />
            <p>Cargando mensajes desde la Base de Datos...</p>
          </div>
        ) : filteredRequests.length === 0 ? (
          <div className="no-data-state">
            <FileText size={48} className="no-data-icon" />
            <h3>No se encontraron solicitudes</h3>
            <p>{searchQuery ? "Prueba con otra palabra clave en tu búsqueda." : "Los mensajes que envíen tus clientes se listarán automáticamente aquí."}</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Remitente</th>
                  <th>Motivo</th>
                  <th>Mensaje corto</th>
                  <th>Fecha</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                {filteredRequests.map((req) => (
                  <tr key={req.id} className="table-row">
                    <td>
                      <div className="sender-info">
                        <div className="sender-avatar">
                          {req.name ? req.name.charAt(0).toUpperCase() : "?"}
                        </div>
                        <div>
                          <h4 className="sender-name">{req.name}</h4>
                          <span className="sender-email">{req.email}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <span className={`subject-badge ${req.subject === 'Servicios' ? 'servicios' : req.subject === 'Carreras' ? 'carreras' : 'general'}`}>
                        {req.subject || "Consulta General"}
                      </span>
                    </td>
                    <td className="message-cell">
                      <p className="message-snippet">{req.message}</p>
                    </td>
                    <td className="date-cell">
                      {formatDate(req.timestamp)}
                    </td>
                    <td>
                      <button 
                        onClick={() => setSelectedRequest(req)} 
                        className="view-details-btn"
                      >
                        Ver Detalles
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* DETAIL MODAL / DRAWER */}
      {selectedRequest && (
        <div className="modal-overlay" onClick={() => setSelectedRequest(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Detalle del Mensaje</h3>
              <button onClick={() => setSelectedRequest(null)} className="close-modal-btn">✕</button>
            </div>
            
            <div className="modal-body">
              <div className="detail-item">
                <span className="detail-label"><User size={16} /> Nombre</span>
                <p className="detail-value">{selectedRequest.name}</p>
              </div>

              <div className="detail-item">
                <span className="detail-label"><Mail size={16} /> Email</span>
                <p className="detail-value">
                  <a href={`mailto:${selectedRequest.email}`}>{selectedRequest.email}</a>
                </p>
              </div>

              <div className="detail-item">
                <span className="detail-label"><Tag size={16} /> Motivo del Contacto</span>
                <p className="detail-value">{selectedRequest.subject || "Consulta General"}</p>
              </div>

              <div className="detail-item">
                <span className="detail-label"><Calendar size={16} /> Fecha de Recepción</span>
                <p className="detail-value">{formatDate(selectedRequest.timestamp)}</p>
              </div>

              <div className="detail-item full-width">
                <span className="detail-label"><MessageSquare size={16} /> Mensaje</span>
                <div className="detail-message-box">
                  {selectedRequest.message}
                </div>
              </div>
            </div>
            
            <div className="modal-footer">
              <button onClick={() => setSelectedRequest(null)} className="modal-close-action-btn">
                Cerrar
              </button>
              <a 
                href={`mailto:${selectedRequest.email}?subject=Re: ${selectedRequest.subject || 'Contacto'}`}
                className="modal-reply-btn"
              >
                Responder por Email
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
