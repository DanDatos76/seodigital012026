 // Archivo JSX: FintechPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Stripe', 'Visa', 'Mastercard', 'PayPal'];

// Datos del FAQ adaptados a Fintech
const faqItems = [
  {
    title: "Startups Fintech y Neobancos",
    content:
      "Desarrollamos plataformas financieras digitales para pagos, cuentas virtuales, onboarding de usuarios, KYC y gestión de operaciones en tiempo real.",
  },
  {
    title: "Bancos y Entidades Financieras",
    content:
      "Modernizamos sistemas core bancarios, canales digitales, integraciones API y arquitecturas seguras para la banca digital.",
  },
  {
    title: "Plataformas de Pago y Procesadores",
    content:
      "Creamos soluciones escalables para procesamiento de pagos, conciliaciones automáticas, antifraude y transacciones de alto volumen.",
  },
  {
    title: "Empresas de Préstamos y Crédito Digital",
    content:
      "Implementamos sistemas para scoring crediticio, originación de préstamos, gestión de cobranzas y análisis de riesgo basado en datos.",
  },
  {
    title: "Plataformas de Inversión y Trading",
    content:
      "Desarrollamos aplicaciones para trading online, gestión de carteras, análisis financiero y operaciones en tiempo real.",
  },
  {
    title: "Empresas de Blockchain y Criptoactivos",
    content:
      "Creamos soluciones para billeteras digitales, contratos inteligentes, tokenización de activos y cumplimiento regulatorio.",
  },
  {
    title: "Organismos Reguladores y Cumplimiento",
    content:
      "Desarrollamos plataformas para reporting financiero, prevención de lavado de dinero (AML) y cumplimiento normativo.",
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
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Fintech</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulse la innovación financiera con
            <span> soluciones de software fintech seguras y escalables.</span>
          </h1>

          <p className="hero-sub">
            Transforme servicios financieros mediante tecnología confiable, ágil y orientada al usuario.
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
            src="/fintech.jpg"
            alt="Industria Fintech"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para la industria fintech
          </h2>

          <p className="lead">
            Desarrollamos soluciones digitales para empresas fintech que buscan escalar operaciones,
            garantizar seguridad y ofrecer experiencias financieras simples y confiables.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Plataformas de Pagos Digitales</h3>
              <p>
                Sistemas de pagos online, billeteras digitales, transferencias inmediatas
                e integraciones con redes financieras.
              </p>
            </article>

            <article className="service">
              <h3>Core Bancario y APIs Financieras</h3>
              <p>
                Desarrollo e integración de cores bancarios modernos y APIs seguras para ecosistemas financieros.
              </p>
            </article>

            <article className="service">
              <h3>Onboarding Digital y KYC</h3>
              <p>
                Automatización de alta de usuarios, validación de identidad, biometría y cumplimiento normativo.
              </p>
            </article>

            <article className="service">
              <h3>Analítica Financiera y Riesgo</h3>
              <p>
                Uso de datos e inteligencia artificial para scoring crediticio, detección de fraude
                y análisis de comportamiento financiero.
              </p>
            </article>

            <article className="service">
              <h3>Blockchain y Finanzas Descentralizadas</h3>
              <p>
                Desarrollo de soluciones blockchain, contratos inteligentes y plataformas DeFi.
              </p>
            </article>

            <article className="service">
              <h3>Ciberseguridad Financiera</h3>
              <p>
                Protección de transacciones, datos sensibles y sistemas financieros críticos.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una fintech de pagos redujo el fraude en un 35% mediante
              la implementación de sistemas de detección basados en IA.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en sistemas financieros críticos</li>
              <li>Cumplimiento normativo y seguridad por diseño</li>
              <li>Arquitecturas escalables y resilientes</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Reporte de Tendencias Fintech</div>
            <div className="card">Guía de Seguridad Financiera</div>
            <div className="card">Casos de Éxito Fintech</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para la industria fintech?
        </h2>

        <p className="faq-intro">
          La innovación fintech impulsa a todos los actores que participan
          en la evolución de los servicios financieros digitales:
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
            Impulsamos la innovación financiera con soluciones digitales creadas desde 2009.
          </p>
 <a 
  href="https://wa.me/5491176550907?text=Agendar%20una%20llamada" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta small">Agendar una llamada</button>
</a>          </div>
      </footer>
    </div>
  );
}
