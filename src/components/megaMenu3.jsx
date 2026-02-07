 import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";
import CertificacionLogo from "../assets/27001.png";

const MegaMenu3 = ({ closeMenu }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section, e) => {
    e.stopPropagation(); // Evitar que cierre el megamenu
    setOpenSection(openSection === section ? null : section);
  };

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
             
          </div>
        </div>

        <div className="mega-column">
          <h4 
            className="accordion-header" 
            onClick={(e) => toggleSection('financiero', e)}
          >
            <span className="dot" /> SECTOR FINANCIERO
            <span className="accordion-icon">{openSection === 'financiero' ? '−' : '+'}</span>
          </h4>

          <ul className={openSection === 'financiero' ? 'accordion-open' : 'accordion-closed'}>
            <li><Link to="/agricultura" onClick={closeMenu}>Agricultura</Link></li>
            <li><Link to="/banca" onClick={closeMenu}>Banca</Link></li>
            <li><Link to="/finanzas" onClick={closeMenu}>Finanzas</Link></li>
            <li><Link to="/seguro" onClick={closeMenu}>Seguros</Link></li>
            <li><Link to="/inmueble" onClick={closeMenu}>Bienes Raíces</Link></li>
            <li><Link to="/telecomunicaciones" onClick={closeMenu}>Telecomunicaciones</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4 
            className="accordion-header" 
            onClick={(e) => toggleSection('infraestructura', e)}
          >
            <span className="dot" /> INFRAESTRUCTURA
            <span className="accordion-icon">{openSection === 'infraestructura' ? '−' : '+'}</span>
          </h4>

          <ul className={openSection === 'infraestructura' ? 'accordion-open' : 'accordion-closed'}>
            <li><Link to="/automotriz" onClick={closeMenu}>Automotriz</Link></li>
            <li><Link to="/construccion" onClick={closeMenu}>Construcción</Link></li>
            <li><Link to="/fintech" onClick={closeMenu}>Fintech</Link></li>
            <li><Link to="/marketing" onClick={closeMenu}>Tecnología de Marketing</Link></li>
            <li><Link to="/minorista" onClick={closeMenu}>Venta al por menor (Retail)</Link></li>
            <li><Link to="/transporte" onClick={closeMenu}>Transporte y Logística</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4 
            className="accordion-header" 
            onClick={(e) => toggleSection('servicios', e)}
          >
            <span className="dot" /> SERVICIOS
            <span className="accordion-icon">{openSection === 'servicios' ? '−' : '+'}</span>
          </h4>

          <ul className={openSection === 'servicios' ? 'accordion-open' : 'accordion-closed'}>
            <li><Link to="/aviacion" onClick={closeMenu}>Aviación</Link></li>
            <li><Link to="/medios" onClick={closeMenu}>Entretenimiento y Medios</Link></li>
            <li><Link to="/sanidad" onClick={closeMenu}>Atención Sanitaria</Link></li>
            <li><Link to="/petroleo" onClick={closeMenu}>Petróleo y Gas</Link></li>
            <li><Link to="/suministro" onClick={closeMenu}>Cadena de Suministro</Link></li>
            <li><Link to="/viajes" onClick={closeMenu}>Viajes y Hospitalidad</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu3;
