import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { confData } from '../data/conferenceData';
import { FiMenu, FiX } from 'react-icons/fi';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submissionOpen, setSubmissionOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSubmissionOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        /* ── Header wrapper ── */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #fff;
          border-bottom: 1px solid #e8e8e8;
          transition: box-shadow 0.3s;
        }
        .site-header.scrolled {
          box-shadow: 0 2px 16px rgba(0,0,0,0.10);
        }

        /* ── Top accent bar ── */
        .header-accent {
          height: 4px;
          background: linear-gradient(90deg, #8B1A1A 0%, #c0392b 60%, #8B1A1A 100%);
        }

        /* ── Inner layout ── */
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
        }

        /* ── Logo ── */
        .header-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-badge {
          width: 40px;
          height: 40px;
          background: #8B1A1A;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 900;
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          letter-spacing: -0.5px;
          flex-shrink: 0;
        }
        .logo-text-main {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.35rem;
          color: #8B1A1A;
          line-height: 1;
        }
        .logo-text-sub {
          font-size: 0.67rem;
          color: #777;
          font-weight: 500;
          letter-spacing: 0.03em;
          line-height: 1.2;
          max-width: 200px;
        }

        /* ── Desktop nav ── */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: #3d3d3d;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
          position: relative;
        }
        .nav-link:hover {
          color: #8B1A1A;
          background: #fdf3f3;
        }
        .nav-link.active {
          color: #8B1A1A;
          font-weight: 600;
          background: #fdf3f3;
        }
        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 12px;
          right: 12px;
          height: 2px;
          background: #8B1A1A;
          border-radius: 2px;
        }

        /* ── Dropdown ── */
        .nav-dropdown {
          position: relative;
          padding: 6px 0;
        }
        .nav-dropdown-trigger {
          font-size: 0.9rem;
          font-weight: 500;
          color: #3d3d3d;
          padding: 6px 12px;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          user-select: none;
          white-space: nowrap;
        }
        .nav-dropdown-trigger:hover {
          color: #8B1A1A;
          background: #fdf3f3;
        }
        .nav-dropdown-trigger svg {
          transition: transform 0.22s;
        }
        .nav-dropdown:hover .nav-dropdown-trigger svg {
          transform: rotate(180deg);
        }
        .nav-dropdown-panel {
          visibility: hidden;
          opacity: 0;
          position: absolute;
          top: calc(100% + 4px);
          left: 50%;
          transform: translateX(-50%) translateY(6px);
          min-width: 210px;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          padding: 0.4rem 0;
          z-index: 100;
          transition: opacity 0.22s, transform 0.22s, visibility 0.22s;
          pointer-events: none;
        }
        .nav-dropdown-panel::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
        }
        .nav-dropdown:hover .nav-dropdown-panel {
          visibility: visible;
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }
        .nav-dropdown-panel a {
          display: flex;
          align-items: center;
          padding: 9px 16px;
          font-size: 0.875rem;
          color: #3d3d3d;
          transition: color 0.18s, background 0.18s;
        }
        .nav-dropdown-panel a:hover {
          color: #8B1A1A;
          background: #fdf3f3;
        }
        .nav-dropdown-panel hr {
          border: none;
          border-top: 1px solid #f0f0f0;
          margin: 0.3rem 0;
        }

        /* ── Submit CTA button ── */
        .header-cta {
          background: #8B1A1A;
          color: #fff !important;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.88rem;
          transition: background 0.2s, transform 0.2s;
          margin-left: 8px;
          white-space: nowrap;
        }
        .header-cta:hover {
          background: #6b1313 !important;
          color: #fff !important;
          transform: translateY(-1px);
        }

        /* ── Mobile toggle ── */
        .mobile-nav-toggle {
          display: none;
          background: none;
          border: 1px solid #ddd;
          color: #3d3d3d;
          border-radius: 6px;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          cursor: pointer;
          transition: border-color 0.2s;
          flex-shrink: 0;
        }
        .mobile-nav-toggle:hover {
          border-color: #8B1A1A;
          color: #8B1A1A;
        }

        /* ── Mobile menu ── */
        .mobile-menu {
          background: #fff;
          border-top: 1px solid #eee;
          padding: 1rem 1.25rem 1.5rem;
        }
        .mobile-menu a {
          display: block;
          padding: 0.65rem 0;
          font-size: 0.95rem;
          font-weight: 500;
          color: #3d3d3d;
          border-bottom: 1px solid #f5f5f5;
          transition: color 0.2s, padding-left 0.2s;
        }
        .mobile-menu a:hover, .mobile-menu a.active {
          color: #8B1A1A;
          padding-left: 8px;
        }
        .mobile-menu-section {
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #999;
          padding: 0.85rem 0 0.3rem;
        }
        .mobile-menu-sub {
          padding-left: 0.75rem !important;
          font-size: 0.88rem !important;
          color: #666 !important;
        }

        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-nav-toggle { display: flex !important; }
          .logo-text-sub { display: none; }
        }
      `}</style>

      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-accent" />
        <div className="container">
          <div className="header-inner">
            {/* Logo */}
            <Link to="/" className="header-logo">
              <div className="logo-badge">IC</div>
              <div>
                <div className="logo-text-main">{confData.name}</div>
                <div className="logo-text-sub">{confData.fullName}</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
              <Link to="/" className={`nav-link${isActive('/') ? ' active' : ''}`}>Home</Link>
              <Link to="/committees" className={`nav-link${isActive('/committees') ? ' active' : ''}`}>Committee</Link>
              <Link to="/speakers" className={`nav-link${isActive('/speakers') ? ' active' : ''}`}>Speakers</Link>
              <Link to="/call-for-papers" className={`nav-link${isActive('/call-for-papers') ? ' active' : ''}`}>CFP</Link>
              <Link to="/important-dates" className={`nav-link${isActive('/important-dates') ? ' active' : ''}`}>Dates</Link>

              <div className="nav-dropdown">
                <span className="nav-dropdown-trigger">
                  Submission
                  <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
                <div className="nav-dropdown-panel">
                  <Link to="/submissions">Submission Portal</Link>
                  <Link to="/submissions#editorial-policy">Editorial Policy</Link>
                  <Link to="/submissions#ai-guidelines">AI Tools Guidelines</Link>
                </div>
              </div>

              <Link to="/registration" className={`nav-link${isActive('/registration') ? ' active' : ''}`}>Registration</Link>
              <Link to="/program" className={`nav-link${isActive('/program') ? ' active' : ''}`}>Program</Link>
              <Link to="/faq" className={`nav-link${isActive('/faq') ? ' active' : ''}`}>FAQ</Link>
              <Link to="/contact" className={`nav-link${isActive('/contact') ? ' active' : ''}`}>Contact</Link>

              <Link to="/submissions" className="header-cta">Submit Paper →</Link>
            </nav>

            {/* Mobile Toggle */}
            <button
              className="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
            <Link to="/committees" className={isActive('/committees') ? 'active' : ''}>Committee</Link>
            <Link to="/speakers" className={isActive('/speakers') ? 'active' : ''}>Speakers</Link>
            <Link to="/call-for-papers" className={isActive('/call-for-papers') ? 'active' : ''}>Call For Papers</Link>
            <Link to="/important-dates" className={isActive('/important-dates') ? 'active' : ''}>Important Dates</Link>
            <div className="mobile-menu-section">Submission</div>
            <Link to="/submissions" className="mobile-menu-sub">Submission Portal</Link>
            <Link to="/submissions#editorial-policy" className="mobile-menu-sub">Editorial Policy</Link>
            <Link to="/registration" className={isActive('/registration') ? 'active' : ''}>Registration</Link>
            <Link to="/program" className={isActive('/program') ? 'active' : ''}>Program</Link>
            <Link to="/faq" className={isActive('/faq') ? 'active' : ''}>FAQ</Link>
            <Link to="/contact" className={isActive('/contact') ? 'active' : ''}>Contact Us</Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
