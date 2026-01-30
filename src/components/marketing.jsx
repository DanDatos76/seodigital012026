 // Archivo JSX: MarTechPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'HubSpot', 'Salesforce'];

// Datos del FAQ adaptados a Tecnología de Marketing
const faqItems = [
  {
    title: "Agencias de Marketing Digital",
    content:
      "Desarrollamos plataformas para gestión de campañas, automatización de procesos, análisis de performance y optimización de resultados multicanal.",
  },
  {
    title: "Empresas de Publicidad y Medios",
    content:
      "Creamos soluciones para planificación de medios, compra programática, medición de audiencias y atribución de conversiones.",
  },
  {
    title: "Equipos de Marketing In-House",
    content:
      "Implementamos herramientas personalizadas para CRM, automatización de marketing, segmentación avanzada y personalización de contenidos.",
  },
  {
    title: "Plataformas de E-commerce",
    content:
      "Desarrollamos integraciones para marketing automation, remarketing, análisis de comportamiento y optimización del funnel de ventas.",
  },
  {
    title: "Empresas de Datos y Analítica",
    content:
      "Construimos sistemas para recolección, procesamiento y visualización de datos de marketing en tiempo real.",
  },
  {
    title: "Startups de Tecnología de Marketing (MarTech)",
    content:
      "Acompañamos el desarrollo de productos SaaS de marketing, escalables, orientados a datos y centrados en el usuario.",
  },
  {
    title: "Departamentos de Ventas y Revenue",
    content:
      "Creamos soluciones para alineación entre marketing y ventas, lead scoring, automatización comercial y análisis de ingresos.",
  },
];

// Componente principal
export default function TelecomPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Tecnología de Marketing</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Potencie su estrategia de marketing con
            <span> soluciones tecnológicas orientadas a datos.</span>
          </h1>

          <p className="hero-sub">
            Automatice campañas, personalice experiencias y maximice el ROI con tecnología MarTech.
          </p>

          <button className="cta">Impulsar Estrategia MarTech</button>

          <div className="badges">
            <div className="badge-count">
              +500 empresas confían en nuestro talento tecnológico del top 1%
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
            src="/market.jpg"
            alt="Tecnología de Marketing"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para tecnología de marketing
          </h2>

          <p className="lead">
            Desarrollamos soluciones digitales para equipos de marketing que buscan escalar campañas,
            centralizar datos y tomar decisiones basadas en información confiable.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Automatización de Marketing</h3>
              <p>
                Plataformas para email marketing, nurturing de leads, workflows automatizados
                y campañas multicanal.
              </p>
            </article>

            <article className="service">
              <h3>CRM y Gestión de Clientes</h3>
              <p>
                Desarrollo e integración de sistemas CRM para centralizar contactos,
                interacciones y oportunidades comerciales.
              </p>
            </article>

            <article className="service">
              <h3>Analítica de Marketing y Atribución</h3>
              <p>
                Soluciones de análisis de performance, attribution modeling
                y medición del retorno de inversión (ROI).
              </p>
            </article>

            <article className="service">
              <h3>Personalización y Experiencia del Usuario</h3>
              <p>
                Implementación de motores de recomendación, segmentación avanzada
                y experiencias digitales personalizadas.
              </p>
            </article>

            <article className="service">
              <h3>Integraciones MarTech</h3>
              <p>
                Conectamos plataformas de publicidad, analytics, CRM y e-commerce
                en ecosistemas unificados.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Datos y Privacidad</h3>
              <p>
                Implementación de CDP, cumplimiento de normativas de datos
                y gestión segura de información de usuarios.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una empresa de e-commerce aumentó un 40% la conversión
              mediante automatización de campañas y personalización basada en datos.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en ecosistemas MarTech complejos</li>
              <li>Enfoque data-driven y orientado a resultados</li>
              <li>Soluciones escalables y personalizadas</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Reporte de Tendencias MarTech</div>
            <div className="card">Guía de Automatización de Marketing</div>
            <div className="card">Casos de Éxito MarTech</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software de tecnología de marketing?
        </h2>

        <p className="faq-intro">
          La tecnología de marketing impulsa a todos los equipos que buscan
          crecer mediante datos, automatización y experiencias personalizadas:
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
            Impulsamos el crecimiento del marketing digital con soluciones tecnológicas desde 2009.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}
