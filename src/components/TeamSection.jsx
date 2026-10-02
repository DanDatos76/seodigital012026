import React from 'react';
import '../styles/teamSection.css';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "GUSTAVO GRAVAGNA",
      role: "CEO",
      image: "/team/CEO-GUSTAVO-GRAVAGNA.jpg",
      fullDescription: "Gustavo Gravagna es el fundador y CEO de SEOdigital, con más de 15 años de experiencia liderando proyectos de transformación digital para empresas Fortune 500. Su visión estratégica ha posicionado a la compañía como líder en desarrollo de software personalizado. Ha dirigido equipos multidisciplinarios en más de 40 países, implementando soluciones innovadoras que han generado un impacto significativo en la eficiencia operativa y el crecimiento de nuestros clientes. Gustavo es reconocido internacionalmente como experto en tecnología empresarial y estrategia digital.",
      description: "Fundador y CEO con más de 15 años liderando transformación digital global e innovación tecnológica empresarial."
    },
    {
      name: "JUAN HERNÁNDEZ",
      role: "CTO",
      image: "/team/ing-juan.png",
      fullDescription: "Juan Hernández es el Chief Technology Officer (CTO) de SEOdigital, liderando la estrategia tecnológica, la arquitectura de software escalable y los equipos de desarrollo. Con amplia experiencia en la gestión de proyectos tecnológicos de alta complejidad y liderazgo de equipos multidisciplinarios, Juan impulsa la innovación y la excelencia técnica en todas nuestras soluciones.",
      description: "CTO responsable de la estrategia tecnológica, arquitectura escalable y excelencia técnica en nuestros equipos de desarrollo."
    },
    {
      name: "NOELIA BAREIRO",
      role: "SOCIA DIRECTORA | ADMINISTRACIÓN Y PLANIFICACIÓN",
      image: "/team/neolia-bareiro.png",
      fullDescription: "Socia directora de SEOdigital, participa en la planificación administrativa y organizacional de la compañía. Coordina procesos internos, gestión administrativa, seguimiento operativo y soporte a Dirección, contribuyendo a mantener una estructura eficiente para el crecimiento de la empresa.",
      description: "Participa en la planificación administrativa y organizacional, coordinando procesos internos para asegurar una estructura eficiente."
    },
    {
      name: "SOFIA AGUILERA",
      role: "PROJECT MANAGER",
      image: "/team/sofia-guilera.png",
      fullDescription: "Responsable de la coordinación y gestión integral de proyectos, articulando equipos, prioridades, entregables y seguimiento operativo. Su función es asegurar una ejecución ordenada, una comunicación fluida con cada cliente y el cumplimiento de los objetivos definidos durante todo el ciclo del proyecto.",
      description: "Coordinación y gestión integral de proyectos, articulando equipos y prioridades para asegurar una ejecución impecable."
    },
    {
      name: "EZEQUIEL ROSAS",
      role: "BUSINESS DEVELOPMENT | CALIFICACIÓN DE OPORTUNIDADES",
      image: "/team/ezequiel.png",
      fullDescription: "Forma parte del equipo de desarrollo comercial, especializado en la identificación y calificación inicial de nuevas oportunidades de negocio. Su función es comprender las necesidades de cada prospecto, validar el encaje con nuestras soluciones y preparar cada oportunidad para las siguientes etapas del proceso comercial.",
      description: "Especialista en desarrollo comercial e identificación y calificación inicial de nuevas oportunidades de negocio."
    },
    {
      name: "ANDRÉS ARCELA",
      role: "ESPECIALISTA",
      image: "/team/andres.jpg",
      fullDescription: "Andrés es un especialista multidisciplinario con amplia experiencia en gestión de proyectos tecnológicos y consultoría estratégica. Su versatilidad y conocimiento profundo en múltiples áreas le permiten conectar los puntos entre diferentes departamentos, asegurando que los proyectos se ejecuten de manera eficiente y alineada con los objetivos del negocio. Con más de 7 años en la industria, Andrés ha participado en la implementación de soluciones empresariales complejas, optimización de procesos y transformación digital. Su capacidad analítica y enfoque orientado a resultados lo convierten en un activo valioso para cualquier iniciativa estratégica de la compañía.",
      description: "Especialista multidisciplinario en gestión tecnológica y consultoría estratégica para proyectos complejos."
    },
    {
      name: "KAREN BUITRAGO",
      role: "UX/UI DESIGNER",
      image: "/team/UX:UI-KAREN-BUITRAGO.jpg",
      fullDescription: "Karen Buitrago es nuestra Diseñadora UX/UI líder, especializada en crear experiencias digitales excepcionales que combinan funcionalidad con estética innovadora. Con más de 8 años de experiencia, ha diseñado interfaces para aplicaciones y plataformas web que son utilizadas por millones de usuarios diariamente. Karen lidera nuestro equipo de diseño aplicando metodologías de design thinking y research centrado en el usuario. Su trabajo ha sido reconocido con múltiples premios de diseño, y su pasión por la accesibilidad y la usabilidad garantiza que cada producto que creamos no solo sea visualmente impactante, sino también intuitivo y accesible para todos.",
      description: "Diseñadora UX/UI líder enfocada en crear experiencias digitales intuitivas, accesibles y estéticamente innovadoras."
    },
    {
      name: "DANIEL PÁEZ",
      role: "SOPORTE TÉCNICO",
      image: "/team/SOPORTE-DANIEL-PAEZ.png",
      fullDescription: "Daniel Páez lidera nuestro departamento de soporte técnico con un enfoque excepcional en la satisfacción del cliente y la resolución efectiva de incidencias. Con más de 9 años de experiencia en soporte tecnológico y gestión de servicios IT, Daniel ha implementado procesos que garantizan tiempos de respuesta óptimos y soluciones de alta calidad. Su profundo conocimiento técnico y habilidades de comunicación le permiten traducir conceptos complejos en soluciones comprensibles para nuestros clientes. Daniel y su equipo son la primera línea de defensa, asegurando que todas las operaciones funcionen sin problemas y que cada cliente reciba el apoyo que necesita en tiempo real.",
      description: "Líder de soporte técnico especializado en gestión de servicios IT y atención efectiva en tiempo real."
    },
    {
      name: "PILAR VALOR",
      role: "COMMUNITY MANAGER",
      image: "/team/PILAR-VALOR.jpeg",
      fullDescription: "Pilar Valor es nuestra Community Manager experta en comunicación estratégica y posicionamiento digital. Especializada en construcción de marca, engagement y crecimiento orgánico, lidera la planificación y ejecución de estrategias de contenido orientadas a resultados medibles. Con una sólida trayectoria gestionando comunidades para marcas en distintos mercados, Pilar diseña planes editoriales alineados a objetivos comerciales, optimiza la presencia digital mediante análisis de métricas clave (alcance, conversión, retención y engagement) y desarrolla narrativas que fortalecen la identidad y reputación de cada proyecto. Trabaja bajo metodologías basadas en data, combinando creatividad con análisis estratégico para maximizar impacto y retorno. Su enfoque integral abarca desde la definición de tono y voz de marca hasta la gestión de crisis y automatización de flujos de comunicación. Su compromiso con la coherencia, la profesionalización de la comunicación y la generación de valor sostenido garantiza que cada marca no solo tenga presencia en redes, sino una comunidad sólida, activa y alineada con sus objetivos de negocio.",
      description: "Experta en comunicación estratégica, construcción de marca y posicionamiento digital orientado a resultados."
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
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={`${member.name} - ${member.role}`}
                    className="member-image"
                  />
                ) : (
                  <div className="member-image member-image-placeholder-box" />
                )}
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
