import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, BookOpen } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-primary">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="ATC Logo" style={{ width: '40px', height: '40px', objectFit: 'contain', background: 'white', borderRadius: '4px' }} />
              <div className="logo-text text-white">
                <span className="logo-title" style={{color: 'white'}}>Aalok Tuition</span>
                <span className="logo-subtitle text-accent">Centre</span>
              </div>
            </Link>
            <p className="footer-desc">
              Building Tomorrow's Leaders, Today. The premier destination for academic excellence in Birgunj.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/aalok.tuition.centre/" target="_blank" rel="noreferrer" className="social-link">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/courses">Our Courses</Link></li>
              <li><Link to="/faculty">Faculty</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={20} className="text-accent" />
                <span>Birgunj-13, Tejarth Tol, Nepal</span>
              </li>
              <li>
                <Phone size={20} className="text-accent" />
                <span>+977 9814207127, 9825262406</span>
              </li>
              <li>
                <Mail size={20} className="text-accent" />
                <span>info@aaloktuition.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p>&copy; {new Date().getFullYear()} Aalok Tuition Centre. All rights reserved.</p>
          <Link to="/admin" style={{ color: 'rgba(255, 255, 255, 0.4)', textDecoration: 'none', fontSize: '0.85rem' }} className="admin-link-footer">Admin Portal</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
