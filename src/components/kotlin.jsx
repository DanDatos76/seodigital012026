// src/pages/Kotlin.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS
import kotlinLogo from "../assets/kotlin.png"; // logo de Kotlin
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const Kotlin = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO KOTLIN</p>
          <h1>
            Escala tu desarrollo en <span className="highlight">Kotlin</span>
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo en Kotlin permiten crear aplicaciones modernas,
            seguras y altamente eficientes. Entregamos soluciones ágiles en ciclos cortos,
            manteniendo altos estándares de calidad y escalabilidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo Kotlin</button>
        </div>

        <div className="hero-img">
          <img src={kotlinLogo} alt="Kotlin" />
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
        <h2>Servicios de desarrollo Kotlin que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Desarrollo de aplicaciones Android</h3>
            <p>
              Creamos aplicaciones Android nativas con Kotlin, optimizadas para rendimiento,
              seguridad y una excelente experiencia de usuario.
            </p>
          </div>

          <div className="service-item">
            <h3>Back-end con Kotlin</h3>
            <p>
              Desarrollamos APIs y servicios backend usando Kotlin con frameworks modernos
              como Ktor y Spring Boot.
            </p>
          </div>

          <div className="service-item">
            <h3>Arquitecturas modernas y escalables</h3>
            <p>
              Diseñamos arquitecturas limpias, desacopladas y listas para crecer,
              aplicando buenas prácticas y patrones de diseño.
            </p>
          </div>

          <div className="service-item">
            <h3>Kotlin Multiplatform</h3>
            <p>
              Construimos soluciones multiplataforma reutilizando lógica de negocio
              para Android, iOS, web y desktop.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para desarrollo Kotlin?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Talento Kotlin alineado a tu zona horaria</h4>
            <p>
              Equipos nearshore que trabajan en tu mismo horario para una comunicación
              fluida y eficiente.
            </p>
          </div>

          <div className="why-item">
            <h4>Especialistas Kotlin senior</h4>
            <p>
              Desarrolladores expertos en Android, backend y arquitecturas modernas
              con Kotlin.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos flexibles de contratación</h4>
            <p>
              Staff augmentation o equipos dedicados según las necesidades de tu proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo desarrollando en Kotlin" />
        </div>
        <div className="end-text">
          <h3>¿Listo para potenciar tu proyecto con Kotlin?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default Kotlin;
