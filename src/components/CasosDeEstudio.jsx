import React, { useState, useRef, useEffect } from 'react';
import { casesData } from '../data/casesData';
import CaseStudyCard from './CaseStudyCard';
import '../styles/casosDeEstudio.css';

const CasosDeEstudio = () => {
  const [expandedCases, setExpandedCases] = useState([]);
  const caseRefs = useRef({});
  const heroRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const rect = hero.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    let particles = [];
    let mouseX = -9999; // Fuera del canvas inicialmente
    let mouseY = -9999;

    // Crear triángulos distribuidos por toda el área
    const createParticles = () => {
      const numParticles = 100;
      const colors = ['#6366f1', '#8b5cf6', '#a78bfa'];
      
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x: x,
          y: y,
          baseX: x,
          baseY: y,
          size: Math.random() * 8 + 6,
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: 0,
          density: Math.random() * 40 + 10
        });
      }
    };

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -9999; // Posición fuera del canvas
      mouseY = -9999;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        // Calcular distancia al cursor
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        
        // Atracción hacia el cursor
        const maxDistance = 150;
        const force = (maxDistance - distance) / maxDistance;
        
        if (distance < maxDistance) {
          const directionX = forceDirectionX * force * particle.density * 0.3;
          const directionY = forceDirectionY * force * particle.density * 0.3;
          particle.x += directionX;
          particle.y += directionY;
        } else {
          // Volver suavemente a la posición base
          particle.x += (particle.baseX - particle.x) * 0.08;
          particle.y += (particle.baseY - particle.y) * 0.08;
        }

        // Dibujar triángulo
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = particle.color;

        ctx.beginPath();
        ctx.moveTo(0, -particle.size / 2);
        ctx.lineTo(particle.size / 2, particle.size / 2);
        ctx.lineTo(-particle.size / 2, particle.size / 2);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    createParticles();
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handleToggleCase = (caseId) => {
    setExpandedCases(prev => {
      if (prev.includes(caseId)) {
        // Si está abierta, cerrarla
        return prev.filter(id => id !== caseId);
      } else {
        // Si está cerrada, abrirla (sin cerrar las demás)
        return [...prev, caseId];
      }
    });
  };

  return (
    <div className="casos-de-estudio-page">
      
      {/* Hero Principal de la Página */}
      <section className="casos-hero" ref={heroRef}>
        <canvas 
          id="particles-canvas" 
          className="particles-canvas"
          width="2000"
          height="600"
        ></canvas>
        <div className="casos-hero-container">
          <span className="casos-badge">Portfolio</span>
          <h1 className="casos-hero-title">Casos de Estudio</h1>
          <p className="casos-hero-subtitle">
            Transformando desafíos empresariales en soluciones tecnológicas exitosas.
            <br />
            Descubre cómo hemos ayudado a nuestros clientes a alcanzar sus objetivos.
          </p>
          <div className="casos-stats">
            <div className="stat-item">
              <span className="stat-number">11</span>
              <span className="stat-label">Proyectos Destacados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7+</span>
              <span className="stat-label">Industrias</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Satisfacción Cliente</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mapeo de todos los casos */}
      <div className="casos-list">
        {casesData.map((caseItem, index) => (
          <React.Fragment key={caseItem.id}>
            <CaseStudyCard 
              caseData={caseItem} 
              index={index}
              isExpanded={expandedCases.includes(caseItem.id)}
              onToggle={() => handleToggleCase(caseItem.id)}
              ref={(el) => (caseRefs.current[caseItem.id] = el)}
            />
            
            {/* Separador visual entre casos (excepto el último) */}
            {index < casesData.length - 1 && (
              <div className="case-separator">
                <div className="separator-line"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Call to Action Final */}
      <section className="casos-final-cta">
        <div className="final-cta-container">
          <h2 className="final-cta-title">
            ¿Listo para escribir tu propia historia de éxito?
          </h2>
          <p className="final-cta-text">
            Cada proyecto es único. Trabajemos juntos para crear una solución 
            tecnológica que impulse tu negocio al siguiente nivel.
          </p>
          <div className="final-cta-buttons">
            <a href="/contacto" className="cta-primary">
              Iniciar un proyecto
            </a>
            <a href="/about" className="cta-secondary">
              Conocer nuestro equipo
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CasosDeEstudio;
