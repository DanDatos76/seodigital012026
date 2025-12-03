 import React from "react";
import '../styles/MegaMenu.css'; 

const MegaMenu2 = () => {
  return (
    <div className="mega-menu" id="mega-menu-tecnologias"> {/* ASEGÚRATE DE QUE ESTE ID ESTÉ */}
      <div className="mega-menu-inner-content"> {/* ESTE YA LO TENÍAS, PERFECTO */}
        
        <div className="mega-column left-column">
          <h3>Tecnologías.</h3>
          <p>Obtenga expertos en 100+ tecnologías. Cubre cualquier pila tecnológica.</p>
          <ul>
            <li><a href="#">Contratar desarrolladores de software</a></li>
            <li><a href="#">Top 1% de Talento</a></li>
          </ul>

          <div className="client-quote">
            <h4>URBAN OUTFITTERS</h4>
            <p>Optimizamos el rendimiento del sitio web, lo que llevó a un aumento del 38% en las ganancias netos. <a href="#">Lee el estudio de caso.</a></p>
          </div>
        </div>

         
          <div className="mega-column">
                      <h4><span className="dot" /> </h4> {/* Aquí no hay un título específico como "TOP SOLUTIONS", así que lo dejamos vacío o lo ajustamos */}

            <ul>
              <li><a href="/python">Python</a></li>
              <li><a href="/node">Node js</a></li>
              <li><a href="/django">Django</a></li>
             
            </ul>
          </div>

          <div className="mega-column">
                      <h4><span className="dot" /> </h4> {/* Aquí no hay un título específico como "TOP SOLUTIONS", así que lo dejamos vacío o lo ajustamos */}

            <ul>
              <li><a href="iasection">IA</a></li>
              <li><a href="/csharp">CSharp</a></li>
              <li><a href="/go-experts">Golang</a></li>
             
            </ul>
          </div>

          <div className="mega-column">
                      <h4><span className="dot" /> </h4> {/* Aquí no hay un título específico como "TOP SOLUTIONS", así que lo dejamos vacío o lo ajustamos */}

            <ul>
              <li><a href="/angular">Angular</a></li>
              <li><a href="/cmasmas">C++</a></li>
              <li><a href="/vuejs">Vue js</a></li>
             
            </ul>
          </div>
        </div>
      
      
     
    </div>
  );
};

export default MegaMenu2;