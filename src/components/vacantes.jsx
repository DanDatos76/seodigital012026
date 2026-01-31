import React from "react";
import "../styles/vacantes.css";

const jobs = [
  {
    title: "Director de Ventas (Industria Salud)",
    location: "Trabajo Remoto | Nueva York, Estados Unidos"
  },
  {
    title: "Director de Ventas (Industria Salud)",
    location: "Trabajo Remoto | Nueva Jersey, Estados Unidos"
  },
  {
    title: "Director de Ventas (Servicios Financieros)",
    location: "Trabajo Remoto | Nueva York, Estados Unidos"
  },
  {
    title: "Director de Ventas (Retail)",
    location: "Trabajo Remoto | Estados Unidos"
  },
  {
    title: "Director de Ventas (Retail)",
    location: "Trabajo Remoto | San Francisco, Estados Unidos"
  },
  {
    title: "Director de Ventas (Retail)",
    location: "Trabajo Remoto | California, Estados Unidos"
  },
  {
    title: "Director de Ventas (Retail)",
    location: "Trabajo Remoto | Nueva York, Estados Unidos"
  },
  {
    title: "Director de Ventas (Petróleo y Gas)",
    location: "Trabajo Remoto | Houston, Estados Unidos"
  },
  {
    title: "Director de Ventas – Servicios IT B2B",
    location: "Trabajo Remoto | Houston, Estados Unidos"
  },
  {
    title: "Ejecutivo Senior de Ventas Externas",
    location: "Trabajo Remoto | Houston, Estados Unidos"
  },
  {
    title: "Desarrollador Senior React + TypeScript",
    location: "Trabajo Remoto | Argentina"
  },
  {
    title: "QA Automation / SDET + Java",
    location: "Trabajo Remoto | España"
  }
];

export default function OpenPositionsSEOdigital() {
  return (
    <section className="positions">

      <h2>Explorá nuestras vacantes 100% remotas</h2>

      {/* BUSCADOR */}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar empleo, empresa o palabra clave"
        />
      </div>

      {/* GRID DE EMPLEOS */}

      <div className="jobs-grid">
        {jobs.map((job, index) => (
          <div key={index} className="job-card">

            <h3>{job.title}</h3>
            <p className="job-location">{job.location}</p>

            <p className="job-description">
              En SEOdigital, estarás a cargo de liderar procesos estratégicos,
              impulsando crecimiento y desarrollo dentro de proyectos innovadores
              de alcance internacional.
            </p>

            <div className="job-footer">
              <span className="job-tag">
                Ventas / Desarrollo de Negocios
              </span>

              <button className="apply-btn">
                Postularme ahora
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
