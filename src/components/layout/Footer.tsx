import React from 'react';
import { Link } from 'react-router';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="footer-premium"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="footer-main">
          {/* LEFT: Branding */}
          <div className="footer-brand">
            <Link to="/" aria-label="sBLOOM Home" className="footer-logo-link">
              <img src="/sbloom-logo-v2.jpg" alt="sBLOOM Logo" className="footer-logo" />
            </Link>
            <p className="footer-desc">
              S-Bloom is a specialized digital growth partner for expertise-led organizations in healthcare, education, and professional services.
            </p>
          </div>

          {/* MIDDLE: Links */}
          <div className="footer-links-grid">
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">INDUSTRIES</h4>
              <Link to="/industries/education" className="footer-nav-link">Education</Link>
              <Link to="/industries/healthcare" className="footer-nav-link">Healthcare</Link>
              <Link to="/industries/professional-services" className="footer-nav-link">Consulting & Professional Services</Link>
            </div>
            
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">SOLUTIONS</h4>
              <Link to="/solutions/build" className="footer-nav-link">Build</Link>
              <Link to="/solutions/create" className="footer-nav-link">Create</Link>
              <Link to="/solutions/promote" className="footer-nav-link">Promote</Link>
            </div>
            
            <div className="footer-nav-col">
              <h4 className="footer-nav-title">COMPANY</h4>
              <Link to="/about" className="footer-nav-link">About</Link>
              <Link to="/how-it-works" className="footer-nav-link">How It Works</Link>
              <Link to="/contact" className="footer-nav-link">Contact</Link>
              <Link to="/creative-workspace" className="footer-nav-link">Creative Workspace</Link>
            </div>
          </div>
        </div>

        {/* BOTTOM: Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <p>&copy; {new Date().getFullYear()} sBLOOM. All rights reserved.</p>
          </div>

          <div className="footer-bottom-right">
            <div className="footer-bottom-links">
              <a href="#privacy" className="footer-bottom-link">Privacy Policy</a>
              <a href="#terms" className="footer-bottom-link">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

