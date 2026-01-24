import React from "react";
import "../styles/Hero.css";
import heroImg from "../assets/hero-img.jpg";




const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-left">
        <h1>
           Acelera tu Roadmap con nuestro Talento Tecnológico Nearshore Verificado.
 <br />
          <span className="highlight-orange">
             Talento Tecnológico <br />  de Primer Nivel.
          </span>
        </h1>
        <p>
           Accede a más de 4,000 ingenieros de software <br />alineados a tu zona horaria y con experiencia en más de 100 tecnologías.
        </p>
        <button className="hero-button">Programa una Llamada</button>
      </div>

      <div className="hero-right">
        <img
          src={heroImg}
          alt="Professional software team collaborating in an office"
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default Hero;
