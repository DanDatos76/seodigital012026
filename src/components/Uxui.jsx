 // Archivo JSX: UxuiPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos y adaptados a UX/UI
const faqItems = [
  {
    title: "Empresas tecnológicas que crean apps escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech y plataformas de IA confían en un diseño UX/UI intuitivo para reducir la curva de aprendizaje y retener usuarios.",
  },
  {
    title: "Corporaciones que requieren modernización de sistemas",
    content:
      "Las grandes organizaciones necesitan interfaces modernas y sistemas de diseño consistentes para mejorar la productividad de sus herramientas internas.",
  },
  {
    title: "Startups que necesitan MVPs y lanzamientos rápidos",
    content:
      "Las startups utilizan el diseño centrado en el usuario para validar ideas, atraer inversores y lanzar productos que destaquen visualmente en el mercado.",
  },
  {
    title: "Plataformas de E-commerce y Retail",
    content:
      "Los minoristas dependen de flujos de compra optimizados, interfaces móviles rápidas y un diseño que maximice la tasa de conversión.",
  },
  {
    title: "Plataformas de Salud y Gobierno",
    content:
      "Requieren soluciones de diseño accesibles, claras y seguras que faciliten la navegación en procesos complejos y sensibles.",
  },
  {
    title: "Plataformas Educativas y proveedores de LMS",
    content:
      "El diseño UX/UI potencia el compromiso del estudiante mediante interfaces lúdicas, paneles de progreso claros y navegación sencilla.",
  },
  {
    title: "Sistemas de Logística, Transporte e IoT",
    content:
      "Las empresas necesitan paneles de control (dashboards) limpios para visualizar datos masivos en tiempo real y gestionar flujos logísticos sin errores.",
  },
];

// Componente principal
export default function UxuiPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Diseño UX/UI</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Diseño UX/UI intuitivo, 
            <span> centrado en el usuario y atractivo para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Potencie su producto con interfaces de alto impacto, flujos de usuario fluidos y sistemas de diseño escalables.
          </p>

          <button className="cta">Eleve el Diseño de su Producto</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestro top 1% de diseñadores UX/UI
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
            src="/uxui.jfif"
            alt="Diseño UX/UI"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de diseño UX/UI que ofrecemos
          </h2>

          <p className="lead">
            Creamos experiencias digitales memorables diseñadas para el rendimiento, la estética y la 
            facilidad de uso. Proporcionamos servicios integrales de diseño para startups, corporaciones 
            y plataformas de rápido crecimiento.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Investigación de Usuario y Estrategia UX</h3>
              <p>
                Análisis de audiencia, user personas, mapas de empatía y definición de flujos 
                estratégicos para resolver problemas reales.
              </p>
            </article>

            <article className="service">
              <h3>Diseño de Interfaces (UI) y Prototipado</h3>
              <p>
                Interfaces visualmente impactantes, prototipos interactivos en alta fidelidad y 
                microinteracciones que dan vida a su marca.
              </p>
            </article>

            <article className="service">
              <h3>Diseño Responsivo y Mobile-First</h3>
              <p>
                Experiencias optimizadas para cualquier dispositivo, asegurando que su producto 
                se vea y funcione perfecto en móviles, tablets y escritorio.
              </p>
            </article>

            <article className="service">
              <h3>Creación de Sistemas de Diseño (Design Systems)</h3>
              <p>
                Bibliotecas de componentes reutilizables, guías de estilo y documentación para 
                mantener la consistencia visual a gran escala.
              </p>
            </article>

            <article className="service">
              <h3>Pruebas de Usabilidad y Auditorías</h3>
              <p>
                Validación con usuarios reales, análisis de heurísticas y optimización de flujos 
                para eliminar puntos de fricción y mejorar la conversión.
              </p>
            </article>

            <article className="service">
              <h3>Accesibilidad y Diseño Inclusivo</h3>
              <p>
                Cumplimiento de estándares WCAG para garantizar que su aplicación sea utilizable 
                por todas las personas, independientemente de sus capacidades.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de éxito</h4>
            <p>
              Cómo rediseñamos una plataforma SaaS global para 3 millones de usuarios, 
              aumentando la retención de usuarios en un 35% y reduciendo las consultas de soporte en un 50%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en diseño de productos</li>
              <li>Enfoque basado en datos y pruebas de usuario</li>
              <li>Integración fluida con equipos de desarrollo</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Experiencia de Usuario</div>
            <div className="card">Tendencias de Diseño Moderno</div>
            <div className="card">Casos de Estudio UX/UI</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician de un diseño UX/UI a medida?
        </h2>

        <p className="faq-intro">
          El diseño de calidad es el puente entre la tecnología y el éxito comercial. 
          Es esencial para:
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
            Desde la investigación hasta el diseño final: potencie su producto con 
            experiencias de usuario de clase mundial.
          </p>
          <button className="cta small">Programar una llamada</button>
        </div>
      </footer>
    </div>
  );
}