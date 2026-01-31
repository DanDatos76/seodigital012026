// Archivo JSX: RetailPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Amazon', 'Shopify', 'Mercado Libre', 'Salesforce'];

// Datos del FAQ adaptados a Retail
const faqItems = [
  {
    title: "Cadenas de Retail y Tiendas Físicas",
    content:
      "Desarrollamos sistemas para gestión de ventas, stock en tiempo real, puntos de venta (POS) y operación omnicanal.",
  },
  {
    title: "E-commerce y Tiendas Online",
    content:
      "Creamos plataformas de comercio electrónico escalables, integraciones de pago, logística y optimización del funnel de conversión.",
  },
  {
    title: "Marcas de Consumo Masivo",
    content:
      "Implementamos soluciones para control de distribución, pricing dinámico, promociones y análisis de comportamiento del consumidor.",
  },
  {
    title: "Retail Omnicanal",
    content:
      "Desarrollamos ecosistemas que integran tiendas físicas, online, marketplaces y redes sociales en una experiencia unificada.",
  },
  {
    title: "Empresas de Logística y Fulfillment",
    content:
      "Creamos sistemas para gestión de pedidos, inventario distribuido, entregas de última milla y trazabilidad.",
  },
  {
    title: "Franquicias y Redes Comerciales",
    content:
      "Desarrollamos plataformas para estandarización de procesos, reporting centralizado y control de performance por sucursal.",
  },
  {
    title: "Retailers Data-Driven",
    content:
      "Implementamos soluciones de analítica avanzada para predicción de demanda, segmentación de clientes y optimización de ventas.",
  },
];

// Componente principal
export default function Retail() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Retail</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulse sus ventas minoristas con
            <span> soluciones digitales para el comercio moderno.</span>
          </h1>

          <p className="hero-sub">
            Conecte canales, optimice operaciones y mejore la experiencia del cliente en cada punto de venta.
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
            src="/retail.jpg"
            alt="Venta por Menor - Retail"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para la venta por menor
          </h2>

          <p className="lead">
            Desarrollamos soluciones digitales para retailers que buscan aumentar ventas,
            optimizar inventarios y ofrecer experiencias de compra memorables.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Sistemas de Punto de Venta (POS)</h3>
              <p>
                Desarrollo de POS modernos integrados con inventario, promociones,
                facturación y medios de pago.
              </p>
            </article>

            <article className="service">
              <h3>E-commerce y Omnicanalidad</h3>
              <p>
                Plataformas que integran tiendas físicas, online y marketplaces
                en una única operación comercial.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Inventario y Stock</h3>
              <p>
                Control de stock en tiempo real, reposición automática
                y gestión de múltiples depósitos.
              </p>
            </article>

            <article className="service">
              <h3>Experiencia del Cliente y Fidelización</h3>
              <p>
                Programas de fidelidad, personalización de ofertas
                y herramientas de CRM para retail.
              </p>
            </article>

            <article className="service">
              <h3>Analítica de Ventas y Demanda</h3>
              <p>
                Análisis de comportamiento de compra, predicción de demanda
                y optimización de surtido.
              </p>
            </article>

            <article className="service">
              <h3>Automatización Comercial</h3>
              <p>
                Digitalización de precios, promociones, reportes
                y procesos operativos del punto de venta.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una cadena de retail aumentó un 28% sus ventas
              mediante la integración omnicanal y analítica avanzada.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en retail físico y digital</li>
              <li>Soluciones omnicanal reales</li>
              <li>Escalabilidad para crecer sin límites</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Reporte de Tendencias Retail</div>
            <div className="card">Guía de Omnicanalidad</div>
            <div className="card">Casos de Éxito Retail</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para la venta por menor?
        </h2>

        <p className="faq-intro">
          La transformación digital del retail impacta en todos los actores
          que participan en la cadena comercial:
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
            Impulsamos el crecimiento del comercio minorista con soluciones digitales desde 2009.
          </p>
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
