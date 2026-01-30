 // Archivo JSX: TelecomPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ Traducidos y adaptados a Telecomunicaciones
const faqItems = [
  {
    title: "Operadores de Telefonía Móvil y Fija",
    content:
      "Desarrollamos sistemas críticos para la gestión de suscriptores, facturación masiva (billing) y plataformas de aprovisionamiento de servicios en tiempo real.",
  },
  {
    title: "Proveedores de Servicios de Internet (ISP)",
    content:
      "Creamos herramientas para la gestión de ancho de banda, portales de autogestión para clientes y sistemas de diagnóstico remoto de red.",
  },
  {
    title: "Empresas de Infraestructura de Red",
    content:
      "Implementamos software para el monitoreo de activos físicos, gestión de torres de comunicación y optimización de redes de fibra óptica.",
  },
  {
    title: "Proveedores de Servicios en la Nube y Data Centers",
    content:
      "Ayudamos a escalar arquitecturas de conectividad de alta velocidad, SDN (Software-Defined Networking) y virtualización de funciones de red (NFV).",
  },
  {
    title: "Compañías de IoT y Ciudades Inteligentes",
    content:
      "Desarrollamos ecosistemas de conectividad para dispositivos masivos, tuberías de datos para sensores y plataformas de control centralizado.",
  },
  {
    title: "Plataformas de Streaming y Contenido Digital",
    content:
      "Optimizamos la entrega de contenido (CDN), gestión de derechos digitales (DRM) y arquitecturas de baja latencia para transmisiones en vivo.",
  },
  {
    title: "Organismos Reguladores y de Gobierno",
    content:
      "Proveemos plataformas para el monitoreo del espectro radioeléctrico, cumplimiento de normativas de conectividad y gestión de servicios universales.",
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
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Telecomunicaciones</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Impulse la conectividad global con
            <span> soluciones de software para telecomunicaciones a medida.</span>
          </h1>

          <p className="hero-sub">Optimice el rendimiento de su red y transforme la experiencia digital de sus usuarios.</p>

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
            src="../assets/telec.jpg" // Asegúrate de tener esta imagen en tu carpeta de assets
            alt="Infraestructura de Telecomunicaciones"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo para telecomunicaciones que ofrecemos
          </h2>

          <p className="lead">
            Desarrollamos soluciones personalizadas para la industria de las telecomunicaciones con el fin de modernizar 
            sistemas OSS/BSS, implementar redes 5G, automatizar el soporte al cliente y garantizar la seguridad 
            en infraestructuras de misión crítica.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Modernización de Sistemas OSS/BSS</h3>
              <p>
                Actualización de plataformas de soporte operativo y de negocio para agilizar 
                la facturación, el inventario de red y el ciclo de vida del cliente.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Red y Monitoreo (NMS)</h3>
              <p>
                Software avanzado para la visualización de topologías de red, detección proactiva 
                de fallos y optimización de tráfico en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Apps de Autogestión y Experiencia del Cliente</h3>
              <p>
                Desarrollo de canales digitales para el control de consumo, pagos en línea, 
                activación de servicios y asistencia técnica mediante IA.
              </p>
            </article>

            <article className="service">
              <h3>Soluciones 5G y Edge Computing</h3>
              <p>
                Implementación de aplicaciones de baja latencia que aprovechan el potencial 
                del 5G para procesos industriales, salud y movilidad.
              </p>
            </article>

            <article className="service">
              <h3>Analítica de Datos y Calidad de Servicio (QoS)</h3>
              <p>
                Uso de Big Data para predecir la saturación de celdas, analizar el comportamiento 
                del usuario y mejorar los estándares de calidad de voz y datos.
              </p>
            </article>

            <article className="service">
              <h3>Ciberseguridad en Infraestructura de Red</h3>
              <p>
                Protección contra ataques DDoS, cifrado de enlaces de transporte y 
                aseguramiento de núcleos de red virtuales (VNF).
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo un operador multinacional redujo sus costos de mantenimiento en un 25% al implementar 
              nuestro sistema de monitoreo predictivo basado en IA para sus estaciones base.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en arquitecturas de alta disponibilidad</li>
              <li>Dominio de protocolos de red y virtualización</li>
              <li>Capacidad de escalado global inmediato</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Reporte del Futuro 5G</div>
            <div className="card">Guía de Seguridad en Redes</div>
            <div className="card">Casos de Éxito Telecom</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué organizaciones se benefician del desarrollo de software para telecomunicaciones?
        </h2>

        <p className="faq-intro">
          La transformación digital de las comunicaciones beneficia a múltiples actores encargados 
          de mantener al mundo conectado de manera eficiente y segura:
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
            Llevamos las comunicaciones al siguiente nivel. Cientos de soluciones escalables creadas desde 2009.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}