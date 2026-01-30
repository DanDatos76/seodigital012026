 // Archivo JSX: SupplyChainPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['SAP', 'Oracle', 'IBM', 'AWS'];

const faqItems = [
  {
    title: "Fabricantes y Productores",
    content:
      "Desarrollamos sistemas para planificación de producción, control de inventarios y optimización de procesos industriales.",
  },
  {
    title: "Operadores Logísticos",
    content:
      "Creamos plataformas para gestión de transporte, ruteo inteligente y trazabilidad de envíos en tiempo real.",
  },
  {
    title: "Distribuidores y Mayoristas",
    content:
      "Implementamos soluciones para control de stock, pedidos, almacenes y redes de distribución.",
  },
  {
    title: "Retail y Canales de Venta",
    content:
      "Desarrollamos sistemas para abastecimiento eficiente, omnicanalidad y reposición automática.",
  },
  {
    title: "Comercio Internacional",
    content:
      "Creamos plataformas para gestión documental, aduanas y seguimiento de operaciones internacionales.",
  },
  {
    title: "Organismos y Control Logístico",
    content:
      "Implementamos sistemas para monitoreo, reportes y cumplimiento normativo en la cadena logística.",
  },
];

export default function SupplyChainPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">
        Inicio &gt; Industrias &gt; Cadena de Suministros
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tecnología que optimiza la
            <span> cadena de suministro de punta a punta.</span>
          </h1>

          <p className="hero-sub">
            Soluciones digitales para mejorar visibilidad, eficiencia y resiliencia operativa.
          </p>

          <button className="cta">Optimizar mi Supply Chain</button>

          <div className="badges">
            <div className="badge-count">
              +500 empresas confían en nuestro expertise en operaciones logísticas
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
            src="/suministr.jpg"
            alt="Industria de Cadena de Suministros"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Desarrollo de software para la cadena de suministros
          </h2>

          <p className="lead">
            Ayudamos a organizaciones a digitalizar y optimizar su cadena de suministro,
            desde la planificación hasta la entrega final.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Planificación y Demanda</h3>
              <p>
                Sistemas para previsión de demanda, planificación de producción
                y optimización de recursos.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Inventarios</h3>
              <p>
                Plataformas para control de stock, reposición automática
                y reducción de quiebres.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Transporte (TMS)</h3>
              <p>
                Soluciones para ruteo, seguimiento de flotas
                y optimización de costos logísticos.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Almacenes (WMS)</h3>
              <p>
                Sistemas para control de depósitos, picking,
                packing y trazabilidad.
              </p>
            </article>

            <article className="service">
              <h3>Visibilidad y Trazabilidad</h3>
              <p>
                Monitoreo en tiempo real de pedidos, envíos
                y eventos de la cadena.
              </p>
            </article>

            <article className="service">
              <h3>Analítica y Optimización Operativa</h3>
              <p>
                Uso de datos para mejorar eficiencia,
                reducir costos y anticipar riesgos.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una empresa de distribución redujo un 25% los tiempos de entrega
              mediante visibilidad integral de su supply chain.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en operaciones complejas</li>
              <li>Integración con sistemas existentes</li>
              <li>Enfoque en eficiencia y resiliencia</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Tendencias en Supply Chain</div>
            <div className="card">Guía de Optimización Logística</div>
            <div className="card">Casos de Éxito Logísticos</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para la cadena de suministros?
        </h2>

        <p className="faq-intro">
          La transformación digital impacta en todos los eslabones de la cadena:
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
                <span className="faq-icon">
                  {openIndex === i ? "▲" : "▼"}
                </span>
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
            Conectamos procesos, datos y personas para una cadena de suministro más inteligente.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}
