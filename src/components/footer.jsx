// Footer.jsx
import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Columna 1 */}
          <div className="footer-column">
            <h4>Descubre la magia de SEOdigital</h4>
            <ul>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Clientes</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Industry Insights</a></li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="footer-column">
            <h4>Careers</h4>
            <ul>
              <li><a href="#">Job Opportunities</a></li>
              <li><a href="#">Talent Referrals</a></li>
            </ul>
          </div>

          {/* Columna de contacto */}
          <div className="footer-contact grey-background">
            <h4>Get in touch</h4>
            <div className="contact-buttons">
              <button className="contact-btn">Contact Us</button>
              <button className="call-btn">Schedule a Call →</button>
            </div>

            <div className="phone">📞 +1 (408) 478-2739</div>

            <p className="insight-text">
              Get insights from the experts on building and scaling technology teams.
            </p>

            <form className="newsletter">
              <input type="email" placeholder="name@email.com" />
              <button type="submit">Subscribe 📩</button>
            </form>

            <label className="checkbox">
              <input type="checkbox" /> I accept the{" "}
              <a href="#">Privacy Policy</a>.
            </label>
          </div>
        </div>

        {/* Parte inferior del footer */}
        <div className="footer-bottom">
          <p>
            <a href="#">Privacy Policy</a> |{" "}
            <a href="#">Terms of Service</a> |{" "}
            <a href="#">Do Not Sell My Personal Information</a>
          </p>

          <p>© 2025 SEOdigital. All rights reserved.</p>

          <div className="social-icons">
            <a href="#">🔗</a>
            <a href="#">📘</a>
            <a href="#">✖️</a>
            <a href="#">📷</a>
            <a href="#">▶️</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
