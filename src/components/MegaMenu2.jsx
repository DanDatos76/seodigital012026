 import React from "react";
import '../styles/megaMenu.css'; 

const MegaMenu2 = () => {
  return (
    <div className="mega-menu" id="mega-menu-tecnologias">
      <div className="mega-menu-inner-content">

        <div className="mega-column left-column">
          <h3>Tecnologías.</h3>
          
          <p>Acceda a expertos en más de 100 tecnologías. Cubrimos cualquier stack tecnológico.</p>
          
          <ul>
            <li><a href="#">Contratar Desarrolladores de Software</a></li>
            <li><a href="#">Talento del Top 1%</a></li>
          </ul>

          <div className="client-quote">
            <img src="/27001.png" alt="Logo Certificación" /> 
            <h4>URBAN OUTFITTERS</h4>
            <p>Optimizamos el rendimiento del sitio web, lo que resultó en un aumento del 38% en las ganancias netas. <a href="#">Lee el caso de estudio.</a></p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> LENGUAJES</h4> 
          <ul>
            <li><a href="/python">Python</a></li>
            <li><a href="/node">Node.js</a></li>
            <li><a href="/django">Django</a></li>
            <li><a href="/kotlin">Kotlin</a></li>
            <li><a href="/typescript">TypeScript</a></li>
            <li><a href="/gcloud"> Google Cloud</a></li>
            <li><a href="/mlearning"> Machine Learning</a></li>


          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> INNOVACIÓN</h4> 
          <ul>
            <li><a href="/ia">Inteligencia Artificial</a></li>
            <li><a href="/csharp">C# (C-Sharp)</a></li>
            <li><a href="/go-experts">Golang</a></li>
            <li><a href="/reactjs"> React Js</a> </li>
            <li><a href="/net">.NET</a></li>
            <li><a href="/aws"> AWS</a></li>
            <li><a href="/salesforce"> Salesforce</a></li>

          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> FRAMEWORKS</h4> 
          <ul>
            <li><a href="/angular">Angular</a></li>
            <li><a href="/cmasmas">C++</a></li>
            <li><a href="/vuejs">Vue.js</a></li>
            <li><a href="/php">Php</a></li>
            <li><a href="/powerbi"> Power BI</a></li>
            <li><a href="/java"> Java</a></li>
            <li><a href="/azure"> Microsoft Azure</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu2;