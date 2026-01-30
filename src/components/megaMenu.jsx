 import React from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";
import RollsRoyceLogo from "../assets/27001.png";

const MegaMenu = () => {
  return (
    <div className="mega-menu" id="mega-menu-soluciones">
      <div className="mega-menu-inner-content">

        <div className="mega-column left-column">
          <h3>Soluciones.</h3>

          <ul>
            <li>
              <p>
                Obtenga servicios de <strong>desarrollo de software</strong>,
                creados <br /> a la medida de sus necesidades.
              </p>
            </li>

            <li>
              <Link to="/staff">Staff</Link>
            </li>

            <li>
              <Link to="/equipos-dedicados">Equipos Dedicados</Link>
            </li>

            <li>
              <Link to="/outsourcing">Outsourcing de Software</Link>
            </li>
          </ul>

          <div className="client-quote">
            <img className="logo" src={RollsRoyceLogo} alt="Certificación ISO 27001" />
            <p>
              Desarrollamos una aplicación para el monitoreo de plantas nucleares en tiempo real.
              <Link to="/caso-estudio"> Leer caso de estudio.</Link>
            </p>
          </div>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> SOLUCIONES DESTACADAS
          </h4>

          <ul>
            <li><Link to="/iadev">Desarrollo de IA</Link></li>
            <li><Link to="/backend">Desarrollo Backend</Link></li>
            <li><Link to="/cms">Desarrollo de CMS</Link></li>
            <li><Link to="/cripto">Criptomonedas y Blockchain</Link></li>
            <li><Link to="/frontend">Desarrollo Frontend</Link></li>
            <li><Link to="/mlearning">Machine Learning</Link></li>
            <li><Link to="/qatesting">Pruebas de QA y Automatización</Link></li>
            <li><Link to="/uxui">Diseño UX/UI</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> ENFOQUE EMPRESARIAL
          </h4>

          <ul>
            <li><Link to="/backup">Soluciones de Backup</Link></li>
            <li><Link to="/bigdata">Big Data</Link></li>
            <li><Link to="/cloud">Aplicaciones en la Nube</Link></li>
            <li><Link to="/cyberseguridad">Ciberseguridad</Link></li>
            <li><Link to="/devops">DevOps</Link></li>
            <li><Link to="/tdigital">Transformación Digital</Link></li>
            <li><Link to="/erp">Desarrollo de ERP</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
