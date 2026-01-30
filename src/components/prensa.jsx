 import React from "react";
import "../styles/pressReleases.css";

const PressReleases = () => {
  return (
    <div className="press-wrapper">

      {/* HEADER */}
      <section className="press-hero">
        <div className="hero-left">
          <span className="section-label">COMUNICADOS DE PRENSA DE BAIRESDEV</span>
          <h1>
            Grandes noticias. Movimientos audaces. <br />
            <span>Eso es BairesDev.</span>
          </h1>
          <p>
            Desde proyectos innovadores hasta análisis del sector,
            acá encontrás nuestras últimas novedades y menciones en medios.
          </p>
        </div>

        <div className="hero-right">
          <div className="featured-box">
            <h4>
              Descubrí el recorrido, el impacto y la innovación de BairesDev.
            </h4>
            <button>Descargar perfil corporativo →</button>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="press-main">

        {/* LEFT FEATURE */}
        <div className="main-left">
          <h2>
            El 65% de los desarrolladores espera que sus roles sean
            redefinidos por la IA en 2026
          </h2>
          <p>
            El informe Dev Insider de BairesDev reveló que 8 de cada 10
            desarrolladores esperan nuevas oportunidades en 2026 gracias a la
            inteligencia artificial, pero 7 de cada 10 también temen una
            disrupción tecnológica y de habilidades.
          </p>
          <span className="source">Por BairesDev</span>

          <div className="feature-image">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12"
              alt="Desarrollador e inteligencia artificial"
            />
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="main-right">
          <h3>Comunicados de prensa destacados</h3>

          <ul className="press-list">
            <li>
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d" />
              <div>
                <span>Forbes</span>
                <p>
                  BairesDev es reconocida como una de las principales empresas
                  de software en 2025
                </p>
              </div>
            </li>

            <li>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" />
              <div>
                <span>Clutch</span>
                <p>
                  BairesDev obtiene reconocimiento como líder de la industria
                </p>
              </div>
            </li>

            <li>
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2" />
              <div>
                <span>TechCrunch</span>
                <p>
                  Cómo la inteligencia artificial está transformando la
                  industria del software
                </p>
              </div>
            </li>

            <li>
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" />
              <div>
                <span>Business Insider</span>
                <p>
                  Se explica la estrategia de crecimiento global de BairesDev
                </p>
              </div>
            </li>
          </ul>
        </aside>
      </section>

      {/* GRID */}
      <section className="press-grid">
        <div className="grid-header">
          <h2>Comunicados de prensa</h2>
          <a href="#">Ver todos los comunicados →</a>
        </div>

        <div className="grid">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="card" key={i}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                alt="Comunicado de prensa"
              />
              <h4>
                BairesDev genera impacto con su nueva estrategia de expansión
                global
              </h4>
              <span>5 de junio de 2025</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PressReleases;
