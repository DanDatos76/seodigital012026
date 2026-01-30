// Archivo JSX: TransformacionDigital.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ específicos para Transformación Digital
const faqItems = [
  {
    title: "Empresas tecnológicas en busca de agilidad",
    content:
      "Ayudamos a compañías nativas digitales a optimizar sus procesos de entrega, adoptar metodologías ágiles y escalar su cultura interna junto con su tecnología.",
  },
  {
    title: "Corporaciones que necesitan modernización",
    content:
      "Las grandes organizaciones confían en nosotros para eliminar silos de datos, migrar sistemas legacy a la nube y automatizar flujos de trabajo complejos.",
  },
  {
    title: "Startups escalando hacia el mercado global",
    content:
      "Diseñamos la base tecnológica y operativa que permite a las startups crecer de forma acelerada, manteniendo la eficiencia y el enfoque en el cliente.",
  },
  {
    title: "Retail y E-commerce: Experiencia Omnicanal",
    content:
      "Transformamos la venta tradicional en experiencias digitales integradas, unificando inventarios, logística y atención al cliente en tiempo real.",
  },
  {
    title: "Salud y Gobierno: Digitalización Segura",
    content:
      "Implementamos soluciones de interoperabilidad, telemedicina y trámites digitales bajo los más altos estándares de seguridad y protección de datos.",
  },
  {
    title: "Sector Educativo y Formación Digital",
    content:
      "Evolucionamos los modelos de enseñanza hacia ecosistemas de aprendizaje híbridos, dinámicos y basados en el análisis del progreso del estudiante.",
  },
  {
    title: "Logística y Operaciones Inteligentes",
    content:
      "Integramos IoT y análisis predictivo para transformar la cadena de suministro en una ventaja competitiva impulsada por datos.",
  },
];

// Componente principal
export default function TransformacionDigitalPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Transformación Digital</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transformación Digital
            <span> estratégica para liderar en la economía moderna.</span>
          </h1>

          <p className="hero-sub">
            Evolucionamos tu tecnología, tus procesos y tu cultura para maximizar la agilidad y el valor de tu negocio.
          </p>

          <button className="cta">Inicia tu Evolución Digital</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas han acelerado su futuro con nuestros expertos
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
            src="/tdig.jpg" // Asegúrate de tener una imagen adecuada
            alt="Transformación Digital Empresarial"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Soluciones de Transformación Digital que impulsamos
          </h2>

          <p className="lead">
            No solo implementamos software; rediseñamos la forma en que tu empresa opera. 
            Ayudamos a organizaciones tradicionales a convertirse en líderes digitales mediante 
            estrategias basadas en datos, agilidad y tecnología de vanguardia.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Estrategia y Consultoría Digital</h3>
              <p>
                Creamos roadmaps personalizados para modernizar tu modelo de negocio, 
                identificando oportunidades de innovación y retorno de inversión rápido.
              </p>
            </article>

            <article className="service">
              <h3>Modernización de Aplicaciones Legacy</h3>
              <p>
                Transformamos sistemas antiguos en arquitecturas modernas, escalables y 
                nativas de la nube sin interrumpir la continuidad de tu negocio.
              </p>
            </article>

            <article className="service">
              <h3>Automatización de Procesos (BPA / RPA)</h3>
              <p>
                Eliminamos tareas repetitivas mediante flujos inteligentes y robótica de software, 
                permitiendo que tu equipo se enfoque en actividades de alto valor.
              </p>
            </article>

            <article className="service">
              <h3>Migración y Optimización Cloud</h3>
              <p>
                Llevamos tu infraestructura a la nube con estrategias multicloud que 
                reducen costos operativos y aumentan la resiliencia tecnológica.
              </p>
            </article>

            <article className="service">
              <h3>Cultura Ágil y Cambio Organizacional</h3>
              <p>
                Capacitamos a tus equipos en metodologías ágiles y mentalidad digital 
                para asegurar que la transformación sea sostenible y humana.
              </p>
            </article>

            <article className="service">
              <h3>Análisis de Datos e Inteligencia de Negocio</h3>
              <p>
                Convertimos tus datos en decisiones estratégicas mediante paneles de control 
                en tiempo real y modelos predictivos avanzados.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de éxito</h4>
            <p>
              Cómo una corporación financiera tradicional digitalizó el 100% de sus servicios al cliente, 
              aumentando la satisfacción del usuario en un 75% y reduciendo sus costos operativos en un 30% en solo 12 meses.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué transformarte con nosotros?</h4>
            <ul>
              <li>Enfoque integral: Tecnología + Procesos + Personas</li>
              <li>Experiencia comprobada en 130+ sectores industriales</li>
              <li>Resultados medibles orientados al crecimiento</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guía de Madurez Digital</div>
            <div className="card">Estrategias de Innovación 2024</div>
            <div className="card">Casos de Éxito de Modernización</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Por qué la Transformación Digital es vital para tu industria?
        </h2>

        <p className="faq-intro">
          La digitalización no es una opción, es el motor de la competitividad actual. 
          Nuestras soluciones impactan en:
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
            No dejes que tu competencia se adelante. Empieza hoy mismo tu camino hacia 
            la excelencia digital.
          </p>
          <button className="cta small">Agendar una Consultoría</button>
        </div>
      </footer>
    </div>
  );
}