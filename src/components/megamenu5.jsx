 import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";
import CertificacionLogo from "../assets/27001.png";

const MegaMenuAbout = ({ closeMenu }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section, e) => {
    e.stopPropagation();
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="mega-menu" id="mega-menu-empresa">
      <div className="mega-menu-inner-content">

        <div className="mega-column left-column">
          <h3>Nosotros.</h3>

          <ul>
            <li>
              <p>
                Desde 2009, desarrollamos software para empresas de <br />
                todo tipo, desde startups hasta gigantes Fortune 500.
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
            onClick={(e) => toggleSection('inside', e)}
          >
            <span className="dot" /> INSIDE SEODIGITAL
            <span className="accordion-icon">{openSection === 'inside' ? '−' : '+'}</span>
          </h4>

          <ul className={openSection === 'inside' ? 'accordion-open' : 'accordion-closed'}>
            <li><Link to="/prensa" onClick={closeMenu}>Comunicados de prensa</Link></li>
            <li><Link to="/contacto" onClick={closeMenu}>Contacto</Link></li>
            <li><Link to="/faq" onClick={closeMenu}>Preguntas frecuentes</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4 
            className="accordion-header" 
            onClick={(e) => toggleSection('reconocimientos', e)}
          >
            <span className="dot" /> RECONOCIMIENTOS
            <span className="accordion-icon">{openSection === 'reconocimientos' ? '−' : '+'}</span>
          </h4>

          <ul className={openSection === 'reconocimientos' ? 'accordion-open' : 'accordion-closed'}>
            <li><Link to="/certificaciones" onClick={closeMenu}>Certificaciones</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4 
            className="accordion-header" 
            onClick={(e) => toggleSection('carreras', e)}
          >
            <span className="dot" /> CARRERAS
            <span className="accordion-icon">{openSection === 'carreras' ? '−' : '+'}</span>
          </h4>

          <ul className={openSection === 'carreras' ? 'accordion-open' : 'accordion-closed'}>
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
