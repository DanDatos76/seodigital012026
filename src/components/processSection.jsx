  // src/components/ProcessSection.jsx
 

import "../styles/processSection.css";

const ProcessSection = () => {
  return (
    <section className="process-container">
      <div className="process-image">
        <h1>
          Nuestro proceso.{' '}
          <span>Simple,</span>{' '}
          <span>fluido,</span>{' '}
          <span>efectivo.</span>
        </h1>
        <img src="cafe.jpg" alt="Professional consultation" /> 
      </div>

      <div className="process-content">
        <div className="steps">
          <div className="step">
            <div className="icon">📞</div>
            <div className="step-text">
              <h4>PASO 1</h4>
              <h3>Llamada de exploración</h3>
              <p>
                Cuéntanos más sobre tu negocio en una llamada de descubrimiento. 
                Discutiremos la estructura del equipo, el enfoque, los criterios de éxito, 
                plazos, presupuesto y las habilidades necesarias para ver cómo podemos ayudarte.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="icon">🗓️</div>
            <div className="step-text">
              <h4>PASO 2</h4>
              <h3>Definición de solución y equipo</h3>
              <p>
                En pocos días, finalizaremos las especificaciones de tu proyecto, 
                acordaremos un modelo de trabajo, seleccionaremos e integraremos a tu equipo.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="icon">🚀</div>
            <div className="step-text">
              <h4>PASO 3</h4>
              <h3>Inicio y seguimiento de desempeño</h3>
              <p>
                Una vez acordados los hitos, nos pondremos a trabajar de inmediato. 
                Realizaremos un seguimiento del progreso, enviaremos actualizaciones 
                y nos adaptaremos continuamente a tus necesidades.
              </p>
              <button className="cta-button">
                Programar una Llamada
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;