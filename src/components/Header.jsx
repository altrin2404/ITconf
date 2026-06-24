import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header" style={{ padding: 'var(--spacing-md) 0', backgroundColor: 'var(--bg-main)', boxShadow: 'var(--shadow-sm)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo">
          <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary-color)' }}>
            IT TRENDS
          </Link>
        </div>
        <nav className="nav">
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
      </div>
    </header>
  );
};

export default Header;
