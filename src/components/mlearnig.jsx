// src/pages/MachineLearning.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS
import mlLogo from "../assets/mlearnin.png"; // logo de Machine Learning
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const MachineLearningPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE MACHINE LEARNING</p>
          <h1>
            Potenciá tus datos con <span className="highlight">Machine Learning</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Desarrollamos soluciones de Machine Learning que transforman
            datos en inteligencia accionable, optimizando procesos,
            predicciones y toma de decisiones estratégicas.
          </p>
          <button className="cta-btn">Acceder a Machine Learning</button>
        </div>

        <div className="hero-img">
          <img src={mlLogo} alt="Machine Learning" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/google.png" alt="Google" />
            <img src="/logos/amazon.png" alt="Amazon" />
            <img src="/logos/microsoft.png" alt="Microsoft" />
            <img src="/logos/ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de Machine Learning que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Modelos predictivos y analítica avanzada</h3>
            <p>
              Construimos modelos de predicción para anticipar
              comportamientos, tendencias y resultados de negocio.
            </p>
          </div>

          <div className="service-item">
            <h3>Procesamiento y análisis de datos</h3>
            <p>
              Preparamos, limpiamos y analizamos grandes volúmenes
              de datos para entrenar modelos eficientes.
            </p>
          </div>

          <div className="service-item">
            <h3>Automatización inteligente</h3>
            <p>
              Implementamos sistemas de automatización basados
              en Machine Learning para optimizar procesos clave.
            </p>
          </div>

          <div className="service-item">
            <h3>Implementación y escalabilidad</h3>
            <p>
              Desplegamos modelos de Machine Learning en entornos
              productivos, asegurando rendimiento y escalabilidad.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para Machine Learning?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Expertos en ciencia de datos</h4>
            <p>
              Equipos especializados en Machine Learning,
              estadística y análisis avanzado de datos.
            </p>
          </div>

          <div className="why-item">
            <h4>Soluciones alineadas a tu negocio</h4>
            <p>
              Modelos diseñados para resolver problemas
              reales y generar impacto medible.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos flexibles de contratación</h4>
            <p>
              Staff augmentation o equipos dedicados según
              las necesidades de tu proyecto.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo desarrollando Machine Learning" />
        </div>
        <div className="end-text">
          <h3>¿Listo para llevar tus datos al siguiente nivel?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default MachineLearningPage;
