import React, { useState } from "react";
import "../styles/contactHelp.css";
import { Linkedin, Facebook, Instagram, Loader2, Send } from "lucide-react";

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

const ContactHelp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Servicios",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const apiURL = process.env.NODE_ENV === "production"
        ? "/api/send-email"
        : "http://localhost:5001/api/send-email";

      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "¡Mensaje enviado con éxito! Nos pondremos en contacto contigo a la brevedad."
        });
        setFormData({ name: "", email: "", subject: "Servicios", message: "" });
      } else {
        setStatus({
          type: "error",
          message: result.error || "Ocurrió un error al enviar el mensaje. Por favor intenta de nuevo."
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus({
        type: "error",
        message: "No se pudo conectar con el servidor de correo. Intente más tarde."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">

      {/* HEADER */}
      <section className="contact-hero">
        <div className="hero-text">
          <span className="section-label">CONTACTO</span>
          <h1>
            ¿Cómo podemos <span>ayudarte</span>?
          </h1>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Equipo trabajando"
          />
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="contact-form-embed">
        <h2>Contáctanos</h2>
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Nombre Completo *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Juan Pérez"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Correo Electrónico *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="juan@ejemplo.com"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="subject" className="form-label">Motivo del Contacto *</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-select"
                disabled={loading}
              >
                <option value="Servicios">Conocé nuestros servicios / Desarrollo de software</option>
                <option value="Carreras">Carreras / Selección de talentos</option>
                <option value="Prensa">Prensa y medios</option>
                <option value="Consultas Generales">Consultas generales / Soporte</option>
              </select>
            </div>

            <div className="form-group full-width">
              <label htmlFor="message" className="form-label">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Contanos brevemente sobre tu proyecto o consulta..."
                required
                disabled={loading}
              ></textarea>
            </div>

            <div className="submit-container">
              <button type="submit" className="form-submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Enviar Mensaje
                  </>
                )}
              </button>

              <div className="form-or-divider">
                <span>O también podés</span>
              </div>

              <a 
                href="https://wa.me/5491154177754?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                target="_blank"
                rel="noopener noreferrer"
                className="form-whatsapp-link-btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.855.002-2.63-1.023-5.101-2.887-6.966a9.782 9.782 0 0 0-6.974-2.879C6.46 2.905 2.036 7.324 2.033 12.76c-.001 1.693.453 3.342 1.32 4.793L2.33 21.03l3.666-1.611c.01-.006.021-.013.03-.021z"/>
                </svg>
                Consultar por WhatsApp
              </a>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </section>
      {/* OPTIONS */}
      <section className="contact-options">
        <div className="option-card">
          <h3>Conocé nuestros servicios</h3>
          <p>
            ¿Buscás expandir tu equipo de desarrollo de software?
            Contanos cuáles son tus necesidades.
          </p>
           <a 
  href="/contacto" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Agendar llamada</button>
</a>

        </div>

        <div className="option-card highlight">
          <h3>Carreras en SEOdigital</h3>
          <p>
            Formá parte del futuro tecnológico en una comunidad
            dinámica con más de 4.000 expertos.
          </p>
           <a 
  href="/contacto" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Selección de talentos</button>
</a>

        </div>

        <div className="option-card">
          <h3>Prensa y medios</h3>
          <p>
            Para consultas relacionadas con prensa,
            participaciones o comunicación corporativa.
          </p>
           <a 
  href="/contacto " 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Contacto de Prensa</button>
</a>

        </div>

        <div className="option-card">
          <h3>Consultas generales</h3>
          <p>
            ¿Tenés otra consulta o necesitás soporte?
            Estamos para ayudarte.
          </p>
 <a 
  href="/contacto" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Contacto</button>
</a>
        </div>
      </section>



      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="info-block">
          <h4>Llamanos</h4>
          <p>+1 (408) 478-2739</p>
        </div>

        <div className="info-block">
          <h4>WhatsApp</h4>
          <p>
            <a 
              href="https://wa.me/5491154177754?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="info-whatsapp-anchor"
            >
              Contacto directo por WhatsApp
            </a>
          </p>
        </div>

        <div className="info-block">
          <h4>Seguinos</h4>
          <div className="socials">
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
        </div>
      </section>

      {/* OFFICES */}
      <section className="offices">
        <h2>SEOdigital en el mundo · Nuestras oficinas</h2>

        <div className="offices-grid">
          <div className="office-card">
            <h4> Central. Buenos Aires</h4>
            <p> Cosquin 4062<br /> CABA, Argentina</p>
          </div>

          <div className="office-card">
            <h4>Tampa</h4>
            <p>Florida<br />USA</p>
          </div>

          <div className="office-card">
            <h4>Santa Mónica</h4>
            <p> California<br /> USA</p>
          </div>

          <div className="office-card">
            <h4>Madrid</h4>
            <p>Madrid<br />España</p>
          </div>

          <div className="office-card">
            <h4>Massachusetts</h4>
            <p>2400 District Avenue<br />USA</p>
          </div>

          <div className="office-card">
            <h4>Buenos Aires</h4>
            <p>
               Cosquin 4062<br />
              Ciudad Autónoma de Buenos Aires, Argentina
            </p>
          </div>

          <div className="office-card">
            <h4>Bogotá</h4>
            <p>Bogotá D.C.<br />Colombia</p>
          </div>

          <div className="office-card">
            <h4>Medellín</h4>
            <p>Antioquia<br />Colombia</p>
          </div>

           
        </div>
      </section>

    </div>
  );
};

export default ContactHelp;
