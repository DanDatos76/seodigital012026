 import React from "react";
import { Link } from "react-router-dom";
import "../styles/megaMenu.css";

const MegaMenu2 = () => {
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
              <Link to="/contratar-desarrolladores">
                Contratar Desarrolladores de Software
              </Link>
            </li>
            <li>
              <Link to="/talento-top-1">
                Talento del Top 1%
              </Link>
            </li>
          </ul>

          <div className="client-quote">
            <img src="/27001.png" alt="Certificación ISO 27001" />
            <h4>URBAN OUTFITTERS</h4>
            <p>
              Optimizamos el rendimiento del sitio web, lo que resultó en un aumento del 38%
              en las ganancias netas.
              <Link to="/caso-urban-outfitters"> Lee el caso de estudio.</Link>
            </p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> LENGUAJES</h4>
          <ul>
            <li><Link to="/python">Python</Link></li>
            <li><Link to="/node">Node.js</Link></li>
            <li><Link to="/django">Django</Link></li>
            <li><Link to="/kotlin">Kotlin</Link></li>
            <li><Link to="/typescript">TypeScript</Link></li>
            <li><Link to="/gcloud">Google Cloud</Link></li>
            <li><Link to="/mlearning">Machine Learning</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> INNOVACIÓN</h4>
          <ul>
            <li><Link to="/ia">Inteligencia Artificial</Link></li>
            <li><Link to="/csharp">C# (C-Sharp)</Link></li>
            <li><Link to="/go-experts">Golang</Link></li>
            <li><Link to="/reactjs">React JS</Link></li>
            <li><Link to="/net">.NET</Link></li>
            <li><Link to="/aws">AWS</Link></li>
            <li><Link to="/salesforce">Salesforce</Link></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> FRAMEWORKS</h4>
          <ul>
            <li><Link to="/angular">Angular</Link></li>
            <li><Link to="/cmasmas">C++</Link></li>
            <li><Link to="/vuejs">Vue.js</Link></li>
            <li><Link to="/php">PHP</Link></li>
            <li><Link to="/powerbi">Power BI</Link></li>
            <li><Link to="/java">Java</Link></li>
            <li><Link to="/azure">Microsoft Azure</Link></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu2;
