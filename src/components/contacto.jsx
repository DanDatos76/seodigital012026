 import React from "react";
import "../styles/contactHelp.css";

const ContactHelp = () => {
  return (
    <div className="contact-wrapper">

      {/* HEADER */}
      <section className="contact-hero">
        <div className="hero-text">
          <span className="section-label">CONTACTO</span>
          <h1>
            ¿Cómo podemos <span>ayudarte</span>?
          </h1>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Equipo trabajando"
          />
        </div>
      </section>

      {/* OPTIONS */}
      <section className="contact-options">
        <div className="option-card">
          <h3>Conocé nuestros servicios</h3>
          <p>
            ¿Buscás expandir tu equipo de desarrollo de software?
            Contanos cuáles son tus necesidades.
          </p>
          <button>Agendar llamada</button>
        </div>

        <div className="option-card highlight">
          <h3>Carreras en BairesDev</h3>
          <p>
            Formá parte del futuro tecnológico en una comunidad
            dinámica con más de 4.000 expertos.
          </p>
          <button>Ver vacantes</button>
        </div>

        <div className="option-card">
          <h3>Prensa y medios</h3>
          <p>
            Para consultas relacionadas con prensa,
            participaciones o comunicación corporativa.
          </p>
          <button>Contacto de prensa</button>
        </div>

        <div className="option-card">
          <h3>Consultas generales</h3>
          <p>
            ¿Tenés otra consulta o necesitás soporte?
            Estamos para ayudarte.
          </p>
          <button>Formulario de contacto</button>
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="contact-info">
        <div className="info-block">
          <h4>Llamanos</h4>
          <p>+1 (408) 478-2739</p>
        </div>

        <div className="info-block">
          <h4>Seguinos</h4>
          <div className="socials">
            <span>in</span>
            <span>f</span>
            <span>x</span>
            <span>ig</span>
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="offices">
        <h2>BairesDev en el mundo · Nuestras oficinas</h2>

        <div className="offices-grid">
          <div className="office-card">
            <h4>San Francisco</h4>
            <p>50 California Street<br />California, USA</p>
          </div>

          <div className="office-card">
            <h4>North Carolina</h4>
            <p>77 Green Valley Road<br />USA</p>
          </div>

          <div className="office-card">
            <h4>Nueva York</h4>
            <p>135 Madison Avenue<br />New York, USA</p>
          </div>

          <div className="office-card">
            <h4>Washington D.C.</h4>
            <p>1401 H Street NW<br />Washington, USA</p>
          </div>

          <div className="office-card">
            <h4>Massachusetts</h4>
            <p>2400 District Avenue<br />USA</p>
          </div>

          <div className="office-card">
            <h4>Buenos Aires</h4>
            <p>
              Avenida Corrientes 222<br />
              Ciudad Autónoma de Buenos Aires, Argentina
            </p>
          </div>

          <div className="office-card">
            <h4>Barcelona</h4>
            <p>
              Plaça de Francesc Macià, 7<br />
              Barcelona, España
            </p>
          </div>

          <div className="office-card">
            <h4>Ciudad de México</h4>
            <p>
              Paseo de la Reforma 342<br />
              México
            </p>
          </div>

          <div className="office-card">
            <h4>São Paulo</h4>
            <p>
              Av. Paulista, 421<br />
              São Paulo, Brasil
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactHelp;
