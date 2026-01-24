 // Archivo JSX: CybersecurityPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen apps escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en arquitecturas de seguridad avanzadas para escalar sin riesgos.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan APIs protegidas, microservicios blindados y un intercambio de datos cifrado entre sus sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan el desarrollo seguro desde el primer día para proteger su propiedad intelectual y ganar la confianza de inversores y usuarios.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de pasarelas de pago blindadas, protección contra fraudes y sistemas de inventario con alta seguridad de datos.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones de ciberseguridad estrictas, cumplimiento de normativas (GDPR, HIPAA) y protección extrema de datos sensibles.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "La seguridad protege la integridad de las evaluaciones, los datos de los usuarios y la automatización de contenidos frente a accesos no autorizados.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan proteger el seguimiento en tiempo real y las tuberías de datos de sensores frente a ciberataques e interrupciones de servicio.",
  },
];

// Componente principal
export default function CybersecurityPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Ciberseguridad</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Desarrollo de Ciberseguridad
            <span> robusto, escalable y blindado para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Proteja su ecosistema digital con soluciones de seguridad avanzada y arquitectura backend resistente.
          </p>

          <button className="cta">Refuerce su Ciberseguridad</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestro top 1% de ingenieros expertos
            </div>

            <ul className="badge-list">
              {badgeItems.map((b) => (
                <li key={b} className="badge-item">{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/cyberseg.jfif"
            alt="Ingeniería de Ciberseguridad"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de ciberseguridad que ofrecemos
          </h2>

          <p className="lead">
            Construimos sistemas backend blindados diseñados para el máximo rendimiento y protección.
            Desde APIs hasta microservicios, proporcionamos desarrollo de seguridad integral para
            startups, corporaciones y plataformas globales.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Arquitectura de APIs y Microservicios Blindados</h3>
              <p>
                APIs REST/GraphQL de alta seguridad, microservicios aislados y sistemas
                serverless con políticas de confianza cero (Zero Trust).
              </p>
            </article>

            <article className="service">
              <h3>Cifrado y Optimización de Bases de Datos</h3>
              <p>
                PostgreSQL, MongoDB, Redis, MySQL: implementación de cifrado en reposo y en tránsito,
                auditoría de datos y replicación segura.
              </p>
            </article>

            <article className="service">
              <h3>Desarrollo Seguro en la Nube (Cloud Security)</h3>
              <p>
                Soluciones en AWS, Azure y Google Cloud utilizando Docker, Kubernetes y
                automatización de seguridad en la infraestructura.
              </p>
            </article>

            <article className="service">
              <h3>Sistemas de Autenticación Avanzada</h3>
              <p>
                OAuth2, JWT, gestión de identidad (IAM), autenticación multifactor (MFA)
                y cumplimiento de normativas internacionales de seguridad.
              </p>
            </article>

            <article className="service">
              <h3>Integración Segura con Terceros</h3>
              <p>
                Conexión protegida con pasarelas de pago, APIs de mensajería, CRMs y modelos
                de IA mediante túneles seguros y firewalls de aplicación.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Penetración y QA de Seguridad</h3>
              <p>
                Pruebas de intrusión, análisis de vulnerabilidades, auditorías de código y
                optimización de rendimiento bajo ataques de estrés.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global blindó sus datos para 3 millones de usuarios —
              eliminando brechas de seguridad y aumentando la confianza de los clientes en un 100%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en ingeniería de seguridad</li>
              <li>Arquitecturas nativas de la nube protegidas</li>
              <li>Enfoque de desarrollo "Security-first"</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura Segura</div>
            <div className="card">Mejores Prácticas de Ciberseguridad</div>
            <div className="card">Casos de Estudio</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician de la ciberseguridad a medida?
        </h2>

        <p className="faq-intro">
          Los servicios de seguridad personalizados son el pilar que sostiene la integridad de los productos digitales.
          Son vitales para:
        </p>

        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                {item.title}
                <span className="faq-icon">{openIndex === i ? "▲" : "▼"}</span>
              </div>

              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="footer-cta">
        <div className="footer-inner">
          <p>
            Desde la protección de APIs hasta microservicios seguros: blinde su producto con 
            ingeniería de ciberseguridad de clase mundial.
          </p>
          <button className="cta small">Agendar una Consulta</button>
        </div>
      </footer>
    </div>
  );
}