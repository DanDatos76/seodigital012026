 // Archivo JSX: MlearningPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ traducidos y adaptados a Machine Learning
const faqItems = [
  {
    title: "Empresas tecnológicas que construyen apps de IA escalables",
    content:
      "Las empresas que desarrollan SaaS, fintech, marketplaces y plataformas de IA confían en arquitecturas avanzadas de Machine Learning para escalar de forma segura.",
  },
  {
    title: "Corporaciones que requieren automatización inteligente",
    content:
      "Las grandes organizaciones necesitan modelos predictivos, procesamiento de lenguaje natural y flujos de trabajo automatizados para optimizar sus sistemas internos.",
  },
  {
    title: "Startups que buscan implementar IA y lanzar MVPs",
    content:
      "Las startups utilizan el desarrollo de Machine Learning a medida para validar ideas rápidamente, desplegar MVPs inteligentes y garantizar la escalabilidad futura.",
  },
  {
    title: "Plataformas de E-commerce con motores de recomendación",
    content:
      "Los minoristas dependen de sistemas de recomendación personalizados, analítica predictiva de inventario y motores de búsqueda inteligentes.",
  },
  {
    title: "Sistemas de Salud y Diagnóstico Asistido",
    content:
      "Requieren soluciones de Machine Learning seguras, conformes a la normativa y de alta precisión con protección de datos sensibles y registros de auditoría.",
  },
  {
    title: "Plataformas Educativas con Aprendizaje Adaptativo",
    content:
      "La IA potencia la personalización del aprendizaje, la evaluación automatizada, analíticas de progreso y la automatización de contenidos educativos.",
  },
  {
    title: "Logística, Transporte y Mantenimiento Predictivo",
    content:
      "Las empresas necesitan seguimiento en tiempo real, optimización de rutas mediante IA, tuberías de datos de sensores (IoT) y flujos logísticos autónomos.",
  },
];

// Componente principal
export default function MlearningPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Servicios &gt; Machine Learning</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Machine Learning
            <span> robusto, escalable y seguro para aplicaciones modernas.</span>
          </h1>

          <p className="hero-sub">
            Potencie su producto con modelos predictivos de alto rendimiento, ingeniería de datos y arquitecturas inteligentes.
          </p>

          <button className="cta">Impulse su Desarrollo de Machine Learning</button>

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
            src="/ml.jfif"
            alt="Ingeniería de Machine Learning"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Servicios de Machine Learning que ofrecemos
          </h2>

          <p className="lead">
            Construimos sistemas inteligentes diseñados para el rendimiento, la seguridad y la
            escalabilidad. Desde modelos predictivos hasta visión por computadora, proporcionamos 
            desarrollo integral de ML para startups y grandes corporaciones.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Modelos Personalizados y Arquitectura de IA</h3>
              <p>
                Desarrollo de modelos predictivos, procesamiento de lenguaje natural (NLP), 
                redes neuronales y sistemas de aprendizaje por refuerzo.
              </p>
            </article>

            <article className="service">
              <h3>Ingeniería de Datos y Pipelines de ML</h3>
              <p>
                Extracción y limpieza de datos (ETL), almacenamiento optimizado, Big Data, 
                y tuberías de procesamiento de datos en tiempo real.
              </p>
            </article>

            <article className="service">
              <h3>Despliegue de ML en la Nube (MLOps)</h3>
              <p>
                Soluciones en AWS (SageMaker), Azure y Google Cloud (Vertex AI) utilizando Docker, 
                Kubernetes y automatización de despliegue continuo de modelos.
              </p>
            </article>

            <article className="service">
              <h3>Seguridad y Ética en Modelos de IA</h3>
              <p>
                Gestión de sesgos en algoritmos, cifrado de datos sensibles, control de acceso 
                y cumplimiento de normativas de privacidad de datos.
              </p>
            </article>

            <article className="service">
              <h3>Integración de IA con Servicios de Terceros</h3>
              <p>
                Conexión fluida con APIs de IA generativa, motores de analítica, CRMs, ERPs 
                y servicios de procesamiento de imágenes.
              </p>
            </article>

            <article className="service">
              <h3>Validación de Modelos e Ingeniería de Rendimiento</h3>
              <p>
                Pruebas de precisión, validación cruzada y optimización de inferencia para 
                aplicaciones de IA a gran escala.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una plataforma SaaS global escaló su motor de recomendaciones para 3 millones de usuarios,
              mejorando la precisión en un 45% y reduciendo los costos de infraestructura en un 30%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Equipos especializados en ciencia de datos e IA</li>
              <li>Arquitecturas de Machine Learning nativas de la nube</li>
              <li>Enfoque centrado en la IA (AI-first)</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Guías de Arquitectura de IA</div>
            <div className="card">Mejores Prácticas de MLOps</div>
            <div className="card">Casos de Éxito de IA</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Qué empresas se benefician del desarrollo de Machine Learning?
        </h2>

        <p className="faq-intro">
          Los servicios de Machine Learning proporcionan la inteligencia central que potencia los productos digitales modernos.
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
            De modelos predictivos a visión por computadora: potencie su producto con ingeniería 
            de IA de clase mundial.
          </p>
          <button className="cta small">Programar una llamada</button>
        </div>
      </footer>
    </div>
  );
}