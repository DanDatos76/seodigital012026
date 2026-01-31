 // Archivo JSX: ConstructionPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['AECOM', 'Bechtel', 'Skanska', 'Vinci'];

// Datos del FAQ adaptados a Construcción
const faqItems = [
  {
    title: "Empresas Constructoras y Contratistas Generales",
    content:
      "Desarrollamos plataformas digitales para la gestión integral de obras, control de cronogramas, presupuestos, subcontratistas y operaciones en campo.",
  },
  {
    title: "Estudios de Arquitectura e Ingeniería",
    content:
      "Creamos soluciones para integración BIM, colaboración de proyectos, control documental y gestión de versiones entre equipos técnicos.",
  },
  {
    title: "Empresas de Infraestructura y Obras Civiles",
    content:
      "Implementamos software para planificación de grandes proyectos, seguimiento de activos, cumplimiento normativo y control de desempeño.",
  },
  {
    title: "Desarrolladores Inmobiliarios",
    content:
      "Desarrollamos sistemas para el seguimiento de proyectos, control de inversiones, análisis de riesgos y reportes de avance para inversores.",
  },
  {
    title: "Proveedores de Materiales y Equipamiento",
    content:
      "Creamos soluciones para control de inventario, optimización logística, automatización de compras e integración con proveedores.",
  },
  {
    title: "Construcción Inteligente y Edificios Smart",
    content:
      "Desarrollamos plataformas IoT para obras inteligentes, monitoreo energético, automatización de edificios y control remoto de sistemas.",
  },
  {
    title: "Organismos Públicos y Reguladores",
    content:
      "Proveemos sistemas para permisos, inspecciones, cumplimiento de normativas, reportes de seguridad y supervisión de obras públicas.",
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
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Construcción</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Construya proyectos más eficientes con
            <span> soluciones de software para la industria de la construcción.</span>
          </h1>

          <p className="hero-sub">
            Optimice costos, tiempos y calidad mediante herramientas digitales diseñadas para obras modernas.
          </p>

 <a 
  href="https://wa.me/5491176550907?text=Acelere%20su%20Hoja%20de%20Ruta" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta">Acelere su Hoja de Ruta</button>
</a>    
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
            src="/const.jpg"
            alt="Industria de la Construcción"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para la industria de la construcción
          </h2>

          <p className="lead">
            Desarrollamos soluciones digitales para empresas constructoras que buscan mejorar la gestión de obras,
            aumentar la productividad en campo y reducir riesgos operativos.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Gestión de Proyectos y Obras</h3>
              <p>
                Plataformas para planificación, seguimiento de avances, control de costos y coordinación de equipos.
              </p>
            </article>

            <article className="service">
              <h3>Integración BIM y Control Documental</h3>
              <p>
                Soluciones para gestión de planos, modelos BIM, documentación técnica y control de versiones.
              </p>
            </article>

            <article className="service">
              <h3>Monitoreo de Obras en Tiempo Real</h3>
              <p>
                Herramientas para supervisión remota, reportes de campo y control de productividad.
              </p>
            </article>

            <article className="service">
              <h3>Automatización de Procesos Constructivos</h3>
              <p>
                Digitalización de procesos administrativos, compras, certificaciones y gestión contractual.
              </p>
            </article>

            <article className="service">
              <h3>Analítica de Datos y Control de Riesgos</h3>
              <p>
                Uso de datos para anticipar desvíos, reducir sobrecostos y mejorar la toma de decisiones.
              </p>
            </article>

            <article className="service">
              <h3>Seguridad y Cumplimiento Normativo</h3>
              <p>
                Sistemas para gestión de seguridad laboral, inspecciones y cumplimiento de normativas vigentes.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una empresa constructora redujo un 20% los sobrecostos de obra
              mediante la digitalización del seguimiento de proyectos.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en proyectos de gran escala</li>
              <li>Conocimiento del sector construcción</li>
              <li>Soluciones robustas y escalables</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Reporte de Tendencias en Construcción</div>
            <div className="card">Guía de Digitalización de Obras</div>
            <div className="card">Casos de Éxito en Construcción</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para la industria de la construcción?
        </h2>

        <p className="faq-intro">
          La transformación digital en la construcción impacta en todos los actores
          involucrados en el desarrollo de proyectos:
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
            Construimos soluciones digitales sólidas para la industria desde 2009.
          </p>
 <a 
  href="https://wa.me/5491176550907?text=Agendar%20una%20llamada" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta small">Agendar una llamada</button>
</a>           </div>
      </footer>
    </div>
  );
}
