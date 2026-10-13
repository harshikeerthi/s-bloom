
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const location = useLocation();

  const handleMobileClick = () => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const industries = [
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Professionals', href: '/industries/professional-services' }
  ];

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo-container" aria-label="sBLOOM Home" onClick={handleMobileClick}>
          <img src="/sbloom-logo-transparent.png" alt="sBLOOM Logo" className="logo-img" />
        </Link>
        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} onClick={handleMobileClick}>Home</Link>
            </li>
            
            <li 
              ref={dropdownRef}
              className="nav-dropdown-wrapper" 
              onMouseEnter={() => !mobileMenuOpen && setDropdownOpen(true)}
              onMouseLeave={() => !mobileMenuOpen && setDropdownOpen(false)}
            >
              <button 
                type="button"
                className={`nav-link nav-dropdown-btn ${location.pathname.includes('/industries') ? 'active' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownOpen((prev) => !prev);
                }}
                aria-expanded={dropdownOpen}
              >
                Industries <ChevronDown size={16} className={`dropdown-chevron ${dropdownOpen ? 'rotated' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 6, x: mobileMenuOpen ? 0 : '-50%' }}
                    animate={{ opacity: 1, y: 0, x: mobileMenuOpen ? 0 : '-50%' }}
                    exit={{ opacity: 0, y: 4, x: mobileMenuOpen ? 0 : '-50%' }}
                    transition={{ duration: 0.18 }}
                    className="nav-dropdown"
                    style={mobileMenuOpen ? { left: 0 } : { left: '50%' }}
                  >
                    {industries.map((ind) => (
                      <Link 
                        key={ind.name} 
                        to={ind.href} 
                        className={`dropdown-item ${location.pathname === ind.href ? 'active' : ''}`}
                        aria-current={location.pathname === ind.href ? 'page' : undefined}
                        onClick={handleMobileClick}
                      >
                        <span className="dropdown-item-title">{ind.name}</span>
                        <span className="dropdown-item-arrow">→</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            
            <li>
              <Link to="/solutions" className={`nav-link ${location.pathname.includes('/solutions') ? 'active' : ''}`} aria-current={location.pathname === '/solutions' ? 'page' : undefined} onClick={handleMobileClick}>Solutions</Link>
            </li>
            
            <li>
              <Link to="/how-it-works" className={`nav-link ${location.pathname === '/how-it-works' ? 'active' : ''}`} aria-current={location.pathname === '/how-it-works' ? 'page' : undefined} onClick={handleMobileClick}>How It Works</Link>
            </li>
            
            <li>
              <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} aria-current={location.pathname === '/about' ? 'page' : undefined} onClick={handleMobileClick}>About</Link>
            </li>
            <li className="nav-workspace-item" style={{ marginLeft: '16px', borderLeft: '1px solid var(--border-subtle)', paddingLeft: '24px' }}>
              <Link to="/creative-workspace" className={`nav-link ${location.pathname === '/creative-workspace' ? 'active' : ''}`} style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }} onClick={handleMobileClick}>Creative Workspace</Link>
            </li>
            <li className="nav-cta-item">
              <Link to="/contact" className="btn btn-primary btn-nav" onClick={handleMobileClick}>Talk to sBLOOM</Link>
            </li>
          </ul>
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};
