 import React from "react";
import "../styles/trabajo.css";

const clientes = [
  "Abbott", "Abbvie", "Abra", "Grainger", "Acumen",
  "Arlo", "AP", "Autodesk", "Avigilon", "Azlo",
  "BBVA", "Blackboard", "Chime", "CROPTAK",
  "eBay", "EY", "Forcepoint", "Gennev",
  "Globalstar", "Google"
];

const ClientShowcase = () => {
  return (
    <section className="client-showcase">
      {/* ENCABEZADO */}
      <div className="client-header">
        <span className="client-badge">Nuestros Clientes</span>
        <h2>
          Más de 10 años <br />
          <span>superando expectativas.</span>
        </h2>
        <p>
          Más de 500 clientes activos con una relación promedio de más de 3 años.
          Y una tasa de retención del 96%.
        </p>
      </div>

      {/* IMÁGENES DESTACADAS */}
      <div className="featured-cards">
        <div className="featured-card google">Google</div>
        <div className="featured-card automotive">Automotriz</div>
        <div className="featured-card urban">Urban Outfitters</div>
      </div>

      {/* FILTRO */}
      <div className="client-filter">
        <select>
          <option>Todas las industrias</option>
          <option>Fintech</option>
          <option>Salud</option>
          <option>Retail</option>
          <option>SaaS</option>
        </select>
      </div>

      {/* GRILLA DE CLIENTES */}
      <div className="client-grid">
        {clientes.map((cliente, index) => (
          <div key={index} className="client-card">
            <span>{cliente}</span>
            <small>Ver caso →</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientShowcase;
