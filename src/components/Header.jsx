 import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import MegaMenu from "./MegaMenu";
import MegaMenu2 from "./MegaMenu2";
import MegaMenu3 from "./MegaMenu3";
import "../styles/Header.css";
import logo from "../assets/logo2.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [pinnedMenu, setPinnedMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
    setPinnedMenu(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen) {
        if (!e.target.closest(".menu-toggle") && !e.target.closest(".nav")) {
          setIsMobileMenuOpen(false);
          setActiveMenu(null);
          setPinnedMenu(null);
        }
      } else {
        if (!e.target.closest(".nav-item") && !e.target.closest(".mega-menu")) {
          setPinnedMenu(null);
          setActiveMenu(null);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Traducción de los nombres de los menús
  const menusWithMegaMenu = ["Servicios", "Tecnología", "Industrias"];
  const directLinks = ["Nuestro Trabajo", "Blog"];

  const handleMouseEnter = (menu) => {
    if (!isMobileMenuOpen && !pinnedMenu) setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (!isMobileMenuOpen && !pinnedMenu) setActiveMenu(null);
  };

  const handleClick = (menu) => {
    if (isMobileMenuOpen) {
      if (menusWithMegaMenu.includes(menu)) {
        if (pinnedMenu === menu) {
          setPinnedMenu(null);
          setActiveMenu(null);
        } else {
          setPinnedMenu(menu);
          setActiveMenu(menu);
        }
      } else {
        setActiveMenu(null);
        setPinnedMenu(null);
        setIsMobileMenuOpen(false);
      }
    } else {
      if (!menusWithMegaMenu.includes(menu)) {
        setActiveMenu(null);
        setPinnedMenu(null);
        return;
      }

      if (pinnedMenu === menu) {
        setPinnedMenu(null);
        setActiveMenu(null);
      } else {
        setPinnedMenu(menu);
        setActiveMenu(menu);
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMenu(null);
    setPinnedMenu(null);
  };

  return (
    <header className={`header ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="header-container">

        {/* Logo con link a inicio */}
        <Link to="/" onClick={() => { setActiveMenu(null); setPinnedMenu(null); setIsMobileMenuOpen(false); }}>
          <img src={logo} alt="Logo de la Empresa" className="logo" />
        </Link>

        {/* BOTÓN DE HAMBURGUESA */}
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>

        <nav className="nav">
          <ul className="nav-list">
            {menusWithMegaMenu.map((menu) => (
              <li
                key={menu}
                className={`nav-item ${
                  (activeMenu === menu || pinnedMenu === menu) ? "active" : ""
                }`}
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(menu)}
              >
                <a href="#" className="nav-link">{menu}</a>

                {(activeMenu === menu || pinnedMenu === menu) && (
                  <>
                    {/* Ajuste de lógica para que coincida con los nombres traducidos */}
                    {menu === "Industrias" ? (
                      <MegaMenu3 />
                    ) : menu === "Tecnología" ? (
                      <MegaMenu2 />
                    ) : (
                      <MegaMenu />
                    )}
                  </>
                )}
              </li>
            ))}

            {/* Enlace Nosotros (About) */}
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => { setActiveMenu(null); setPinnedMenu(null); setIsMobileMenuOpen(false); }}>Nosotros</Link>
            </li>

            {/* Enlaces directos traducidos */}
            {directLinks.map((linkName) => (
              <li key={linkName} className="nav-item">
                <Link
                  to={`/${linkName.toLowerCase().replace(' ', '-')}`}
                  className="nav-link"
                  onClick={() => { setActiveMenu(null); setPinnedMenu(null); setIsMobileMenuOpen(false); }}
                >
                  {linkName}
                </Link>
              </li>
            ))}

            {/* Botón visible solo en menú móvil */}
            {isMobileMenuOpen && (
              <li className="nav-item mobile-call-button-wrapper">
                <button
                  className="call-button mobile-only-button"
                  onClick={() => {
                    window.open("https://wa.me/5491128937499", "_blank");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Nuestro WhatsApp
                </button>
              </li>
            )}
          </ul>
        </nav>

        <div className="header-actions">
          <button
            className="call-button"
            onClick={() => {
              window.open("https://wa.me/5491128937499", "_blank");
              setIsMobileMenuOpen(false);
            }}
          >
            Nuestro WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;