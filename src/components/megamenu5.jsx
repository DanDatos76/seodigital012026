 import React from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";
import Gustavo from "../assets/gustavo.png";

const MegaMenuAbout = ({ closeMenu }) => {
  return (
    <div className="mega-menu about-mega-menu">
      <div className="mega-menu-inner">

        {/* COLUMNA IZQUIERDA */}
        <div className="mega-col about-left">
          <h3>
            Nosotros<span>.</span>
          </h3>

          <p>
            Desde 2009, desarrollamos software para empresas de todo tipo,
            desde startups hasta gigantes Fortune 500.
          </p>

          <div className="about-highlight">
            <img
              src={Gustavo}
              alt="Nuestro CEO participando del Foro Económico Mundial en Davos 2025"
            />

            <p>
              Nuestro CEO.
               
            </p>
          </div>
        </div>

        {/* COLUMNA 2 */}
        <div className="mega-col">
          <h4>
            <span className="dot" /> INSIDE  SEODIGITAL
          </h4>

          <ul>
            <li><Link to="/prensa" onClick={closeMenu}>Comunicados de prensa</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            <li><Link to="/faq" onClick={closeMenu}>Preguntas frecuentes</Link></li>
          </ul>

          
        </div>

        {/* COLUMNA 3 */}
        <div className="mega-col">
          <h4>
            <span className="dot" /> RECONOCIMIENTOS
          </h4>

          <ul>
             
            <li><Link to="/certificaciones" onClick={closeMenu}>Certificaciones</Link></li>
          </ul>
        </div>

        {/* COLUMNA 4 */}
        <div className="mega-col">
          <h4>
            <span className="dot" /> CARRERAS
          </h4>

          <ul>
            <li><Link to="/trabajar" onClick={closeMenu}>Trabajar en SEOdigital</Link></li>
            <li><Link to="/vacantes" onClick={closeMenu}>Oportunidades laborales</Link></li>
            <li><Link to="/referidos" onClick={closeMenu}>Referidos de talento</Link></li>
             
            <li><Link to="/cultura" onClick={closeMenu}>Cultura de la empresa</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenuAbout;
