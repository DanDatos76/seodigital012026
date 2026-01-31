import React from "react";
import "../styles/tecnologicos.css";

const VettingProcess = () => {
  return (
    <div className="vetting-wrapper">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <span className="badge">EL TOP 1%</span>
          <h1>
            Evaluamos a más de <span>1.5M</span> de personas por año para
            ofrecerte únicamente al{" "}
            <span className="highlight">1% superior</span> del talento tecnológico.
          </h1>
          <p>
            Nuestros clientes suelen consultarnos sobre nuestro proceso de
            selección. Estos son los pasos que seguimos para garantizar que el
            servicio que brindamos y el software que desarrollamos sean de la
            más alta calidad.
          </p>
 
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Reunión de equipo de trabajo"
          />
        </div>
      </section>

      {/* LOGOS */}
      <div className="logos">
        <span>Microsoft</span>
        <span>Google</span>
        <span>Airbnb</span>
        <span>Shopify</span>
        <span>Netflix</span>
      </div>

      {/* PROCESS */}
      <section className="process">
        <h2>Tu éxito comienza con nuestro proceso de evaluación.</h2>

        <div className="process-content">
          <div className="funnel">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className={`funnel-step step-${n}`}>
                {n}
              </div>
            ))}
            <div className="funnel-final">Top 1%</div>
          </div>

          <div className="process-result">
            <h3>¡Listo!</h3>
            <p>
              El 1% superior del talento tecnológico es contratado y continúa
              entregando resultados de alto nivel.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="benefits">
        <div className="benefits-image">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
            alt="Desarrolladores trabajando"
          />
        </div>

        <div className="benefits-text">
          <h2>Beneficios de trabajar con nosotros</h2>
          <p className="subtitle">
            Lo que nos diferencia y potencia el crecimiento de tu negocio.
          </p>

          <ul>
            <li>
              <strong>Talento tecnológico del Top 1%</strong>
              <span>
                Solo los profesionales más destacados superan nuestro proceso
                de selección.
              </span>
            </li>
            <li>
              <strong>Dominio del idioma inglés</strong>
              <span>
                Comunicación fluida y efectiva con equipos internacionales.
              </span>
            </li>
            <li>
              <strong>Alineados a tu zona horaria</strong>
              <span>
                Colaboración en tiempo real sin fricciones.
              </span>
            </li>
            <li>
              <strong>Más de 10 años de experiencia</strong>
              <span>
                Trayectoria comprobada en múltiples industrias y tecnologías.
              </span>
            </li>
            <li>
              <strong>Cobertura de todas las tecnologías</strong>
              <span>
                Frontend, backend, mobile, cloud y más.
              </span>
            </li>
            <li>
              <strong>Socio premiado</strong>
              <span>
                Reconocidos y confiables para empresas líderes a nivel global.
              </span>
            </li>
          </ul>

  <a 
  href="https://wa.me/5491176550907?text=Incorpor%C3%A1%20al%20Top%201%25%20a%20tu%20equipo" 
  target="_blank" 
  rel="noopener noreferrer"
>
 <a 
  href="https://wa.me/5491176550907?text=Incorpor%C3%A1%20al%20Top%201%25%20a%20tu%20equipo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Agendar una llamada</button>
</a>
</a>        </div>
      </section>

    </div>
  );
};

export default VettingProcess;
