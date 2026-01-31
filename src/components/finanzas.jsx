 import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

const faqItems = [
  {
    title: "Empresas de Fintech y Pagos",
    content: "Utilizan software personalizado para pasarelas de pago, monederos digitales (wallets) y procesamiento de remesas internacionales.",
  },
  {
    title: "Gestoras de Activos y Fondos de Inversión",
    content: "Emplean plataformas de análisis predictivo para la optimización de portafolios y el seguimiento de activos en tiempo real.",
  },
  {
    title: "Compañías de Seguros (Insurtech)",
    content: "Automatizan la gestión de reclamos, suscripción de pólizas y evaluación de riesgos mediante algoritmos avanzados e IA.",
  },
  {
    title: "Plataformas de Trading y Corretaje",
    content: "Requieren sistemas de baja latencia para la ejecución de órdenes masivas y visualización de datos de mercado en vivo.",
  },
  {
    title: "Firmas de Auditoría y Contabilidad",
    content: "Digitalizan procesos de reportes fiscales, conciliación bancaria automática y análisis de grandes volúmenes de datos financieros.",
  },
  {
    title: "Empresas de Factoring y Financiamiento",
    content: "Implementan plataformas de descuento de facturas y control de flujo de caja para mejorar la liquidez empresarial.",
  },
  {
    title: "Plataformas de Criptomonedas y Activos Digitales",
    content: "Necesitan soluciones de custodia segura, exchanges personalizados e integración con redes blockchain.",
  },
];

export default function FinancePage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (i) => { setOpenIndex(openIndex === i ? null : i); };

  return (
    <div className="ag-page">
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Finanzas</header>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Potencie su ecosistema financiero con
            <span> herramientas digitales inteligentes y escalables.</span>
          </h1>
          <p className="hero-sub">Optimice decisiones complejas mediante análisis de datos y automatización financiera.</p>
 <a 
  href="https://wa.me/5491176550907?text=Acelere%20su%20Hoja%20de%20Ruta" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta">Acelere su Hoja de Ruta</button>
</a>          <div className="badges">
            <div className="badge-count">500+ empresas confían en nuestro talento tecnológico del top 1%</div>
            <ul className="badge-list">
              {badgeItems.map((b) => ( <li key={b} className="badge-item">{b}</li> ))}
            </ul>
          </div>
        </div>
        <div className="hero-image">
          <img src="/finanza.jpg" alt="Servicios Financieros" />
        </div>
      </section>

      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">Servicios de desarrollo financiero que ofrecemos</h2>
          <p className="lead">
            Creamos soluciones de software para el sector financiero que permiten a las empresas ser más eficientes, 
            tomar mejores decisiones basadas en datos y cumplir con los estándares globales de transparencia y riesgo.
          </p>

          <div className="services-grid">
            <article className="service">
              <h3>Plataformas de Inversión y Gestión de Activos</h3>
              <p>Dashboards personalizados para seguimiento de carteras, proyecciones financieras y reportes automatizados.</p>
            </article>
            <article className="service">
              <h3>Soluciones de Análisis de Riesgos</h3>
              <p>Modelos matemáticos y algorítmicos para evaluar perfiles de riesgo y garantizar la salud financiera.</p>
            </article>
            <article className="service">
              <h3>Automatización de Procesos Contables</h3>
              <p>Software para la conciliación masiva, gestión de impuestos y auditorías digitales sin errores humanos.</p>
            </article>
            <article className="service">
              <h3>Sistemas de Trading de Alta Velocidad</h3>
              <p>Motores de ejecución de órdenes con latencia mínima y conectividad global a los principales mercados.</p>
            </article>
            <article className="service">
              <h3>Ecosistemas Fintech y Wallets</h3>
              <p>Desarrollo integral de billeteras virtuales, integraciones con tarjetas de débito/crédito y pagos QR.</p>
            </article>
            <article className="service">
              <h3>Inteligencia de Negocio y Big Data</h3>
              <p>Transformación de datos financieros crudos en insights estratégicos mediante aprendizaje automático.</p>
            </article>
          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una firma de gestión patrimonial aumentó su base de clientes en un 40% al implementar nuestra 
              plataforma de asesoría híbrida basada en algoritmos de Inteligencia Artificial.
            </p>
          </div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Arquitecturas de alta disponibilidad</li>
              <li>Dominio de regulaciones financieras locales</li>
              <li>Talento especializado en Fintech</li>
            </ul>
          </div>
          <div className="sidebar-cards">
            <div className="card">Suscripción al boletín</div>
            <div className="card">Informes del sector</div>
            <div className="card">Historias de clientes</div>
          </div>
        </aside>
      </main>

      <section className="faq-section">
        <h2 className="faq-title">¿Qué organizaciones se benefician del desarrollo de software financiero?</h2>
        <p className="faq-intro">Nuestras soluciones impactan en una amplia gama de actores del mercado financiero global:</p>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? "open" : ""}`} onClick={() => toggleFAQ(i)}>
              <div className="faq-question"> {item.title} <span className="faq-icon">{openIndex === i ? "▲" : "▼"}</span> </div>
              {openIndex === i && ( <div className="faq-answer"> <p>{item.content}</p> </div> )}
            </div>
          ))}
        </div>
      </section>

      <footer className="footer-cta">
        <div className="footer-inner">
          <p>Del concepto a la realidad. Cientos de soluciones financieras innovadoras creadas desde 2009.</p>
 <a 
  href="https://wa.me/5491176550907?text=Agendar%20una%20llamada" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta small">Agendar una llamada</button>
</a>        </div>
      </footer>
    </div>
  );
}