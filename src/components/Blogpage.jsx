import React from 'react';
import '../styles/Blog.css';

export default function BlogPage() {
  return (
    <div className="riac-container">
      <section className="hero">
        <div className="hero-text">
          <h4 className="category">Technology</h4>
          <h1 className="title">What's the Best AI Inference Platform for Businesses?</h1>
          <p className="subtitle">Wondering what’s the best platform for AI inference in 2025? We break down the top cloud providers...</p>
        </div>
        <div className="hero-image"></div>

        <aside className="latest-posts">
          <h4>Latest Posts</h4>
          <ul>
            <li>Safer SDS Governance: Keeping Compliance Verifiable</li>
            <li>Multi-Agent Governance with Intent Layers</li>
            <li>When Open Source Becomes a Liability...</li>
            <li>Node.js Scalability and SaaS...</li>
            <li>View Performance Optimization</li>
          </ul>
        </aside>
      </section>

      <section className="software-dev">
        <h3>Software Development</h3>
        <div className="cards">
          <div className="card">Vercel vs React: It’s a Budget Decision</div>
          <div className="card">Python Multiprocessing vs Multithreading</div>
          <div className="card">Node.js Scalability & SaaS</div>
        </div>
      </section>

      <section className="biz-tech">
        <h3>Biz & Tech</h3>
        <div className="cards">
          <div className="card">Lessons from a CTO</div>
          <div className="card">Future of AI-Powered Enterprise</div>
          <div className="card">AI Chip Companies</div>
        </div>
      </section>
    </div>
  );
}
