import React from "react";
 import '../styles/megaMenu.css'; 

const MegaMenuAbout = () => {
  return (
    <div className="mega-menu about-mega-menu">
      <div className="mega-menu-inner">

        {/* COLUMNA IZQUIERDA */}
        <div className="mega-col about-left">
          <h3>Nosotros<span>.</span></h3>
          <p>
            Desde 2009, desarrollamos software para empresas de todo tipo,
            desde startups hasta gigantes Fortune 500.
          </p>

          <div className="about-highlight">
            <img src="/ceo-davos.jpg" alt="CEO en Davos" />
            <p>
              Nuestro CEO participando del Foro Económico Mundial en Davos 2025.
              <a href="#"> Leer más</a>
            </p>
          </div>
        </div>

        {/* COLUMNA 2 */}
        <div className="mega-col">
          <h4><span className="dot" /> INSIDE BAIRE SDEV</h4>
          <ul>
            <li><a href="/nuestroslideres">Nuestro equipo de liderazgo</a></li>
            <li><a href="tecnologicos">Nuestro talento tecnológico</a></li>
            <li><a href="/prensa">Comunicados de prensa</a></li>
            <li><a href="contacto">Contacto</a></li>
            <li><a href="/faq">Preguntas frecuentes</a></li>
          </ul>

          <a href="#" className="story-link">
            Nuestra historia →
          </a>
        </div>

        {/* COLUMNA 3 */}
        <div className="mega-col">
          <h4><span className="dot" /> RECONOCIMIENTOS</h4>
          <ul>
            <li><a href="#">Premios</a></li>
            <li><a href="#">Certificaciones</a></li>
          </ul>
        </div>

        {/* COLUMNA 4 */}
        <div className="mega-col">
          <h4><span className="dot" /> CARRERAS</h4>
          <ul>
            <li><a href="#">Trabajar en BairesDev</a></li>
            <li><a href="#">Oportunidades laborales</a></li>
            <li><a href="#">Referidos de talento</a></li>
            <li><a href="#">Programa Our Circles</a></li>
            <li><a href="#">Cultura de la empresa</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenuAbout;
