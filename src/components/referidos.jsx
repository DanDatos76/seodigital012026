import React from "react";
import "../styles/referidos.css";

export default function ReferralSEOdigital() {
  return (
    <section className="referral">

      {/* HERO REFERIDOS */}
      <div className="referral-hero">

        <div className="referral-text">
          <span className="breadcrumb">Referencias de Talento</span>

          <h1>
            ¿Conocés a alguien con pasión por innovar?
            <span> ¡Envíanos su contacto!</span>
          </h1>

          <p>
            Cualquier persona puede referir profesionales talentosos, ya seas
            parte de SEOdigital o simplemente quieras recomendar a alguien.
          </p>

          <button className="btn-primary">
            Comenzar
          </button>
        </div>

        <div className="referral-avatars">
          <img src="/logo2.png" alt="Equipo SEOdigital" />
        </div>

      </div>

      {/* BENEFICIO REFERIDOS */}
      <div className="referral-benefits">

        <div className="benefit-text">
          <p>
            Para agradecer tu ayuda en descubrir talento excepcional,
            ofrecemos un bono de hasta <strong>$1.000 USD</strong>
            por cada referencia exitosa.
          </p>

          <p>
            Juntos podemos generar nuevas oportunidades,
            conectar grandes talentos y construir un futuro más innovador.
          </p>
        </div>

        <div className="benefit-image">
          <img src="/gustavo.png" alt="Trabajo remoto" />
        </div>

      </div>

      {/* PROCESO */}
      <div className="referral-process">

        <div className="process-left">
          <h2>Nuestro proceso de referidos es simple y rápido</h2>

          <img src="/team-python.jpg" alt="Equipo" />
        </div>

        <div className="process-steps">

          <div className="step">
            <h4>Paso 1</h4>
            <h3>Realizá la conexión</h3>
            <p>
              Compartí los datos del profesional y su experiencia laboral.
            </p>
          </div>

          <div className="step">
            <h4>Paso 2</h4>
            <h3>Nosotros nos encargamos</h3>
            <p>
              Nuestro equipo evaluará el perfil y continuará el proceso.
            </p>
          </div>

          <div className="step">
            <h4>Paso 3</h4>
            <h3>Recibí tu recompensa</h3>
            <p>
              Si el candidato es contratado, recibirás tu bonificación.
            </p>

            <button className="btn-secondary">
              Enviar referencia
            </button>
          </div>

        </div>

      </div>

      {/* TESTIMONIOS */}
      <div className="referral-testimonials">

        <div className="testimonial-left">
          <h2>Oportunidades increíbles te esperan</h2>

          <p>
            Mirá por qué profesionales de todo el mundo recomiendan SEOdigital.
          </p>

          <img src="/ia.jpg" alt="Testimonio" />
        </div>

        <div className="testimonial-card">

          <p>
            "Una gran empresa para trabajar. El equipo es altamente profesional
            y brinda oportunidades reales de crecimiento."
          </p>

          <p>
            "Ambiente laboral excelente y proyectos desafiantes que permiten
            evolucionar constantemente."
          </p>

          <p>
            "Empresa increíble con visión global y fuerte cultura colaborativa."
          </p>

        </div>

      </div>

    </section>
  );
}
