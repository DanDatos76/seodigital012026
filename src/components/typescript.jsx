// src/pages/TypeScript.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import tsLogo from "../assets/type.jfif"; // logo de TypeScript
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const TypeScriptPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO TYPESCRIPT</p>
          <h1>
            Escala tu desarrollo con <span className="highlight">TypeScript</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo en TypeScript permiten construir
            aplicaciones robustas, mantenibles y escalables, reduciendo errores
            y mejorando la calidad del código desde las primeras etapas.
          </p>
          <button className="cta-btn">Acceder a desarrollo TypeScript</button>
        </div>

        <div className="hero-img">
          <img src={tsLogo} alt="TypeScript" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src=" /google.png" alt="Google" />
            <img src=" /pinterest.png" alt="Pinterest" />
            <img src=" /adobe.png" alt="Adobe" />
            <img src=" /ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de desarrollo TypeScript que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Desarrollo de aplicaciones web con TypeScript</h3>
            <p>
              Construimos aplicaciones web modernas utilizando TypeScript,
              asegurando tipado fuerte, escalabilidad y código mantenible.
            </p>
          </div>

          <div className="service-item">
            <h3>Frontend y backend con TypeScript</h3>
            <p>
              Desarrollamos soluciones full stack con TypeScript en frontend
              y backend, integrando frameworks modernos.
            </p>
          </div>

          <div className="service-item">
            <h3>Arquitectura y refactorización</h3>
            <p>
              Diseñamos arquitecturas limpias y refactorizamos proyectos
              JavaScript para mejorar calidad y rendimiento.
            </p>
          </div>

          <div className="service-item">
            <h3>Escalabilidad y cloud deployment</h3>
            <p>
              Implementamos aplicaciones TypeScript preparadas para
              entornos cloud de alta disponibilidad.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para desarrollo TypeScript?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Equipos TypeScript alineados a tu horario</h4>
            <p>
              Desarrolladores nearshore que trabajan en tu misma zona horaria
              para una colaboración eficiente.
            </p>
          </div>

          <div className="why-item">
            <h4>Expertos en TypeScript y JavaScript moderno</h4>
            <p>
              Ingenieros con experiencia en TypeScript, ECMAScript moderno
              y mejores prácticas de desarrollo.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Staff augmentation o equipos dedicados adaptados
              a las necesidades de tu proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo desarrollando con TypeScript" />
        </div>
         <div className="end-text">
  <h3>¿Listo para acelerar tu proyecto Python?</h3>
  <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn">Comenzar ahora</button>
  </a>
</div>

      </section>

    </div>
  );
};

export default TypeScriptPage;
