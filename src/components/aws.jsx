// src/pages/AWS.jsx
import React from "react";
import "../styles/django.css"; // Se mantiene el mismo CSS
import awsLogo from "../assets/aws.png"; // logo de AWS
import teamImage from "../assets/team-python.jpg"; // imagen de equipo/desarrollo

const AWSPage = () => {
  return (
    <div className="django-page">

      {/* ====== HERO ====== */}
      <section className="django-hero">
        <div className="hero-text">
          <p className="breadcrumb">SERVICIOS DE AMAZON WEB SERVICES</p>
          <h1>
            Infraestructura cloud robusta con <span className="highlight">AWS</span>
            <br />y talento nearshore especializado.
          </h1>
          <p className="subtitle">
            Ayudamos a las empresas a diseñar, implementar y escalar soluciones
            cloud seguras, flexibles y de alto rendimiento sobre Amazon Web Services.
          </p>
          <button className="cta-btn">Acceder a servicios AWS</button>
        </div>

        <div className="hero-img">
          <img src={awsLogo} alt="Amazon Web Services" />
        </div>
      </section>

      {/* ====== LOGOS ====== */}
      <section className="trusted-logos">
        <div className="logo-bar">
          <p>500+ empresas confían en nosotros:</p>
          <div className="logos">
            <img src="/logos/amazon.png" alt="Amazon" />
            <img src="/logos/netflix.png" alt="Netflix" />
            <img src="/logos/airbnb.png" alt="Airbnb" />
            <img src="/logos/spotify.png" alt="Spotify" />
          </div>
        </div>
      </section>

      {/* ====== SERVICIOS ====== */}
      <section className="django-services">
        <h2>Servicios de AWS que brindamos</h2>
        <div className="services-grid">

          <div className="service-item">
            <h3>Arquitectura y migración a AWS</h3>
            <p>
              Diseñamos arquitecturas cloud escalables y migramos aplicaciones,
              servidores y bases de datos a AWS de forma segura.
            </p>
          </div>

          <div className="service-item">
            <h3>DevOps e infraestructura como código</h3>
            <p>
              Automatizamos despliegues con CI/CD, Terraform, CloudFormation
              y contenedores en ECS y EKS.
            </p>
          </div>

          <div className="service-item">
            <h3>Servicios de datos y analítica</h3>
            <p>
              Implementamos soluciones con RDS, DynamoDB, Redshift y servicios
              de procesamiento y análisis de datos.
            </p>
          </div>

          <div className="service-item">
            <h3>Seguridad y optimización de costos</h3>
            <p>
              Aplicamos buenas prácticas de seguridad, control de accesos y
              optimización de costos para entornos AWS.
            </p>
          </div>

        </div>
      </section>

      {/* ====== WHY CHOOSE ====== */}
      <section className="why-django">
        <h2>¿Por qué elegirnos para AWS?</h2>
        <div className="why-grid">

          <div className="why-item">
            <h4>Ingenieros AWS alineados a tu zona horaria</h4>
            <p>
              Equipos nearshore que trabajan en tu mismo horario,
              asegurando comunicación directa y tiempos de respuesta rápidos.
            </p>
          </div>

          <div className="why-item">
            <h4>Experiencia en proyectos cloud empresariales</h4>
            <p>
              Especialistas con amplia experiencia en soluciones AWS
              para empresas de diferentes industrias.
            </p>
          </div>

          <div className="why-item">
            <h4>Modelos de servicio flexibles</h4>
            <p>
              Desde soporte cloud puntual hasta equipos dedicados
              según la escala y objetivos de tu negocio.
            </p>
          </div>

        </div>
      </section>

      {/* ====== IMAGEN FINAL / CTA ====== */}
      <section className="django-end">
        <div className="end-img">
          <img src={teamImage} alt="Equipo trabajando con AWS" />
        </div>
        <div className="end-text">
          <h3>¿Listo para llevar tu infraestructura a AWS?</h3>
          <button className="cta-btn">Comenzar ahora</button>
        </div>
      </section>

    </div>
  );
};

export default AWSPage;
