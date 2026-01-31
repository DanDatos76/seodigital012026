// src/pages/Azure.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import azureLogo from "../assets/azure.png"; // logo de Microsoft Azure
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const AzurePage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE MICROSOFT AZURE</p>
          <h1>
            Escalá tu infraestructura con <span className="highlight">Microsoft Azure</span>
            <br />y talento cloud especializado.
          </h1>
          <p className="subtitle">
            Diseñamos, migramos y optimizamos soluciones en Microsoft Azure
            para lograr entornos seguros, escalables y de alto rendimiento,
            alineados a los objetivos de tu negocio.
          </p>
   <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn"> Contactar </button>
  </a>        </div>

        <div className="hero-img">
          <img src={azureLogo} alt="Microsoft Azure" />
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
        <h2>Servicios de Microsoft Azure que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Migración a Microsoft Azure</h3>
            <p>
              Migramos aplicaciones, bases de datos e infraestructuras
              a Azure de forma segura y sin interrupciones operativas.
            </p>
          </div>

          <div className="service-item">
            <h3>Arquitecturas cloud escalables</h3>
            <p>
              Diseñamos arquitecturas en Azure optimizadas para
              alta disponibilidad, escalabilidad y resiliencia.
            </p>
          </div>

          <div className="service-item">
            <h3>DevOps y automatización</h3>
            <p>
              Implementamos pipelines CI/CD, infraestructura como código
              y automatización utilizando herramientas nativas de Azure.
            </p>
          </div>

          <div className="service-item">
            <h3>Seguridad y cumplimiento</h3>
            <p>
              Protegemos entornos cloud con políticas de seguridad,
              monitoreo continuo y cumplimiento normativo.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para Microsoft Azure?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Especialistas certificados en Azure</h4>
            <p>
              Ingenieros con experiencia comprobada en servicios,
              arquitecturas y buenas prácticas de Microsoft Azure.
            </p>
          </div>

          <div className="why-item">
            <h4>Soluciones cloud orientadas a negocio</h4>
            <p>
              Diseñamos soluciones que priorizan eficiencia,
              reducción de costos y crecimiento sostenible.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Equipos dedicados o staff augmentation según
              la etapa y necesidades de tu proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo trabajando con Microsoft Azure" />
        </div>
        <div className="end-text">
          <h3>¿Listo para escalar con Microsoft Azure?</h3>
  <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn">Comenzar ahora</button>
  </a>        </div>
      </section>

    </div>
  );
};

export default AzurePage;
