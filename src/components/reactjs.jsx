// src/pages/React.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import reactLogo from "../assets/react.png"; // logo de React
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const ReactPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO REACT</p>
          <h1>
            Escala tu desarrollo con <span className="highlight">React</span>
            <br />y talento nearshore de alto nivel.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo en React permiten crear interfaces modernas,
            rápidas y escalables. Entregamos soluciones de alta calidad en ciclos ágiles,
            optimizando la experiencia del usuario y el rendimiento de tu producto.
          </p>
          <button className="cta-btn">Acceder a desarrollo React</button>
        </div>

        <div className="hero-img">
          <img src={reactLogo} alt="React" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/google.png" alt="Google" />
            <img src="/logos/pinterest.png" alt="Pinterest" />
            <img src="/logos/adobe.png" alt="Adobe" />
            <img src="/logos/ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de desarrollo React que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Desarrollo de aplicaciones web modernas</h3>
            <p>
              Construimos interfaces dinámicas y escalables utilizando React,
              enfocadas en rendimiento, usabilidad y experiencia de usuario.
            </p>
          </div>

          <div className="service-item">
            <h3>Single Page Applications (SPA)</h3>
            <p>
              Desarrollamos SPAs rápidas y eficientes que mejoran la navegación
              y reducen los tiempos de carga.
            </p>
          </div>

          <div className="service-item">
            <h3>Arquitectura y componentes reutilizables</h3>
            <p>
              Diseñamos arquitecturas limpias y componentes reutilizables
              para facilitar el mantenimiento y la escalabilidad.
            </p>
          </div>

          <div className="service-item">
            <h3>Integración con APIs y backend</h3>
            <p>
              Integramos React con APIs REST y GraphQL,
              garantizando una comunicación eficiente con el backend.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para desarrollo React?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Talento React alineado a tu zona horaria</h4>
            <p>
              Equipos nearshore que trabajan en tu mismo horario,
              asegurando comunicación fluida y entregas continuas.
            </p>
          </div>

          <div className="why-item">
            <h4>Desarrolladores React senior</h4>
            <p>
              Especialistas con experiencia en React, hooks, state management
              y buenas prácticas de frontend moderno.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Desde staff augmentation hasta equipos dedicados
              adaptados a las necesidades de tu negocio.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo desarrollando con React" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto con React?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default ReactPage;
