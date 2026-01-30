 // Archivo JSX: BackendPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen apps escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en arquitecturas backend avanzadas para escalar de forma segura.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan APIs, microservicios, flujos de trabajo automatizados e intercambio seguro de datos entre sus sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan el desarrollo backend a medida para validar ideas rápidamente, desplegar MVPs y garantizar la escalabilidad futura.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de sistemas de inventario, pasarelas de pago, motores de analítica y servicios backend de alta disponibilidad.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones backend de alto rendimiento, seguras y que cumplan con normativas legales, incluyendo registros de auditoría y protección de datos.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "El backend gestiona a los usuarios, la entrega de cursos, analíticas, comunicación en tiempo real y automatización de contenidos.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan seguimiento en tiempo real, geolocalización, tuberías de datos para sensores y flujos logísticos automatizados.",
  },
];

// Componente principal
export default function BackendPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Desarrollo Backend</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Desarrollo backend
            <span> robusto, escalable y seguro para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Potencia tu producto con APIs de alto rendimiento, bases de datos y arquitecturas en la nube.
          </p>

          <button className="cta">Impulsa tu Desarrollo Backend</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestro top 1% de ingenieros backend
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
            src="/backend.png"
            alt="Ingeniería Backend"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo backend que ofrecemos
          </h2>

          <p className="lead">
            Construimos sistemas backend potentes diseñados para el rendimiento, la seguridad y la
            escalabilidad. Desde APIs hasta microservicios, proporcionamos desarrollo backend integral
            para startups, corporaciones y plataformas de rápido crecimiento.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Arquitectura de APIs a Medida y Microservicios</h3>
              <p>
                APIs REST/GraphQL de alto rendimiento, microservicios, arquitecturas serverless
                y sistemas orientados a eventos.
              </p>
            </article>

            <article className="service">
              <h3>Diseño y Optimización de Bases de Datos</h3>
              <p>
                PostgreSQL, MongoDB, Redis, MySQL: indexación, replicación, sharding y
                tuberías de datos en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Desarrollo Backend en la Nube</h3>
              <p>
                Soluciones en AWS, Azure y Google Cloud utilizando Docker, Kubernetes, CI/CD y
                automatización de infraestructura.
              </p>
            </article>

            <article className="service">
              <h3>Sistemas de Autenticación y Seguridad</h3>
              <p>
                OAuth2, JWT, gestión de identidad, cifrado, control de acceso y cumplimiento
                de normativas técnicas.
              </p>
            </article>

            <article className="service">
              <h3>Integración con Servicios de Terceros</h3>
              <p>
                Pasarelas de pago, APIs de mensajería, motores de analítica, CRMs, ERPs, modelos de IA
                y más.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Backend e Ingeniería de Rendimiento</h3>
              <p>
                Pruebas unitarias, de integración, de carga y de estrés. Optimización del rendimiento para
                aplicaciones a gran escala.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de éxito</h4>
            <p>
              Cómo una plataforma SaaS global escaló a 3 millones de usuarios usando nuestro backend de microservicios,
              reduciendo el tiempo de inactividad en un 92% y aumentando la velocidad de respuesta en un 40%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en ingeniería backend</li>
              <li>Arquitecturas nativas de la nube</li>
              <li>Enfoque de desarrollo centrado en APIs</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura Backend</div>
            <div className="card">Mejores Prácticas de APIs</div>
            <div className="card">Casos de Estudio</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician del desarrollo backend a medida?
        </h2>

        <p className="faq-intro">
          Los servicios backend personalizados proporcionan la funcionalidad central que impulsa los productos digitales.
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
            Desde APIs hasta microservicios: potencia tu producto con ingeniería backend
            de clase mundial.
          </p>
          <button className="cta small">Programar una Llamada</button>
        </div>
      </footer>
    </div>
  );
}