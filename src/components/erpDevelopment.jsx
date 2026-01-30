 // Archivo JSX: ErpPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ específicos para ERP
const faqItems = [
  {
    title: "Empresas tecnológicas en crecimiento",
    content:
      "Desarrollamos soluciones ERP que escalan con su empresa, permitiendo gestionar suscripciones, facturación automatizada y recursos técnicos en una plataforma unificada.",
  },
  {
    title: "Grandes corporaciones con sistemas dispersos",
    content:
      "Ayudamos a centralizar la información de diferentes departamentos (Finanzas, RRHH, Ventas) eliminando la duplicidad de datos y mejorando la comunicación interna.",
  },
  {
    title: "Startups que buscan estructura desde el inicio",
    content:
      "Implementamos módulos esenciales de gestión que permiten a las startups operar con profesionalismo y orden, sentando las bases para una futura expansión.",
  },
  {
    title: "Retail y E-commerce: Control Total",
    content:
      "Integramos la gestión de inventarios, almacenes, puntos de venta y logística para garantizar una visibilidad total de la cadena de suministro en tiempo real.",
  },
  {
    title: "Salud y cumplimiento normativo",
    content:
      "Creamos sistemas de gestión que cumplen con regulaciones estrictas, protegiendo datos sensibles y optimizando la administración de recursos médicos y pacientes.",
  },
  {
    title: "Sector Educativo y Gestión de Recursos",
    content:
      "Sistemas ERP diseñados para administrar plantillas docentes, inscripciones, presupuestos y activos físicos de manera eficiente y transparente.",
  },
  {
    title: "Logística y optimización de la producción",
    content:
      "Software diseñado para planificar la producción (MRP), gestionar flotas y optimizar los tiempos de entrega mediante algoritmos de inteligencia de negocio.",
  },
];

// Componente principal
export default function ErpPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Desarrollo de ERP</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Desarrollo de ERP a medida
            <span> inteligente, integrado y escalable para su empresa.</span>
          </h1>

          <p className="hero-sub">
            Optimice sus procesos de negocio y unifique todas sus áreas operativas en una sola fuente de verdad.
          </p>

          <button className="cta">Potencie su Gestión Empresarial</button>

          <div className="badges">
            <div className="badge-count">
              Más de 500 empresas confían en nuestras soluciones de gestión de alto nivel
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
            src="/erp.png" // Asegúrate de tener la imagen adecuada
            alt="Desarrollo de Software ERP"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de desarrollo ERP que ofrecemos
          </h2>

          <p className="lead">
            Construimos ecosistemas empresariales potentes diseñados para maximizar la productividad, 
            mejorar la toma de decisiones y reducir costos operativos. Ofrecemos desarrollo 
            de extremo a extremo para organizaciones que buscan una ventaja competitiva real.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Arquitectura ERP Personalizada</h3>
              <p>
                Diseñamos el núcleo de su sistema adaptándolo 100% a sus flujos de trabajo únicos, 
                asegurando que el software trabaje para usted y no al revés.
              </p>
            </article>

            <article className="service">
              <h3>Módulos de Finanzas y Contabilidad</h3>
              <p>
                Automatización de facturación, gestión de activos, conciliación bancaria y 
                reportes financieros detallados con cumplimiento fiscal integrado.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Inventario y Operaciones</h3>
              <p>
                Control de stock en tiempo real, seguimiento de lotes, gestión de proveedores 
                y optimización de almacenes mediante inteligencia de datos.
              </p>
            </article>

            <article className="service">
              <h3>Gestión de Talento y RRHH</h3>
              <p>
                Administración de nóminas, control de asistencia, gestión del desempeño y 
                portales de autoservicio para empleados totalmente seguros.
              </p>
            </article>

            <article className="service">
              <h3>Dashboards de Business Intelligence</h3>
              <p>
                Visualización de datos críticos en tiempo real para facilitar la toma de decisiones 
                estratégicas basadas en evidencia y no en suposiciones.
              </p>
            </article>

            <article className="service">
              <h3>Integración y Migración de Datos</h3>
              <p>
                Conectamos su nuevo ERP con herramientas de terceros (CRMs, Pasarelas de Pago) y 
                migramos sus datos históricos desde sistemas antiguos sin riesgos.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una empresa industrial unificó 5 sedes globales con un ERP a medida — 
              reduciendo los errores de inventario en un 85% y aumentando la rentabilidad neta en un 22% en el primer año.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegir nuestro ERP?</h4>
            <ul>
              <li>Propiedad total del código (sin licencias mensuales)</li>
              <li>Escalabilidad infinita según su crecimiento</li>
              <li>Seguridad de grado bancario y encriptación</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guía de Selección de ERP</div>
            <div className="card">Beneficios del ERP a Medida</div>
            <div className="card">Casos de Éxito Empresarial</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué impacto tiene un ERP personalizado en su negocio?
        </h2>

        <p className="faq-intro">
          Un ERP a medida proporciona la columna vertebral que sostiene el crecimiento sostenible. 
          Nuestras soluciones son esenciales para:
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
            Deje atrás las hojas de cálculo y los sistemas lentos. Centralice su éxito 
            con una ingeniería empresarial de clase mundial.
          </p>
          <button className="cta small">Solicitar una Demo</button>
        </div>
      </footer>
    </div>
  );
}