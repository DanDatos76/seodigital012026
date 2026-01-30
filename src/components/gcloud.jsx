// src/pages/GoogleCloud.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import gcpLogo from "../assets/gcloud.png"; // logo de Google Cloud
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const GoogleCloudPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE GOOGLE CLOUD</p>
          <h1>
            Escala tu infraestructura con <span className="highlight">Google Cloud</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Nuestros servicios en Google Cloud ayudan a las empresas a construir,
            desplegar y escalar soluciones cloud seguras, eficientes y orientadas
            a la innovación.
          </p>
          <button className="cta-btn">Acceder a servicios Google Cloud</button>
        </div>

        <div className="hero-img">
          <img src={gcpLogo} alt="Google Cloud" />
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
        <h2>Servicios de Google Cloud que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Arquitectura y migración a Google Cloud</h3>
            <p>
              Diseñamos e implementamos arquitecturas cloud escalables y seguras,
              migrando aplicaciones y datos a Google Cloud Platform.
            </p>
          </div>

          <div className="service-item">
            <h3>Infraestructura y DevOps</h3>
            <p>
              Automatizamos infraestructuras con CI/CD, contenedores y Kubernetes
              para acelerar despliegues y mejorar la confiabilidad.
            </p>
          </div>

          <div className="service-item">
            <h3>Data, BigQuery y analítica</h3>
            <p>
              Implementamos soluciones de análisis de datos utilizando BigQuery,
              Dataflow y herramientas de procesamiento masivo.
            </p>
          </div>

          <div className="service-item">
            <h3>Seguridad y optimización de costos</h3>
            <p>
              Aplicamos buenas prácticas de seguridad cloud y optimizamos costos
              para maximizar el retorno de inversión.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para Google Cloud?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Especialistas en Google Cloud alineados a tu horario</h4>
            <p>
              Equipos nearshore que trabajan en tu misma zona horaria para
              garantizar comunicación fluida y eficiencia.
            </p>
          </div>

          <div className="why-item">
            <h4>Experiencia en soluciones cloud empresariales</h4>
            <p>
              Ingenieros certificados en Google Cloud con experiencia en
              proyectos de alta escala y complejidad.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de servicio flexibles</h4>
            <p>
              Desde soporte puntual hasta equipos cloud dedicados según
              las necesidades de tu negocio.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo trabajando con Google Cloud" />
        </div>
        <div className="end-text">
          <h3>¿Listo para escalar tu negocio con Google Cloud?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default GoogleCloudPage;
