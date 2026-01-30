// Archivo JSX: BankingPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ Traducidos y adaptados a Banca
const faqItems = [
  {
    title: "Bancos Comerciales y Minoristas",
    content:
      "Desarrollamos plataformas de banca en línea, aplicaciones móviles, sistemas de préstamos y gestión de relaciones con clientes (CRM) bancarios.",
  },
  {
    title: "Bancos de Inversión y Trading",
    content:
      "Implementamos algoritmos de trading de alta frecuencia, plataformas de análisis de datos en tiempo real y gestión de portafolios.",
  },
  {
    title: "Neobancos y Fintechs",
    content:
      "Creamos infraestructuras 100% digitales, sistemas de onboarding biométrico, billeteras digitales y APIs de Open Banking.",
  },
  {
    title: "Cooperativas de Crédito",
    content:
      "Ayudamos a modernizar sistemas legacy para ofrecer servicios digitales competitivos a sus miembros con menores costos operativos.",
  },
  {
    title: "Procesadores de Pagos",
    content:
      "Desarrollamos pasarelas de pago seguras, sistemas de punto de venta (POS) y soluciones de liquidación en tiempo real.",
  },
  {
    title: "Aseguradoras (Insurtech)",
    content:
      "Integramos tecnologías para la automatización de reclamos, evaluación de riesgos mediante IA y portales de autogestión para pólizas.",
  },
  {
    title: "Entidades Reguladoras y Cumplimiento",
    content:
      "Proveemos herramientas RegTech para monitoreo de transacciones, prevención de lavado de dinero (AML) y reportes automáticos.",
  },
];

// Componente principal
export default function BankingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Banca y Finanzas</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Modernice sus servicios financieros con
            <span> soluciones de software bancario a medida.</span>
          </h1>

          <p className="hero-sub">Garantice la seguridad, el cumplimiento y la experiencia del cliente.</p>

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
            src="/banking.jfif" // Asegúrate de tener esta imagen
            alt="Banca y Servicios Financieros"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo bancario que ofrecemos
          </h2>

          <p className="lead">
            Desarrollamos soluciones personalizadas para la industria bancaria con el fin de optimizar 
            operaciones financieras, fortalecer la ciberseguridad, facilitar la adopción de la banca móvil 
            y asegurar el cumplimiento de normativas internacionales complejas.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Modernización de Core Bancario</h3>
              <p>
                Migración y actualización de sistemas heredados a arquitecturas de microservicios 
                nativas de la nube, seguras y escalables.
              </p>
            </article>

            <article className="service">
              <h3>Desarrollo de Banca Móvil y Wallets</h3>
              <p>
                Creación de aplicaciones intuitivas para iOS y Android con autenticación biométrica, 
                pagos QR y gestión financiera personal.
              </p>
            </article>

            <article className="service">
              <h3>Detección de Fraude con IA</h3>
              <p>
                Implementación de modelos de Machine Learning para detectar anomalías transaccionales 
                y prevenir fraudes en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Soluciones de Open Banking y APIs</h3>
              <p>
                Desarrollo de APIs seguras compatibles con PSD2 para la integración con terceros 
                y ecosistemas fintech.
              </p>
            </article>

            <article className="service">
              <h3>Blockchain y Smart Contracts</h3>
              <p>
                Implementación de libros de contabilidad distribuidos para transacciones transfronterizas, 
                identidad digital y tokenización de activos.
              </p>
            </article>

            <article className="service">
              <h3>Automatización RegTech (KYC/AML)</h3>
              <p>
                Herramientas automatizadas para la verificación de identidad (KYC) y monitoreo 
                anti-lavado de dinero (AML) para reducir riesgos legales.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo un banco regional digitalizó su proceso de onboarding reduciendo el tiempo de apertura 
              de cuentas de 3 días a 10 minutos, aumentando la conversión de clientes en un 45%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Cumplimiento PCI-DSS e ISO 27001</li>
              <li>Expertos en seguridad financiera</li>
              <li>Entrega de ciclo completo</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Tendencias Fintech</div>
            <div className="card">Informes de Seguridad</div>
            <div className="card">Historias de éxito</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué instituciones se benefician del desarrollo de software bancario a medida?
        </h2>

        <p className="faq-intro">
          Los servicios de desarrollo de software financiero personalizado benefician a numerosas 
          instituciones en todo el sector. Algunos ejemplos incluyen:
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
            Transformamos la banca tradicional. Cientos de soluciones seguras creadas desde 2009.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}