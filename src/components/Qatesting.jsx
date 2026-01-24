 // Archivo JSX: QatestingPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen aplicaciones escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en estrategias avanzadas de QA para escalar de forma segura.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan pruebas de APIs, microservicios, automatización de flujos de trabajo e intercambio seguro de datos entre sus sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan las pruebas de QA a medida para validar ideas rápidamente, desplegar MVPs sin errores y garantizar la escalabilidad futura.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de sistemas de inventario, pasarelas de pago y motores de analítica probados bajo condiciones de alta disponibilidad.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones de QA seguras, conformes a la normativa y de alto rendimiento con validación de pistas de auditoría y protección de datos.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "El QA garantiza la gestión de usuarios, la entrega de cursos, las analíticas y la comunicación en tiempo real sin interrupciones.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan validación de seguimiento en tiempo real, geolocalización, tuberías de datos de sensores y flujos logísticos automatizados.",
  },
];

// Componente principal
export default function QatestingPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Pruebas de QA y Automatización</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Pruebas de QA robustas, 
            <span> escalables y seguras para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Potencie su producto con pruebas de alto rendimiento, automatización de calidad y arquitecturas de software confiables.
          </p>

          <button className="cta">Eleve su Control de Calidad</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestro top 1% de ingenieros de QA
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
            src="/qa.jfif"
            alt="Ingeniería de Calidad (QA)"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de pruebas de QA que ofrecemos
          </h2>

          <p className="lead">
            Construimos marcos de pruebas potentes diseñados para el rendimiento, la seguridad y la
            escalabilidad. Desde APIs hasta microservicios, proporcionamos servicios integrales de QA
            para startups, corporaciones y plataformas de rápido crecimiento.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Pruebas de APIs y Arquitecturas de Microservicios</h3>
              <p>
                Pruebas de alto rendimiento para APIs REST/GraphQL, microservicios, arquitecturas serverless
                y sistemas orientados a eventos.
              </p>
            </article>

            <article className="service">
              <h3>Validación y Pruebas de Bases de Datos</h3>
              <p>
                PostgreSQL, MongoDB, Redis, MySQL: indexación, integridad de datos, replicación y
                validación de tuberías de datos en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Automatización de QA en la Nube</h3>
              <p>
                Soluciones en AWS, Azure y Google Cloud utilizando Docker, Kubernetes, CI/CD y
                automatización de pruebas de infraestructura.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Seguridad y Ciberseguridad</h3>
              <p>
                OAuth2, JWT, gestión de identidad, cifrado, control de acceso y validación de
                implementaciones de cumplimiento normativo.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Integración con Terceros</h3>
              <p>
                Pasarelas de pago, APIs de mensajería, motores de analítica, CRMs, ERPs, modelos de IA
                y más.
              </p>
            </article>

            <article className="service">
              <h3>Ingeniería de Pruebas de Rendimiento y Carga</h3>
              <p>
                Pruebas unitarias, de integración, de carga y de estrés. Optimización del rendimiento para
                aplicaciones a gran escala.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global escaló a 3 millones de usuarios usando nuestra infraestructura de pruebas —
              reduciendo errores críticos en un 92% y aumentando la velocidad de respuesta en un 40%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en ingeniería de calidad</li>
              <li>Arquitecturas de pruebas nativas de la nube</li>
              <li>Enfoque de desarrollo orientado a la calidad (QA-first)</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura de QA</div>
            <div className="card">Mejores Prácticas de Automatización</div>
            <div className="card">Casos de Éxito</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician de las pruebas de QA a medida?
        </h2>

        <p className="faq-intro">
          Los servicios de QA personalizados proporcionan la confiabilidad central que impulsa los productos digitales.
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
            Desde APIs hasta automatización: potencie su producto con ingeniería de calidad 
            de clase mundial.
          </p>
          <button className="cta small">Programar una llamada</button>
        </div>
      </footer>
    </div>
  );
}