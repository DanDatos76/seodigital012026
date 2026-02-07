 import React from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";
import RollsRoyceLogo from "../assets/27001.png";

const MegaMenu = ({ closeMenu }) => {
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
              <Link to="/staff" onClick={closeMenu}>Staff</Link>
            </li>

            <li>
              <Link to="/equipos-dedicados" onClick={closeMenu}>Equipos Dedicados</Link>
            </li>

            <li>
              <Link to="/outsourcing" onClick={closeMenu}>Outsourcing de Software</Link>
            </li>
          </ul>

          <div className="client-quote">
            <img
              className="logo"
              src={RollsRoyceLogo}
              alt="Certificación ISO 27001"
            />
            
          </div>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> SOLUCIONES DESTACADAS
          </h4>

          <ul>
            <li><Link to="/iadev" onClick={closeMenu}>Desarrollo de IA</Link></li>
            <li><Link to="/backend" onClick={closeMenu}>Desarrollo Backend</Link></li>
            <li><Link to="/cms" onClick={closeMenu}>Desarrollo de CMS</Link></li>
            <li><Link to="/cripto" onClick={closeMenu}>Criptomonedas y Blockchain</Link></li>
            <li><Link to="/frontend" onClick={closeMenu}>Desarrollo Frontend</Link></li>
            <li><Link to="/mlearning" onClick={closeMenu}>Machine Learning</Link></li>
            <li><Link to="/qatesting" onClick={closeMenu}>Pruebas de QA y Automatización</Link></li>
            <li><Link to="/uxui" onClick={closeMenu}>Diseño UX/UI</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> ENFOQUE EMPRESARIAL
          </h4>

          <ul>
            <li><Link to="/backup" onClick={closeMenu}>Soluciones de Backup</Link></li>
            <li><Link to="/bigdata" onClick={closeMenu}>Big Data</Link></li>
            <li><Link to="/cloud" onClick={closeMenu}>Aplicaciones en la Nube</Link></li>
            <li><Link to="/cyberseguridad" onClick={closeMenu}>Ciberseguridad</Link></li>
            <li><Link to="/devops" onClick={closeMenu}>DevOps</Link></li>
            <li><Link to="/tdigital" onClick={closeMenu}>Transformación Digital</Link></li>
            <li><Link to="/erp" onClick={closeMenu}>Desarrollo de ERP</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu;
