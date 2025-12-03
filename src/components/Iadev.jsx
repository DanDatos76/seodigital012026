// Archivo JSX: BackendPage.jsx
import React, { useState } from 'react';
import '../styles/Industria.css';

const badgeItems = ['Google', 'Meta', 'Pinterest', 'Adobe'];

// Datos del FAQ
const faqItems = [
  {
    title: "Tech Companies Building Scalable Apps",
    content:
      "Companies developing SaaS, fintech, marketplaces, and AI platforms rely on advanced backend architectures to scale securely.",
  },
  {
    title: "Enterprises Requiring System Integrations",
    content:
      "Large organizations need APIs, microservices, automation workflows, and secure data exchange between internal systems.",
  },
  {
    title: "Startups Needing MVPs and Fast Launch",
    content:
      "Startups use custom backend development to validate ideas quickly, deploy MVPs, and ensure future scalability.",
  },
  {
    title: "E-commerce and Retail Platforms",
    content:
      "Retailers rely on inventory systems, payment gateways, analytics engines, and high-availability backend services.",
  },
  {
    title: "Healthcare and Government Platforms",
    content:
      "They require secure, compliant, and high-performance backend solutions with audit trails and data protection.",
  },
  {
    title: "Educational Platforms and LMS Providers",
    content:
      "Backends power user management, course delivery, analytics, real-time communication, and content automation.",
  },
  {
    title: "Logistics, Transportation and IoT Systems",
    content:
      "Companies need real-time tracking, geolocation, sensor data pipelines, and automated logistics workflows.",
  },
];

// Componente principal
export default function IadevPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="ag-page">

      {/* BREADCRUMB */}
      <header className="breadcrumb">Inicio &gt; Services &gt; Backend Development</header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            IA Development
            <span> IA development for modern applications.</span>
          </h1>

          <p className="hero-sub">
            Power your product with high-performance APIs, databases, and cloud architectures.
          </p>

          <button className="cta">Level Up Your Backend Development</button>

          <div className="badges">
            <div className="badge-count">
              500+ companies rely on our top 1% backend engineers
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
            src="/ia.jfif"
            alt="Backend Engineering"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main className="content-wrap">
        <div className="main-col">
          <h2 className="section-title">
            Backend development services we provide
          </h2>

          <p className="lead">
            We build powerful backend systems designed for performance, security, and
            scalability. From APIs to microservices, we provide end-to-end backend development
            for startups, enterprises, and fast-growing platforms.
          </p>

          <div className="services-grid">

            <article className="service">
              <h3>Custom API & Microservices Architecture</h3>
              <p>
                High-performance REST/GraphQL APIs, microservices, serverless architectures,
                and event-driven systems.
              </p>
            </article>

            <article className="service">
              <h3>Database Design & Optimization</h3>
              <p>
                PostgreSQL, MongoDB, Redis, MySQL — indexing, replication, sharding, and
                real-time data pipelines.
              </p>
            </article>

            <article className="service">
              <h3>Cloud Backend Development</h3>
              <p>
                AWS, Azure, and Google Cloud solutions using Docker, Kubernetes, CI/CD, and
                infrastructure automation.
              </p>
            </article>

            <article className="service">
              <h3>Authentication & Security Systems</h3>
              <p>
                OAuth2, JWT, identity management, encryption, access control, and compliance
                implementations.
              </p>
            </article>

            <article className="service">
              <h3>Integration with Third-Party Services</h3>
              <p>
                Payment gateways, messaging APIs, analytics engines, CRMs, ERPs, AI models,
                and more.
              </p>
            </article>

            <article className="service">
              <h3>Backend Testing & Performance Engineering</h3>
              <p>
                Unit, integration, load, and stress testing. Performance optimization for
                large-scale applications.
              </p>
            </article>

          </div>

          <div className="case-study">
            <h4>Case study</h4>
            <p>
              How a global SaaS platform scaled to 3M users using our microservices backend —
              reducing downtime by 92% and increasing response speed by 40%.
            </p>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar-box">
            <h4>Why Choose Us</h4>
            <ul>
              <li>Specialized backend engineering teams</li>
              <li>Cloud-native architectures</li>
              <li>API-first development approach</li>
            </ul>
          </div>

          <div className="sidebar-cards">
            <div className="card">Backend Architecture Guides</div>
            <div className="card">API Best Practices</div>
            <div className="card">Case Studies</div>
          </div>
        </aside>
      </main>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="faq-title">
          Which companies benefit from custom backend development?
        </h2>

        <p className="faq-intro">
          Custom backend services provide the core functionality that powers digital products.
          They are essential for:
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
            From APIs to microservices — power your product with world-class backend
            engineering.
          </p>
          <button className="cta small">Schedule a Call</button>
        </div>
      </footer>
    </div>
  );
}
