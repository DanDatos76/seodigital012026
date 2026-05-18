import React from "react";
import "../styles/hero.css";
import heroImg from "../assets/hero-img.jpg";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-background-gradient"></div>
      
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">Talentos Verificados de Primer Nivel</span>
          </div>
          
          <h1 className="hero-title">
            Acelera tu Roadmap con{' '}
            <span className="hero-gradient-text">Talento Tecnológico</span>{' '}
            de Élite
          </h1>
          
          <p className="hero-description">
            Accede a más de 4,000 ingenieros de software especializados, 
            alineados a tu zona horaria y con experiencia comprobada en más de 100 tecnologías.
          </p>
          
          <div className="hero-cta-group">
            <a href="/contacto" className="hero-cta-link">
              <button className="hero-button primary">
                <span>Agendar Llamada</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </a>

            <a 
              href="https://wa.me/5491154177754?text=Hola!%20Me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-link"
            >
              <button className="hero-button whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px' }}>
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.248 8.477 3.517 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.855.002-2.63-1.023-5.101-2.887-6.966a9.782 9.782 0 0 0-6.974-2.879C6.46 2.905 2.036 7.324 2.033 12.76c-.001 1.693.453 3.342 1.32 4.793L2.33 21.03l3.666-1.611c.01-.006.021-.013.03-.021z"/>
                </svg>
                <span>Hablar con un asesor</span>
              </button>
            </a>

            <button className="hero-button secondary" data-cta-target="/casos-de-estudio">
              Ver Casos de Éxito
            </button>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">4,000+</div>
              <div className="stat-label">Ingenieros</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-label">Tecnologías</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfacción</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <div className="hero-image-decoration decoration-1"></div>
            <div className="hero-image-decoration decoration-2"></div>
            <img
              src={heroImg}
              alt="Professional software team collaborating in an office"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
