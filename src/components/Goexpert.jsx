 // src/pages/Golang.jsx
import React from "react";
import "../styles/Django.css"; // Se mantiene el mismo CSS para respetar estilos
import golangLogo from "../assets/go.png"; // logo de Golang
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const Golang = () => {
  return (
    <div className="django-page">
      
      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE DESARROLLO DE GOLANG</p>
          <h1>
            Escala tu desarrollo de <span className="highlight">Golang</span> 
            <br />con talento nearshore.
          </h1>
          <p className="subtitle">
            Nuestros servicios de desarrollo de Golang impulsan ciclos de entrega más rápidos. 
            Por lo general, entregamos nuestras soluciones en 2 semanas, para que puedas 
            comenzar a obtener valor más rápido sin perder calidad.
          </p>
          <button className="cta-btn">Acceder a desarrollo de Golang</button>
        </div>

        <div className="hero-img">
          <img src={golangLogo} alt="Golang" />
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
        <h2>Servicios de desarrollo de Golang que brindamos</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Sistemas concurrentes y escalables</h3>
            <p>
              Aprovechamos la potencia de las goroutines para crear aplicaciones con alta capacidad de procesamiento paralelo.
            </p>
          </div>
          <div className="service-item">
            <h3>Desarrollo de microservicios y APIs</h3>
            <p>
              Construimos servicios backend ultrarrápidos y ligeros que impulsan soluciones digitales modernas y eficientes.
            </p>
          </div>
          <div className="service-item">
            <h3>Diseño de arquitecturas cloud-native</h3>
            <p>
              Diseñamos arquitecturas optimizadas para la nube que maximizan el rendimiento y la mantenibilidad de tus sistemas.
            </p>
          </div>
          <div className="service-item">
            <h3>High-Performance Tooling</h3>
            <p>
              Creamos herramientas y sistemas de infraestructura modernos, responsivos y altamente eficientes usando Go.
            </p>
          </div>
        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegir Seodigital para el desarrollo de Golang?</h2>
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
              Accede a expertos Golang, ingenieros de sistemas y especialistas en DevOps bajo un mismo equipo.
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
          <img src={teamImage} alt="Team working with Golang" />
        </div>
        <div className="end-text">
          <h3>¿Listo para acelerar tu proyecto Golang?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default Golang;