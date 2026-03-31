import React, { useEffect } from "react";
import "../styles/contactHelp.css";
import { Linkedin, Facebook, Instagram } from "lucide-react";

const tallySrc =
  "https://tally.so/embed/eq2ZYJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1";

const TikTokIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const ContactHelp = () => {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";

    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }

      d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
        iframe.src = iframe.dataset.tallySrc;
      });
    };

    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
      return;
    }

    if (d.querySelector(`script[src="${w}"]`) === null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = loadEmbeds;
      s.onerror = loadEmbeds;
      d.body.appendChild(s);
    } else {
      loadEmbeds();
    }
  }, []);

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
      <section className="contact-form-embed">
        <h2>Contáctanos</h2>
        <iframe
          data-tally-src={tallySrc}
          loading="lazy"
          width="100%"
          height="405"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Contáctanos!"
        ></iframe>
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
  href="/contacto" 
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
  href="/contacto" 
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
  href="/contacto " 
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
  href="/contacto" 
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
            <a
              href="https://www.linkedin.com/company/seodigital-oficial/"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/seodigital.ar"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram size={20} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.tiktok.com/@seodigital_"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <TikTokIcon size={20} />
              <span>Tik Tok</span>
            </a>
            <a
              href="https://www.facebook.com/seodigital.ar"
              className="social-item"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook size={20} />
              <span>Facebook</span>
            </a>
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

          <div className="office-card">
            <h4>Bogotá</h4>
            <p>Bogotá D.C.<br />Colombia</p>
          </div>

          <div className="office-card">
            <h4>Medellín</h4>
            <p>Antioquia<br />Colombia</p>
          </div>

           
        </div>
      </section>

    </div>
  );
};

export default ContactHelp;
