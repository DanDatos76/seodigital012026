 import React, { useEffect } from 'react';
import AOS from 'aos';
import '../styles/about.css';


// Asegurate de crear este archivo con los estilos del HTML

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* ABOUT US */}
      <section className="about-wrapper">
        <div className="about-hero">
           <h2>Seodigital</h2>
          <p>
            Un socio en desarrollo de software para marcas audaces y empresas impulsadas por el futuro.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-block">
            <h3>200+</h3>
            <p>Proyectos entregados</p>
          </div>
          <div className="stat-block">
            <h3>15+</h3>
            <p>Países atendidos</p>
          </div>
          <div className="stat-block">
            <h3>98%</h3>
            <p>Satisfacción del cliente</p>
          </div>
          <div className="stat-block">
            <h3>10 años</h3>
            <p>Creando impacto</p>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-item">
            <h4>🔍 Mentalidad orientada a la innovación</h4>
            <p>
              Exploramos continuamente nuevas tecnologías para ofrecer productos que no solo sean modernos,
              sino también preparados para el futuro.
            </p>
          </div>
          <div className="about-item">
            <h4>💼 Entrega de nivel empresarial</h4>
            <p>
              Desde la idea hasta la ejecución, aplicamos arquitecturas sólidas,
              seguridad robusta e infraestructura escalable.
            </p>
          </div>
          <div className="about-item">
            <h4>⚙️ Ejecución ágil</h4>
            <p>
              Nuestros equipos trabajan con prácticas ágiles, garantizando entregas rápidas,
              transparencia y flexibilidad.
            </p>
          </div>
          <div className="about-item">
            <h4>🌎 Red global de talento</h4>
            <p>
              Incorporamos ingenieros y diseñadores de élite de todo el mundo
              para aportar perspectivas diversas a tu producto.
            </p>
          </div>
        </div>

        <div className="about-culture">
          <h3>Nuestra cultura. Nuestro código.</h3>
          <p>
            En SEOdigital no solo escribimos código — construimos confianza,
            fomentamos la creatividad y trabajamos con propósito.
            <br />Creemos en las personas, la pasión y el rendimiento.
          </p>
        </div>

        <div className="about-cta">
          <h4>¿Listo para construir algo extraordinario?</h4>
          <button>Hablemos →</button>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-choose" data-aos="fade-up" data-aos-duration="1000">
        <div className="why-container">
          <h3>¿Por qué elegir SEOdigital?</h3>
          <div className="why-points">
            <div className="why-item">
              <h4>⚡ Velocidad y rendimiento</h4>
              <p>
                Optimizamos para escalar y rendir al máximo utilizando frameworks modernos
                como React, Node.js y Next.js.
              </p>
            </div>
            <div className="why-item">
              <h4>🔐 Seguridad como prioridad</h4>
              <p>
                Construimos con cifrado, cumplimiento normativo y privacidad de datos
                desde el primer día.
              </p>
            </div>
            <div className="why-item">
              <h4>📈 Crecimiento comprobado</h4>
              <p>
                Hemos ayudado a startups a convertirse en unicornios
                y a grandes empresas a escalar de forma inteligente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section">
        <div className="faq-container">
          <h3>Preguntas frecuentes</h3>

          <div className="faq-item">
            <h4>¿En qué industrias trabajan?</h4>
            <p>
              Trabajamos con fintech, healthtech, ecommerce, SaaS,
              logística y muchas más.
            </p>
          </div>

          <div className="faq-item">
            <h4>¿Pueden integrarse con nuestro stack tecnológico actual?</h4>
            <p>
              Sí. Nos especializamos en integraciones fluidas con herramientas existentes,
              APIs y sistemas legacy.
            </p>
          </div>

          <div className="faq-item">
            <h4>¿Ofrecen soporte continuo?</h4>
            <p>
              Absolutamente. Ofrecemos mantenimiento, soporte y optimización
              luego del lanzamiento.
            </p>
          </div>

          <div className="faq-item">
            <h4>¿Dónde está ubicado su equipo?</h4>
            <p>
              Somos una empresa remote-first con talento distribuido en LATAM,
              Norteamérica y Europa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
