import React from 'react';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--text-light)', padding: 'var(--spacing-3xl) 0 var(--spacing-xl)' }}>
      <div className="container text-center">
        <h3 style={{ color: 'var(--text-light)', marginBottom: 'var(--spacing-md)' }}>IT Trends 2026</h3>
        <p style={{ opacity: 0.8, marginBottom: 'var(--spacing-xl)' }}>International Conference on IT Trends</p>
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)' }}>
          <p style={{ fontSize: '0.875rem', opacity: 0.6 }}>&copy; {new Date().getFullYear()} IT Trends Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
