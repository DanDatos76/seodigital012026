import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  SlidersHorizontal, 
  Building2, 
  Star, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { casesData, industriesList } from '../data/casesData';
import '../styles/casosDeEstudio.css';

export default function CasosDeEstudio() {
  const [selectedIndustry, setSelectedIndustry] = useState('Todas las industrias');
  const [searchQuery, setSearchQuery] = useState('');

  // Casos destacados para el carrusel/hero superior (estilo BairesDev Google, Rolls-Royce, Urban Outfitters)
  const featuredCases = useMemo(() => {
    return casesData.filter((c) => c.featured).slice(0, 3);
  }, []);

  // Filtrado reactivo de casos
  const filteredCases = useMemo(() => {
    return casesData.filter((c) => {
      const matchIndustry =
        selectedIndustry === 'Todas las industrias' ||
        c.industry.toLowerCase().includes(selectedIndustry.toLowerCase());

      const q = searchQuery.toLowerCase().trim();
      const matchQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.client.toLowerCase().includes(q) ||
        c.industry.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.technologies.some((t) => t.toLowerCase().includes(q));

      return matchIndustry && matchQuery;
    });
  }, [selectedIndustry, searchQuery]);

  return (
    <div className="casos-corporate-page">
      
      {/* HERO PRINCIPAL (Estilo BairesDev Clients) */}
      <section className="clients-baires-hero">
        <div className="hero-grid-pattern"></div>
        <div className="case-container hero-center-container">
          <span className="hero-eyebrow-badge">
            <Sparkles size={14} />
            NUESTROS CLIENTES & CASOS DE ÉXITO
          </span>

          <h1 className="hero-super-title">
            Más de 10 Años de Entrega <br />
            Sobresaliente<span className="dot">.</span>
          </h1>

          <p className="hero-super-subtitle">
            Plataformas empresariales, arquitectura cloud y soluciones de software a medida que multiplican la capacidad operativa y generan valor continuo para organizaciones líderes.
          </p>

          {/* TARJETAS DESTACADAS SUPERIORES (Estilo BairesDev 3 Featured Cards) */}
          <div className="featured-cards-row">
            {featuredCases.map((fCase) => (
              <Link 
                key={fCase.id} 
                to={`/casos-de-estudio/${fCase.slug}`}
                className="featured-cover-card"
                style={{ background: fCase.coverGradient }}
              >
                <div className="featured-card-overlay"></div>
                <div className="featured-card-content">
                  <div className="featured-card-top-header">
                    <span className="featured-card-tag">{fCase.industry}</span>
                    {fCase.logo && (
                      <div className="featured-card-logo-box">
                        <img src={fCase.logo} alt={`Logo ${fCase.title}`} className="featured-card-logo-img" />
                      </div>
                    )}
                  </div>
                  <h3 className="featured-card-client">{fCase.title}</h3>
                  <p className="featured-card-desc">{fCase.heroSubtitle || fCase.summary}</p>
                  <span className="featured-card-link">
                    <span>Ver caso de estudio</span>
                    <ArrowRight size={15} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* SECCIÓN DE FILTRO Y BÚSQUEDA */}
      <section className="clients-filter-section" id="listado-clientes">
        <div className="case-container">
          <div className="filter-controls-bar">
            
            <div className="filter-dropdown-wrapper">
              <label htmlFor="industry-filter" className="filter-label">
                <SlidersHorizontal size={16} />
                <span>Filtrar por industria:</span>
              </label>
              <select
                id="industry-filter"
                className="industry-select"
                value={selectedIndustry}
                onChange={(e) => setSelectedIndustry(e.target.value)}
              >
                {industriesList.map((ind, idx) => (
                  <option key={idx} value={ind}>{ind}</option>
                ))}
              </select>
            </div>

            <div className="search-input-wrapper">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Buscar por cliente, tecnología o palabras clave..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Buscar casos de estudio"
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  className="search-clear-btn"
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

          </div>

          <div className="filter-status-row">
            <span className="counter-text">
              Mostrando <strong>{filteredCases.length}</strong> de {casesData.length} soluciones corporativas
            </span>
            {selectedIndustry !== 'Todas las industrias' && (
              <button 
                type="button" 
                onClick={() => setSelectedIndustry('Todas las industrias')} 
                className="reset-filter-btn"
              >
                Restablecer filtro ({selectedIndustry})
              </button>
            )}
          </div>
        </div>
      </section>

      {/* GRILLA DE TARJETAS DE CLIENTES (Referencia BairesDev Clients Grid) */}
      <section className="clients-grid-section">
        <div className="case-container">
          {filteredCases.length === 0 ? (
            <div className="no-results-box">
              <Building2 size={48} className="no-results-icon" />
              <h3>No se encontraron clientes para la búsqueda</h3>
              <p>Prueba con otros términos de búsqueda o selecciona otra categoría.</p>
              <button 
                type="button" 
                onClick={() => { setSelectedIndustry('Todas las industrias'); setSearchQuery(''); }}
                className="btn-reset-all"
              >
                Ver todos los clientes
              </button>
            </div>
          ) : (
            <div className="corporate-clients-grid">
              {filteredCases.map((c) => (
                <article key={c.id} className="corporate-client-card">
                  
                  {/* Fila Superior: Logo/Monograma y Enlace Directo */}
                  <div className="card-top-row">
                    <div className="card-logo-badge">
                      {(c.logo || (c.coverImage && c.coverImage.includes('/cases/'))) ? (
                        <div className="card-brand-logo-box">
                          <img 
                            src={c.logo || c.coverImage} 
                            alt={c.client} 
                            className="card-brand-logo" 
                          />
                        </div>
                      ) : (
                        <span 
                          className="card-brand-monogram" 
                          style={{ borderColor: c.accentColor || '#6223cc', color: c.accentColor || '#6223cc' }}
                        >
                          {c.title.slice(0, 2).toUpperCase()}
                        </span>
                      )}
                      <div className="card-brand-details">
                        <h3 className="card-brand-name">{c.title}</h3>
                        <span className="card-industry-tag">{c.industry}</span>
                      </div>
                    </div>

                    <Link 
                      to={`/casos-de-estudio/${c.slug}`} 
                      className="card-case-link" 
                      title={`Ver caso de estudio de ${c.title}`}
                      aria-label={`Ver caso de estudio de ${c.title}`}
                    >
                      <span>Ver caso</span>
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  {/* Cita / Extracto Destacado */}
                  <div className="card-quote-box">
                    <p className="card-quote-text">
                      <span className="quote-accent">“</span>
                      {c.quote || c.heroSubtitle || c.summary}
                      <span className="quote-accent">”</span>
                    </p>
                  </div>

                  {/* Resumen del Proyecto */}
                  <p className="card-summary-snippet">
                    {c.summary}
                  </p>

                  {/* Fila Inferior: Tecnologías & Botón */}
                  <div className="card-bottom-row">
                    <div className="card-tech-badges">
                      {c.technologies.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="tech-badge-item">{t}</span>
                      ))}
                      {c.technologies.length > 3 && (
                        <span className="tech-badge-item tech-more">+{c.technologies.length - 3}</span>
                      )}
                    </div>

                    <Link 
                      to={`/casos-de-estudio/${c.slug}`} 
                      className="card-action-btn"
                    >
                      <span>Caso completo</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SECCIÓN DE SOCIAL PROOF & CONFIANZA CORPORATIVA (Referencia BairesDev Clutch) */}
      <section className="clients-trust-section">
        <div className="case-container">
          <div className="trust-card-banner">
            
            <div className="trust-col-info">
              <div className="clutch-rating-pill">
                <span className="clutch-brand">CALIFICACIÓN EN CLUTCH</span>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#ea580c" color="#ea580c" />
                  ))}
                  <strong className="rating-score">4.9 / 5.0</strong>
                </div>
              </div>
              <h2 className="trust-title">
                Respaldados por procesos certificados y talento sénior comprobado.
              </h2>
              <p className="trust-desc">
                Nuestros equipos operan bajo marcos de trabajo ágiles y normativas internacionales de calidad (ISO 9001), seguridad de la información (ISO 27001) y gobernanza de inteligencia artificial (ISO 42001), garantizando entregas predecibles y sin desvíos.
              </p>
            </div>

            <div className="trust-col-metrics">
              <div className="trust-stat-item">
                <span className="trust-stat-num">96%</span>
                <span className="trust-stat-lbl">Tasa de retención de clientes corporativos</span>
              </div>
              <div className="trust-stat-item">
                <span className="trust-stat-num">+10</span>
                <span className="trust-stat-lbl">Años de experiencia en ingeniería de software</span>
              </div>
              <div className="trust-stat-item">
                <span className="trust-stat-num">100%</span>
                <span className="trust-stat-lbl">Soberanía de código y confidencialidad protegida</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA FINAL INSTITUCIONAL */}
      <section className="clients-final-cta-section">
        <div className="case-container">
          <div className="final-cta-card">
            <span className="final-cta-badge">INICIAR UN PROYECTO</span>
            <h2 className="final-cta-heading">
              ¿Listo para transformar tus desafíos en la próxima historia de éxito?
            </h2>
            <p className="final-cta-subtext">
              Analicemos juntos los requerimientos de tu empresa y diseñemos una arquitectura de software robusta, escalable y orientada a resultados concretos.
            </p>
            <div className="final-cta-buttons-row">
              <Link to="/contacto" className="btn-primary-corporate">
                <span>Agendar reunión técnica</span>
                <ArrowRight size={16} />
              </Link>
              <a 
                href="https://wa.me/5491154177754?text=Hola!%20Me%20gustar%C3%ADa%20conversar%20sobre%20un%20proyecto%20de%20software." 
                className="btn-secondary-corporate"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contacto directo por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
