 import React from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";
import CertificacionLogo from "../assets/27001.png";

const MegaMenu3 = () => {
  return (
    <div className="mega-menu" id="mega-menu-industries">
      <div className="mega-menu-inner-content">

        <div className="mega-column left-column">
          <h3>Industrias.</h3>

          <ul>
            <li>
              <p>
                Hemos entregado más de 1250 proyectos <br />
                en más de 130 sectores. ¿Busca experiencia en <br />
                su industria? La tenemos.
              </p>
            </li>
          </ul>

          <div className="client-quote">
            <img
              className="logo"
              src={CertificacionLogo}
              alt="Certificación ISO"
            />
            <p>
              Escalamos las plataformas de investigación clínica de IQVIA con
              React.{" "}
              <Link to="/caso-de-estudio" className="inline-link">
                Lea el caso de estudio.
              </Link>
            </p>
          </div>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> SECTOR FINANCIERO
          </h4>

          <ul>
            <li><Link to="/agricultura">Agricultura</Link></li>
            <li><Link to="/banca">Banca</Link></li>
            <li><Link to="/finanzas">Finanzas</Link></li>
            <li><Link to="/seguro">Seguros</Link></li>
            <li><Link to="/inmueble">Bienes Raíces</Link></li>
            <li><Link to="/telecomunicaciones">Telecomunicaciones</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> INFRAESTRUCTURA
          </h4>

          <ul>
            <li><Link to="/automotriz">Automotriz</Link></li>
            <li><Link to="/construccion">Construcción</Link></li>
            <li><Link to="/fintech">Fintech</Link></li>
            <li><Link to="/marketing">Tecnología de Marketing</Link></li>
            <li><Link to="/minorista">Venta al por menor (Retail)</Link></li>
            <li><Link to="/transporte">Transporte y Logística</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4>
            <span className="dot" /> SERVICIOS
          </h4>

          <ul>
            <li><Link to="/aviacion">Aviación</Link></li>
            <li><Link to="/medios">Entretenimiento y Medios</Link></li>
            <li><Link to="/sanidad">Atención Sanitaria</Link></li>
            <li><Link to="/petroleo">Petróleo y Gas</Link></li>
            <li><Link to="/suministro">Cadena de Suministro</Link></li>
            <li><Link to="/viajes">Viajes y Hospitalidad</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu3;
