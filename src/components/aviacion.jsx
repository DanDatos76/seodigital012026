// Archivo JSX: AviationPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['IATA', 'Boeing', 'Airbus', 'Embraer'];

const faqItems = [
  {
    title: "Aerolíneas Comerciales",
    content:
      "Desarrollamos sistemas para gestión operativa, planificación de vuelos, control de tripulaciones y experiencia del pasajero.",
  },
  {
    title: "Aeropuertos y Terminales",
    content:
      "Creamos plataformas para gestión de operaciones aeroportuarias, control de flujos, seguridad y coordinación de servicios.",
  },
  {
    title: "Mantenimiento Aeronáutico (MRO)",
    content:
      "Implementamos soluciones para mantenimiento preventivo, trazabilidad de componentes y cumplimiento normativo.",
  },
  {
    title: "Aviación Ejecutiva y Privada",
    content:
      "Desarrollamos sistemas para gestión de flotas, planificación de vuelos y administración de servicios premium.",
  },
  {
    title: "Carga Aérea y Logística Aeronáutica",
    content:
      "Creamos plataformas para tracking de cargas, documentación aérea y optimización de operaciones de carga.",
  },
  {
    title: "Organismos y Reguladores Aeronáuticos",
    content:
      "Desarrollamos sistemas para control, auditorías, certificaciones y cumplimiento de normativas aeronáuticas.",
  },
];

export default function AviationPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">
        Inicio &gt; Industrias &gt; Aviación
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tecnología que eleva la
            <span> eficiencia y seguridad en aviación.</span>
          </h1>

          <p className="hero-sub">
            Soluciones digitales para operaciones aeronáuticas más seguras,
            eficientes y conectadas.
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
              +500 organizaciones confían en nuestro talento tecnológico especializado
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
            src="/avion.jpg"
            alt="Industria Aeronáutica"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Desarrollo de software para la industria aeronáutica
          </h2>

          <p className="lead">
            Acompañamos a empresas y organismos del sector aéreo en su
            transformación digital, mejorando seguridad, control y eficiencia operativa.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Gestión de Operaciones Aéreas</h3>
              <p>
                Sistemas para planificación de vuelos, control operativo
                y coordinación en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Tripulaciones</h3>
              <p>
                Plataformas para asignación de tripulación,
                cumplimiento de horas de vuelo y normativa.
              </p>
            </article>

            <article className="service">
              <h3>Mantenimiento y Trazabilidad (MRO)</h3>
              <p>
                Control de inspecciones, componentes y mantenimiento
                conforme a estándares aeronáuticos.
              </p>
            </article>

            <article className="service">
              <h3>Experiencia del Pasajero</h3>
              <p>
                Soluciones digitales para check-in, información de vuelos
                y servicios personalizados.
              </p>
            </article>

            <article className="service">
              <h3>Gestión Aeroportuaria</h3>
              <p>
                Plataformas para control de terminales, operaciones en pista
                y coordinación de servicios.
              </p>
            </article>

            <article className="service">
              <h3>Analítica y Seguridad Operacional</h3>
              <p>
                Uso de datos para prevención de incidentes,
                mejora continua y toma de decisiones.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una aerolínea regional mejoró un 30% la puntualidad
              mediante optimización digital de sus operaciones.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en sistemas críticos</li>
              <li>Enfoque en seguridad y normativa</li>
              <li>Soluciones escalables y confiables</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Informe de Innovación Aeronáutica</div>
            <div className="card">Guía de Seguridad Operacional</div>
            <div className="card">Casos de Éxito en Aviación</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para aviación?
        </h2>

        <p className="faq-intro">
          La digitalización es clave para todos los actores
          del ecosistema aeronáutico:
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
            Impulsamos el futuro de la aviación con tecnología confiable y segura.
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
