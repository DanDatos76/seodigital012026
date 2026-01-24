 // src/pages/Angular.jsx
import React from "react";
import "../styles/Django.css"; // Se mantiene el mismo CSS para respetar estilos
import angularLogo from "../assets/Angular.png"; // logo de Angular
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const Angular = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE ANGULAR</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">Angular</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de Angular impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo de Angular</button>
        </div>

        <div className="hero-img">
          <img src={angularLogo} alt="Angular" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/google.png" alt="Google" />
            <img src="/logos/pinterest.png" alt="Pinterest" />
            <img src="/logos/adobe.png" alt="Adobe" />
            <img src="/logos/ibm.png" alt="IBM" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de desarrollo de Angular que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Desarrollo de SPAs con Angular</h3>
            <p>
              Creamos aplicaciones de una sola página (SPA) dinámicas, escalables y de alto rendimiento.
            </p>
          </div>
          <div className="service-item">
            <h3>Migración y Upgrades de Angular</h3>
            <p>
              Actualizamos tus sistemas legados o versiones antiguas a las versiones más recientes de Angular.
            </p>
          </div>
          <div className="service-item">
            <h3>Arquitecturas basadas en Componentes</h3>
            <p>
              Diseñamos interfaces modulares que optimizan el rendimiento del front-end y la mantenibilidad.
            </p>
          </div>
          <div className="service-item">
            <h3>Angular Enterprise Solutions</h3>
            <p>
              Creamos plataformas corporativas modernas, responsivas y altamente eficientes con Angular.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>Why Choose BairesDev for Angular Development</h2>
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
              Accede a expertos Angular, diseñadores UX/UI y arquitectos Front-end bajo un mismo equipo.
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
          <img src={teamImage} alt="Team working with Angular" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto Angular?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default Angular;