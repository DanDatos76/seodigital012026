 // src/pages/Java.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS
import javaLogo from "../assets/java.png"; // logo de Java
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const JavaPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO JAVA</p>
          <h1>
            Soluciones empresariales sólidas con <span className="highlight">Java</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Desarrollamos aplicaciones Java robustas, seguras y escalables,
            ideales para sistemas empresariales, plataformas de alto tráfico
            y arquitecturas modernas.
          </p>
          <button className="cta-btn">Acceder a desarrollo Java</button>
        </div>

        <div className="hero-img">
          <img src={javaLogo} alt="Java" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/oracle.png" alt="Oracle" />
            <img src="/logos/ibm.png" alt="IBM" />
            <img src="/logos/redhat.png" alt="Red Hat" />
            <img src="/logos/sap.png" alt="SAP" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de desarrollo Java que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Desarrollo de aplicaciones empresariales</h3>
            <p>
              Creamos sistemas empresariales utilizando Java y frameworks
              como Spring y Spring Boot.
            </p>
          </div>

          <div className="service-item">
            <h3>APIs y microservicios</h3>
            <p>
              Diseñamos arquitecturas de microservicios Java seguras,
              escalables y fáciles de mantener.
            </p>
          </div>

          <div className="service-item">
            <h3>Migración y modernización de sistemas</h3>
            <p>
              Modernizamos aplicaciones Java legacy hacia arquitecturas
              más eficientes y preparadas para el cloud.
            </p>
          </div>

          <div className="service-item">
            <h3>Integraciones y alto rendimiento</h3>
            <p>
              Implementamos integraciones complejas y optimizamos
              aplicaciones Java para alto volumen de usuarios.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para desarrollo Java?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Desarrolladores Java alineados a tu horario</h4>
            <p>
              Equipos nearshore que trabajan en tu misma zona horaria
              para una colaboración fluida y continua.
            </p>
          </div>

          <div className="why-item">
            <h4>Experiencia en proyectos críticos</h4>
            <p>
              Ingenieros con experiencia en sistemas bancarios,
              industriales y plataformas empresariales.
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
          <img src={teamImage} alt="Equipo desarrollando con Java" />
        </div>
        <div className="end-text">
          <h3>¿Listo para impulsar tu proyecto Java?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default JavaPage;
