 // src/components/header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

import MegaMenu from "./megaMenu";
import MegaMenu2 from "./megaMenu2";
import MegaMenu3 from "./megaMenu3";
import MegaMenu5 from "./megamenu5";

import "../styles/header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="header">
      <div className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          LOGO
        </Link>

        {/* NAV */}
        <nav className="nav">
          <ul className="nav-list">

            {/* SOLUCIONES */}
            <li
              className="nav-item"
              onMouseEnter={() => setActiveMenu("soluciones")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="nav-link">Soluciones</span>
              {activeMenu === "soluciones" && <MegaMenu />}
            </li>

            {/* TECNOLOGÍAS */}
            <li
              className="nav-item"
              onMouseEnter={() => setActiveMenu("tecnologias")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="nav-link">Tecnologías</span>
              {activeMenu === "tecnologias" && <MegaMenu2 />}
            </li>

            {/* INDUSTRIAS */}
            <li
              className="nav-item"
              onMouseEnter={() => setActiveMenu("industrias")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="nav-link">Industrias</span>
              {activeMenu === "industrias" && <MegaMenu3 />}
            </li>

            {/* EMPRESA (MEGAMENU5) */}
            <li
              className="nav-item"
              onMouseEnter={() => setActiveMenu("empresa")}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <span className="nav-link">Empresa</span>
              {activeMenu === "empresa" && <MegaMenu5 />}
            </li>

            {/* CONTACTO */}
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>

          </ul>
        </nav>

        {/* CTA */}
        <div className="header-actions">
          <Link to="/agenda" className="call-button">
            Agendar Llamada
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
