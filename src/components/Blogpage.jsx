 import React from 'react';
import '../styles/blog.css';

export default function BlogPage() {
  return (
    <div className="riac-container">
      <section className="hero">
        <div className="hero-text">
          <h4 className="category">Tecnología</h4>
          <h1 className="title">¿Cuál es la mejor plataforma de inferencia de IA para empresas?</h1>
          <p className="subtitle">
            ¿Te preguntás cuál es la mejor plataforma para inferencia de IA en 2025?
            Analizamos los principales proveedores cloud y sus capacidades...
          </p>
        </div>
        <div className="hero-image"></div>

        <aside className="latest-posts">
          <h4>Últimas publicaciones</h4>
          <ul>
            <li>Gobernanza segura de SDS: cómo mantener el cumplimiento verificable</li>
            <li>Gobernanza multi-agente con capas de intención</li>
            <li>Cuando el código abierto se convierte en un riesgo...</li>
            <li>Escalabilidad de Node.js y SaaS...</li>
            <li>Optimización del rendimiento de vistas</li>
          </ul>
        </aside>
      </section>

      <section className="software-dev">
        <h3>Desarrollo de software</h3>
        <div className="cards">
          <div className="card">Vercel vs React: una decisión de presupuesto</div>
          <div className="card">Multiprocesamiento vs multihilo en Python</div>
          <div className="card">Escalabilidad de Node.js y SaaS</div>
        </div>
      </section>

      <section className="biz-tech">
        <h3>Negocios y tecnología</h3>
        <div className="cards">
          <div className="card">Lecciones de un CTO</div>
          <div className="card">El futuro de la empresa impulsada por IA</div>
          <div className="card">Empresas de chips de inteligencia artificial</div>
        </div>
      </section>
    </div>
  );
}
