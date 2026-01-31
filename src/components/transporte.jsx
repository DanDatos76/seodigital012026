 // Archivo JSX: LogisticsPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['DHL', 'FedEx', 'Maersk', 'UPS'];

// Datos del FAQ adaptados a Transporte y Logística
const faqItems = [
  {
    title: "Empresas de Transporte Terrestre, Marítimo y Aéreo",
    content:
      "Desarrollamos plataformas para gestión de flotas, planificación de rutas, control de cargas y seguimiento de envíos en tiempo real.",
  },
  {
    title: "Operadores Logísticos y 3PL",
    content:
      "Creamos soluciones para administración de almacenes (WMS), coordinación de operaciones y optimización de procesos logísticos.",
  },
  {
    title: "Empresas de Distribución y Última Milla",
    content:
      "Implementamos sistemas para gestión de entregas, optimización de recorridos y monitoreo de desempeño en campo.",
  },
  {
    title: "Puertos, Terminales y Centros Logísticos",
    content:
      "Desarrollamos software para control de accesos, trazabilidad de contenedores y coordinación de operaciones portuarias.",
  },
  {
    title: "Empresas de Comercio Internacional",
    content:
      "Creamos plataformas para documentación, seguimiento aduanero y gestión de operaciones de importación y exportación.",
  },
  {
    title: "Supply Chain y Gestión de Inventarios",
    content:
      "Implementamos soluciones para visibilidad end-to-end de la cadena de suministro y control de inventarios distribuidos.",
  },
  {
    title: "Organismos de Transporte y Regulación",
    content:
      "Desarrollamos sistemas para cumplimiento normativo, control de cargas, seguridad y monitoreo del transporte.",
  },
];

// Componente principal
export default function Transporte() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Transporte y Logística</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Optimice sus operaciones con
            <span> soluciones digitales para transporte y logística.</span>
          </h1>

          <p className="hero-sub">
            Mejore la eficiencia, visibilidad y control de su cadena logística de punta a punta.
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
            src="./camion.jpg"
            alt="Transporte y Logística"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para transporte y logística
          </h2>

          <p className="lead">
            Desarrollamos soluciones digitales para empresas de transporte y logística
            que buscan optimizar costos, tiempos de entrega y trazabilidad operativa.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Gestión de Flotas y Telemetría</h3>
              <p>
                Plataformas para monitoreo de vehículos, control de consumo,
                mantenimiento predictivo y seguridad vial.
              </p>
            </article>

            <article className="service">
              <h3>Planificación de Rutas y Despachos</h3>
              <p>
                Optimización de recorridos, asignación de cargas
                y reducción de tiempos de entrega.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Almacenes (WMS)</h3>
              <p>
                Sistemas para control de stock, picking, packing
                y operación eficiente de centros de distribución.
              </p>
            </article>

            <article className="service">
              <h3>Seguimiento y Trazabilidad</h3>
              <p>
                Tracking en tiempo real de envíos, alertas automáticas
                y visibilidad completa de la operación logística.
              </p>
            </article>

            <article className="service">
              <h3>Integración de la Cadena de Suministro</h3>
              <p>
                Conectamos proveedores, operadores y clientes
                en una plataforma logística unificada.
              </p>
            </article>

            <article className="service">
              <h3>Analítica y Optimización Logística</h3>
              <p>
                Uso de datos para mejorar niveles de servicio,
                reducir costos operativos y anticipar demanda.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo un operador logístico redujo un 22% los costos operativos
              mediante optimización de rutas y visibilidad en tiempo real.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en operaciones logísticas complejas</li>
              <li>Soluciones escalables y robustas</li>
              <li>Integración total de la cadena logística</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Reporte de Tendencias Logísticas</div>
            <div className="card">Guía de Optimización de Rutas</div>
            <div className="card">Casos de Éxito en Logística</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para transporte y logística?
        </h2>

        <p className="faq-intro">
          La digitalización logística impacta en todos los actores
          involucrados en el movimiento y distribución de bienes:
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
            Movemos la logística del futuro con soluciones digitales desde 2009.
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
