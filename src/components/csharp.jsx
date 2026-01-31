 // src/pages/CSharp.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS para respetar estilos
import csharpLogo from "../assets/csharp-logo.png"; // logo de C#
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const CSharp = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE C#</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">C#</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de C# impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
            <a 
    href="https://wa.me/5491176550907" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <button className="cta-btn"> Contactar </button>
  </a>
        </div>

        <div className="hero-img">
          <img src={csharpLogo} alt="C#" />
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
        <h2>Servicios de desarrollo de C# que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Desarrollo de aplicaciones empresariales</h3>
            <p>
              Creamos aplicaciones robustas y escalables utilizando el ecosistema .NET y C# para entornos corporativos.
            </p>
          </div>
          <div className="service-item">
            <h3>Desarrollo de servicios de back-end y APIs</h3>
            <p>
              Construimos APIs RESTful y microservicios rápidos con ASP.NET Core que impulsan soluciones digitales modernas.
            </p>
          </div>
          <div className="service-item">
            <h3>Diseño de arquitecturas con C#</h3>
            <p>
              Diseñamos arquitecturas limpias y patrones de diseño sólidos que optimizan el rendimiento y la mantenibilidad.
            </p>
          </div>
          <div className="service-item">
            <h3>Cloud & Azure Development</h3>
            <p>
              Creamos soluciones en la nube modernas, responsivas y altamente eficientes integradas con C# y Microsoft Azure.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>POR QUÉ ELEGIR A SEOdigital PARA TU DESARROLLO EN C#</h2>
        <div className="why-grid">
          <div className="why-item">
            <h4> Talento nearshore, alineado con la zona horaria</h4>
            <p>
              Equipos que trabajan en tu misma zona horaria para garantizar comunicación fluida.
            </p>
          </div>
          <div className="why-item">
            <h4> Talento diverso y especializado</h4>
            <p>
              Accede a expertos C#, arquitectos .NET y especialistas en DevOps bajo un mismo equipo.
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
          <img src={teamImage} alt="Team working with C#" />
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

export default CSharp;