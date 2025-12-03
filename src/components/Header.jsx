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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // NUEVO ESTADO PARA EL MENÚ MÓVIL
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
    // Cierra el menú móvil al cambiar de ruta
    setIsMobileMenuOpen(false);
    // También asegúrate de cerrar cualquier mega-menú activo
    setActiveMenu(null);
    setPinnedMenu(null);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      // Modificamos la lógica para que funcione correctamente con el menú móvil
      if (isMobileMenuOpen) {
        // Si el menú móvil está abierto, el clic fuera debe cerrar TODO el menú
        // Verifica si el clic fue fuera del botón de hamburguesa y fuera del panel del menú
        if (!e.target.closest(".menu-toggle") && !e.target.closest(".nav")) {
          setIsMobileMenuOpen(false);
          setActiveMenu(null); // Cierra también cualquier mega-menú interno
          setPinnedMenu(null);
        }
      } else {
        // Lógica original para desktop: cerrar mega menús si se hace clic fuera de nav-item o mega-menu
        if (!e.target.closest(".nav-item") && !e.target.closest(".mega-menu")) {
          setPinnedMenu(null);
          setActiveMenu(null);
        }
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]); // Dependencia clave: re-evalúa si el menú móvil está abierto/cerrado

  const menusWithMegaMenu = ["Solutions", "Technology", "Industries"];
  const directLinks = ["Our Work", "Blog"];

  const handleMouseEnter = (menu) => {
    // Solo activamos hover si NO estamos en móvil
    if (!isMobileMenuOpen && !pinnedMenu) setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    // Solo desactivamos hover si NO estamos en móvil
    if (!isMobileMenuOpen && !pinnedMenu) setActiveMenu(null);
  };

  const handleClick = (menu) => {
    if (isMobileMenuOpen) { // Si el menú móvil está abierto, la lógica de clic es diferente
      if (menusWithMegaMenu.includes(menu)) {
        // En móvil, hacemos clic para abrir/cerrar los mega-menús como acordeón
        if (pinnedMenu === menu) {
          setPinnedMenu(null);
          setActiveMenu(null);
        } else {
          setPinnedMenu(menu);
          setActiveMenu(menu);
        }
      } else {
        // Si es un enlace directo en móvil, cerramos todo el menú
        setActiveMenu(null);
        setPinnedMenu(null);
        setIsMobileMenuOpen(false);
      }
    } else { // Lógica para desktop
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

  // Función para alternar el menú de hamburguesa
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Asegura que los mega-menús se cierren al abrir/cerrar el menú principal
    setActiveMenu(null);
    setPinnedMenu(null);
  };

  return (
    // Agrega la clase 'menu-open' al header cuando el menú móvil está abierto
    <header className={`header ${isMobileMenuOpen ? "menu-open" : ""}`}>
      <div className="header-container">

        {/* Logo con link a inicio */}
        <Link to="/" onClick={() => { setActiveMenu(null); setPinnedMenu(null); setIsMobileMenuOpen(false); }}>
          <img src={logo} alt="BairesDev Logo" className="logo" />
        </Link>

        {/* BOTÓN DE HAMBURGUESA - NUEVO ELEMENTO */}
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'} {/* Cambia el icono según el estado */}
        </button>

        <nav className="nav">
          <ul className="nav-list">
            {menusWithMegaMenu.map((menu) => (
              <li
                key={menu}
                className={`nav-item ${
                  (activeMenu === menu || pinnedMenu === menu) ? "active" : ""
                }`}
                // handleMouseEnter y handleMouseLeave solo funcionarán si !isMobileMenuOpen (ver arriba)
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClick(menu)}
              >
                <a href="#" className="nav-link">{menu}</a>

                {(activeMenu === menu || pinnedMenu === menu) && (
                  <>
                    {menu === "Industries" ? (
                      <MegaMenu3 />
                    ) : menu === "Technology" ? (
                      <MegaMenu2 />
                    ) : (
                      <MegaMenu />
                    )}
                  </>
                )}
              </li>
            ))}

            {/* Enlace About */}
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={() => { setActiveMenu(null); setPinnedMenu(null); setIsMobileMenuOpen(false); }}>About</Link>
            </li>

            {/* Enlaces directos */}
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
            {/* Botón de llamada que SOLO aparece en el menú móvil cuando está abierto */}
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
          {/* Este botón ES el botón de escritorio y se OCULTARÁ en móvil */}
          <button
                        className="call-button mobile-only-button"
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