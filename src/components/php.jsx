// src/pages/PHP.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import phpLogo from "../assets/php.jfif"; // logo de PHP
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const PHPPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO PHP</p>
          <h1>
            Escala tu desarrollo con <span className="highlight">PHP</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo en PHP permiten crear aplicaciones
            web seguras, escalables y de alto rendimiento. Trabajamos con
            frameworks modernos para acelerar los tiempos de entrega sin
            comprometer la calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo PHP</button>
        </div>

        <div className="hero-img">
          <img src={phpLogo} alt="PHP" />
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
        <h2>Servicios de desarrollo PHP que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Desarrollo de aplicaciones web con PHP</h3>
            <p>
              Construimos aplicaciones web robustas utilizando PHP moderno,
              enfocadas en seguridad, escalabilidad y mantenibilidad.
            </p>
          </div>

          <div className="service-item">
            <h3>APIs y servicios backend</h3>
            <p>
              Diseñamos y desarrollamos APIs RESTful eficientes que integran
              sistemas web, móviles y plataformas externas.
            </p>
          </div>

          <div className="service-item">
            <h3>Optimización y mantenimiento de sistemas PHP</h3>
            <p>
              Mejoramos el rendimiento, la seguridad y la estructura de
              aplicaciones PHP existentes.
            </p>
          </div>

          <div className="service-item">
            <h3>Frameworks PHP y despliegue en la nube</h3>
            <p>
              Implementamos soluciones con frameworks como Laravel y Symfony,
              preparadas para entornos cloud de alta disponibilidad.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para desarrollo PHP?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Equipos PHP alineados a tu zona horaria</h4>
            <p>
              Desarrolladores nearshore que trabajan en tu mismo horario
              para facilitar la comunicación y la entrega continua.
            </p>
          </div>

          <div className="why-item">
            <h4>Especialistas en PHP moderno</h4>
            <p>
              Ingenieros con experiencia en PHP, frameworks modernos
              y buenas prácticas de arquitectura backend.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Staff augmentation o equipos dedicados según
              las necesidades de tu proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo desarrollando con PHP" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto PHP?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default PHPPage;
