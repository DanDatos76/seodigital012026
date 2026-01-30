// Archivo JSX: AutomotivePage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Tesla', 'BMW', 'Toyota', 'Bosch'];

// Datos del FAQ adaptados a Industria Automotriz
const faqItems = [
  {
    title: "Fabricantes de Vehículos (OEM)",
    content:
      "Desarrollamos plataformas digitales para la gestión del ciclo de vida del vehículo, trazabilidad de componentes, planificación de producción y sistemas MES integrados.",
  },
  {
    title: "Proveedores de Autopartes y Tier 1 / Tier 2",
    content:
      "Creamos soluciones para control de calidad, logística inteligente, integración con OEMs y optimización de la cadena de suministro.",
  },
  {
    title: "Plantas de Producción y Ensamblaje",
    content:
      "Implementamos software para automatización industrial, mantenimiento predictivo y monitoreo en tiempo real de líneas de producción.",
  },
  {
    title: "Empresas de Movilidad y Flotas",
    content:
      "Desarrollamos sistemas de gestión de flotas, telemetría vehicular, análisis de consumo y mantenimiento basado en datos.",
  },
  {
    title: "Fabricantes de Vehículos Eléctricos",
    content:
      "Creamos plataformas para gestión de baterías, estaciones de carga, eficiencia energética y análisis de rendimiento.",
  },
  {
    title: "Empresas de Conectividad Vehicular",
    content:
      "Implementamos soluciones para vehículos conectados, V2X, infotainment y actualización remota de software (OTA).",
  },
  {
    title: "Organismos Reguladores y Seguridad Vial",
    content:
      "Desarrollamos sistemas para homologación, cumplimiento normativo, análisis de seguridad y control de emisiones.",
  },
];

// Componente principal
export default function Autom() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Automotriz</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulse la innovación automotriz con
            <span> soluciones de software diseñadas para la industria.</span>
          </h1>

          <p className="hero-sub">
            Optimice la producción, conectividad y rendimiento de vehículos en un mercado en constante evolución.
          </p>

          <button className="cta">Impulse su Transformación Digital</button>

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
            src="./autos.jfif"
            alt="Industria Automotriz"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para la industria automotriz
          </h2>

          <p className="lead">
            Desarrollamos soluciones digitales para fabricantes y proveedores automotrices que buscan 
            mejorar la eficiencia operativa, adoptar tecnologías inteligentes y responder a los desafíos 
            de la movilidad moderna.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Software para Producción y Manufactura</h3>
              <p>
                Sistemas MES y soluciones de automatización para mejorar la eficiencia, 
                reducir errores y optimizar tiempos de producción.
              </p>
            </article>

            <article className="service">
              <h3>Vehículos Conectados y Telemetría</h3>
              <p>
                Plataformas para monitoreo en tiempo real, recopilación de datos del vehículo 
                y análisis de comportamiento de conducción.
              </p>
            </article>

            <article className="service">
              <h3>Mantenimiento Predictivo</h3>
              <p>
                Uso de analítica avanzada e inteligencia artificial para anticipar fallas 
                y reducir costos de mantenimiento.
              </p>
            </article>

            <article className="service">
              <h3>Soluciones para Vehículos Eléctricos</h3>
              <p>
                Desarrollo de sistemas para gestión de baterías, carga inteligente 
                y optimización energética.
              </p>
            </article>

            <article className="service">
              <h3>Analítica de Datos y Calidad</h3>
              <p>
                Procesamiento de grandes volúmenes de datos para control de calidad, 
                trazabilidad y mejora continua.
              </p>
            </article>

            <article className="service">
              <h3>Ciberseguridad Automotriz</h3>
              <p>
                Protección de sistemas embebidos, comunicaciones vehiculares 
                y plataformas digitales frente a amenazas.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Case study</h4>
            <p>
              Cómo un fabricante automotriz redujo un 30% los tiempos de inactividad 
              mediante la implementación de mantenimiento predictivo basado en IA.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>Why choose us?</h4>
            <ul>
              <li>Experiencia en sistemas industriales críticos</li>
              <li>Conocimiento profundo del ecosistema automotriz</li>
              <li>Soluciones escalables y seguras</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Automotive Trends Report</div>
            <div className="card">Connected Vehicles Guide</div>
            <div className="card">Automotive Success Stories</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué actores se benefician del software para la industria automotriz?
        </h2>

        <p className="faq-intro">
          La digitalización del sector automotriz impacta en todos los participantes 
          involucrados en el diseño, fabricación y operación de vehículos:
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
            Impulsamos la movilidad del futuro con soluciones tecnológicas creadas desde 2009.
          </p>
          <button className="cta small">Schedule a call</button>
        </div>
      </footer>
    </div>
  );
}
