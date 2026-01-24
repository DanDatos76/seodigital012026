 // Archivo JSX: BackupPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen aplicaciones escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en arquitecturas avanzadas de respaldo para escalar de forma segura.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan APIs, microservicios y flujos de trabajo automatizados para garantizar el intercambio seguro y el respaldo de datos entre sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan el desarrollo a medida para validar ideas rápidamente, desplegar MVPs y asegurar que la integridad de los datos esté garantizada desde el primer día.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de sistemas de inventario, pasarelas de pago y motores de analítica con servicios de respaldo de alta disponibilidad.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones de respaldo seguras, conformes a la normativa y de alto rendimiento con pistas de auditoría y protección de datos sensibles.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "Los sistemas de respaldo gestionan la seguridad de los usuarios, la entrega de cursos, las analíticas y la preservación de contenidos educativos.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan seguimiento en tiempo real, geolocalización y tuberías de datos de sensores con planes de recuperación ante desastres automatizados.",
  },
];

// Componente principal
export default function BackupPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Soluciones de Respaldo</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Soluciones de Respaldo
            <span> robustas, escalables y seguras para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Desarrollo de Soluciones de Backup y recuperación de datos.
          </p>

          <button className="cta">Impulsa tus Soluciones de Respaldo</button>

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
            src="/backup.jfif"
            alt="Ingeniería de Respaldo de Datos"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo de respaldo que ofrecemos
          </h2>

          <p className="lead">
            Construimos sistemas potentes diseñados para el rendimiento, la seguridad y la
            escalabilidad. Desde APIs hasta microservicios, proporcionamos desarrollo integral
            para startups, corporaciones y plataformas de rápido crecimiento.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Arquitectura de APIs y Microservicios a Medida</h3>
              <p>
                APIs REST/GraphQL de alto rendimiento, microservicios, arquitecturas serverless
                y sistemas orientados a eventos para gestión de datos.
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
              <h3>Desarrollo Backend en la Nube</h3>
              <p>
                Soluciones en AWS, Azure y Google Cloud utilizando Docker, Kubernetes, CI/CD y
                automatización de infraestructura de respaldo.
              </p>
            </article>

            <article className="service">
              <h3>Sistemas de Autenticación y Seguridad</h3>
              <p>
                OAuth2, JWT, gestión de identidad, cifrado de datos en reposo y tránsito, y cumplimiento
                normativo.
              </p>
            </article>

            <article className="service">
              <h3>Integración con Servicios de Terceros</h3>
              <p>
                Pasarelas de pago, APIs de mensajería, motores de analítica, CRMs, ERPs, modelos de IA
                y almacenamiento en la nube.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Backend e Ingeniería de Rendimiento</h3>
              <p>
                Pruebas unitarias, de integración, de carga y de estrés. Optimización de recuperación
                para aplicaciones a gran escala.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global escaló a 3 millones de usuarios usando nuestro sistema de respaldo —
              reduciendo el tiempo de inactividad en un 92% y aumentando la seguridad de datos en un 40%.
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
              <li>Enfoque de desarrollo centrado en la disponibilidad</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura de Respaldo</div>
            <div className="card">Mejores Prácticas de Backup</div>
            <div className="card">Casos de Estudio</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician de las soluciones de respaldo a medida?
        </h2>

        <p className="faq-intro">
          Los servicios de respaldo personalizados proporcionan la seguridad central que protege los productos digitales.
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
            Desde APIs hasta microservicios: potencia tu producto con ingeniería de respaldo
            de clase mundial.
          </p>
          <button className="cta small">Programar una Llamada</button>
        </div>
      </footer>
    </div>
  );
}