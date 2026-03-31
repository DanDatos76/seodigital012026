import React from "react";
import "../styles/trabajar.css";

export default function CareersSEOdigital() {
  return (
    <section className="careers">

      {/* HERO */}
      <div className="careers-hero">

        <div className="careers-text">
          <span className="breadcrumb">Carreras</span>

          <h1>
            Innová desde <span>Cualquier Lugar</span>.
          </h1>

          <p>
            Trabajá con empresas reconocidas a nivel mundial, startups en
            crecimiento y organizaciones que marcan tendencia.
            Somos una compañía con modalidad remota que conecta talento con
            oportunidades globales.
          </p>

          <button className="btn-primary">
            Explorar oportunidades laborales
          </button>
        </div>

        <div className="careers-map">
          <img src="/map1.webp" alt="Mapa del mundo" />
        </div>

      </div>

      {/* WHY SEOdigital */}
      <div className="why">

        <div className="why-left">
          <h2>¿Por qué SEOdigital?</h2>

          <p>
            En SEOdigital no solo obtenés un trabajo —
            redefinimos lo que es posible.
          </p>

          <img
            src="/homeoffice.jpg"
            alt="Trabajo remoto"
            className="why-image"
          />
        </div>

        <div className="why-right">

          <div className="why-grid">

            <div className="why-item">
              <h4>🌍 Trabajo desde cualquier lugar</h4>
              <p>
                Trabajá desde tu casa, una cafetería o cualquier lugar del mundo.
              </p>
            </div>

            <div className="why-item">
              <h4>🤝 Red global diversa</h4>
              <p>
                Conectate con profesionales de distintos países y culturas.
              </p>
            </div>

            <div className="why-item">
              <h4>🚀 Crecé junto a los mejores</h4>
              <p>
                Sumate a equipos de alto rendimiento en proyectos innovadores.
              </p>
            </div>

            <div className="why-item">
              <h4>📚 Capacitación continua</h4>
              <p>
                Accedé a programas de formación y desarrollo profesional.
              </p>
            </div>

            <div className="why-item">
              <h4>⏰ Horarios flexibles</h4>
              <p>
                Organizá tu jornada laboral de acuerdo a tu estilo de vida.
              </p>
            </div>

            <div className="why-item">
              <h4>📈 Posibilidades de crecimiento</h4>
              <p>
                Desarrollá tu carrera dentro de un entorno dinámico y en expansión.
              </p>
            </div>

            <div className="why-item">
              <h4>🌎 Proyectos globales innovadores</h4>
              <p>
                Participá en soluciones tecnológicas con impacto internacional.
              </p>
            </div>

            <div className="why-item">
              <h4>🎉 Beneficios y bienestar</h4>
              <p>
                Promovemos equilibrio entre vida personal y laboral.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
