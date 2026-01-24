 // src/pages/NodeJS.jsx
import React from "react";
import "../styles/Django.css"; // Se mantiene el mismo CSS por las etiquetas
import nodeLogo from "../assets/node.svg"; // logo de Node.js
import teamImage from "../assets/team-python.jpg"; // imagen de equipo

const NodeJS = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE NODE.JS</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">Node.js</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de Node.js impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo de Node.js</button>
        </div>

        <div className="hero-img">
          <img src={nodeLogo} alt="Node.js" />
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
        <h2>Servicios de desarrollo de Node.js que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Desarrollo de aplicaciones con Node.js</h3>
            <p>
              Creamos aplicaciones web escalables, seguras y de alto rendimiento usando Node.js.
            </p>
          </div>
          <div className="service-item">
            <h3>Desarrollo de back-end y Microservicios</h3>
            <p>
              Construimos arquitecturas de microservicios rápidas y confiables que impulsan soluciones digitales 
              modernas.
            </p>
          </div>
          <div className="service-item">
            <h3>Diseño de arquitecturas con Node.js</h3>
            <p>
              Diseñamos arquitecturas orientadas a eventos que optimizan el rendimiento y la mantenibilidad.
            </p>
          </div>
          <div className="service-item">
            <h3>Real-time App Development</h3>
            <p>
              Creamos aplicaciones en tiempo real modernas, responsivas y altamente eficientes con Node.js.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>Why Choose BairesDev for Node.js Development</h2>
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
              Accede a expertos Node.js, diseñadores UX/UI y DevOps bajo un mismo equipo.
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
          <img src={teamImage} alt="Team working with Node.js" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto Node.js?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default NodeJS;