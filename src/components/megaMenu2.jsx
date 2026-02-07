 import React from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";

const MegaMenu2 = ({ closeMenu }) => {
  return (
    <div className="mega-menu" id="mega-menu-tecnologias">
      <div className="mega-menu-inner-content">

        <div className="mega-column left-column">
          <h3>Tecnologías.</h3>

          <p>
            Acceda a expertos en más de 100 tecnologías.
            Cubrimos cualquier stack tecnológico.
          </p>

          <ul>
            <li>
              <Link to="/contratar-desarrolladores" onClick={closeMenu}>
                Contratar Desarrolladores de Software
              </Link>
            </li>
            <li>
              <Link to="/talento-top-1" onClick={closeMenu}>
                Talento del Top 1%
              </Link>
            </li>
          </ul>

          <div className="client-quote">
            <img src="/27001.png" alt="Certificación ISO 27001" />
             
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> LENGUAJES</h4>
          <ul>
            <li><Link to="/python" onClick={closeMenu}>Python</Link></li>
            <li><Link to="/node" onClick={closeMenu}>Node.js</Link></li>
            <li><Link to="/django" onClick={closeMenu}>Django</Link></li>
            <li><Link to="/kotlin" onClick={closeMenu}>Kotlin</Link></li>
            <li><Link to="/typescript" onClick={closeMenu}>TypeScript</Link></li>
            <li><Link to="/gcloud" onClick={closeMenu}>Google Cloud</Link></li>
            <li><Link to="/mlearning" onClick={closeMenu}>Machine Learning</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> INNOVACIÓN</h4>
          <ul>
            <li><Link to="/ia" onClick={closeMenu}>Inteligencia Artificial</Link></li>
            <li><Link to="/csharp" onClick={closeMenu}>C# (C-Sharp)</Link></li>
            <li><Link to="/go-experts" onClick={closeMenu}>Golang</Link></li>
            <li><Link to="/reactjs" onClick={closeMenu}>React JS</Link></li>
            <li><Link to="/net" onClick={closeMenu}>.NET</Link></li>
            <li><Link to="/aws" onClick={closeMenu}>AWS</Link></li>
            <li><Link to="/salesforce" onClick={closeMenu}>Salesforce</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> FRAMEWORKS</h4>
          <ul>
            <li><Link to="/angular" onClick={closeMenu}>Angular</Link></li>
            <li><Link to="/cmasmas" onClick={closeMenu}>C++</Link></li>
            <li><Link to="/vuejs" onClick={closeMenu}>Vue.js</Link></li>
            <li><Link to="/php" onClick={closeMenu}>PHP</Link></li>
            <li><Link to="/powerbi" onClick={closeMenu}>Power BI</Link></li>
            <li><Link to="/java" onClick={closeMenu}>Java</Link></li>
            <li><Link to="/azure" onClick={closeMenu}>Microsoft Azure</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu2;
