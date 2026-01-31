// Archivo JSX: OilGasPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['API', 'ISO', 'Shell', 'BP'];

const faqItems = [
  {
    title: "Exploración y Producción (Upstream)",
    content:
      "Desarrollamos sistemas para análisis sísmico, gestión de pozos y monitoreo de producción en tiempo real.",
  },
  {
    title: "Transporte y Almacenamiento (Midstream)",
    content:
      "Creamos plataformas para control de ductos, logística, inventarios y trazabilidad de hidrocarburos.",
  },
  {
    title: "Refinación y Distribución (Downstream)",
    content:
      "Implementamos soluciones para optimización de procesos de refinación, distribución y comercialización.",
  },
  {
    title: "Empresas de Servicios Petroleros",
    content:
      "Desarrollamos software para gestión de operaciones en campo, mantenimiento y control de activos.",
  },
  {
    title: "Energía y Operaciones Offshore",
    content:
      "Creamos plataformas para monitoreo remoto, seguridad operativa y control ambiental en instalaciones offshore.",
  },
  {
    title: "Organismos y Reguladores Energéticos",
    content:
      "Implementamos sistemas para cumplimiento normativo, reportes y control de operaciones energéticas.",
  },
];

export default function OilGasPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">
        Inicio &gt; Industrias &gt; Petróleo y Gas
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tecnología que impulsa la
            <span> eficiencia y seguridad energética.</span>
          </h1>

          <p className="hero-sub">
            Soluciones digitales para operaciones petroleras y gasíferas más seguras y rentables.
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
              +500 organizaciones confían en nuestro expertise tecnológico industrial
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
            src="petrolero.jpg"
            alt="Industria de Petróleo y Gas"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Desarrollo de software para la industria de petróleo y gas
          </h2>

          <p className="lead">
            Acompañamos a empresas energéticas en su transformación digital,
            optimizando procesos operativos, seguridad y control de activos.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Gestión de Operaciones en Campo</h3>
              <p>
                Sistemas para monitoreo de pozos, producción,
                perforación y control operativo.
              </p>
            </article>

            <article className="service">
              <h3>Mantenimiento y Gestión de Activos</h3>
              <p>
                Plataformas para mantenimiento predictivo,
                control de equipos críticos y reducción de fallas.
              </p>
            </article>

            <article className="service">
              <h3>Analítica y Optimización de Producción</h3>
              <p>
                Uso de datos e inteligencia artificial para maximizar
                rendimiento y eficiencia energética.
              </p>
            </article>

            <article className="service">
              <h3>Seguridad Operativa y Ambiental</h3>
              <p>
                Sistemas para prevención de incidentes,
                control ambiental y gestión de riesgos.
              </p>
            </article>

            <article className="service">
              <h3>Logística y Transporte Energético</h3>
              <p>
                Plataformas para control de ductos,
                flotas, almacenamiento y distribución.
              </p>
            </article>

            <article className="service">
              <h3>Cumplimiento Normativo y Reportes</h3>
              <p>
                Soluciones para auditorías, reportes regulatorios
                y control de operaciones.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una operadora redujo un 20% los costos operativos
              mediante monitoreo predictivo y analítica avanzada.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en entornos industriales complejos</li>
              <li>Enfoque en seguridad y confiabilidad</li>
              <li>Soluciones escalables y robustas</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Informe Energético</div>
            <div className="card">Guía de Seguridad Industrial</div>
            <div className="card">Casos de Éxito Energía</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para petróleo y gas?
        </h2>

        <p className="faq-intro">
          La tecnología es clave para todos los actores del sector energético:
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
            Impulsamos la industria energética con tecnología segura y eficiente.
          </p>
  <a 
  href="https://wa.me/5491176550907?text=Agendar%20una%20llamada" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta small">Agendar una llamada</button>
</a>         </div>
      </footer>
    </div>
  );
}
