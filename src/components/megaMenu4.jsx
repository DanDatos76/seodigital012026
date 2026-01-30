 import React from "react";
import "../styles/megaMenu.css";
import LogoEmpresa from "../assets/logo.png";

const MegaMenuAbout = () => {
  return (
    <div className="mega-menu" id="mega-menu-about">
      <div className="mega-menu-inner-content">

        {/* Columna Izquierda */}
        <div className="mega-column left-column">
          <h3>Acerca de.</h3>

          <ul>
            <li>
              <p>
                Desde 2009, hemos creado <br />
                software para empresas de todo <br />
                tipo, desde nuevas empresas hasta <br />
                gigantes de Fortune 500.
              </p>
            </li>
          </ul>

          <div className="client-quote">
            <img
              className="logo"
              src={LogoEmpresa}
              alt="CEO en Foro Económico Mundial"
            />
            <p>
              Nuestro CEO, hablando en <br />
              el Foro Económico Mundial <br />
              en Davos 2025. <a href="#">Leer más</a>
            </p>
          </div>
        </div>

        {/* Columna 2 */}
        <div className="mega-column">
          <h4>
            <span className="dot" /> DENTRO DE BAIRESDEV
          </h4>

          <ul>
            <li><a href="#">Nuestro equipo de liderazgo</a></li>
            <li><a href="#">Nuestro talento tecnológico</a></li>
            <li><a href="#">Comunicados de prensa</a></li>
            <li><a href="#">Contáctenos</a></li>

            <li className="history-link">
              <a href="#">Nuestra historia →</a>
            </li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="mega-column">
          <h4>
            <span className="dot" /> RECONOCIMIENTOS
          </h4>

          <ul>
            <li><a href="#">Premios</a></li>
            <li><a href="#">Certificaciones</a></li>
          </ul>
        </div>

        {/* Columna 4 */}
        <div className="mega-column">
          <h4>
            <span className="dot" /> CARRERAS
          </h4>

          <ul>
            <li><a href="#">Trabajar en BairesDev</a></li>
            <li><a href="#">Oportunidades de trabajo</a></li>
            <li><a href="#">Referencias de talento</a></li>
            <li><a href="#">Nuestro programa Circles</a></li>
            <li><a href="#">Cultura de la empresa</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenuAbout;
