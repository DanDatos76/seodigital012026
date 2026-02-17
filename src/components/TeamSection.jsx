import React from 'react';
import '../styles/teamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "GUSTAVO GRAVAGNA",
      role: "CEO",
      image: "/team/CEO-GUSTAVO-GRAVAGNA.jpg",
      description: "Gustavo Gravagna es el fundador y CEO de SEOdigital, con más de 15 años de experiencia liderando proyectos de transformación digital para empresas Fortune 500. Su visión estratégica ha posicionado a la compañía como líder en desarrollo de software personalizado. Ha dirigido equipos multidisciplinarios en más de 40 países, implementando soluciones innovadoras que han generado un impacto significativo en la eficiencia operativa y el crecimiento de nuestros clientes. Gustavo es reconocido internacionalmente como experto en tecnología empresarial y estrategia digital."
    },  {
      name: "TOBÍAS NÚÑEZ",
      role: "CTO",
      image: "/team/DEV-TOBIAS NUÑEZ.jpg",
      description: "Tobías Núñez es un desarrollador senior con amplia experiencia en arquitecturas de software escalables y tecnologías de vanguardia. Con más de 10 años en la industria, Tobías ha liderado el desarrollo de sistemas críticos para empresas de e-commerce, fintech y SaaS. Su expertise abarca desde backend con Node.js, Python y microservicios, hasta implementaciones complejas de cloud computing en AWS y Azure. Tobías es un apasionado de las mejores prácticas de código limpio, testing automatizado y DevOps. Su capacidad para resolver problemas complejos y mentorar a desarrolladores junior lo convierte en un pilar fundamental de nuestro equipo técnico."
    },
    {
      name: "FRANCO OSMAN",
      role: "DIRECTOR COMERCIAL",
      image: "/team/DIRECTOR-COMERCIAL-FRANCO-OSMAN.jpg",
      description: "Franco Osman lidera la estrategia comercial de SEOdigital con una amplia trayectoria en desarrollo de negocios y gestión de cuentas clave en el sector tecnológico. Su experiencia abarca más de 12 años construyendo relaciones estratégicas con clientes internacionales, desde startups disruptivas hasta corporaciones globales. Franco ha sido instrumental en la expansión de la compañía a nuevos mercados, desarrollando alianzas comerciales que han multiplicado nuestro alcance. Su enfoque centrado en el cliente y su capacidad para identificar oportunidades de crecimiento han sido fundamentales para el éxito sostenido de SEOdigital."
    },{
      name: "ANDRÉS ARCELA",
      role: "ESPECIALISTA",
      image: "/team/andres.jpg",
      description: "Andrés es un especialista multidisciplinario con amplia experiencia en gestión de proyectos tecnológicos y consultoría estratégica. Su versatilidad y conocimiento profundo en múltiples áreas le permiten conectar los puntos entre diferentes departamentos, asegurando que los proyectos se ejecuten de manera eficiente y alineada con los objetivos del negocio. Con más de 7 años en la industria, Andrés ha participado en la implementación de soluciones empresariales complejas, optimización de procesos y transformación digital. Su capacidad analítica y enfoque orientado a resultados lo convierten en un activo valioso para cualquier iniciativa estratégica de la compañía."
    },
    {
      name: "KAREN BUITRAGO",
      role: "UX/UI DESIGNER",
      image: "/team/UX:UI-KAREN-BUITRAGO.jpg",
      description: "Karen Buitrago es nuestra Diseñadora UX/UI líder, especializada en crear experiencias digitales excepcionales que combinan funcionalidad con estética innovadora. Con más de 8 años de experiencia, ha diseñado interfaces para aplicaciones y plataformas web que son utilizadas por millones de usuarios diariamente. Karen lidera nuestro equipo de diseño aplicando metodologías de design thinking y research centrado en el usuario. Su trabajo ha sido reconocido con múltiples premios de diseño, y su pasión por la accesibilidad y la usabilidad garantiza que cada producto que creamos no solo sea visualmente impactante, sino también intuitivo y accesible para todos."
    },
  
    {
      name: "DANIEL PÁEZ",
      role: "SOPORTE TÉCNICO",
      image: "/team/SOPORTE-DANIEL-PAEZ.png",
      description: "Daniel Páez lidera nuestro departamento de soporte técnico con un enfoque excepcional en la satisfacción del cliente y la resolución efectiva de incidencias. Con más de 9 años de experiencia en soporte tecnológico y gestión de servicios IT, Daniel ha implementado procesos que garantizan tiempos de respuesta óptimos y soluciones de alta calidad. Su profundo conocimiento técnico y habilidades de comunicación le permiten traducir conceptos complejos en soluciones comprensibles para nuestros clientes. Daniel y su equipo son la primera línea de defensa, asegurando que todas las operaciones funcionen sin problemas y que cada cliente reciba el apoyo que necesita en tiempo real."
    },
    {
      name: "PILAR VALOR",
      role: "COMMUNITY MANAGER",
      image: "/team/PILAR-VALOR.jpeg",
      description: "Pilar Valor es nuestra Community Manager experta en comunicación estratégica y posicionamiento digital. Especializada en construcción de marca, engagement y crecimiento orgánico, lidera la planificación y ejecución de estrategias de contenido orientadas a resultados medibles. Con una sólida trayectoria gestionando comunidades para marcas en distintos mercados, Pilar diseña planes editoriales alineados a objetivos comerciales, optimiza la presencia digital mediante análisis de métricas clave (alcance, conversión, retención y engagement) y desarrolla narrativas que fortalecen la identidad y reputación de cada proyecto. Trabaja bajo metodologías basadas en data, combinando creatividad con análisis estratégico para maximizar impacto y retorno. Su enfoque integral abarca desde la definición de tono y voz de marca hasta la gestión de crisis y automatización de flujos de comunicación. Su compromiso con la coherencia, la profesionalización de la comunicación y la generación de valor sostenido garantiza que cada marca no solo tenga presencia en redes, sino una comunidad sólida, activa y alineada con sus objetivos de negocio."
    },
    {
      name: "DAVID SANTAMARÍA VILLAVERDE",
      role: "CHIEF OPERATING OFFICER (COO) – ESPAÑA",
      image: "/team/David-Santamaría-Villaverde.jpeg",
      description: "David Santamaría Villaverde lidera la operación integral de SEOdigital en España, asegurando eficiencia, calidad de entrega y escalabilidad en cada proyecto de software. Cuenta con más de 12 años de experiencia en gestión de operaciones tecnológicas, coordinando equipos multidisciplinarios y desarrollos a medida en entornos de alta exigencia.Ha sido responsable de estructurar metodologías de trabajo, optimizar la planificación de recursos y fortalecer el control presupuestario para maximizar márgenes y reducir desviaciones operativas. Su enfoque orientado a procesos, indicadores de desempeño y mejora continua ha sido clave para garantizar resultados consistentes y sostenibles en el crecimiento de la compañía."
    },
    {
      name: "CLARA SAN GIL",
      role: "DIRECTORA COMERCIAL DE OPERACIONES",
      image: "/team/Clara-San-Gil.jpeg",
      description: "Clara San Gil lidera la Dirección Comercial de Operaciones de SEOdigital con una sólida trayectoria en optimización de procesos comerciales y expansión estratégica en el sector tecnológico. Su experiencia abarca más de 10 años integrando ventas, planificación financiera y eficiencia operativa, alineando equipos y objetivos bajo métricas de rendimiento claras. Clara ha sido clave en la implementación de modelos de revenue operations, sistemas de forecast y estructuras de seguimiento que fortalecen la previsibilidad y rentabilidad del negocio. Su visión analítica y su capacidad para estructurar operaciones comerciales escalables han sido determinantes para consolidar un crecimiento sostenido y financieramente sólido." 
    }
    
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2>Nuestro Equipo de Líderes</h2>
          <p>Conoce a las personas que hacen posible nuestra excelencia en desarrollo de software</p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <div className="member-image-wrapper">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`}
                  className="member-image"
                />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
