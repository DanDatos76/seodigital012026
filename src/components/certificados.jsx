 import React from "react";
import "../styles/certificados.css";

const certifications = [
  
  {
    title: "IRAM-ISO 27001-2022",
    img: "/27001.png",
    text: "Nuestros procesos están alineados a la norma ISO/IEC 27001 y actualmente nos encontramos en proceso de certificación, reforzando nuestro compromiso con la seguridad, la confidencialidad y la mejora continua."
  },
  {
    title: "IRAM-ISO 9001-2015",
    img: "/9001.png",
    text: "Nuestros procesos se encuentran alineados a los requisitos de la norma ISO 9001:2015 y seguimos las recomendaciones de la guía ISO/IEC 90003 para el desarrollo de software. Actualmente, nos encontramos en proceso de certificación formal para reforzar nuestro compromiso con la calidad y la mejora continua."
  }
];

export default function CertifiedExpertise() {
  return (
    <section className="certified">
      <div className="certified-header">
        <span className="subtitle">CERTIFICACIONES Y ALIANZAS</span>
        <h2>Nuestra Experiencia Certificada<span className="dot">.</span></h2>
        <p>
          Trabajá con un socio de desarrollo de software certificado y premiado.
          Más de 1.200 proyectos completados y más de 500 clientes acompañados desde 2009.
        </p>
      </div>

      <div className="certified-grid">
        {certifications.map((item, index) => (
          <div key={index} className="cert-card">
            <div className="cert-img">
              <img src={item.img} alt={item.title} />
            </div>

            <div className="cert-content">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
