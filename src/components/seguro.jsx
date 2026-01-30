// Archivo JSX: InsurancePage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ Traducidos y adaptados a Seguros
const faqItems = [
  {
    title: "Aseguradoras de Propiedad y Accidentes (P&C)",
    content:
      "Desarrollamos sistemas integrales para la gestión de reclamos, administración de pólizas de hogar y auto, y herramientas de evaluación de daños mediante imágenes.",
  },
  {
    title: "Compañías de Seguros de Vida y Salud",
    content:
      "Implementamos plataformas de suscripción automatizada, portales de bienestar para asegurados y sistemas de gestión de beneficios médicos complejos.",
  },
  {
    title: "Startups Insurtech",
    content:
      "Creamos soluciones disruptivas basadas en microseguros, modelos de pago por uso (usage-based insurance) y arquitecturas móviles de rápida implementación.",
  },
  {
    title: "Compañías de Reaseguros",
    content:
      "Ayudamos a modernizar el análisis de riesgos catastróficos y la gestión de contratos mediante el uso de Big Data y modelos actuariales avanzados.",
  },
  {
    title: "Corredores y Agencias de Seguros",
    content:
      "Desarrollamos herramientas de CRM especializadas, comparadores de pólizas multi-compañía y portales de ventas para agentes independientes.",
  },
  {
    title: "Proveedores de Seguros Cautivos",
    content:
      "Optimizamos la administración de riesgos internos corporativos con sistemas de reporte personalizados y control de pérdidas centralizado.",
  },
  {
    title: "Gestores de Reclamos y Terceros (TPA)",
    content:
      "Proveemos software de flujo de trabajo para agilizar la liquidación de siniestros, auditoría de facturas médicas y reportes de cumplimiento legal.",
  },
];

// Componente principal
export default function InsurancePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Seguros</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Digitalice el ecosistema de seguros con
            <span> soluciones de Insurtech a medida.</span>
          </h1>

          <p className="hero-sub">Optimice el procesamiento de reclamos y mejore la retención de sus asegurados.</p>

          <button className="cta">Acelere su Transformación Digital</button>

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
            src="/seguro.jpg" // Asegúrate de tener esta imagen en tu carpeta de assets
            alt="Soluciones de Software para Seguros"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo de seguros que ofrecemos
          </h2>

          <p className="lead">
            Desarrollamos soluciones personalizadas para la industria de seguros con el fin de automatizar 
            el ciclo de vida de la póliza, mejorar la precisión de la suscripción mediante IA, agilizar 
            la liquidación de siniestros y garantizar la protección de datos sensibles.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Sistemas de Gestión de Pólizas (PAS)</h3>
              <p>
                Plataformas robustas para la emisión, renovación y administración de pólizas con 
                integración de motores de reglas de negocio.
              </p>
            </article>

            <article className="service">
              <h3>Automatización de Siniestros y Reclamos</h3>
              <p>
                Digitalización de flujos de trabajo para siniestros, desde la notificación inicial 
                hasta el pago final, reduciendo costos operativos.
              </p>
            </article>

            <article className="service">
              <h3>Suscripción y Scoring con IA</h3>
              <p>
                Uso de algoritmos predictivos para evaluar riesgos con mayor precisión y ofrecer 
                primas personalizadas basadas en el comportamiento.
              </p>
            </article>

            <article className="service">
              <h3>Portales de Autoservicio y Apps</h3>
              <p>
                Desarrollo de interfaces móviles donde los clientes pueden consultar pólizas, 
                descargar certificados y reportar accidentes al instante.
              </p>
            </article>

            <article className="service">
              <h3>IoT y Telemática para Seguros</h3>
              <p>
                Integración con dispositivos conectados en vehículos y hogares para monitoreo 
                de riesgos en tiempo real y seguros basados en el uso.
              </p>
            </article>

            <article className="service">
              <h3>Soluciones de Cumplimiento y Seguridad</h3>
              <p>
                Implementación de normativas GDPR y HIPAA, cifrado de datos médicos y financieros 
                y sistemas de detección de fraude sofisticados.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una aseguradora multinacional automatizó el 70% de sus reclamos de bajo monto, 
              reduciendo el tiempo de respuesta de 15 días a solo 2 horas mediante IA y procesamiento de lenguaje natural.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Cumplimiento con estándares internacionales de datos</li>
              <li>Equipo especializado en arquitectura Insurtech</li>
              <li>Estrategias de migración de datos legacy</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Futuro de los Seguros</div>
            <div className="card">Ciberseguridad en Seguros</div>
            <div className="card">Estrategias de IA</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué organizaciones se benefician del desarrollo de software de seguros a medida?
        </h2>

        <p className="faq-intro">
          Nuestros servicios de consultoría y desarrollo tecnológico impactan positivamente 
          a una gran variedad de actores en el mercado asegurador:
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
            Evolucionamos el sector asegurador hacia el futuro digital. Cientos de proyectos exitosos desde 2009.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}