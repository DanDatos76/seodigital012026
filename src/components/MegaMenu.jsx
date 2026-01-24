 import React from "react";
import '../styles/MegaMenu.css';
import RollsRoyceLogo from '../assets/27001.png'; // Asegúrate de tener esta imagen o ajusta la ruta

const MegaMenu = () => {
  return (
    <div className="mega-menu" id="mega-menu-soluciones">
      <div className="mega-menu-inner-content">
        
        <div className="mega-column left-column">
          <h3>Soluciones.</h3>
          <ul>
            {/* El primer elemento es un texto descriptivo */}
            <li>
              <p>Obtenga servicios de <strong>desarrollo de software</strong>, creados <br/> a la medida de sus necesidades.</p>
            </li>
            <li><a href="#">Staff  </a></li>
            <li><a href="#">Equipos Dedicados</a></li>
            <li><a href="#">Outsourcing de Software</a></li>
          </ul>

          <div className="client-quote">
            <img className="logo" src={RollsRoyceLogo} alt="Rolls-Royce" /> 
            <p>Desarrollamos una aplicación para el monitoreo de plantas nucleares en tiempo real. <a href="#">Leer caso de estudio.</a></p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> SOLUCIONES DESTACADAS</h4>
          <ul>
            <li><a href="/iadev">Desarrollo de IA</a></li>
            <li><a href="/backend">Desarrollo Backend</a></li>
            <li><a href="/cms">Desarrollo de CMS</a></li>
            <li><a href="/cripto">Criptomonedas y Blockchain</a></li>
            <li><a href="/frontend">Desarrollo Frontend</a></li>
            <li><a href="/mlearning">Machine Learning</a></li>
            <li><a href="/qatesting">Pruebas de QA y Automatización</a></li>
            <li><a href="/uxui">Diseño UX/UI</a></li>
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> ENFOQUE EMPRESARIAL</h4>
          <ul>
            <li><a href="/backup">Soluciones de Backup</a></li>
            <li><a href="/bigdata">Big Data</a></li>
            <li><a href="/cloud">Aplicaciones en la Nube</a></li>
            <li><a href="/cyberseguridad">Ciberseguridad</a></li>
            <li><a href="/devops">DevOps</a></li>
            <li><a href="/tdigital">Transformación Digital</a></li>
            <li><a href="/erp">Desarrollo de ERP</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;