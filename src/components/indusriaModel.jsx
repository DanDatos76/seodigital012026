 // Archivo JSX: AgriculturePage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ Traducidos
const faqItems = [
  {
    title: "Granjas y Productores Agrícolas",
    content:
      "Los productores utilizan soluciones personalizadas para la gestión de granjas, agricultura de precisión y seguimiento del ganado.",
  },
  {
    title: "Cooperativas Agrícolas",
    content:
      "Las cooperativas emplean plataformas centralizadas para agilizar la gestión de miembros, la distribución y la generación de informes.",
  },
  {
    title: "Empresas de Agronegocios",
    content:
      "Los agronegocios dependen de herramientas de automatización para gestionar la logística, la cadena de suministro, la distribución y el control de calidad.",
  },
  {
    title: "Instituciones de Investigación Agrícola",
    content:
      "Los grupos de investigación utilizan análisis de datos, teledetección y plataformas de modelado científico.",
  },
  {
    title: "Departamentos Agrícolas Gubernamentales",
    content:
      "Los departamentos requieren plataformas digitales para el monitoreo, cumplimiento, subsidios y programas de apoyo al agricultor.",
  },
  {
    title: "Servicios de Extensión Agrícola",
    content:
      "Utilizan datos de campo, aplicaciones de asesoría para agricultores, herramientas educativas y plataformas de capacitación remota.",
  },
  {
    title: "ONGs enfocadas en la Agricultura",
    content:
      "Las ONGs utilizan herramientas para gestionar el impacto de sus programas, informes, desarrollo rural y asignación de recursos.",
  },
];

// Componente principal
export default function AgriculturePage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industrias &gt; Agricultura</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Optimice sus operaciones con
            <span> soluciones de software agrícola a medida.</span>
          </h1>

          <p className="hero-sub">Obtenga experiencia especializada y aumente la eficiencia.</p>

           <a 
  href="https://wa.me/5491176550907?text=Acelere%20su%20Hoja%20de%20Ruta" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta">Acelere su Hoja de Ruta</button>
</a>


          <div className="badges">
            <div className="badge-count">
              +500 empresas confían en nuestro talento tecnológico del top 1%
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
            src="/agro.jfif"
            alt="Agricultura"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo agrícola que ofrecemos
          </h2>

          <p className="lead">
            Desarrollamos soluciones personalizadas para la industria agrícola con el fin de optimizar las 
            operaciones de cultivo, implementar técnicas de agricultura de precisión, agilizar la recopilación 
            y el análisis de datos, y aprovechar las prácticas sostenibles modernas.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Gestión Agrícola Personalizada</h3>
              <p>
                Plataformas web y móviles para la gestión de granjas: planificación de cultivos, 
                gestión de mano de obra, seguimiento de rendimiento y facturación.
              </p>
            </article>

            <article className="service">
              <h3>Agricultura de Precisión e IoT</h3>
              <p>
                Integración de sensores, procesamiento de datos de drones y tableros de control 
                para obtener información agronómica accionable.
              </p>
            </article>

            <article className="service">
              <h3>Análisis de Imágenes Satelitales y Drones</h3>
              <p>
                Flujos de procesamiento de imágenes para el monitoreo de la salud de los cultivos, 
                índices NDVI y alertas.
              </p>
            </article>

            <article className="service">
              <h3>Cadena de Suministro y Logística Agrícola</h3>
              <p>
                Inventario, seguimiento de cadena de frío y optimización de rutas para productos perecederos.
              </p>
            </article>

            <article className="service">
              <h3>Clima y Gestión de Riesgos</h3>
              <p>
                Modelos de pronóstico localizados y notificaciones automáticas de riesgos climáticos.
              </p>
            </article>

            <article className="service">
              <h3>ERP Agrícola y Gestión Financiera</h3>
              <p>
                Módulos ERP para contabilidad, adquisiciones y gestión de cumplimiento normativo.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una gran explotación redujo sus pérdidas utilizando nuestro monitoreo de precisión e 
              irrigación automatizada: 18% menos de uso de agua y 12% más de rendimiento.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>+100 proyectos personalizados desde 2009</li>
              <li>Equipo especializado en agrotech</li>
              <li>Entrega de ciclo completo</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Suscripción al boletín</div>
            <div className="card">Informes del sector</div>
            <div className="card">Historias de clientes</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué instituciones se benefician del desarrollo de software agrícola a medida?
        </h2>

        <p className="faq-intro">
          Los servicios de desarrollo de software agrícola personalizado benefician a numerosas 
          instituciones en toda la industria. Algunos ejemplos incluyen:
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

      {/* FOOTER   CTA */}
      <footer className="footer-cta">
        <div className="footer-inner">
          <p>
            Del concepto a la realidad. Cientos de soluciones de software personalizadas creadas desde 2009.
          </p>
          <a 
  href="https://wa.me/5491176550907?text=Agendar%20una%20llamada" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta small">Agendar una llamada</button>
</a>

        </div>
      </footer>
    </div>
  );
}