// Archivo JSX: MediaEntertainmentPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Netflix', 'Spotify', 'YouTube', 'Disney'];

const faqItems = [
  {
    title: "Productoras Audiovisuales",
    content:
      "Desarrollamos plataformas para gestión de producciones, control de recursos, edición colaborativa y distribución de contenidos.",
  },
  {
    title: "Plataformas de Streaming",
    content:
      "Creamos soluciones escalables para transmisión de video y audio, gestión de catálogos y experiencias personalizadas.",
  },
  {
    title: "Medios de Comunicación",
    content:
      "Implementamos sistemas para redacciones digitales, publicación multicanal y monetización de contenidos.",
  },
  {
    title: "Industria Musical y Editorial",
    content:
      "Desarrollamos plataformas para distribución digital, gestión de derechos y análisis de audiencias.",
  },
  {
    title: "Gaming y Esports",
    content:
      "Creamos soluciones para comunidades de jugadores, torneos online y plataformas de streaming interactivo.",
  },
  {
    title: "Agencias de Contenido y Publicidad",
    content:
      "Implementamos herramientas para campañas digitales, análisis de impacto y automatización creativa.",
  },
];

export default function Medios() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">
        Inicio &gt; Industrias &gt; Entretenimiento y Medios
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tecnología que potencia la
            <span> creatividad y la distribución de contenidos.</span>
          </h1>

          <p className="hero-sub">
            Soluciones digitales para crear, gestionar y escalar experiencias de entretenimiento.
          </p>

          <button className="cta">Impulsar mi Plataforma</button>

          <div className="badges">
            <div className="badge-count">
              +500 empresas confían en nuestro talento tecnológico creativo
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
            src="/medios.jpg"
            alt="Industria de Entretenimiento y Medios"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Desarrollo de software para entretenimiento y medios
          </h2>

          <p className="lead">
            Acompañamos a empresas creativas y de medios en su transformación digital,
            ayudándolas a conectar con audiencias globales y monetizar contenidos.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Plataformas de Streaming</h3>
              <p>
                Desarrollo de soluciones OTT para video y audio bajo demanda,
                transmisiones en vivo y gestión de usuarios.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Contenidos (CMS)</h3>
              <p>
                Sistemas para creación, edición, distribución y publicación
                multicanal de contenidos digitales.
              </p>
            </article>

            <article className="service">
              <h3>Experiencia de Usuario y Personalización</h3>
              <p>
                Uso de datos e inteligencia artificial para recomendaciones
                y experiencias personalizadas.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Derechos y Monetización</h3>
              <p>
                Plataformas para control de licencias, DRM y modelos de
                suscripción o publicidad.
              </p>
            </article>

            <article className="service">
              <h3>Analítica de Audiencias</h3>
              <p>
                Análisis de comportamiento, engagement y consumo de contenidos
                para optimizar estrategias.
              </p>
            </article>

            <article className="service">
              <h3>Producción y Colaboración Digital</h3>
              <p>
                Herramientas para trabajo remoto, flujos creativos
                y gestión de proyectos audiovisuales.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma de streaming regional incrementó un 40% su
              retención de usuarios mediante recomendaciones inteligentes.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en plataformas de alto tráfico</li>
              <li>Enfoque creativo y tecnológico</li>
              <li>Escalabilidad global</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Tendencias en Streaming</div>
            <div className="card">Guía de Monetización Digital</div>
            <div className="card">Casos de Éxito en Medios</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para entretenimiento y medios?
        </h2>

        <p className="faq-intro">
          La tecnología es clave para todos los actores de la industria creativa:
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
            Transformamos ideas creativas en plataformas digitales de alto impacto.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}
