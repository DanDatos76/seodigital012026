// Archivo JSX: RealEstatePage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ Traducidos y adaptados a Bienes Raíces
const faqItems = [
  {
    title: "Empresas de Gestión de Propiedades",
    content:
      "Desarrollamos sistemas centralizados para la gestión de alquileres, mantenimiento, comunicación con inquilinos y procesamiento de pagos automatizados.",
  },
  {
    title: "Agencias Inmobiliarias y Corredores",
    content:
      "Creamos plataformas de listados dinámicos, CRMs especializados en ventas inmobiliarias y herramientas de marketing digital integradas.",
  },
  {
    title: "Desarrolladores y Constructoras",
    content:
      "Implementamos software para el seguimiento de proyectos, gestión de presupuestos de obra y visualización de preventas en tiempo real.",
  },
  {
    title: "Startups de Proptech",
    content:
      "Ayudamos a lanzar soluciones innovadoras basadas en Big Data, valoración automática de propiedades y modelos de inversión fraccionada.",
  },
  {
    title: "Fideicomisos de Inversión (REITs)",
    content:
      "Desarrollamos tableros de control avanzados para el análisis de portafolios, proyecciones de rentabilidad y reportes de cumplimiento fiscal.",
  },
  {
    title: "Plataformas de Alquiler Vacacional",
    content:
      "Diseñamos motores de reserva, integración con calendarios externos (OTA) y sistemas de mensajería instantánea para propietarios y huéspedes.",
  },
  {
    title: "Instituciones de Crédito Hipotecario",
    content:
      "Proveemos herramientas para la pre-calificación de créditos, gestión de documentos notariales y automatización de flujos de aprobación.",
  },
];

// Componente principal
export default function RealEstatePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Bienes Raíces</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Potencie su negocio inmobiliario con
            <span> soluciones de software Proptech a medida.</span>
          </h1>

          <p className="hero-sub">Optimice la gestión de activos y transforme la experiencia de compra y alquiler.</p>

          <button className="cta">Acelere su Hoja de Ruta</button>

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
            src="/braices.jpg" // Asegúrate de tener esta imagen en tu carpeta de assets
            alt="Tecnología para Bienes Raíces"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo inmobiliario que ofrecemos
          </h2>

          <p className="lead">
            Desarrollamos soluciones personalizadas para la industria de bienes raíces con el fin de agilizar 
            la comercialización de propiedades, implementar análisis de datos de mercado, automatizar la 
            gestión administrativa y aprovechar tecnologías de visualización inmersiva.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Sistemas de Gestión de Propiedades (PMS)</h3>
              <p>
                Software integral para administrar inventarios, contratos legales, cobros de renta 
                y mantenimiento preventivo de edificios.
              </p>
            </article>

            <article className="service">
              <h3>Portales de Listados y Marketplaces</h3>
              <p>
                Plataformas escalables con motores de búsqueda avanzados, geolocalización de alta 
                precisión e integración con múltiples proveedores de datos.
              </p>
            </article>

            <article className="service">
              <h3>CRM Inmobiliario Personalizado</h3>
              <p>
                Herramientas diseñadas para el seguimiento de leads, automatización de embudos 
                de venta y gestión de visitas a propiedades.
              </p>
            </article>

            <article className="service">
              <h3>Tours Virtuales y Realidad Aumentada</h3>
              <p>
                Integración de visualizaciones 360° y modelos BIM para permitir que los compradores 
                exploren proyectos antes de su construcción.
              </p>
            </article>

            <article className="service">
              <h3>Análisis Predictivo de Mercado</h3>
              <p>
                Uso de IA para proyectar tendencias de precios, demanda por zonas geográficas 
                y optimización de carteras de inversión.
              </p>
            </article>

            <article className="service">
              <h3>Integración de IoT y Smart Buildings</h3>
              <p>
                Soluciones para la gestión inteligente de energía, control de acceso digital 
                y monitoreo de infraestructura mediante sensores.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una administradora de activos redujo sus costos operativos en un 30% al unificar la 
              gestión de 5,000 unidades habitacionales en una plataforma única de nube con reportes automáticos.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Expertos en arquitecturas cloud escalables</li>
              <li>Integración nativa con servicios de mapas y datos</li>
              <li>Enfoque en usabilidad móvil (Mobile-First)</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Informes de Mercado</div>
            <div className="card">Guía de Inversión Proptech</div>
            <div className="card">Tendencias de Diseño</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué actores se benefician del desarrollo de software para bienes raíces?
        </h2>

        <p className="faq-intro">
          La tecnología aplicada al sector inmobiliario beneficia a todos los participantes 
          de la cadena de valor, facilitando la transparencia y la velocidad de las transacciones:
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
            Llevamos el sector inmobiliario a la era digital. Cientos de soluciones exitosas creadas desde 2009.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}