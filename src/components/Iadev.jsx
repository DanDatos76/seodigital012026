// Archivo JSX: BackendPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ
const faqItems = [
  {
    title: "  ¿Qué tecnologías utilizan principalmente para el desarrollo de IA?",
    content:
      "  Nos especializamos en Python y Node.js para el núcleo de IA, utilizando frameworks como TensorFlow, PyTorch y LangChain para la integración de modelos de lenguaje y aprendizaje profundo.",
  },
  {
    title: "  ¿Pueden integrarse con un equipo de desarrollo ya existente?",
    content:
      "  Absolutamente. Trabajamos bajo metodologías ágiles que nos permiten colaborar directamente con su equipo interno o gestionar el proyecto de forma independiente según sus necesidades.",
  },
  {
    title: "  ¿Cómo garantizan la seguridad de los datos en aplicaciones de IA?",
    content:
      "  Implementamos protocolos de cifrado de extremo a extremo, cumplimos con normativas como GDPR o HIPAA y realizamos auditorías de seguridad periódicas en cada capa del backend.",
  },
  {
    title: "  ¿Cuánto tiempo toma desarrollar un MVP funcional?",
    content:
      "  Dependiendo de la complejidad, un MVP sólido suele estar listo entre 6 a 10 semanas, enfocándonos en las características críticas para su lanzamiento.",
  },
  {
    title: " ¿Ofrecen soporte después del lanzamiento?",
    content:
      "  Sí, ofrecemos planes de mantenimiento preventivo, monitoreo 24/7 y escalado proactivo para asegurar que la plataforma crezca junto con su base de usuarios.",
  },
   
];

// Componente principal
export default function IadevPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Services &gt; Backend Development</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
             Desarrollo de IA
            <span>  Inteligencia Artificial avanzada para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
             Potencia tu producto con APIs de alto rendimiento, bases de datos inteligentes y arquitecturas en la nube diseñadas para escalar.
          </p>

          <button className="cta"> Impulsa tu Desarrollo Backend </button>

          <div className="badges">
            <div className="badge-count">
               +500 empresas confían en nuestro top 1% de ingenieros expertos.
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
            src="/ia.jfif"
            alt="Backend Engineering"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
             Servicios de desarrollo backend

          </h2>

          <p className="lead">
             Construimos sistemas potentes enfocados en el desempeño, la seguridad y la escalabilidad.
              Ofrecemos desarrollo backend de extremo a extremo, desde APIs hasta microservicios,
               para startups, corporaciones y plataformas en expansión.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3> Arquitectura de APIs y Microservicios</h3>
              <p>
                  Sistemas backend potentes diseñados para el rendimiento, seguridad y escalabilidad. Desde APIs 
                  REST/GraphQL hasta microservicios distribuidos.
              </p>
            </article>

            <article className="service">
              <h3> Diseño y Optimización de Bases de Datos</h3>
              <p>
                 Experiencia en PostgreSQL, MongoDB, Redis y MySQL. Implementamos replicación, sharding y tuberías de datos
                  en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3> Desarrollo Backend en la Nube</h3>
              <p>
                 Soluciones en AWS, Azure y Google Cloud utilizando Docker,
                  Kubernetes, CI/CD y automatización de infraestructura.
              </p>
            </article>

            <article className="service">
              <h3> Sistemas de Autenticación y Seguridad</h3>
              <p>
                 Implementación de OAuth2, JWT, gestión de identidad y cumplimiento de
                  normativas de protección de datos.
              </p>
            </article>

            <article className="service">
              <h3> Integración con Servicios de Terceros</h3>
              <p>
                 Conectamos tu ecosistema con pasarelas de pago, mensajería, analítica,
                  CRMs y modelos de IA externos.
              </p>
            </article>

            <article className="service">
              <h3> Pruebas y Rendimiento (QA)</h3>
              <p>
                 Pruebas unitarias, de integración y de carga para garantizar estabilidad. Optimización de latencia para aplicaciones a gran escala.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4> Caso de éxito</h4>
            <p>
                Cómo una plataforma SaaS global escaló a 50 millones de usuarios usando nuestro backend de 
                microservicios — reduciendo el tiempo de inactividad en un 90% y aumentando la velocidad 
                de respuesta en un 60%.

            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipo de ingeniería backend especializado.</li>
              <li>Arquitectos nativos de la nube.</li>
              <li>Enfoque de desarrollo centrado en APIs.</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card"> Guías de Arquitectura Backend</div>
            <div className="card"> Mejores Prácticas de APIs</div>
            <div className="card"> Casos de Estudio</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
            ¿Qué industrias se benefician?
        </h2>

        <p className="faq-intro">
           Los servicios backend personalizados proporcionan la funcionalidad principal que impulsa
            los productos digitales. Son esenciales para:
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
             Desde API hasta microservicios: potencie su producto con ingeniería de backend de primer nivel.
          </p>
          <button className="cta small">Programe una llamada</button>
        </div>
      </footer>
    </div>
  );
}
