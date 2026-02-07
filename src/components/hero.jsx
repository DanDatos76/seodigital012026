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
            <button className="hero-button primary">
              <span>Programa una Llamada</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero-button secondary">
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
