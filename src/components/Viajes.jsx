// Archivo JSX: AgriculturePage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ
const faqItems = [
  {
    title: "Farms and Agricultural Producers",
    content:
      "Producers use custom solutions for farm management, precision agriculture, and livestock tracking.",
  },
  {
    title: "Agricultural Cooperatives",
    content:
      "Cooperatives use centralized platforms to streamline member management, distribution, and reporting.",
  },
  {
    title: "Agribusiness Companies",
    content:
      "Agribusinesses rely on automation tools to manage logistics, supply chain, distribution, and quality control.",
  },
  {
    title: "Agricultural Research Institutions",
    content:
      "Research groups use data analytics, remote sensing, and scientific modeling platforms.",
  },
  {
    title: "Government Agricultural Departments",
    content:
      "Departments require digital platforms for monitoring, compliance, subsidies, and farmer support programs.",
  },
  {
    title: "Agricultural Extension Services",
    content:
      "They use field data, farmer advisory apps, education tools, and remote training platforms.",
  },
  {
    title: "Agriculture-focused Nonprofits and NGOs",
    content:
      "NGOs use tools to manage program impact, reporting, rural development, and resource allocation.",
  },
];

// Componente principal
export default function ViajesPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Industries &gt; Agriculture</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Streamline operations with
            <span> custom Viajes y Hospitalidad software solutions.</span>
          </h1>

          <p className="hero-sub">Gain specialized expertise and increase efficiency.</p>

          <button className="cta">Accelerate Your Roadmap</button>

          <div className="badges">
            <div className="badge-count">
              500+ companies rely on our top 1% tech talent
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
            src="/viajes.jfif"
            alt="Agriculture"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Agriculture development services we provide
          </h2>

          <p className="lead">
            We develop tailored solutions for the agriculture industry to optimize farming
            operations, implement precision farming techniques, streamline data collection
            and analysis, and leverage modern sustainable practices.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Custom Farm Management Software Solutions</h3>
              <p>
                Web and mobile platforms for farm management — crop planning, labor
                management, yield tracking and invoicing.
              </p>
            </article>

            <article className="service">
              <h3>Precision Agriculture & IoT Solutions</h3>
              <p>
                Sensor integration, drone data processing and dashboards for actionable
                agronomic insights.
              </p>
            </article>

            <article className="service">
              <h3>Drone & Satellite Imagery Analysis</h3>
              <p>
                Imagery pipelines for crop health monitoring, NDVI indices and alerts.
              </p>
            </article>

            <article className="service">
              <h3>Agricultural Supply Chain & Logistics Solutions</h3>
              <p>
                Inventory, cold-chain tracking, and route optimization for perishable goods.
              </p>
            </article>

            <article className="service">
              <h3>Weather Forecasting & Risk Management Tools</h3>
              <p>
                Localized forecast models and automated risk notifications.
              </p>
            </article>

            <article className="service">
              <h3>Agricultural ERP & Financial Management Solutions</h3>
              <p>
                ERP modules for accounting, procurement and compliance management.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Case study</h4>
            <p>
              How a major farm reduced losses using our precision monitoring and automated
              irrigation — 18% lower water use and 12% higher yield.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>Why Choose Us</h4>
            <ul>
              <li>100+ custom projects since 2009</li>
              <li>Specialized agritech team</li>
              <li>Full-cycle delivery</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Newsletter signup</div>
            <div className="card">Industry reports</div>
            <div className="card">Customer stories</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          Which institutions benefit from custom agriculture software development?
        </h2>

        <p className="faq-intro">
          Custom agriculture software development services benefit numerous institutions
          across the industry. Examples include:
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
                <span className="faq-icon">{openIndex === i ? "▲" : "▼"}</span>
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
            From concept to completion. 100s of custom software solutions built since 2009.
          </p>
          <button className="cta small">Schedule a Call</button>
        </div>
      </footer>
    </div>
  );
}
