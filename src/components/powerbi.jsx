// src/pages/PowerBI.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import powerbiLogo from "../assets/power.png"; // logo de Power BI
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const PowerBIPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE POWER BI</p>
          <h1>
            Impulsa tus decisiones con <span className="highlight">Power BI</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Nuestros servicios de Power BI transforman datos complejos en
            visualizaciones claras y accionables, facilitando la toma de
            decisiones estratégicas en tiempo real.
          </p>
          <button className="cta-btn">Acceder a servicios Power BI</button>
        </div>

        <div className="hero-img">
          <img src={powerbiLogo} alt="Power BI" />
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
        <h2>Servicios de Power BI que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Dashboards e informes interactivos</h3>
            <p>
              Diseñamos dashboards dinámicos que permiten analizar datos
              de manera clara, intuitiva y en tiempo real.
            </p>
          </div>

          <div className="service-item">
            <h3>Modelado y transformación de datos</h3>
            <p>
              Preparamos y optimizamos modelos de datos utilizando Power Query
              y DAX para garantizar precisión y rendimiento.
            </p>
          </div>

          <div className="service-item">
            <h3>Integración con múltiples fuentes de datos</h3>
            <p>
              Conectamos Power BI con bases de datos, ERPs, CRMs y servicios
              cloud para una visión unificada del negocio.
            </p>
          </div>

          <div className="service-item">
            <h3>Gobernanza y seguridad de la información</h3>
            <p>
              Implementamos políticas de acceso, seguridad y gobernanza
              para proteger la información crítica.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para Power BI?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Analistas Power BI alineados a tu horario</h4>
            <p>
              Especialistas nearshore que trabajan en tu misma zona horaria
              para una colaboración fluida y continua.
            </p>
          </div>

          <div className="why-item">
            <h4>Expertos en análisis de datos</h4>
            <p>
              Profesionales con experiencia en Power BI, DAX
              y visualización de datos orientada al negocio.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de servicio flexibles</h4>
            <p>
              Soporte puntual, equipos dedicados o proyectos completos
              según tus objetivos.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo trabajando con Power BI" />
        </div>
        <div className="end-text">
          <h3>¿Listo para potenciar tu análisis con Power BI?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default PowerBIPage;
