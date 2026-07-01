import React from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';

const Footer = () => {
  return (
    <>
      <style>{`
        .site-footer {
          background: #06090f;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 5rem 0 2rem;
          position: relative;
          overflow: hidden;
        }
        .site-footer::before {
          content: '';
          position: absolute; top: 0; left: 50%; width: 400px; height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 3rem;
        }
        .footer-heading {
          font-size: 0.8rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #38bdf8;
          font-weight: 700;
          margin-bottom: 1.25rem;
        }
        .footer-link {
          display: block;
          color: rgba(226,232,240,0.5);
          font-size: 0.9rem;
          padding: 0.3rem 0;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-link:hover {
          color: #e2e8f0;
          padding-left: 4px;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          margin-top: 3rem;
          padding-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .footer-bottom-link {
          color: rgba(226,232,240,0.35);
          font-size: 0.8rem;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: #38bdf8; }

        .footer-logo-circle {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
          display: flex; align-items: center; justify-content: center;
          font-weight: 800; font-size: 1rem; color: #fff;
          flex-shrink: 0;
        }
        .footer-logo-name {
          background: linear-gradient(90deg, #38bdf8, #818cf8, #e879f9, #38bdf8);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: ftFlow 5s linear infinite;
          font-size: 1.4rem; font-weight: 800; font-family: 'Outfit', sans-serif;
        }
        @keyframes ftFlow { to { background-position: 300% center; } }

        @media(max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <div className="footer-logo-circle">IT</div>
                <span className="footer-logo-name">{confData.name}</span>
              </div>
              <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                {confData.fullName} — bringing together researchers and practitioners globally.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                <Link to="/call-for-papers" className="footer-link">Call for Papers</Link>
                <Link to="/registration" className="footer-link">Registration</Link>
                <Link to="/program" className="footer-link">Program Schedule</Link>
                <Link to="/speakers" className="footer-link">Keynote Speakers</Link>
              </nav>
            </div>

            {/* Information */}
            <div>
              <h4 className="footer-heading">Information</h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>

                <Link to="/submissions#editorial-policy" className="footer-link">Editorial Policy</Link>
                <Link to="/history" className="footer-link">Past Conferences</Link>
                <Link to="/committees" className="footer-link">Committee</Link>
              </nav>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">Contact Us</h4>
              <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
                📍 {confData.location}
              </p>
              <p style={{ color: 'rgba(226,232,240,0.45)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                ✉️ Email: TBA
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                  color: '#fff',
                  boxShadow: '0 4px 16px rgba(14,165,233,0.3)',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(139,92,246,0.4)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,0.3)'; }}
              >
                Send a message →
              </Link>
            </div>
          </div>

          {/* Map Section */}
          <div style={{ marginTop: '4rem', width: '100%', height: '320px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', position: 'relative' }}>
            <iframe 
              title="Conference Location Map"
              src="https://maps.google.com/maps?q=8.194079,77.385030&z=16&output=embed"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', boxShadow: 'inset 0 0 20px rgba(6, 9, 15, 1)' }}></div>
            
            {/* Venue & Directions Overlay */}
            <div style={{ 
              position: 'absolute', 
              top: '20px', 
              left: '20px', 
              background: 'rgba(15, 22, 60, 0.85)', 
              backdropFilter: 'blur(12px)',
              padding: '1.25rem 1.5rem', 
              borderRadius: '12px', 
              border: '1px solid rgba(56, 189, 248, 0.3)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              maxWidth: '320px',
              zIndex: 10
            }}>
              <h4 style={{ margin: '0 0 0.25rem 0', color: '#fff', fontSize: '1.1rem', fontWeight: '700' }}>Conference Hall</h4>
              <p style={{ margin: '0 0 1rem 0', color: 'rgba(226, 232, 240, 0.7)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                St. Xavier's Catholic College of Engineering<br/>
                Chunkankadai, Nagercoil, Tamil Nadu
              </p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=8.194079,77.385030" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 1.25rem',
                  borderRadius: '999px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                  color: '#fff',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(14,165,233,0.3)',
                }}
              >
                🗺️ Get Directions
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p style={{ color: 'rgba(226,232,240,0.3)', fontSize: '0.8rem' }}>
              &copy; {new Date().getFullYear()} {confData.name}. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
