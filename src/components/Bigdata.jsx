 // Archivo JSX: BigdataPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen aplicaciones escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en arquitecturas de Big Data avanzadas para escalar de forma segura.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan APIs, microservicios, flujos de trabajo automatizados e intercambio masivo de datos entre sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan el desarrollo de Big Data a medida para validar ideas rápidamente, desplegar MVPs y garantizar la escalabilidad futura.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de sistemas de inventario, pasarelas de pago, motores de analítica y servicios de datos de alta disponibilidad.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones de procesamiento de datos seguras, conformes a la normativa y de alto rendimiento con registros de auditoría y protección de datos.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "Las arquitecturas de datos gestionan el manejo de usuarios, la entrega de cursos, analíticas en tiempo real y automatización de contenidos.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan seguimiento en tiempo real, geolocalización, tuberías de datos para sensores y flujos logísticos automatizados.",
  },
];

// Componente principal
export default function BigdataPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Desarrollo de Big Data</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Desarrollo de Big Data
            <span> robusto, escalable y seguro para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Soluciones avanzadas para el procesamiento y análisis de datos masivos.
          </p>

          <button className="cta">Impulse su Gestión de Datos</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestro top 1% de ingenieros expertos
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
            src="/bigdata.jfif"
            alt="Ingeniería de Big Data"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de Big Data que ofrecemos
          </h2>

          <p className="lead">
            Construimos sistemas de datos potentes diseñados para el rendimiento, la seguridad y la
            escalabilidad. Proporcionamos desarrollo integral de Big Data para startups, 
            corporaciones y plataformas de rápido crecimiento.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Arquitectura de APIs y Microservicios Masivos</h3>
              <p>
                APIs REST/GraphQL de alto rendimiento, microservicios, arquitecturas serverless
                y sistemas orientados a eventos para grandes flujos de datos.
              </p>
            </article>

            <article className="service">
              <h3>Diseño y Optimización de Bases de Datos</h3>
              <p>
                PostgreSQL, MongoDB, Redis, MySQL: indexación, replicación, fragmentación (sharding) y
                tuberías de datos en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Desarrollo de Infraestructura de Datos en la Nube</h3>
              <p>
                Soluciones en AWS, Azure y Google Cloud utilizando Docker, Kubernetes, CI/CD y
                automatización de infraestructura de datos.
              </p>
            </article>

            <article className="service">
              <h3>Sistemas de Seguridad y Autenticación</h3>
              <p>
                OAuth2, JWT, gestión de identidad, cifrado de datos sensibles, control de acceso y 
                cumplimiento de normativas internacionales.
              </p>
            </article>

            <article className="service">
              <h3>Integración con Servicios de Terceros</h3>
              <p>
                Pasarelas de pago, APIs de mensajería, motores de analítica masiva, CRMs, ERPs 
                y modelos de IA.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Datos e Ingeniería de Rendimiento</h3>
              <p>
                Pruebas unitarias, de integración, de carga y de estrés. Optimización de rendimiento 
                para aplicaciones con volúmenes de datos masivos.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global escaló a 3 millones de usuarios usando nuestro backend de microservicios de Big Data —
              reduciendo el tiempo de inactividad en un 92% y aumentando la velocidad de respuesta en un 40%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en ingeniería de datos</li>
              <li>Arquitecturas nativas de la nube</li>
              <li>Enfoque de desarrollo centrado en los datos</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura de Big Data</div>
            <div className="card">Mejores Prácticas de APIs</div>
            <div className="card">Casos de Estudio</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician del desarrollo de Big Data a medida?
        </h2>

        <p className="faq-intro">
          Los servicios de datos personalizados proporcionan la funcionalidad central que impulsa los productos digitales modernos.
          Son esenciales para:
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
            Desde analítica masiva hasta microservicios: potencie su producto con ingeniería de datos
            de clase mundial.
          </p>
          <button className="cta small">Programar una llamada</button>
        </div>
      </footer>
    </div>
  );
}