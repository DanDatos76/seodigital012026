// src/pages/DotNet.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import dotnetLogo from "../assets/net.png"; // logo de .NET
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const DotNetPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO .NET</p>
          <h1>
            Escala tu desarrollo con <span className="highlight">.NET</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo en .NET permiten crear
            aplicaciones empresariales seguras, escalables y de alto
            rendimiento, alineadas a los estándares modernos de la industria.
          </p>
          <button className="cta-btn">Acceder a desarrollo .NET</button>
        </div>

        <div className="hero-img">
          <img src={dotnetLogo} alt=".NET" />
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
        <h2>Servicios de desarrollo .NET que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Desarrollo de aplicaciones empresariales</h3>
            <p>
              Construimos aplicaciones robustas utilizando .NET y C#,
              orientadas a entornos corporativos y de misión crítica.
            </p>
          </div>

          <div className="service-item">
            <h3>APIs y microservicios</h3>
            <p>
              Diseñamos APIs REST y microservicios escalables con ASP.NET Core
              para soluciones modernas y distribuidas.
            </p>
          </div>

          <div className="service-item">
            <h3>Migración y modernización de sistemas</h3>
            <p>
              Migramos aplicaciones legacy a .NET moderno mejorando
              rendimiento, seguridad y mantenibilidad.
            </p>
          </div>

          <div className="service-item">
            <h3>Cloud & DevOps con .NET</h3>
            <p>
              Implementamos soluciones .NET en la nube integradas con
              pipelines DevOps y alta disponibilidad.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para desarrollo .NET?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Equipos .NET alineados a tu zona horaria</h4>
            <p>
              Desarrolladores nearshore que trabajan en tu mismo horario
              para garantizar comunicación fluida.
            </p>
          </div>

          <div className="why-item">
            <h4>Especialistas en ecosistema Microsoft</h4>
            <p>
              Ingenieros con experiencia en .NET, C#, Azure
              y arquitecturas empresariales.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Staff augmentation o equipos dedicados según
              los requerimientos de tu proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo desarrollando con .NET" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto .NET?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default DotNetPage;
