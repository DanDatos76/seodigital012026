import React from "react";
import '../styles/MegaMenu.css';
import RollsRoyceLogo from '../assets/logo2.png'; // Asegúrate de tener esta imagen o ajusta la ruta

const MegaMenu = () => {
  return (
    <div className="mega-menu" id="mega-menu-soluciones">
      <div className="mega-menu-inner-content">
        
        <div className="mega-column left-column">
          <h3>Solutions.</h3>
          <ul>
            {/* El primer elemento es un texto descriptivo, no un enlace de navegación principal */}
            <li>
              <p>Get <strong>software development</strong> services, built <br/> around your needs.</p>
            </li>
            <li><a href="#">Staff Augmentation</a></li>
            <li><a href="#">Dedicated Teams</a></li>
            <li><a href="#">Software Outsourcing</a></li>
          </ul>

          <div className="client-quote">
            {/* Aquí puedes poner el logo de Rolls-Royce si lo tienes */}
            <img className="logo" src={RollsRoyceLogo} alt="Rolls-Royce" /> 
            <p>We built an app for real-time nuclear plant monitoring. <a href="#">Read case study.</a></p>
          </div>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> TOP SOLUTIONS</h4>
          <ul>
            <li><a href="/iadev">AI Development</a></li>
            <li><a href="/backend">Back-end Development</a></li>
            <li><a href="#">CMS Development</a></li>
            <li><a href="#">Cryptocurrency & Blockchain</a></li>
            <li><a href="#">Front-end Development</a></li>
            <li><a href="#">Machine Learning</a></li>
            <li><a href="#">QA Testing & Automation</a></li>
            <li><a href="#">UX/UI Design</a></li>
            <li><a href="#"><strong>All Solutions →</strong></a></li> {/* Asegura que el strong esté aquí */}
          </ul>
        </div>

        <div className="mega-column">
          <h4><span className="dot" /> ENTERPRISE FOCUSED</h4>
          <ul>
            <li><a href="#">Backup Solutions</a></li>
            <li><a href="#">Big Data</a></li>
            <li><a href="#">Cloud Applications</a></li>
            <li><a href="#">CRM Systems</a></li>
            <li><a href="#">Cybersecurity</a></li>
            <li><a href="#">DevOps</a></li>
            <li><a href="#">Digital Transformation</a></li>
            <li><a href="#">ERP Development</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;