// Archivo JSX: HealthcarePage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['HL7', 'FHIR', 'HIPAA', 'ISO 13485'];

const faqItems = [
  {
    title: "Hospitales y Clínicas",
    content:
      "Desarrollamos sistemas para gestión hospitalaria, historias clínicas electrónicas y optimización de procesos asistenciales.",
  },
  {
    title: "Centros de Diagnóstico y Laboratorios",
    content:
      "Creamos plataformas para gestión de estudios, resultados digitales y trazabilidad de muestras.",
  },
  {
    title: "Empresas de Salud Digital (Healthtech)",
    content:
      "Desarrollamos soluciones innovadoras para telemedicina, monitoreo remoto y aplicaciones de salud.",
  },
  {
    title: "Aseguradoras y Obras Sociales",
    content:
      "Implementamos sistemas para gestión de afiliados, autorizaciones, facturación y auditorías médicas.",
  },
  {
    title: "Dispositivos Médicos",
    content:
      "Desarrollamos software para integración de dispositivos, captura de datos clínicos y cumplimiento normativo.",
  },
  {
    title: "Organismos y Reguladores de Salud",
    content:
      "Creamos plataformas para control, reportes sanitarios y cumplimiento de normativas de salud.",
  },
];

export default function HealthcarePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">
        Inicio &gt; Industrias &gt; Atención Sanitaria
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tecnología que mejora la
            <span> atención y los resultados en salud.</span>
          </h1>

        <p className="hero-sub">
            Soluciones digitales para una atención médica más eficiente, segura y centrada en el paciente.
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
              +500 organizaciones confían en nuestro expertise en tecnología sanitaria
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
            src="salud.jpg"
            alt="Industria de Atención Sanitaria"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Desarrollo de software para el sector salud
          </h2>

          <p className="lead">
            Acompañamos a organizaciones de salud en su transformación digital,
            optimizando procesos clínicos, administrativos y la experiencia del paciente.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Historia Clínica Electrónica (HCE)</h3>
              <p>
                Desarrollo e integración de sistemas clínicos seguros,
                interoperables y centrados en el profesional y el paciente.
              </p>
            </article>

            <article className="service">
              <h3>Telemedicina y Atención Remota</h3>
              <p>
                Plataformas para consultas virtuales, seguimiento de pacientes
                y monitoreo remoto.
              </p>
            </article>

            <article className="service">
              <h3>Gestión Hospitalaria</h3>
              <p>
                Sistemas para admisión, turnos, camas, quirófanos
                y recursos médicos.
              </p>
            </article>

            <article className="service">
              <h3>Interoperabilidad y Estándares</h3>
              <p>
                Integración de sistemas mediante HL7, FHIR
                y estándares internacionales.
              </p>
            </article>

            <article className="service">
              <h3>Analítica Clínica y Toma de Decisiones</h3>
              <p>
                Uso de datos para mejorar diagnósticos,
                resultados clínicos y eficiencia operativa.
              </p>
            </article>

            <article className="service">
              <h3>Seguridad y Cumplimiento Normativo</h3>
              <p>
                Protección de datos sensibles y cumplimiento
                de normativas sanitarias.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una red de clínicas redujo un 35% los tiempos de espera
              mediante la digitalización de turnos y procesos clínicos.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en sistemas críticos de salud</li>
              <li>Enfoque centrado en el paciente</li>
              <li>Cumplimiento normativo y seguridad</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guía de Interoperabilidad</div>
            <div className="card">Seguridad de Datos Médicos</div>
            <div className="card">Casos de Éxito en Salud</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para atención sanitaria?
        </h2>

        <p className="faq-intro">
          La tecnología impulsa la eficiencia y calidad en todo el ecosistema de salud:
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
            Impulsamos la innovación en salud con tecnología confiable y humana.
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
