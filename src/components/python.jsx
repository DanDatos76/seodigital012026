 // src/pages/Python.jsx
import React from "react";
import "../styles/django.css"; // Usa el mismo CSS de Django
import pythonLogo from "../assets/pyton-logo.png"; // Logo de Python
import teamImage from "../assets/team-python.jpg"; // Imagen de equipo Python

const Python = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE PYTHON</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">Python</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de Python impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo de Python</button>
        </div>

        <div className="hero-img">
          <img src={pythonLogo} alt="Python" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src=" /google.png" alt="Google" />
            <img src=" /pinterest.png" alt="Pinterest" />
            <img src=" /adobe.png" alt="Adobe" />
            <img src=" /ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de desarrollo de Python que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Desarrollo de aplicaciones con Python</h3>
            <p>
              Creamos aplicaciones web escalables, seguras y de alto rendimiento usando Python y sus frameworks.
            </p>
          </div>
          <div className="service-item">
            <h3>Desarrollo de servicios de back-end y APIs</h3>
            <p>
              Construimos APIs RESTful rápidas y confiables que impulsan soluciones digitales 
              modernas con Python.
            </p>
          </div>
          <div className="service-item">
            <h3>Diseño de arquitecturas con Python</h3>
            <p>
              Diseñamos arquitecturas limpias que optimizan el rendimiento y la mantenibilidad de tus sistemas.
            </p>
          </div>
          <div className="service-item">
            <h3>Python Scripting & Automation</h3>
            <p>
              Optimizamos procesos mediante scripts de Python modernos, responsivos y altamente eficientes.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2> ¿Por qué elegir SEOdigital para el desarrollo con Python?</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4> Talento nearshore, alineado con la zona horaria</h4>
            <p>
              Equipos que trabajan en tu misma zona horaria para garantizar comunicación fluida.
            </p>
          </div>
          <div className="why-item">
            <h4> Talento diverso y especializado"</h4>
            <p>
              Accede a expertos Python, diseñadores UX/UI y DevOps bajo un mismo equipo.
            </p>
          </div>
          <div className="why-item">
            <h4> Modalidades de trabajo flexibles</h4>
            <p>
              Modelos de contratación adaptables a tus necesidades: staff augmentation o proyectos completos.
            </p>
          </div>
        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Team working with Python" />
        </div>
         <div className="end-text">
  <h3>¿Listo para acelerar tu proyecto Python?</h3>
  <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn">Comenzar ahora</button>
  </a>
</div>

      </section>

    </div>
  );
};

export default Python;