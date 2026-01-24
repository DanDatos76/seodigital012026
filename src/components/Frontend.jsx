 // Archivo JSX: FrontendPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen aplicaciones escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en arquitecturas frontend avanzadas para escalar de forma segura.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan interfaces modernas, micro-frontends y flujos de trabajo automatizados para conectar sus sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan el desarrollo frontend a medida para validar ideas rápidamente, desplegar MVPs y garantizar una experiencia de usuario superior.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de interfaces rápidas, pasarelas de pago optimizadas, motores de búsqueda y una alta disponibilidad en dispositivos móviles.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones frontend seguras, accesibles y de alto rendimiento que cumplan con normativas de protección de datos y usabilidad.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "El frontend potencia la gestión de usuarios, la entrega de cursos, paneles de analítica y la comunicación en tiempo real.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan paneles de control en tiempo real, geolocalización, visualización de datos de sensores y flujos logísticos optimizados.",
  },
];

// Componente principal
export default function FrontendPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Desarrollo Frontend</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Desarrollo Frontend
            <span> robusto, escalable y seguro para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Potencie su producto con interfaces de alto rendimiento, optimización UX y arquitecturas modernas.
          </p>

          <button className="cta">Impulse su Desarrollo Frontend</button>

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
            src="/frontend.jfif"
            alt="Ingeniería Frontend"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo frontend que ofrecemos
          </h2>

          <p className="lead">
            Construimos interfaces potentes diseñadas para el rendimiento, la accesibilidad y la
            escalabilidad. Proporcionamos desarrollo frontend integral para startups, corporaciones y 
            plataformas de rápido crecimiento.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Arquitectura Frontend y Aplicaciones SPA/PWA</h3>
              <p>
                Aplicaciones de una sola página (SPA) de alto rendimiento, aplicaciones web progresivas (PWA) 
                y arquitecturas de Micro-frontends.
              </p>
            </article>

            <article className="service">
              <h3>Optimización de Rendimiento y Core Web Vitals</h3>
              <p>
                Optimización de velocidad de carga, renderizado eficiente, SEO técnico y 
                cumplimiento de los estándares de Core Web Vitals de Google.
              </p>
            </article>

            <article className="service">
              <h3>Desarrollo Frontend Cloud-Native</h3>
              <p>
                Soluciones integradas con AWS, Azure y Google Cloud utilizando arquitecturas modernas 
                y despliegue continuo (CI/CD).
              </p>
            </article>

            <article className="service">
              <h3>Seguridad Frontend y Autenticación</h3>
              <p>
                Implementación de OAuth2, JWT, protección contra XSS/CSRF, gestión segura de 
                identidad y cumplimiento de normativas.
              </p>
            </article>

            <article className="service">
              <h3>Integración con APIs y Servicios Externos</h3>
              <p>
                Conexión fluida con backends REST/GraphQL, pasarelas de pago, CRMs, ERPs 
                y modelos de IA de terceros.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Frontend e Ingeniería de QA</h3>
              <p>
                Pruebas unitarias, de integración, E2E (de extremo a extremo) y optimización 
                de la experiencia de usuario para aplicaciones a gran escala.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global escaló a 3 millones de usuarios usando nuestra arquitectura frontend,
              reduciendo el tiempo de carga en un 60% y aumentando la tasa de conversión en un 25%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en ingeniería frontend</li>
              <li>Arquitecturas de diseño escalables (Design Systems)</li>
              <li>Enfoque de desarrollo centrado en el usuario</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura Frontend</div>
            <div className="card">Mejores Prácticas de UI/UX</div>
            <div className="card">Casos de Estudio</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician del desarrollo frontend a medida?
        </h2>

        <p className="faq-intro">
          Los servicios frontend personalizados proporcionan la experiencia visual y funcional que impulsa los productos digitales.
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
            Desde interfaces modernas hasta optimización UX: potencie su producto con ingeniería 
            frontend de clase mundial.
          </p>
          <button className="cta small">Programar una llamada</button>
        </div>
      </footer>
    </div>
  );
}