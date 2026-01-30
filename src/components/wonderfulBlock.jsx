// src/components/WonderfulBlock.jsx
import React, { useRef } from "react";

import "../styles/WonderfulBlock.css";

const people = [
  {
    role: "Software developers",
    img: "/assets/1.jpeg",
    bgShape: "bg-shape-red",
  },
  {
    role: "QA engineers",
    img: "/assets/2.jpeg",
    bgShape: "bg-shape-blue",
  },
  {
    role: "UX designers",
    img: "/assets/3.jpeg",
    bgShape: "bg-shape-pink",
  },
  {
    role: "Data scientists",
    img: "/assets/4.jpeg",
    bgShape: "bg-shape-yellow",
  },
  {
    role: "Project managers",
    img: "/assets/hero-img2.png",
    bgShape: "bg-shape-green",
  },
];

export default function WonderfulBlock() {
  return (
    <div className="wonderful-section">
      <h2>No need to wonder.<br />
        <span>Working with us is wonderful<span className="dot">.</span></span>
      </h2>

      <div className="features">
        <div className="feature">
          <span className="check">✔</span>
          <strong>The right people</strong>
          <p>Our rigorous hiring process ensures only rock-solid, skilled candidates make it through.</p>
        </div>
        <div className="feature">
          <span className="check">✔</span>
          <strong>The right team</strong>
          <p>From solo engineers to multi-team engagements. Flexible project management options.</p>
        </div>
        <div className="feature">
          <span className="check">✔</span>
          <strong>The right place</strong>
          <p>Our nearshore teams are online when you are. Clear communication in English.</p>
        </div>
        <div className="feature">
          <span className="check">✔</span>
          <strong>The right time</strong>
          <p>Teams that start when you need them. Scale up or down with ease.</p>
        </div>
      </div>

      <div className="people-row">
        {people.map((person, index) => (
          <div key={index} className="person">
            <div className={`img-wrapper ${person.bgShape}`}>
              <img src={person.img} alt={person.role} />
            </div>
            <span>{person.role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
