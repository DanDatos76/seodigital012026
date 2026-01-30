// src/pages/Django.jsx
import React from "react";
import "../styles/Django.css";
import djangoLogo from "../assets/django-logo.png"; // coloca aquí el logo o imagen del hero
import teamImage from "../assets/django-team.jfif";  // imagen de equipo o desarrollo (opcional)

const Django = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE DJANGO</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">Django</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de Django impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo de Django</button>
        </div>

        <div className="hero-img">
          <img src={djangoLogo} alt="Django" />
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
        <h2>Servicios de desarrollo de Django que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Desarrollo de aplicaciones con Django</h3>
            <p>
              Creamos aplicaciones web escalables, seguras y de alto rendimiento usando Django.
            </p>
          </div>
          <div className="service-item">
            <h3>Desarrollo de servicios de back-end y APIs</h3>
            <p>
              Construimos APIs RESTful rápidas y confiables que impulsan soluciones digitales 
              modernas.
            </p>
          </div>
          <div className="service-item">
            <h3>Diseño de arquitecturas con Django</h3>
            <p>
              Diseñamos arquitecturas limpias que optimizan el rendimiento y la mantenibilidad.
            </p>
          </div>
          <div className="service-item">
            <h3>Django Template Design</h3>
            <p>
              Creamos interfaces profesionales con plantillas Django modernas y responsivas.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>Why Choose BairesDev for Django Development</h2>
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
              Accede a expertos Django, diseñadores UX/UI y DevOps bajo un mismo equipo.
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
          <img src={teamImage} alt="Team working with Django" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto Django?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default Django;
