// src/pages/Salesforce.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import salesforceLogo from "../assets/sales.png"; // logo de Salesforce
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const SalesforcePage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE SALESFORCE</p>
          <h1>
            Potenciá tus procesos con <span className="highlight">Salesforce</span>
            <br />y talento CRM especializado.
          </h1>
          <p className="subtitle">
            Implementamos, personalizamos y optimizamos Salesforce para
            centralizar la gestión de clientes, automatizar procesos
            comerciales y escalar tus operaciones de forma inteligente.
          </p>
          <button className="cta-btn">Acceder a servicios Salesforce</button>
        </div>

        <div className="hero-img">
          <img src={salesforceLogo} alt="Salesforce" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/salesforce.png" alt="Salesforce" />
            <img src="/logos/google.png" alt="Google" />
            <img src="/logos/adobe.png" alt="Adobe" />
            <img src="/logos/ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de Salesforce que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Implementación de Salesforce CRM</h3>
            <p>
              Configuramos Salesforce desde cero adaptándolo a los
              procesos comerciales, de marketing y atención al cliente.
            </p>
          </div>

          <div className="service-item">
            <h3>Personalización y desarrollo a medida</h3>
            <p>
              Desarrollamos soluciones con Apex, Lightning y Flows
              para extender las capacidades nativas de Salesforce.
            </p>
          </div>

          <div className="service-item">
            <h3>Integraciones con sistemas externos</h3>
            <p>
              Integramos Salesforce con ERPs, plataformas de e-commerce,
              sistemas de marketing y aplicaciones de terceros.
            </p>
          </div>

          <div className="service-item">
            <h3>Optimización y soporte continuo</h3>
            <p>
              Mejoramos el rendimiento del CRM, automatizamos procesos
              y brindamos soporte evolutivo y correctivo.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para Salesforce?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Consultores certificados en Salesforce</h4>
            <p>
              Especialistas con experiencia en Sales Cloud,
              Service Cloud, Marketing Cloud y Experience Cloud.
            </p>
          </div>

          <div className="why-item">
            <h4>Enfoque en resultados de negocio</h4>
            <p>
              Alineamos Salesforce a tus objetivos comerciales
              para maximizar ventas y fidelización de clientes.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Equipos dedicados o staff augmentation según
              la complejidad y alcance del proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo trabajando con Salesforce" />
        </div>
        <div className="end-text">
          <h3>¿Listo para transformar tu gestión con Salesforce?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default SalesforcePage;
