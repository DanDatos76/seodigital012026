import React from "react";
import '../styles/megaMenu.css'; // Reutilizamos el CSS base para megamenús

const MegaMenuAbout = () => {
  return (
    <div className="mega-menu" id="mega-menu-about">
      <div className="mega-menu-inner-content">
        
        {/* Columna Izquierda: Contenido descriptivo de "Acerca de" */}
        <div className="mega-column left-column">
          <h3>Acerca de.</h3>
          <ul>
            <li>
              <p>Desde 2009, hemos creado <br/> software para empresas de todo <br/> tipo, desde nuevas empresas hasta <br/> gigantes de Fortune 500.</p>
            </li>
          </ul>

          <div className="client-quote"> {/* Usamos client-quote para el bloque de imagen y texto */}
            <img src="../assets/logo.png" alt="Nuestro CEO en Davos" /> {/* Reemplaza con la ruta real */}
            <p>Nuestro CEO, hablando en <br/> el Foro Económico Mundial <br/> en Davos 2025. <a href="#">Leer más</a></p>
          </div>
        </div>

        {/* Columna Central 1: Dentro de BairesDev */}
        <div className="mega-column">
          <h4><span className="dot" /> DENTRO DE BAIRESDEV</h4>
          <ul>
            <li><a href="#">Nuestro equipo de liderazgo</a></li>
            <li><a href="#">Nuestro talento tecnológico</a></li>
            <li><a href="#">Comunicados de prensa</a></li>
            <li><a href="#">Contáctenos</a></li>
            {/* Espacio para el enlace "Nuestra historia" */}
            <li style={{ marginTop: '20px' }}><a href="#">Nuestra historia →</a></li>
          </ul>
        </div>

        {/* Columna Central 2: Reconocimientos */}
        <div className="mega-column">
          <h4><span className="dot" /> RECONOCIMIENTOS</h4>
          <ul>
            <li><a href="#">Premios</a></li>
            <li><a href="#">Certificaciones</a></li>
          </ul>
        </div>

        {/* Columna Derecha: Carreras */}
        <div className="mega-column">
          <h4><span className="dot" /> CARRERAS</h4>
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