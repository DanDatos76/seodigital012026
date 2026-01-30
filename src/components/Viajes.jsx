// Archivo JSX: TravelHospitalityPage.jsx
import React, { useState } from 'react';
import '../styles/industria.css';

const badgeItems = ['Booking', 'Airbnb', 'TripAdvisor', 'Expedia'];

const faqItems = [
  {
    title: "Hoteles y Cadenas Hoteleras",
    content:
      "Desarrollamos sistemas para gestión hotelera, reservas, check-in digital y experiencia del huésped.",
  },
  {
    title: "Agencias de Viajes y Tour Operadores",
    content:
      "Creamos plataformas para venta de paquetes, gestión de itinerarios y atención al cliente.",
  },
  {
    title: "Plataformas de Reservas Online",
    content:
      "Implementamos soluciones escalables para reservas en tiempo real, pagos y gestión de disponibilidad.",
  },
  {
    title: "Aerolíneas y Transporte Turístico",
    content:
      "Desarrollamos sistemas para gestión de pasajeros, servicios y experiencias de viaje.",
  },
  {
    title: "Experiencias Turísticas y Eventos",
    content:
      "Creamos plataformas para venta de experiencias, eventos y actividades personalizadas.",
  },
  {
    title: "Organismos de Turismo y Destinos",
    content:
      "Implementamos sistemas para promoción digital, análisis de visitantes y gestión de destinos.",
  },
];

export default function TravelHospitalityPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">
        Inicio &gt; Industrias &gt; Viajes y Hospitalidad
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Tecnología que transforma la
            <span> experiencia de viaje y hospitalidad.</span>
          </h1>

          <p className="hero-sub">
            Soluciones digitales para conectar personas, destinos y experiencias.
          </p>

          <button className="cta">Impulsar mi Negocio Turístico</button>

          <div className="badges">
            <div className="badge-count">
              +500 empresas confían en nuestro expertise en turismo digital
            </div>

            <ul className="badge-list">
              {badgeItems.map((b) => (
                <li key={b} className="badge-item">{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="viajes.jpg"
            alt="Industria de Viajes y Hospitalidad"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Desarrollo de software para viajes y hospitalidad
          </h2>

          <p className="lead">
            Acompañamos a empresas turísticas en su transformación digital,
            mejorando la experiencia del cliente y la eficiencia operativa.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Plataformas de Reservas</h3>
              <p>
                Sistemas de reservas online, gestión de disponibilidad
                y pagos integrados.
              </p>
            </article>

            <article className="service">
              <h3>Gestión Hotelera</h3>
              <p>
                Soluciones para PMS, check-in digital,
                housekeeping y administración.
              </p>
            </article>

            <article className="service">
              <h3>Experiencia del Cliente</h3>
              <p>
                Herramientas digitales para personalización,
                fidelización y atención omnicanal.
              </p>
            </article>

            <article className="service">
              <h3>Canales de Venta y Distribución</h3>
              <p>
                Integración con OTAs, motores de búsqueda
                y canales directos.
              </p>
            </article>

            <article className="service">
              <h3>Analítica y Gestión de Ingresos</h3>
              <p>
                Uso de datos para revenue management,
                pricing dinámico y previsión de demanda.
              </p>
            </article>

            <article className="service">
              <h3>Experiencias Digitales y Mobile</h3>
              <p>
                Apps y plataformas móviles para viajeros,
                guías digitales y servicios en destino.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Caso de estudio</h4>
            <p>
              Cómo una cadena hotelera aumentó un 30% sus reservas directas
              mediante una plataforma digital integrada.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>¿Por qué elegirnos?</h4>
            <ul>
              <li>Experiencia en plataformas turísticas</li>
              <li>Enfoque en experiencia del usuario</li>
              <li>Soluciones escalables y seguras</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Tendencias en Turismo Digital</div>
            <div className="card">Guía de Revenue Management</div>
            <div className="card">Casos de Éxito en Hospitalidad</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          ¿Quiénes se benefician del software para viajes y hospitalidad?
        </h2>

        <p className="faq-intro">
          La digitalización impulsa a todo el ecosistema turístico:
        </p>

        <div className="faq-list">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? "open" : ""}`}
              onClick={() => toggleFAQ(i)}
            >
              <div className="faq-question">
                {item.title}
                <span className="faq-icon">
                  {openIndex === i ? "▲" : "▼"}
                </span>
              </div>

              {openIndex === i && (
                <div className="faq-answer">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="footer-cta">
        <div className="footer-inner">
          <p>
            Creamos experiencias digitales que inspiran a viajar.
          </p>
          <button className="cta small">Agendar una llamada</button>
        </div>
      </footer>
    </div>
  );
}
