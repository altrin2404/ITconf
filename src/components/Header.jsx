import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { confData } from '../data/conferenceData';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active-link' : '';

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem' }}>
            IT
          </div>
          <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            {confData.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Link to="/" className={isActive('/')} style={{ fontWeight: '500' }}>Home</Link>
          <Link to="/committees" className={isActive('/committees')} style={{ fontWeight: '500' }}>Committee</Link>
          <Link to="/speakers" className={isActive('/speakers')} style={{ fontWeight: '500' }}>Speakers</Link>
          <Link to="/call-for-papers" className={isActive('/call-for-papers')} style={{ fontWeight: '500' }}>CFP</Link>
          <Link to="/publication" className={isActive('/publication')} style={{ fontWeight: '500' }}>Publication</Link>
          
          <div className="dropdown">
            <span style={{ fontWeight: '500', cursor: 'pointer', padding: '10px 0' }}>Submission ▼</span>
            <div className="dropdown-content">
              <Link to="/submissions">Submission portal</Link>
              <Link to="/submissions#editorial-policy">Editorial Policy</Link>
              <Link to="/submissions#ai-guidelines">Guidelines for AI Tools</Link>
            </div>
          </div>

          <div className="dropdown">
            <span style={{ fontWeight: '500', cursor: 'pointer', padding: '10px 0' }}>Registration ▼</span>
            <div className="dropdown-content">
              <Link to="/registration">Registration</Link>
              <Link to="/registration#visa">Visa Application</Link>
            </div>
          </div>

          <Link to="/program" className={isActive('/program')} style={{ fontWeight: '500' }}>Program</Link>
          
          <div className="dropdown">
            <span style={{ fontWeight: '500', cursor: 'pointer', padding: '10px 0' }}>More ▼</span>
            <div className="dropdown-content">
              <Link to="/history">History</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="mobile-nav-toggle" style={{ display: 'none', cursor: 'pointer', fontSize: '1.5rem' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown" style={{
          position: 'absolute', top: '100%', left: 0, right: 0, 
          background: 'var(--bg-surface-solid)', 
          borderBottom: '1px solid var(--border-color)',
          padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px'
        }}>
          <Link to="/">Home</Link>
          <Link to="/committees">Committee</Link>
          <Link to="/speakers">Speakers</Link>
          <Link to="/call-for-papers">CFP</Link>
          <Link to="/publication">Publication</Link>
          <Link to="/submissions">Submission</Link>
          <Link to="/registration">Registration</Link>
          <Link to="/program">Program</Link>
          <Link to="/history">History</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
