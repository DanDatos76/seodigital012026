import React, { useRef } from "react";

import '../styles/servicios.css'; // Asegurate de crear este archivo si querés estilizarlo

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          We provide modern and scalable digital solutions to help your business thrive in the digital world.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Custom Software Development</h3>
            <p>
              Tailored applications built to meet your business goals with full-stack development capabilities.
            </p>
          </div>

          <div className="service-card">
            <h3>Web Development</h3>
            <p>
              Responsive, SEO-friendly websites using the latest technologies like React, Node.js and Next.js.
            </p>
          </div>

          <div className="service-card">
            <h3>Mobile App Development</h3>
            <p>
              Build intuitive mobile apps for iOS and Android that offer smooth performance and great UX.
            </p>
          </div>

          <div className="service-card">
            <h3>UI/UX Design</h3>
            <p>
              Create engaging, user-centered interfaces that enhance usability and conversion rates.
            </p>
          </div>

          <div className="service-card">
            <h3>Cloud Solutions</h3>
            <p>
              Migrate, deploy, and manage cloud infrastructures with AWS, Azure or Google Cloud.
            </p>
          </div>

          <div className="service-card">
            <h3>Agile Consulting</h3>
            <p>
              Empower your teams with agile workflows and continuous integration strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
