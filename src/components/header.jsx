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
  const [mobileSubmenu, setMobileSubmenu] = useState(null);

  const openTimer = useRef(null);
  const closeTimer = useRef(null);

  /* ===============================
     CERRAR MEGAMENUS AL SCROLL EN DESKTOP
  =============================== */
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setActiveMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ===============================
     PREVENIR SCROLL DEL BODY EN MOBILE
  =============================== */
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileSubmenu(null);
    setActiveMenu(null);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setMobileSubmenu(null);
    setActiveMenu(null);
  };

  /* ===============================
     MOBILE SUBMENU TOGGLE
  =============================== */
  const toggleMobileSubmenu = (menuName) => {
    if (window.innerWidth <= 768) {
      setMobileSubmenu(mobileSubmenu === menuName ? null : menuName);
    }
  };

  /* ===============================
     DESKTOP HOVER
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

        <Link to="/" className="logo" onClick={closeMobileMenu}>
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
            >
              <span 
                className="nav-link"
                onClick={() => toggleMobileSubmenu("soluciones")}
              >
                Soluciones
                {window.innerWidth <= 768 && (
                  <span className="mobile-arrow">{mobileSubmenu === "soluciones" ? "−" : "+"}</span>
                )}
              </span>
              
              {/* DESKTOP */}
              {activeMenu === "soluciones" && window.innerWidth > 768 && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu closeMenu={() => setActiveMenu(null)} />
                </div>
              )}
              
              {/* MOBILE */}
              {mobileSubmenu === "soluciones" && window.innerWidth <= 768 && (
                <MegaMenu closeMenu={closeMobileMenu} />
              )}
            </li>

            {/* TECNOLOGÍAS */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("tecnologias")}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className="nav-link"
                onClick={() => toggleMobileSubmenu("tecnologias")}
              >
                Tecnologías
                {window.innerWidth <= 768 && (
                  <span className="mobile-arrow">{mobileSubmenu === "tecnologias" ? "−" : "+"}</span>
                )}
              </span>
              
              {activeMenu === "tecnologias" && window.innerWidth > 768 && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu2 closeMenu={() => setActiveMenu(null)} />
                </div>
              )}
              
              {mobileSubmenu === "tecnologias" && window.innerWidth <= 768 && (
                <MegaMenu2 closeMenu={closeMobileMenu} />
              )}
            </li>

            {/* INDUSTRIAS */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("industrias")}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className="nav-link"
                onClick={() => toggleMobileSubmenu("industrias")}
              >
                Industrias
                {window.innerWidth <= 768 && (
                  <span className="mobile-arrow">{mobileSubmenu === "industrias" ? "−" : "+"}</span>
                )}
              </span>
              
              {activeMenu === "industrias" && window.innerWidth > 768 && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu3 closeMenu={() => setActiveMenu(null)} />
                </div>
              )}
              
              {mobileSubmenu === "industrias" && window.innerWidth <= 768 && (
                <MegaMenu3 closeMenu={closeMobileMenu} />
              )}
            </li>

            {/* EMPRESA */}
            <li
              className="nav-item"
              onMouseEnter={() => handleMouseEnter("empresa")}
              onMouseLeave={handleMouseLeave}
            >
              <span 
                className="nav-link"
                onClick={() => toggleMobileSubmenu("empresa")}
              >
                Empresa
                {window.innerWidth <= 768 && (
                  <span className="mobile-arrow">{mobileSubmenu === "empresa" ? "−" : "+"}</span>
                )}
              </span>
              
              {activeMenu === "empresa" && window.innerWidth > 768 && (
                <div
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <MegaMenu5 closeMenu={() => setActiveMenu(null)} />
                </div>
              )}
              
              {mobileSubmenu === "empresa" && window.innerWidth <= 768 && (
                <MegaMenu5 closeMenu={closeMobileMenu} />
              )}
            </li>

            {/* CONTACTO */}
            <li className="nav-item">
              <Link className="nav-link" to="/contacto" onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>

            {/* MOBILE CTA */}
            <li className="nav-item mobile-only">
              <Link
                to="/agenda"
                className="call-button mobile-btn"
                onClick={closeMobileMenu}
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
