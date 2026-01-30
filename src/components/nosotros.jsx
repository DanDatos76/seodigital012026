import React, { useRef } from "react";

import '../styles/Nosotros.css'; // Asegurate que este archivo exista

const Nosotros = () => {
  return (
    <section id="nosotros" className="about-section">
      <div className="about-header">
        <h2>Quiénes Somos</h2>
        <p>Bienvenido a <span className="highlight">SEOdigital</span>, donde la innovación se encuentra con la ejecución.</p>
      </div>

      <div className="about-blocks">
        <div className="block">
          <h3>🚀 Soluciones de Software Avanzadas</h3>
          <p>Desarrollamos aplicaciones escalables, seguras y de alto rendimiento para startups y empresas.</p>
        </div>
        <div className="block">
          <h3>💡 Impulsados por la Innovación</h3>
          <p>En SEOdigital resolvemos problemas complejos con tecnologías modernas y eficientes.</p>
        </div>
        <div className="block">
          <h3>🤝 Confiados por Marcas Globales</h3>
          <p>Nuestros equipos ágiles crean experiencias digitales personalizadas con impacto real.</p>
        </div>
      </div>

      <div className="mission-vision">
        <div className="mission">
          <h3>🎯 Nuestra Misión</h3>
          <p>Impulsar empresas con herramientas digitales a medida que potencien su crecimiento.</p>
        </div>
        <div className="vision">
          <h3>🌐 Nuestra Visión</h3>
          <p>Ser referentes globales en desarrollo de software por creatividad, precisión e impacto.</p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
