import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  Clock, 
  Layers, 
  Send,
  Building2,
  Share2,
  User,
  Plus
} from 'lucide-react';
import { casesData, getCaseBySlug, getRelatedCases } from '../data/casesData';
import '../styles/casosDeEstudio.css';

export default function CaseStudyDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [caseData, setCaseData] = useState(null);
  const [relatedCases, setRelatedCases] = useState([]);
  const [pdfEmail, setPdfEmail] = useState('');
  const [pdfSent, setPdfSent] = useState(false);
  const [pdfError, setPdfError] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLogoError(false);
    const found = getCaseBySlug(slug);
    if (found) {
      setCaseData(found);
      setRelatedCases(getRelatedCases(slug, 3));
      setPdfSent(false);
      setPdfEmail('');
      setPdfError('');
    } else {
      // Si no existe, redirigir al listado principal
      navigate('/casos-de-estudio');
    }
  }, [slug, navigate]);

  if (!caseData) {
    return (
      <div className="case-loading-container">
        <div className="case-spinner"></div>
        <p>Cargando caso de estudio corporativo...</p>
      </div>
    );
  }

  const currentIndex = casesData ? casesData.findIndex((c) => c.slug === slug) : -1;
  const prevCase = casesData && currentIndex > 0 ? casesData[currentIndex - 1] : (casesData ? casesData[casesData.length - 1] : null);
  const nextCase = casesData && currentIndex >= 0 && currentIndex < casesData.length - 1 ? casesData[currentIndex + 1] : (casesData ? casesData[0] : null);

  const handlePdfSubmit = (e) => {
    e.preventDefault();
    if (!pdfEmail || !pdfEmail.includes('@')) {
      setPdfError('Por favor ingresa un correo electrónico corporativo válido.');
      return;
    }
    setPdfError('');
    setPdfSent(true);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <article className="case-detail-page">
      {/* Barra de Navegación / Breadcrumb */}
      <nav className="case-breadcrumb-bar" aria-label="Breadcrumb">
        <div className="case-container breadcrumb-inner">
          <Link to="/casos-de-estudio" className="breadcrumb-back-link">
            <ArrowLeft size={16} />
            <span>Volver a Clientes y Casos de Éxito</span>
          </Link>
          <div className="breadcrumb-trail">
            <Link to="/casos-de-estudio">Nuestros Clientes</Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{caseData.title}</span>
          </div>
        </div>
      </nav>

      {/* Hero del Caso de Estudio (Referencia BairesDev Google / Rolls-Royce) */}
      <header className="case-detail-hero">
        <div className="case-hero-overlay" style={{ background: caseData.coverGradient || undefined }}></div>
        <div className="case-container hero-grid">
          
          <div className="hero-content-col">
            <span className="case-eyebrow-tag">
              {caseData.categoryTag || `${caseData.title.toUpperCase()} CASO DE ESTUDIO — ${caseData.industry.toUpperCase()}`}
            </span>
            <h1 className="case-main-title">
              {caseData.heroTitle || caseData.title}
            </h1>
            <p className="case-main-subtitle">
              {caseData.heroSubtitle || caseData.summary}
            </p>

            <div className="hero-quick-meta">
              <span className="quick-meta-pill">
                <Building2 size={15} />
                <strong>Industria:</strong> {caseData.industry}
              </span>
              <span className="quick-meta-pill">
                <Clock size={15} />
                <strong>Plazo:</strong> {caseData.duration}
              </span>
              <button 
                type="button" 
                onClick={handleShare} 
                className="hero-share-btn"
                title="Copiar enlace del caso"
              >
                <Share2 size={15} />
                <span>{copiedLink ? '¡Enlace copiado!' : 'Compartir'}</span>
              </button>
            </div>
          </div>

          {/* Tarjeta Flotante de Descarga de PDF / Lead Capture */}
          <aside className="hero-lead-card-col">
            <div className="pdf-capture-box">
              <div className="pdf-icon-badge">
                <Download size={22} />
              </div>
              <h3>Descarga este caso en PDF</h3>
              <p>
                Recibe el informe ejecutivo completo con especificaciones técnicas y arquitectura de solución directamente en tu bandeja de entrada.
              </p>

              {pdfSent ? (
                <div className="pdf-success-state">
                  <CheckCircle2 size={24} className="success-icon" />
                  <h4>¡Solicitud recibida!</h4>
                  <p>
                    Hemos registrado tu solicitud para <strong>{pdfEmail}</strong>. En breve recibirás el PDF ejecutivo del caso {caseData.title}.
                  </p>
                  <button 
                    type="button" 
                    className="pdf-reset-btn"
                    onClick={() => { setPdfSent(false); setPdfEmail(''); }}
                  >
                    Enviar a otro correo
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePdfSubmit} className="pdf-form">
                  <div className="pdf-input-group">
                    <input 
                      type="email" 
                      placeholder="tu.nombre@empresa.com"
                      value={pdfEmail}
                      onChange={(e) => setPdfEmail(e.target.value)}
                      required
                      aria-label="Correo corporativo"
                    />
                    <button type="submit" className="pdf-submit-btn">
                      <span>Solicitar PDF</span>
                      <Send size={15} />
                    </button>
                  </div>
                  {pdfError && <p className="pdf-error-text">{pdfError}</p>}
                  <span className="pdf-disclaimer">
                    Privacidad garantizada. Sin spam institucional.
                  </span>
                </form>
              )}
            </div>
          </aside>

        </div>
      </header>

      {/* Sección 1: El Resumen / The Summary (2 Columnas: Narrativa + Client Profile Card) */}
      <section className="case-section summary-section">
        <div className="case-container summary-grid">
          
          <div className="summary-text-block">
            <div className="section-label-wrapper">
              <span className="section-label">01 / Resumen Ejecutivo</span>
            </div>
            <h2 className="section-title">El resumen<span className="dot">.</span></h2>
            <p className="summary-lead-paragraph">
              {caseData.summary}
            </p>
            <p className="summary-secondary-paragraph">
              Para garantizar que los objetivos de negocio se cumplieran sin fricciones operativas, SEOdigital asignó un equipo multidisciplinario enfocado en la solidez arquitectónica, la experiencia del usuario y la integración transparente con los flujos ya existentes de la organización.
            </p>
          </div>

          <div className="summary-client-card">
            <div className="client-card-inner">
              <div className="client-logo-header">
                {(caseData.logo && !logoError) ? (
                  <div className="client-logo-box">
                    <img 
                      src={caseData.logo} 
                      alt={`Logo ${caseData.client}`} 
                      className="client-logo-img"
                      onError={() => setLogoError(true)} 
                    />
                  </div>
                ) : (
                  <div className="client-monogram" style={{ borderColor: caseData.accentColor || '#6223cc' }}>
                    <span style={{ color: caseData.accentColor || '#6223cc' }}>
                      {caseData.title.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="client-title-info">
                  <h3 className="client-name">{caseData.client}</h3>
                  <span className="client-industry-badge">{caseData.industry}</span>
                </div>
              </div>

              <div className="client-specs-list">
                <div className="spec-row">
                  <span className="spec-label">Tipo de proyecto</span>
                  <span className="spec-value">Ingeniería de Software & Arquitectura</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Modelo de engagement</span>
                  <span className="spec-value">{caseData.engagementModel}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Tiempo de ejecución</span>
                  <span className="spec-value">{caseData.duration}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">Estado actual</span>
                  <span className="spec-value spec-active">
                    <span className="status-indicator"></span>
                    En producción & escalando
                  </span>
                </div>
              </div>

              <div className="client-card-cta">
                <Link to="/contacto" className="btn-client-contact">
                  Consultar por un proyecto similar
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Barra de Métricas Clave y Stack Tecnológico (Referencia BairesDev stats bar) */}
      <section className="case-metrics-bar-section">
        <div className="case-container">
          
          <div className="metrics-numbers-row">
            <div className="metric-box">
              <span className="metric-number">{caseData.teamSize.split(' ')[0]}</span>
              <span className="metric-label">{caseData.teamSize.split(' ').slice(1).join(' ') || 'Especialistas'}</span>
              <span className="metric-sub">Equipo asignado</span>
            </div>

            <div className="metric-box">
              <span className="metric-number">{caseData.duration.split(' ')[0]}</span>
              <span className="metric-label">{caseData.duration.split(' ').slice(1).join(' ') || 'Meses'}</span>
              <span className="metric-sub">Tiempo de desarrollo</span>
            </div>

            <div className="metric-box">
              <span className="metric-number">100%</span>
              <span className="metric-label">Arquitectura a Medida</span>
              <span className="metric-sub">Soberanía de datos</span>
            </div>

            <div className="metric-box">
              <span className="metric-number">24/7</span>
              <span className="metric-label">Disponibilidad Cloud</span>
              <span className="metric-sub">SLA empresarial</span>
            </div>
          </div>

          <div className="tech-stack-strip">
            <div className="strip-label">
              <strong>Principales tecnologías utilizadas:</strong>
            </div>
            <div className="tech-pills-list">
              {caseData.technologies.map((tech, idx) => (
                <span key={idx} className="tech-pill-badge">{tech}</span>
              ))}
            </div>
            <div className="strip-model">
              <span><strong>Modelo:</strong> {caseData.engagementModel}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Testimonio / Cita del Cliente */}
      {caseData.quote && (
        <section className="case-quote-section">
          <div className="case-container">
            <blockquote className="corporate-blockquote">
              <div className="quote-mark-icon">“</div>
              <p className="quote-text">{caseData.quote}</p>
              <footer className="quote-footer">
                <cite className="quote-author">{caseData.quoteAuthor}</cite>
                <span className="quote-role">— {caseData.quoteRole}</span>
              </footer>
            </blockquote>
          </div>
        </section>
      )}

      {/* =========================================================================
          FLUJO CORPORATIVO SERPENTINA ESTILO BAIRESDEV
          1. El desafío (Blanco) -> 2. La solución (Naranja) -> 3. El resultado (Pizarra)
         ========================================================================= */}
      <div className="baires-story-flow">

        {/* PARTE 1: EL DESAFÍO / THE CHALLENGE (Fondo Blanco) */}
        <section className="baires-challenge-wrapper">
          <div className="case-container baires-flow-container">

            {/* Tarjeta Flotante "About [Client]" */}
            <div className="about-client-card">
              <div className="about-client-left">
                <span className="about-label">About</span>
                <h3 className="about-client-name">{caseData.title}</h3>
              </div>
              <div className="about-client-right">
                <p className="about-client-desc">
                  {caseData.client} cuenta con una trayectoria consolidada en {caseData.industry.toLowerCase()}. Para esta iniciativa estratégica, confió en SEOdigital la consultoría técnica y el desarrollo integral de una arquitectura de software orientada a resolver cuellos de botella operativos y habilitar escala sostenible.
                </p>
              </div>
            </div>

            {/* Línea Serpiente: Comienzo en Desafío (arriba a la izquierda con curva y baja recta) */}
            <div className="snake-challenge-line" aria-hidden="true"></div>

            <div className="challenge-content-row">
              <div className="challenge-content-left">
                <h2 className="baires-section-title challenge-title-heading">
                  El desafío<span className="dot">.</span>
                </h2>
                <div className="challenge-paragraphs-block">
                  <p className="challenge-detail-p">
                    {caseData.problem}
                  </p>
                  <p className="challenge-sub-detail-p">
                    La organización requería superar la dispersión de información, garantizar trazabilidad rigurosa y reemplazar procesos manuales por una <span className="baires-underline">arquitectura cloud automatizada</span> capaz de absorber picos de demanda sin incrementar costos operativos de forma proporcional.
                  </p>
                </div>
              </div>

              <div className="challenge-content-right">
                <p className="challenge-lead-prominent">
                  {caseData.heroSubtitle || caseData.problem}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* PARTE 2: LA SOLUCIÓN / THE SOLUTION (Fondo Sólido Naranja BairesDev #ea580c) */}
        <section className="baires-solution-wrapper">
          <div className="case-container baires-flow-container">

            {/* Línea Serpiente: Segmento vertical izquierdo en Solución */}
            <div className="snake-solution-left-vert" aria-hidden="true"></div>

            <div className="solution-top-content-row">
              <div className="solution-content-left">
                <h2 className="baires-section-title solution-title-white">
                  La solución<span className="dot white-dot">.</span>
                </h2>
                <p className="solution-lead-paragraph-white">
                  {caseData.solution}
                </p>
              </div>

              {/* Tarjeta de Especialistas con iconos */}
              <div className="baires-specialists-card">
                <div className="specialists-card-header">
                  <h4 className="specialists-count-text">
                    {caseData.teamSize.split(' ')[0] || '7'} Especialistas
                  </h4>
                </div>
                <div className="specialists-avatars-grid">
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell"><User size={20} /></div>
                  <div className="specialist-avatar-cell specialist-plus"><Plus size={20} /></div>
                </div>
                <div className="specialists-card-divider"></div>
                <div className="specialists-card-footer">
                  <span>Arquitectura Cloud · Full Stack · QA & DevOps</span>
                </div>
              </div>
            </div>

            {/* Línea Serpiente: Puente horizontal (Gira a la derecha, cruza todo el ancho, gira hacia abajo a la derecha) */}
            <div className="snake-bridge-wrapper" aria-hidden="true">
              <div className="snake-turn-bottom-left"></div>
              <div className="snake-bridge-horizontal"></div>
              <div className="snake-turn-top-right"></div>
            </div>

            {/* Todas las Tecnologías Utilizadas */}
            <div className="baires-all-tech-block">
              <h3 className="baires-all-tech-title">Todas las tecnologías utilizadas.</h3>
              <div className="baires-tech-pills-wrap">
                {caseData.technologies.map((tech, idx) => (
                  <span key={idx} className="baires-tech-pill-item">{tech}</span>
                ))}
              </div>
            </div>

            {/* Línea Serpiente: Segmento vertical derecho que baja hacia Outcome */}
            <div className="snake-solution-right-vert" aria-hidden="true"></div>

          </div>
        </section>

        {/* PARTE 3: EL RESULTADO / THE OUTCOME (Fondo Oscuro Pizarra / Dark Slate #242f3e) */}
        <section className="baires-outcome-wrapper">
          <div className="case-container baires-flow-container">

            {/* Línea Serpiente: Segmento vertical derecho en Outcome */}
            <div className="snake-outcome-right-vert" aria-hidden="true"></div>
            {/* Línea Serpiente: Curva hacia la izquierda con terminación en punto */}
            <div className="snake-outcome-terminal-wrapper" aria-hidden="true">
              <div className="snake-outcome-turn-left"></div>
              <div className="snake-outcome-horizontal-tail"></div>
              <div className="snake-outcome-bullet-dot"></div>
            </div>

            <div className="outcome-content-grid">

              {/* Columna Izquierda: Foto de Equipo en Oficina */}
              <div className="outcome-photo-col">
                <div className="outcome-image-wrapper">
                  <img 
                    src="/team-python.jpg" 
                    alt="Equipo de desarrollo e ingeniería en oficinas de SEOdigital" 
                    className="outcome-team-img"
                  />
                  <div className="outcome-image-overlay"></div>
                </div>
              </div>

              {/* Columna Derecha: Resultados + Formulario PDF */}
              <div className="outcome-info-col">
                <h2 className="baires-section-title outcome-title-white">
                  Resultados obtenidos<span className="dot orange-dot">.</span>
                </h2>
                <span className="outcome-sub-heading">Nuestro equipo:</span>

                <ul className="baires-outcome-bullets">
                  {caseData.impact.map((imp, idx) => (
                    <li key={idx} className="baires-bullet-row">
                      <span className="baires-bullet-marker">•</span>
                      <span className="baires-bullet-text">{imp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tarjeta Lead-Capture de descarga de PDF */}
                <div className="baires-outcome-pdf-card">
                  <h4 className="outcome-pdf-heading">Recibe este caso de estudio en PDF en tu email.</h4>
                  {pdfSent ? (
                    <div className="outcome-pdf-success-box">
                      <CheckCircle2 size={18} color="#ea580c" />
                      <span>¡Solicitud recibida! Te enviamos el reporte a <strong>{pdfEmail}</strong>.</span>
                    </div>
                  ) : (
                    <form onSubmit={handlePdfSubmit} className="baires-outcome-pdf-form">
                      <input 
                        type="email" 
                        placeholder="tu.nombre@empresa.com"
                        value={pdfEmail}
                        onChange={(e) => setPdfEmail(e.target.value)}
                        required
                        aria-label="Correo corporativo"
                        className="baires-outcome-pdf-input"
                      />
                      <button type="submit" className="baires-outcome-pdf-submit">
                        <span>Solicitar PDF</span>
                        <Send size={14} />
                      </button>
                    </form>
                  )}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* PARTE 4: PAGINACIÓN INFERIOR (Caso Anterior / Siguiente) */}
        {prevCase && nextCase && (
          <nav className="baires-pagination-bar" aria-label="Navegación entre casos de estudio">
            <div className="case-container pagination-container">
              <Link to={`/casos-de-estudio/${prevCase.slug}`} className="baires-nav-card nav-prev">
                <div className="nav-arrow-bubble">
                  <ArrowLeft size={18} />
                </div>
                <div className="nav-card-text">
                  <span className="nav-direction-label">Caso anterior</span>
                  <h5 className="nav-case-title">Conoce cómo ayudamos a {prevCase.title}</h5>
                </div>
              </Link>

              <Link to={`/casos-de-estudio/${nextCase.slug}`} className="baires-nav-card nav-next">
                <div className="nav-card-text text-right">
                  <span className="nav-direction-label">Siguiente caso</span>
                  <h5 className="nav-case-title">Conoce cómo ayudamos a {nextCase.title}</h5>
                </div>
                <div className="nav-arrow-bubble">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </div>
          </nav>
        )}

      </div>

      {/* Módulos Implementados en Grilla */}
      <section className="case-section modules-section">
        <div className="case-container">
          <div className="modules-block">
            <h3 className="modules-heading">
              <Layers size={20} />
              <span>Módulos y Componentes Clave de la Plataforma</span>
            </h3>
            <div className="modules-cards-grid">
              {caseData.modules.map((mod, idx) => (
                <div key={idx} className="module-corporate-card">
                  <div className="module-card-number">0{idx + 1}</div>
                  <h4 className="module-card-title">{mod}</h4>
                  <p className="module-card-detail">
                    Diseñado con arquitectura desacoplada, alta disponibilidad, validación estricta de esquemas y registro de auditoría.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Casos Relacionados */}
      {relatedCases.length > 0 && (
        <section className="case-related-section">
          <div className="case-container">
            <div className="related-header">
              <h3 className="related-title">Explora otros casos de éxito</h3>
              <Link to="/casos-de-estudio" className="related-all-link">
                <span>Ver todos los clientes</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="related-grid">
              {relatedCases.map((rel) => (
                <Link 
                  key={rel.id} 
                  to={`/casos-de-estudio/${rel.slug}`} 
                  className="related-card"
                >
                  <div className="related-card-header">
                    <span className="related-industry">{rel.industry}</span>
                    <span className="related-arrow"><ArrowRight size={16} /></span>
                  </div>
                  <h4 className="related-card-title">{rel.title}</h4>
                  <p className="related-card-desc">{rel.heroSubtitle || rel.summary}</p>
                  <div className="related-tech-row">
                    {rel.technologies.slice(0, 3).map((t, i) => (
                      <span key={i} className="related-tech-badge">{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="case-bottom-cta-section">
        <div className="case-container">
          <div className="bottom-cta-inner">
            <span className="cta-eyebrow">¿Tienes un desafío similar?</span>
            <h2 className="bottom-cta-title">
              Construyamos la solución de software que tu negocio necesita.
            </h2>
            <p className="bottom-cta-desc">
              Nuestro equipo de arquitectos e ingenieros diseña plataformas escalables adaptadas a tus objetivos estratégicos. Hablemos de tu proyecto hoy mismo.
            </p>
            <div className="bottom-cta-actions">
              <Link to="/contacto" className="btn-cta-primary">
                Agendar una llamada estratégica
              </Link>
              <a 
                href="https://wa.me/5491154177754?text=Hola!%20Me%20interesa%20conversar%20sobre%20un%20proyecto%20de%20software." 
                className="btn-cta-secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contacto directo por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
