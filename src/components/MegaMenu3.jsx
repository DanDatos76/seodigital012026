import React from "react";
import '../styles/MegaMenu.css'; // Puedes usar el mismo CSS base para megamenús

const MegaMenu3 = () => {
  return (
    <div className="mega-menu" id="mega-menu-industries">
      <div className="mega-menu-inner-content">
        
        <div className="mega-column left-column">
          <h3>Industrias.</h3>
          <ul>
            <li>
              <p>Hemos entregado 1250+ proyectos <br/> en 130+ sectores. ¿Experiencia en <br/> su industria? Lo tenemos.</p>
            </li>
            {/* Si hubiera enlaces directos en esta columna, irían aquí */}
          </ul>

          <div className="client-quote">
            <img src="/path/to/iqvia-logo.png" alt="IQVIA Logo" /> {/* Reemplaza con la ruta real de tu logo */}
            <p>Escalamos las plataformas de <br/> investigación clínica de IQVIA con React. <a href="#">Lee el estudio de caso.</a></p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> </h4> {/* Aquí no hay un título específico como "TOP SOLUTIONS", así que lo dejamos vacío o lo ajustamos */}
          <ul>
            <li><a href="/agricultura">Agricultura</a></li>
            <li><a href="/banca">Banca</a></li>
            <li><a href="/finanzas">Finanzas</a></li>
            <li><a href="/seguro">Seguro</a></li>
            <li><a href="/inmueble">Bien inmueble</a></li>
            <li><a href="/telecomunicaciones">Telecomunicaciones</a></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> </h4> {/* Vacío o ajustado */}
          <ul>
            <li><a href="/automotor">Automotor</a></li>
            <li><a href="/construccion">Construcción</a></li>
            <li><a href="/fintech">Fintech</a></li>
            <li><a href="/marketing">Tecnología de marketing</a></li>
            <li><a href="/minorista">Venta al por menor</a></li>
            <li><a href="/transporte">Transporte y logística</a></li>
            {/* Si hubiera más enlaces en esta columna, irían aquí */}
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> </h4> {/* Vacío o ajustado */}
          <ul>
            <li><a href="/aviacion">Aviación</a></li>
            <li><a href="/diversion">Diversión</a></li>
            <li><a href="/sanidad">Atención sanitaria</a></li>
            <li><a href="/petroleo">Petróleo y gas</a></li>
            <li><a href="/suministro">Cadena de suministro</a></li>
            <li><a href="/viajes">Viajes y hospitalidad</a></li>
            {/* Si hubiera más enlaces en esta columna, irían aquí */}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu3;