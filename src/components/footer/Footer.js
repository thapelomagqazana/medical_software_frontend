import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-section">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Support</h4>
              <ul className="footer-links">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><a href="/terms-of-service">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </footer>
      );
};

export default Footer;
