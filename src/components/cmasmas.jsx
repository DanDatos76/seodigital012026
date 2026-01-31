 // src/pages/CPP.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import cppLogo from "../assets/c++.png"; // logo de C++
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const CPP = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE C++</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">C++</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de C++ impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
  <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn"> Contactar </button>
  </a>        </div>

        <div className="hero-img">
          <img src={cppLogo} alt="C++" />
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
        <h2>Servicios de desarrollo de C++ que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Sistemas de alto rendimiento</h3>
            <p>
              Desarrollamos aplicaciones críticas donde la velocidad de procesamiento y la gestión de memoria son fundamentales.
            </p>
          </div>
          <div className="service-item">
            <h3>Sistemas embebidos y Firmware</h3>
            <p>
              Construimos software de bajo nivel robusto y confiable para una amplia gama de dispositivos y hardware.
            </p>
          </div>
          <div className="service-item">
            <h3>Optimización de algoritmos</h3>
            <p>
              Diseñamos y optimizamos algoritmos complejos para maximizar el rendimiento y la eficiencia de tus sistemas.
            </p>
          </div>
          <div className="service-item">
            <h3>C++ Engine Development</h3>
            <p>
              Creamos motores de software modernos, responsivos y altamente eficientes para gráficos, juegos o simulaciones.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>Why Choose BairesDev for C++ Development</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>Nearshore, Timezone-aligned Talent</h4>
            <p>
              Equipos que trabajan en tu misma zona horaria para garantizar comunicación fluida.
            </p>
          </div>
          <div className="why-item">
            <h4>Diverse Range of Talent</h4>
            <p>
              Accede a expertos C++, arquitectos de sistemas y especialistas en QA bajo un mismo equipo.
            </p>
          </div>
          <div className="why-item">
            <h4>Flexible Engagement Models</h4>
            <p>
              Modelos de contratación adaptables a tus necesidades: staff augmentation o proyectos completos.
            </p>
          </div>
        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Team working with C++" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto C++?</h3>
 <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn">Comenzar ahora</button>
  </a>        </div>
      </section>

    </div>
  );
};

export default CPP;