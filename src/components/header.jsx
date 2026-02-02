 import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import MegaMenu from "./megaMenu";
import MegaMenu2 from "./megaMenu2";
import MegaMenu3 from "./megaMenu3";
import MegaMenu5 from "./megamenu5";

import "../styles/header.css";

const HOVER_OPEN_DELAY = 150;
const HOVER_CLOSE_DELAY = 200;

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  /* ===============================
     CERRAR TODO AL SCROLL
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      setActiveMenu(null);
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  /* ===============================
     MOBILE CLICK
  =============================== */
  const handleItemClick = (menuName) => {
    if (window.innerWidth <= 768) {
      setActiveMenu(activeMenu === menuName ? null : menuName);
    }
  };

  /* ===============================
     DESKTOP HOVER (con delay)
  =============================== */
  const handleMouseEnter = (menuName) => {
    if (window.innerWidth <= 768) return;

    clearTimeout(closeTimer.current);
    openTimer.current = setTimeout(() => {
      setActiveMenu(menuName);
    }, HOVER_OPEN_DELAY);
  };

  const handleMouseLeave = () => {
    if (window.innerWidth <= 768) return;

    clearTimeout(openTimer.current);
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, HOVER_CLOSE_DELAY);
  };

  /* ===============================
     MEGAMENU (no cerrar al entrar)
  =============================== */
  const handleMegaEnter = () => {
    clearTimeout(closeTimer.current);
  };

  const handleMegaLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, HOVER_CLOSE_DELAY);
  };

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="header-container">

        <Link to="/" className="logo" onClick={() => setIsMenuOpen(false)}>
          <img src="logo2.png" alt="SEOdigital Logo" />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>

        <nav className="nav">
          <ul className="nav-list">

            {/* SOLUCIONES */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("soluciones")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick("soluciones")}
            >
              <span className="nav-link">Soluciones</span>
              {activeMenu === "soluciones" && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu />
                </div>
              )}
            </li>

            {/* TECNOLOGÍAS */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("tecnologias")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick("tecnologias")}
            >
              <span className="nav-link">Tecnologías</span>
              {activeMenu === "tecnologias" && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu2 />
                </div>
              )}
            </li>

            {/* INDUSTRIAS */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("industrias")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick("industrias")}
            >
              <span className="nav-link">Industrias</span>
              {activeMenu === "industrias" && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu3 />
                </div>
              )}
            </li>

            {/* EMPRESA */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("empresa")}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleItemClick("empresa")}
            >
              <span className="nav-link">Empresa</span>
              {activeMenu === "empresa" && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu5 />
                </div>
              )}
            </li>

            {/* CONTACTO */}
            <li className="nav-item" onClick={() => setIsMenuOpen(false)}>
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>

            {/* MOBILE CTA */}
            <li className="nav-item mobile-only">
              <Link
                to="/agenda"
                className="call-button mobile-btn"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar Llamada
              </Link>
            </li>

          </ul>
        </nav>

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
