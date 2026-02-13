import React, { forwardRef } from 'react';
import '../styles/caseStudyCard.css';

const CaseStudyCard = forwardRef(({ caseData, index, isExpanded, onToggle }, ref) => {
  // Alternar el fondo para cada caso (gris/blanco)
  const isEven = index % 2 === 0;

  return (
    <section 
      ref={ref}
      className={`case-study-section ${isEven ? 'bg-white' : 'bg-gray'} ${isExpanded ? 'expanded' : 'collapsed'}`}
    >
      <div className="case-study-container">
        
        {/* Header Colapsable - Siempre visible */}
        <div className="case-header-collapsible" onClick={onToggle}>
          <div className="case-header-content">
            <div className="case-meta">
              <span className="case-number">Caso #{caseData.id}</span>
              <span className="case-industry">{caseData.industry}</span>
            </div>
            <h2 className="case-title">{caseData.title}</h2>
            <div className="case-info-preview">
              <div className="info-item">
                <span className="info-label">Cliente</span>
                <span className="info-value">{caseData.client}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duración</span>
                <span className="info-value">{caseData.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Equipo</span>
                <span className="info-value">{caseData.teamSize}</span>
              </div>
            </div>
          </div>
          <div className="expand-icon">
            {isExpanded ? '−' : '+'}
          </div>
        </div>

        {/* Contenido Expandible */}
        <div className={`case-expandable-content ${isExpanded ? 'show' : ''}`}>
          
          {/* Hero del Caso - Oculto en versión colapsada */}
          <div className="case-hero-expanded">
            <div className="case-info">
              <div className="info-item">
                <span className="info-label">Cliente</span>
                <span className="info-value">{caseData.client}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Duración</span>
                <span className="info-value">{caseData.duration}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Equipo</span>
                <span className="info-value">{caseData.teamSize}</span>
              </div>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="case-technologies">
            <h3 className="section-subtitle">Stack Tecnológico</h3>
            <div className="tech-badges">
              {caseData.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          {/* Problema y Solución */}
          <div className="case-problem-solution">
            <div className="problem-block">
              <div className="block-header">
                <div className="block-icon-wrapper problem-icon">
                  <svg className="block-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="block-title">El Desafío</h3>
              </div>
              <p className="block-text">{caseData.problem}</p>
            </div>

            <div className="solution-block">
              <div className="block-header">
                <div className="block-icon-wrapper solution-icon">
                  <svg className="block-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="block-title">La Solución</h3>
              </div>
              <p className="block-text">{caseData.solution}</p>
            </div>
          </div>

          {/* Módulos Clave */}
          <div className="case-modules">
            <h3 className="section-subtitle">Módulos Implementados</h3>
            <div className="modules-grid">
              {caseData.modules.map((module, idx) => (
                <div key={idx} className="module-item">
                  <div className="module-bullet"></div>
                  <span className="module-text">{module}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Impacto */}
          <div className="case-impact">
            <h3 className="section-subtitle">Resultados e Impacto</h3>
            <div className="impact-list">
              {caseData.impact.map((item, idx) => (
                <div key={idx} className="impact-item">
                  <div className="impact-icon-wrapper">
                    <svg className="impact-icon-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="impact-text">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
        {/* Fin contenido expandible */}

      </div>
    </section>
  );
});

CaseStudyCard.displayName = 'CaseStudyCard';

export default CaseStudyCard;
