 import React from "react";
import '../styles/MegaMenu.css'; 

const MegaMenu3 = () => {
  return (
    <div className="mega-menu" id="mega-menu-industries">
      <div className="mega-menu-inner-content">
        
        <div className="mega-column left-column">
          <h3>Industrias.</h3>
          <ul>
            <li>
              <p>Hemos entregado más de 1250 proyectos <br/> en más de 130 sectores. ¿Busca experiencia en <br/> su industria? La tenemos.</p>
            </li>
          </ul>

          <div className="client-quote">
            <img src="/27001.png" alt="Logo Certificación" /> 
            <p>Escalamos las plataformas de <br/> investigación clínica de IQVIA con React. <a href="#">Lea el caso de estudio.</a></p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> SECTOR FINANCIERO</h4> 
          <ul>
            <li><a href="/agricultura">Agricultura</a></li>
            <li><a href="/banca">Banca</a></li>
            <li><a href="/finanzas">Finanzas</a></li>
            <li><a href="/seguro">Seguros</a></li>
            <li><a href="/inmueble">Bienes Raíces</a></li>
            <li><a href="/telecomunicaciones">Telecomunicaciones</a></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> INFRAESTRUCTURA</h4> 
          <ul>
            <li><a href="/automotor">Automotriz</a></li>
            <li><a href="/construccion">Construcción</a></li>
            <li><a href="/fintech">Fintech</a></li>
            <li><a href="/marketing">Tecnología de Marketing</a></li>
            <li><a href="/minorista">Venta al por menor (Retail)</a></li>
            <li><a href="/transporte">Transporte y Logística</a></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> SERVICIOS</h4> 
          <ul>
            <li><a href="/aviacion">Aviación</a></li>
            <li><a href="/diversion">Entretenimiento y Medios</a></li>
            <li><a href="/sanidad">Atención Sanitaria</a></li>
            <li><a href="/petroleo">Petróleo y Gas</a></li>
            <li><a href="/suministro">Cadena de Suministro</a></li>
            <li><a href="/viajes">Viajes y Hospitalidad</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MegaMenu3;