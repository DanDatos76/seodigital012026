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
           <a 
  href="https://wa.me/5491176550907?text=Incorpor%C3%A1%20al%20Top%201%25%20a%20tu%20equipo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Agendar llamada</button>
</a>

        </div>

        <div className="option-card highlight">
          <h3>Carreras en SEOdigital</h3>
          <p>
            Formá parte del futuro tecnológico en una comunidad
            dinámica con más de 4.000 expertos.
          </p>
           <a 
  href="https://wa.me/5491176550907?text=Incorpor%C3%A1%20al%20Top%201%25%20a%20tu%20equipo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Selección de talentos</button>
</a>

        </div>

        <div className="option-card">
          <h3>Prensa y medios</h3>
          <p>
            Para consultas relacionadas con prensa,
            participaciones o comunicación corporativa.
          </p>
           <a 
  href="https://wa.me/5491176550907?text=Incorpor%C3%A1%20al%20Top%201%25%20a%20tu%20equipo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Contacto de Prensa</button>
</a>

        </div>

        <div className="option-card">
          <h3>Consultas generales</h3>
          <p>
            ¿Tenés otra consulta o necesitás soporte?
            Estamos para ayudarte.
          </p>
 <a 
  href="https://wa.me/5491176550907?text=Incorpor%C3%A1%20al%20Top%201%25%20a%20tu%20equipo" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button className="cta"> Contacto</button>
</a>
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
        <h2>SEOdigital en el mundo · Nuestras oficinas</h2>

        <div className="offices-grid">
          <div className="office-card">
            <h4> Central. Buenos Aires</h4>
            <p> Cosquin 4062<br /> CABA, Argentina</p>
          </div>

          <div className="office-card">
            <h4>Tampa</h4>
            <p>Florida<br />USA</p>
          </div>

          <div className="office-card">
            <h4>Santa Mónica</h4>
            <p> California<br /> USA</p>
          </div>

          <div className="office-card">
            <h4>Madrid</h4>
            <p>Madrid<br />España</p>
          </div>

          <div className="office-card">
            <h4>Massachusetts</h4>
            <p>2400 District Avenue<br />USA</p>
          </div>

          <div className="office-card">
            <h4>Buenos Aires</h4>
            <p>
               Cosquin 4062<br />
              Ciudad Autónoma de Buenos Aires, Argentina
            </p>
          </div>

           
        </div>
      </section>

    </div>
  );
};

export default ContactHelp;
