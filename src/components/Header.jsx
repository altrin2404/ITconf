import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { confData } from '../data/conferenceData';

const NAV_LINK = {
  fontWeight: 500,
  fontSize: '0.9rem',
  color: 'rgba(226,232,240,0.75)',
  letterSpacing: '0.02em',
  transition: 'color 0.2s',
  padding: '6px 0',
  position: 'relative',
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const linkStyle = (path) => ({
    ...NAV_LINK,
    color: isActive(path) ? '#38bdf8' : 'rgba(226,232,240,0.75)',
  });

  return (
    <>
      <style>{`
        /* ── Header base ── */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          transition: background 0.4s, border-color 0.4s, box-shadow 0.4s;
          border-bottom: 1px solid rgba(100,120,255,0.18);
          background: rgba(8,13,31,0.88);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 32px rgba(0,0,0,0.4), 0 0 40px rgba(56,100,255,0.05);
        }
        .site-header.scrolled {
          background: rgba(8,13,31,0.95);
          border-bottom: 1px solid rgba(100,120,255,0.25);
          box-shadow: 0 4px 32px rgba(0,0,0,0.5), 0 0 40px rgba(56,100,255,0.08);
        }


        /* ── Nav links hover ── */
        .nav-link {
          color: rgba(226,232,240,0.72);
          font-weight: 500;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          padding: 6px 0;
          position: relative;
          transition: color 0.22s;
          white-space: nowrap;
        }
        .nav-link:hover { color: #fff; }
        .nav-link.active {
          color: #38bdf8;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #38bdf8, #818cf8);
          border-radius: 2px;
        }

        /* ── Dropdown ── */
        .dropdown {
          position: relative;
          padding: 10px 0;
        }
        /* Invisible bridge to cover the gap between trigger and panel */
        .dropdown::after {
          content: '';
          position: absolute;
          top: 100%;
          left: -10px;
          right: -10px;
          height: 18px;
          background: transparent;
          display: none;
        }
        .dropdown:hover::after {
          display: block;
        }
        .dropdown-trigger {
          color: rgba(226,232,240,0.72);
          font-weight: 500; font-size: 0.9rem;
          cursor: pointer; padding: 0;
          display: flex; align-items: center; gap: 4px;
          transition: color 0.22s; white-space: nowrap;
          user-select: none;
        }
        .dropdown-trigger:hover { color: #fff; }
        .dropdown-trigger svg {
          transition: transform 0.25s;
        }
        .dropdown:hover .dropdown-trigger svg {
          transform: rotate(180deg);
        }
        .dropdown-content {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: calc(100% + 14px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          min-width: 200px;
          background: rgba(10,14,23,0.97);
          border: 1px solid rgba(56,189,248,0.14);
          border-radius: 12px;
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);
          padding: 0.5rem 0;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          z-index: 10;
          transition: opacity 0.25s ease, transform 0.25s ease, visibility 0.25s;
          pointer-events: none;
        }
        .dropdown:hover .dropdown-content {
          visibility: visible;
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .dropdown-content a {
          display: block;
          padding: 9px 18px;
          color: rgba(226,232,240,0.7);
          font-size: 0.875rem;
          transition: color 0.18s, background 0.18s;
        }
        .dropdown-content a:hover {
          color: #38bdf8;
          background: rgba(56,189,248,0.06);
        }

        /* ── Logo ── */
        .logo-circle {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1rem; color: #fff;
          flex-shrink: 0;
        }
        .logo-name {
          background: linear-gradient(90deg, #38bdf8, #818cf8, #e879f9, #38bdf8);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textFlow 4s linear infinite;
          font-size: 1.4rem;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
        }
        @keyframes textFlow { to { background-position: 300% center; } }

        /* ── Mobile toggle ── */
        .mobile-nav-toggle {
          display: none;
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(226,232,240,0.85);
          border-radius: 8px;
          width: 38px; height: 38px;
          align-items: center; justify-content: center;
          font-size: 1.2rem; cursor: pointer;
          transition: border-color 0.2s;
        }
        .mobile-nav-toggle:hover { border-color: rgba(56,189,248,0.4); color: #38bdf8; }

        /* ── Mobile dropdown ── */
        .mobile-nav-dropdown {
          position: absolute;
          top: 100%; left: 0; right: 0;
          background: rgba(8,13,40,0.97);
          border-bottom: 1px solid rgba(100,120,255,0.18);
          padding: 1.25rem 1.5rem;
          display: flex; flex-direction: column; gap: 1rem;
          backdrop-filter: blur(20px);
        }
        .mobile-nav-dropdown a {
          color: rgba(226,232,240,0.75);
          font-size: 1rem; font-weight: 500;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }
        .mobile-nav-dropdown a:hover { color: #38bdf8; }

        @media(max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
        }
      `}</style>



      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">

          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '70px' }}
          >
            {/* Logo */}
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="logo-name">{confData.name}</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="desktop-nav" style={{ display: 'flex', gap: '22px', alignItems: 'center' }}>
              <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
              <Link to="/committees" className={`nav-link${isActive('/committees') ? ' active' : ''}`}>Committee</Link>
              <Link to="/speakers" className={`nav-link${isActive('/speakers') ? ' active' : ''}`}>Speakers</Link>
              <Link to="/call-for-papers" className={`nav-link${isActive('/call-for-papers') ? ' active' : ''}`}>CFP</Link>


              <div className="dropdown">
                <span className="dropdown-trigger">
                  Submission
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <div className="dropdown-content">
                  <Link to="/submissions">Submission Portal</Link>
                  <Link to="/submissions#editorial-policy">Editorial Policy</Link>
                  <Link to="/submissions#ai-guidelines">Guidelines for AI Tools</Link>
                </div>
              </div>

              <Link to="/registration" className={`nav-link${isActive('/registration') ? ' active' : ''}`}>Registration</Link>
              <Link to="/important-dates" className={`nav-link${isActive('/important-dates') ? ' active' : ''}`}>Dates</Link>
              <Link to="/program" className={`nav-link${isActive('/program') ? ' active' : ''}`}>Program</Link>

              <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact Us</Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-nav-dropdown">
            <Link to="/">Home</Link>
            <Link to="/committees">Committee</Link>
            <Link to="/speakers">Speakers</Link>
            <Link to="/call-for-papers">CFP</Link>

            <Link to="/submissions">Submission</Link>
            <Link to="/registration">Registration</Link>
            <Link to="/important-dates">Important Dates</Link>
            <Link to="/program">Program</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
