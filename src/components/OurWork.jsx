import React from 'react';
import '../styles/works.css';

export default function Works() {
  return (
    <div className="clients-container">

      {/* HEADER SECTION */}
      <section className="clients-header">
        <p className="breadcrumb">Our Clients</p>
        <h1 className="title">Over 10 Years of <br/>Over Delivering.</h1>
        <p className="subtitle">500+ active clients with an average relationship of over 3 years. And a 96% retention rate.</p>

        <div className="header-images">
          <div className="img-box 1.jpeg"></div>
          <div className="img-box img2"></div>
          <div className="img-box img3"></div>
        </div>
      </section>

      {/* FILTER */}
      <section className="clients-filter">
        <select>
          <option>All Industries</option>
        </select>
      </section>

      {/* GRID OF CLIENT CARDS */}
      <section className="clients-grid">
        {[...Array(24)].map((_, i) => (
          <div className="client-card" key={i}>
            <div className="logo-placeholder">Logo {i + 1}</div>
            <p className="description">Example client description goes here.</p>
            <span className="industry-tag">Some Industry</span>
          </div>
        ))}
      </section>

    </div>
  );
}