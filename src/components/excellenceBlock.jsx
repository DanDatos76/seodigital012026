import React, { useRef } from "react";

import '../styles/ExcellenceBlock.css';

const ExcellenceBlock = () => {
  return (
    <section className="excellence-container">
      <div className="excellence-left">
        <h3><span>Excellence.</span><br />Our minimum bar<br />for client delivery.</h3>
        <p className="subtext">
          Over 130 awards, accolades, and achievements showcase our quality and commitment to client success.
        </p>
        <a href="#" className="trophy-link">Our trophy cabinet →</a>

        <div className="counters">
          <div className="counter-circle">
            <div className="counter-number">1,250+</div>
            <div className="counter-label">projects<br />delivered</div>
            <div className="text-circle">executed • success • delivered •</div>
          </div>
          <div className="counter-circle">
            <div className="counter-number">130+</div>
            <div className="counter-label">industry<br />sectors</div>
            <div className="text-circle">sectors • innovation • impact •</div>
          </div>
          <div className="counter-circle">
            <div className="counter-number">4.9/5</div>
            <div className="counter-label">client<br />rating</div>
            <div className="text-circle">clients • rating • feedback •</div>
          </div>
        </div>
      </div>

      <div className="excellence-right">
        <ul className="awards-list">
          <li><strong>FINANCIAL TIMES</strong><br />America’s Fastest-Growing Companies 2025</li>
          <li><strong>CIO 100 AWARDS</strong><br />Top 100 U.S. IT Innovators 2025</li>
          <li><strong>Clutch</strong><br />Nearshore North America Top Software Developers 2025</li>
          <li><strong>OUTSOURCING 100</strong><br />Top 100 Global Outsourcing Providers 2024</li>
          <li><strong>Inc. 5000 LIST</strong><br />America’s fastest-growing companies 2024</li>
          <li><strong>GLOBEE AWARDS</strong><br />Company of the Year – Artificial Intelligence 2024</li>
        </ul>
      </div>
    </section>
  );
};

export default ExcellenceBlock;
