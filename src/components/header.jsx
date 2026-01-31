 import React, { useState } from "react";
import { Link } from "react-router-dom";

import MegaMenu from "./megaMenu";
import MegaMenu2 from "./megaMenu2";
import MegaMenu3 from "./megaMenu3";
import MegaMenu5 from "./megamenu5";

import "../styles/header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú móvil

  // Función para abrir/cerrar el menú principal en móvil
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para manejar clicks en los items del menú (especialmente para móvil)
  const handleItemClick = (menuName) => {
    if (window.innerWidth <= 768) {
      if (activeMenu === menuName) {
        setActiveMenu(null);
      } else {
        setActiveMenu(menuName);
      }
    }
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header-container">
        
        {/* LOGO - Corregido para que la imagen se vea dentro */}
        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="logo2.png" alt="SEOdigital Logo" />
        </Link>

        {/* BOTÓN HAMBURGUESA - Ahora funcional */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* NAV */}
        <nav className="nav">
          <ul className="nav-list">
            {/* SOLUCIONES */}
            <li
              className={`nav-item ${activeMenu === "soluciones" ? "active" : ""}`}
              onMouseEnter={() => window.innerWidth > 768 && setActiveMenu("soluciones")}
              onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
              onClick={() => handleItemClick("soluciones")}
            >
              <span className="nav-link">Soluciones</span>
              {activeMenu === "soluciones" && <MegaMenu />}
            </li>

            {/* TECNOLOGÍAS */}
            <li
              className={`nav-item ${activeMenu === "tecnologias" ? "active" : ""}`}
              onMouseEnter={() => window.innerWidth > 768 && setActiveMenu("tecnologias")}
              onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
              onClick={() => handleItemClick("tecnologias")}
            >
              <span className="nav-link">Tecnologías</span>
              {activeMenu === "tecnologias" && <MegaMenu2 />}
            </li>

            {/* INDUSTRIAS */}
            <li
              className={`nav-item ${activeMenu === "industrias" ? "active" : ""}`}
              onMouseEnter={() => window.innerWidth > 768 && setActiveMenu("industrias")}
              onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
              onClick={() => handleItemClick("industrias")}
            >
              <span className="nav-link">Industrias</span>
              {activeMenu === "industrias" && <MegaMenu3 />}
            </li>

            {/* EMPRESA */}
            <li
              className={`nav-item ${activeMenu === "empresa" ? "active" : ""}`}
              onMouseEnter={() => window.innerWidth > 768 && setActiveMenu("empresa")}
              onMouseLeave={() => window.innerWidth > 768 && setActiveMenu(null)}
              onClick={() => handleItemClick("empresa")}
            >
              <span className="nav-link">Empresa</span>
              {activeMenu === "empresa" && <MegaMenu5 />}
            </li>

            {/* CONTACTO */}
            <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
            
            {/* BOTÓN SOLO MÓVIL */}
            <li className="nav-item mobile-only">
               <Link to="/agenda" className="call-button mobile-btn" onClick={() => setIsMenuOpen(false)}>
                Agendar Llamada
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA ESCRITORIO */}
        <div className="header-actions">
          <a href="tel:+5491176550907" className="call-button">
            Agendar Llamada
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;