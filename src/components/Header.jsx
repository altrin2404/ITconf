import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header" style={{ padding: 'var(--spacing-md) 0', backgroundColor: 'var(--bg-main)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <div className="logo">
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }} onClick={closeMenu}>
            IT TRENDS
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul style={{ display: 'flex', gap: 'var(--spacing-lg)' }}>
            <li><Link to="/" style={{ fontWeight: 500 }}>Home</Link></li>
            <li><Link to="/committees" style={{ fontWeight: 500 }}>Committees</Link></li>
            <li><Link to="/call-for-papers" style={{ fontWeight: 500 }}>Call For Papers</Link></li>
            <li><Link to="/speakers" style={{ fontWeight: 500 }}>Speakers</Link></li>
            <li><Link to="/important-dates" style={{ fontWeight: 500 }}>Important Dates</Link></li>
            <li><Link to="/submissions" style={{ fontWeight: 500 }}>Submissions</Link></li>
          </ul>
        </nav>
        
        <div className="header-actions">
          <Link to="/registration" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Registration</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Mobile Navigation Dropdown */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
            <li><Link to="/" onClick={closeMenu} style={{ fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>Home</Link></li>
            <li><Link to="/committees" onClick={closeMenu} style={{ fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>Committees</Link></li>
            <li><Link to="/call-for-papers" onClick={closeMenu} style={{ fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>Call For Papers</Link></li>
            <li><Link to="/speakers" onClick={closeMenu} style={{ fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>Speakers</Link></li>
            <li><Link to="/important-dates" onClick={closeMenu} style={{ fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>Important Dates</Link></li>
            <li><Link to="/submissions" onClick={closeMenu} style={{ fontWeight: 500, display: 'block', padding: '0.5rem 0' }}>Submissions</Link></li>
            <li><Link to="/registration" onClick={closeMenu} className="btn btn-primary" style={{ display: 'block', textAlign: 'center' }}>Registration</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
