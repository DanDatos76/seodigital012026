 // Archivo JSX: DevopsPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos y adaptados a DevOps
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen aplicaciones escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech y plataformas de IA dependen de una cultura DevOps sólida para automatizar lanzamientos y escalar infraestructuras sin errores manuales.",
  },
  {
    title: "Corporaciones que requieren integración de sistemas",
    content:
      "Las grandes organizaciones necesitan pipelines de CI/CD, infraestructura como código (IaC) y flujos de trabajo automatizados para conectar de forma eficiente sus sistemas internos.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan DevOps para acelerar el 'time-to-market', permitiendo despliegues frecuentes y seguros que validen sus ideas de negocio rápidamente.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas confían en la auto-escalabilidad y el monitoreo proactivo para manejar picos de tráfico masivos durante temporadas altas de ventas.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren una infraestructura inmutable, segura y con cumplimiento normativo automatizado, garantizando la protección de datos y la trazabilidad total.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "DevOps garantiza que las actualizaciones de contenido y las nuevas funcionalidades se desplieguen sin interrumpir la experiencia de aprendizaje de miles de usuarios.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan una orquestación robusta de contenedores y procesamiento de datos en tiempo real para gestionar flotas y sensores de forma global.",
  },
];

// Componente principal
export default function DevopsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Ingeniería DevOps</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            DevOps robusto,
            <span> escalable y seguro para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Optimice su ciclo de vida de desarrollo con automatización, infraestructura como código y entrega continua.
          </p>

          <button className="cta">Contactar con un experto DevOps</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestro top 1% de ingenieros DevOps
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
            src="/devops.png"
            alt="Ingeniería DevOps"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios DevOps que ofrecemos
          </h2>

          <p className="lead">
            Construimos ecosistemas de desarrollo potentes diseñados para la agilidad, la seguridad y la
            escalabilidad. Desde la nube hasta el despliegue final, proporcionamos ingeniería DevOps integral
            para startups, corporaciones y plataformas globales.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Integración y Entrega Continua (CI/CD)</h3>
              <p>
                Automatización total del ciclo de lanzamientos mediante pipelines robustos que garantizan 
                código probado y listo para producción en minutos.
              </p>
            </article>

            <article className="service">
              <h3>Infraestructura como Código (IaC)</h3>
              <p>
                Gestión de entornos mediante Terraform, Ansible o CloudFormation, permitiendo 
                una infraestructura replicable, versionada y libre de errores.
              </p>
            </article>

            <article className="service">
              <h3>Orquestación de Contenedores y Microservicios</h3>
              <p>
                Implementación y gestión avanzada de Kubernetes y Docker para garantizar 
                la disponibilidad y el escalado automático de sus aplicaciones.
              </p>
            </article>

            <article className="service">
              <h3>Seguridad Integrada (DevSecOps)</h3>
              <p>
                Escaneo de vulnerabilidades, gestión de secretos, cumplimiento normativo y 
                seguridad en la nube integrada desde el primer día del desarrollo.
              </p>
            </article>

            <article className="service">
              <h3>Monitoreo, Logging y Observabilidad</h3>
              <p>
                Configuración de sistemas de alerta proactiva (Prometheus, Grafana, ELK) 
                para detectar y resolver problemas antes de que afecten al usuario.
              </p>
            </article>

            <article className="service">
              <h3>Migración y Optimización Cloud</h3>
              <p>
                Estrategias de migración a AWS, Azure y Google Cloud, optimizando costos 
                y rendimiento para arquitecturas nativas de la nube.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global aceleró sus despliegues en un 500% usando nuestra infraestructura DevOps,
              reduciendo el tiempo de inactividad en un 92% y optimizando costos de nube en un 35%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en MLOps y DevSecOps</li>
              <li>Arquitecturas de nube agnósticas y escalables</li>
              <li>Enfoque de automatización radical</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Mejores Prácticas DevOps</div>
            <div className="card">Estrategias de Escalado en la Nube</div>
            <div className="card">Casos de Éxito de Automatización</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician de una cultura DevOps a medida?
        </h2>

        <p className="faq-intro">
          Los servicios DevOps personalizados proporcionan la agilidad operativa que impulsa el crecimiento digital.
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
            Desde la automatización de pipelines hasta la gestión multicloud: impulse su producto 
            con ingeniería DevOps de clase mundial.
          </p>
          <button className="cta small">Programar una llamada</button>
        </div>
      </footer>
    </div>
  );
}