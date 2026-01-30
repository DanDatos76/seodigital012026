import React, { useRef } from "react";

import '../styles/map.css';
import worldMap from '../assets/mapa.png'; // Replace with your actual image path

const LocationsMap = () => {
  return (
    <section className="locations-section">
      <h2 className="locations-title">Nuestras Ubicaciones</h2>

      <div className="map-container">
        <img src={worldMap} alt="World Map" className="map-image" />

        {/* USA Marker */}
        <div className="marker usa">
          <div className="pin"></div>
          <div className="label">
            <strong>USA</strong>
            <br />2 Localizaciones
          </div>
        </div>

        {/* España Marker */}
        <div className="marker spain">
          <div className="pin"></div>
          <div className="label">
            <strong>España</strong>
            <br />4 Localizaciones
          </div>
        </div>

        {/* Argentina Marker */}
        <div className="marker argentina">
          <div className="pin"></div>
          <div className="label">
            <strong>Argentina</strong>
            <br />4 Localizaciones
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationsMap;