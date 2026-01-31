import React from 'react';
import '../styles/cultura.css';
import { Globe, Award, Users, Lightbulb } from 'lucide-react';

const Culture = () => {
  const beliefs = [
    {
      icon: <Globe size={32} />,
      title: "El trabajo remoto no es solo cómo trabajamos; es por lo que prosperamos.",
      text: "Nuestra cultura remota fue diseñada para reunir a las personas más talentosas de cada campo, independientemente de su ubicación. Una mezcla de culturas, orígenes y experiencias nos hace más fuertes. En SEOdigital, colaboras de forma asincrónica a través de zonas horarias y te alentamos a moverte, explorar y trabajar desde donde estés.",
      color: "orange"
    },
    {
      icon: <Award size={32} />,
      title: "Para llegar más lejos, no ponemos límites.",
      text: "No nos conformamos: apuntar alto es lo que nos diferencia. Se confía en ti para que tomes la iniciativa, te animes a desafiar fronteras y cuentes con las herramientas y el feedback para perfeccionar tu experiencia. Así es como te conviertes en el experto al que otros acuden y en el tipo de profesional que aspiras ser.",
      color: "blue"
    },
    {
      icon: <Users size={32} />,
      title: "Crecemos y ganamos juntos.",
      text: "La colaboración es el corazón de cómo trabajamos, y es gran parte de por qué la gente prospera aquí. Los equipos trabajan entre roles y zonas horarias, siempre alineados en torno a objetivos compartidos. Todos están dispuestos a sumergirse y resolver problemas juntos. Aquí no encontrarás egos, solo trabajo en equipo real y victorias compartidas.",
      color: "green"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Pensar en el futuro impulsa nuestro éxito.",
      text: "Cada desafío es una oportunidad para crear algo mejor. Nos movemos rápido, anticipamos desafíos y encontramos un camino hacia adelante. Así es como marcamos la diferencia y ganamos la confianza de nuestros clientes. No estás limitado a cumplir; puedes cuestionar e influir en lo que viene después.",
      color: "yellow"
    }
  ];

  const values = [
    { title: "Un Equipo, Una Misión", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400" },
    { title: "La Velocidad es el Rey", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400" },
    { title: "Encuentra el Camino", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400" },
    { title: "Hazlo Tuyo y Apréndelo", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400" },
    { title: "Sin Sorpresas, Sin Silos", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400" },
    { title: "Sube la Vara", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400" }
  ];

  return (
    <div className="culture-section">
      {/* HERO SECTION */}
      <section className="culture-hero">
        <div className="container">
          <p className="subtitle">CULTURA DE LA EMPRESA</p>
          <h1>Construidos sobre la cultura, <br /> <span>impulsados por el talento.</span></h1>
          <p className="hero-description">
            En SEOdigital, cómo trabajamos es tan importante como lo que construimos.
          </p>
          <div className="hero-image-wrapper">
             <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200" alt="Equipo SEOdigital" />
          </div>
        </div>
      </section>

      {/* BELIEFS SECTION */}
      <section className="beliefs">
        <div className="container">
          <div className="section-header">
            <h2>En qué creemos<span>.</span></h2>
            <p>Estos principios dan forma a nuestras decisiones, impulsan nuestra ambición y nos conectan en cada rol y región.</p>
          </div>
          <div className="beliefs-grid">
            {beliefs.map((belief, index) => (
              <div key={index} className={`belief-card border-${belief.color}`}>
                <div className={`icon ${belief.color}`}>{belief.icon}</div>
                <h3>{belief.title}</h3>
                <p>{belief.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Lo que valoramos<span>.</span></h2>
            <p>Nuestros valores no describen quiénes esperamos ser: reflejan quiénes ya somos. Ponen nuestras creencias en acción.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <img src={value.img} alt={value.title} />
                <div className="overlay">
                  <h3>{value.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Culture;