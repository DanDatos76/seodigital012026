 import React from "react";
import "../styles/premios.css";

const awards = [
  {
    title: "Empresas de más rápido crecimiento en América",
    year: 2025,
  },
  {
    title: "Reconocidos por soluciones empresariales e innovación en TI",
    year: 2025,
  },
  {
    title: "Principales Desarrolladores de Software 2025",
    year: 2025,
  },
  {
    title: "Ganador Ray-Ace – Desarrollador Niche, destacado en CIO",
    year: 2024,
  }
];

const techSolutions = [
  { year: 2025, award: "Socio de Poder Inc.", description: "Reconocido como ganador del premio Power Partner" },
  { year: 2025, award: "Premios CIO 100", description: "Reconocido por excelencia empresarial e innovación en TI" },
  { year: 2025, award: "Corporate Vision", description: "Premios a Innovación Tecnológica 2025" },
  { year: 2025, award: "Clutch", description: "Principales Desarrolladores de Software" },
  { year: 2025, award: "Clutch", description: "Mejor Desarrollador Web" },
  { year: 2025, award: "Clutch", description: "Principales Desarrolladores de Software para Publicidad y Marketing" }
  // Agregar más elementos según el listado de la imagen
];

const TrophyCabinet = () => {
  return (
    <section className="trophy-cabinet">
      <div className="trophy-header">
        <h2>Bienvenido a nuestra sección de premios.</h2>
        <p>Nos enorgullece ser reconocidos por muchas organizaciones por nuestro servicio al cliente, tasa de crecimiento y cultura empresarial.</p>
        <div className="featured-awards">
          <h3>Premios y Reconocimientos Destacados</h3>
          <div className="awards-list">
            {awards.map((award, index) => (
              <div key={index} className="award-card">
                 <p>{award.title}</p>
                <span>{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tech-solutions">
        <h3>Soluciones Tecnológicas</h3>
        <table>
          <tbody>
            {techSolutions.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>{item.award}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default TrophyCabinet;
