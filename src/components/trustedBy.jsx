import React from 'react';
import '../styles/TrustedBy.css';

// Importa los logos desde tu carpeta assets
import google from '../assets/google.png';
import salesforce from '../assets/salesforce.png';
import adobe from '../assets/adobe.png';
import hp from '../assets/hp.png';
import motorola from '../assets/motorola.png';
import jnj from '../assets/jnj.png';
import pinterest from '../assets/pinterest.png';
import nextroll from '../assets/nextroll.png';
import rollsroyce from '../assets/rollsroyce.png';

const TrustedBy = () => {
  return (

    <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-text">
          <h2>
            500+ companies rely <br />
            on our <span className="highlight">top 1% talent</span> to <br />
            scale their dev teams<span className="dot">.</span>
          </h2>
        </div>
       
        </div>
    
    </section>
  );
};

export default TrustedBy;
