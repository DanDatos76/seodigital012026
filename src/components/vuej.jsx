 // src/pages/VueJS.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos y etiquetas
import vueLogo from "../assets/vue.png"; // logo de Vue.js
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const VueJS = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE VUE.JS</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">Vue.js</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de Vue.js impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
          <button className="cta-btn">Acceder al desarrollo de Vue.js</button>
        </div>

        <div className="hero-img">
          <img src={vueLogo} alt="Vue.js" />
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
        <h2>Servicios de desarrollo de Vue.js que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Desarrollo de aplicaciones con Vue.js</h3>
            <p>
              Creamos interfaces de usuario interactivas, escalables y de alto rendimiento usando Vue.js 2 y 3.
            </p>
          </div>
          <div className="service-item">
            <h3>Migración a la Composition API</h3>
            <p>
              Actualizamos tus aplicaciones existentes para aprovechar las últimas ventajas de rendimiento y mantenibilidad de Vue.
            </p>
          </div>
          <div className="service-item">
            <h3>Diseño de arquitecturas con Vue.js</h3>
            <p>
              Diseñamos arquitecturas modulares basadas en componentes que optimizan la velocidad del front-end.
            </p>
          </div>
          <div className="service-item">
            <h3>Desarrollo de UI personalizado</h3>
            <p>
              Creamos componentes de interfaz modernos, responsivos y altamente eficientes integrados con Vue.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>Por qué elegir a SEOdigital para el desarrollo de Vue.js</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4>Talento Nearshore, alineado a tu zona horaria</h4>
            <p>
              Equipos que trabajan en tu misma zona horaria para garantizar una comunicación fluida.
            </p>
          </div>
          <div className="why-item">
            <h4>Amplia gama de talento</h4>
            <p>
              Accede a expertos en Vue.js, diseñadores UI/UX y especialistas en DevOps bajo un mismo equipo.
            </p>
          </div>
          <div className="why-item">
            <h4>Modelos de contratación flexibles</h4>
            <p>
              Modelos de contratación adaptables a tus necesidades: aumento de personal o proyectos completos.
            </p>
          </div>
        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo trabajando con Vue.js" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto Vue.js?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default VueJS;