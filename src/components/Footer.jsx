import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <Link 
              to="/" 
              className="footer-brand"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src="/ekochamps-logo.png" alt="EkoChamps Logo" className="footer-logo" />
              <h3>EkoChamps</h3>
            </Link>

          </div>

          <div className="footer-links">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/be-ekochamps">About</Link></li>
              <li><Link to="/download-app">Contact</Link></li>
            </ul>
          </div>
          <div className="social-links">
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 EkoChamps</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;