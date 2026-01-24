import React, { useRef } from "react";

import '../styles/Services.css';

const services = [
  {
    icon: '💻',
    title: ' Desarrollo de Software a Medida',
    description: '  Aplicaciones personalizadas creadas para alcanzar sus objetivos comerciales con capacidades de desarrollo full-stack.',
    color: 'red'
  },
  {
    icon: '🌐',
    title: ' Desarrollo Web',
    description: '  Sitios web responsivos y optimizados para SEO utilizando las últimas tecnologías como React, Node.js y Next.js.',
    color: 'blue'
  },
  {
    icon: '📱',
    title: ' Desarrollo de Aplicaciones Móviles',
    description: '  Creamos aplicaciones móviles intuitivas para iOS y Android que ofrecen un rendimiento fluido y una excelente experiencia de usuario (UX).',
    color: 'orange'
  },
  {
    icon: '🎨',
    title: ' Diseño UI/UX',
    description: ' Creamos interfaces atractivas centradas en el usuario que mejoran la usabilidad y las tasas de conversión.',
    color: 'green'
  },
  {
    icon: '☁️',
    title: ' Soluciones en la Nube',
    description: 'Migración, despliegue y gestión de infraestructuras en la nube con AWS, Azure o Google Cloud.',
    color: 'purple'
  },
  {
    icon: '📊',
    title: ' Consultoría Ágil',
    description: ' Impulse la productividad de su equipo con coaching ágil, prácticas de scrum y gestión de productos.',
    color: 'pink'
  }
];

const ExpertiseBlock = () => {
  return (
    <section className="expertise-block">
      <div className="expertise-header">
        <h2> Nuestros Servicios</h2>
        <p>
           Ofrecemos soluciones digitales modernas y escalables para ayudar a su empresa a prosperar en el mundo digital.

        </p>
      </div>
      <div className="expertise-grid">
        {services.map((service, index) => (
          <div className="expertise-card" key={index}>
            <div className={`icon ${service.color}`}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseBlock;
