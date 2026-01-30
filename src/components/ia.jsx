
// src/pages/ArtificialIntelligence.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS
import aiLogo from "../assets/ai.png"; // logo de Inteligencia Artificial
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const ArtificialIntelligencePage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE INTELIGENCIA ARTIFICIAL</p>
          <h1>
            Impulsá tu negocio con <span className="highlight">Inteligencia Artificial</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Desarrollamos soluciones de Inteligencia Artificial que automatizan,
            optimizan y potencian la toma de decisiones mediante tecnología avanzada
            y modelos inteligentes.
          </p>
          <button className="cta-btn">Acceder a Inteligencia Artificial</button>
        </div>

        <div className="hero-img">
          <img src={aiLogo} alt="Inteligencia Artificial" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/google.png" alt="Google" />
            <img src="/logos/microsoft.png" alt="Microsoft" />
            <img src="/logos/amazon.png" alt="Amazon" />
            <img src="/logos/ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de Inteligencia Artificial que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Automatización inteligente</h3>
            <p>
              Implementamos sistemas inteligentes que automatizan procesos
              complejos y reducen costos operativos.
            </p>
          </div>

          <div className="service-item">
            <h3>Procesamiento de lenguaje natural (NLP)</h3>
            <p>
              Desarrollamos soluciones de IA capaces de interpretar,
              analizar y generar lenguaje humano.
            </p>
          </div>

          <div className="service-item">
            <h3>Visión por computadora</h3>
            <p>
              Creamos sistemas de reconocimiento de imágenes y video
              para análisis avanzado y detección automática.
            </p>
          </div>

          <div className="service-item">
            <h3>Implementación y escalabilidad</h3>
            <p>
              Desplegamos soluciones de IA en entornos productivos,
              asegurando rendimiento, seguridad y escalabilidad.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para Inteligencia Artificial?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Especialistas en IA aplicada</h4>
            <p>
              Equipos con experiencia en IA aplicada a negocios reales
              y soluciones de alto impacto.
            </p>
          </div>

          <div className="why-item">
            <h4>Soluciones éticas y responsables</h4>
            <p>
              Diseñamos modelos de IA responsables, explicables
              y alineados con estándares éticos.
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
          <img src={teamImage} alt="Equipo desarrollando Inteligencia Artificial" />
        </div>
        <div className="end-text">
          <h3>¿Listo para innovar con Inteligencia Artificial?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default ArtificialIntelligencePage;
