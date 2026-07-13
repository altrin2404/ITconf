import React from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';
import { FiMapPin, FiMail, FiCalendar, FiPhone } from 'react-icons/fi';
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        .site-footer {
          background: #1a1a1a;
          color: #ccc;
          padding: 4rem 0 0;
          border-top: 4px solid #8B1A1A;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 2.5rem;
          padding-bottom: 3rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .footer-brand-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: #fff;
          margin-bottom: 0.25rem;
        }
        .footer-brand-full {
          font-size: 0.82rem;
          color: rgba(255,255,255,0.5);
          line-height: 1.5;
          margin-bottom: 1rem;
        }
        .footer-brand-desc {
          font-size: 0.88rem;
          color: rgba(255,255,255,0.45);
          line-height: 1.7;
          margin-bottom: 1.25rem;
        }
        .footer-conf-badge {
          display: inline-block;
          background: rgba(139,26,26,0.4);
          border: 1px solid rgba(139,26,26,0.6);
          color: #f99;
          font-size: 0.78rem;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
        }
        .footer-heading {
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.04em;
          margin-bottom: 1.1rem;
          position: relative;
          padding-bottom: 0.6rem;
        }
        .footer-heading::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 28px;
          height: 2px;
          background: #8B1A1A;
          border-radius: 2px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .footer-link {
          display: block;
          color: rgba(255,255,255,0.5);
          font-size: 0.88rem;
          padding: 0.3rem 0;
          transition: color 0.2s, padding-left 0.2s;
        }
        .footer-link:hover {
          color: #fff;
          padding-left: 6px;
        }
        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          margin-bottom: 0.75rem;
        }
        .footer-contact-icon {
          color: #8B1A1A;
          font-size: 0.9rem;
          margin-top: 2px;
          flex-shrink: 0;
        }
        .footer-contact-text {
          color: rgba(255,255,255,0.5);
          font-size: 0.88rem;
          line-height: 1.5;
        }
        .footer-map {
          width: 100%;
          height: 240px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          margin-bottom: 0;
        }
        .footer-bottom {
          padding: 1.25rem 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-bottom-text {
          color: rgba(255,255,255,0.35);
          font-size: 0.82rem;
          margin: 0;
        }
        .footer-bottom-links {
          display: flex;
          gap: 1.25rem;
        }
        .footer-bottom-link {
          color: rgba(255,255,255,0.35);
          font-size: 0.82rem;
          transition: color 0.2s;
        }
        .footer-bottom-link:hover { color: rgba(255,255,255,0.7); }
        .footer-map-section {
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }
      `}</style>

      <footer className="site-footer">
        <div className="container">
          {/* Main footer grid */}
          <div className="footer-grid">
            {/* Brand */}
            <div>
              <div className="footer-brand-name">{confData.name}</div>
              <div className="footer-brand-full">{confData.fullName}</div>
              <p className="footer-brand-desc">
                Bringing together researchers, academics, and industry practitioners from around the world to advance the frontiers of intelligent communications and computing technologies.
              </p>
              <span className="footer-conf-badge"><FiCalendar aria-hidden="true" style={{marginRight: '4px'}} /> {confData.date}</span>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="footer-heading">Quick Links</h4>
              <div className="footer-links">
                <Link to="/" className="footer-link">Home</Link>
                <Link to="/call-for-papers" className="footer-link">Call for Papers</Link>
                <Link to="/submissions" className="footer-link">Submission Portal</Link>
                <Link to="/registration" className="footer-link">Registration</Link>
                <Link to="/program" className="footer-link">Program</Link>
                <Link to="/speakers" className="footer-link">Keynote Speakers</Link>
              </div>
            </div>

            {/* Information */}
            <div>
              <h4 className="footer-heading">Information</h4>
              <div className="footer-links">
                <Link to="/committees" className="footer-link">Organizing Committee</Link>
                <Link to="/important-dates" className="footer-link">Important Dates</Link>
                <Link to="/submissions#editorial-policy" className="footer-link">Editorial Policy</Link>
                <Link to="/submissions#ai-guidelines" className="footer-link">AI Tools Guidelines</Link>
                <Link to="/faq" className="footer-link">FAQ</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><FiMapPin aria-hidden="true" /></span>
                <span className="footer-contact-text">
                  <a
                    href="https://www.google.com/maps?q=8.194079,77.385030"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'underline' }}
                  >
                    St. Xavier's Catholic College of Engineering,<br />
                    Chunkankadai, Nagercoil,<br />
                    Tamil Nadu, India
                  </a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><FiMail aria-hidden="true" /></span>
                <span className="footer-contact-text">
                  <Link to="/contact" className="footer-link" style={{ padding: 0 }}>Send a Message →</Link>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><FiPhone aria-hidden="true" /></span>
                <span className="footer-contact-text">
                  <a href="tel:123456789" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>123456789</a>
                </span>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-icon"><FiCalendar aria-hidden="true" /></span>
                <span className="footer-contact-text">{confData.date}</span>
              </div>
            </div>
          </div>

          {/* Map section */}
          <div className="footer-map-section">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.8fr 1fr',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 8px 40px rgba(0,0,0,0.35)'
            }}>
              <iframe
                title="Conference Location"
                src="https://maps.google.com/maps?q=8.194079,77.385030&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block', minHeight: '340px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Location Details Card */}
              <div className="loc-details-card" style={{ background: '#242424', minHeight: '340px', padding: '1.75rem 1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem', boxSizing: 'border-box' }}>
                <div>
                  <div className="loc-header" style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div className="loc-icon-circle" style={{ background: 'rgba(255,107,107,0.15)', width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6b6b', flexShrink: 0 }}>
                      <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        <circle cx="12" cy="9" r="2.5"/>
                      </svg>
                    </div>
                    <div>
                      <div className="loc-tag" style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.12em', color: '#ff6b6b', marginBottom: '0.2rem' }}>Nagercoil, Tamil Nadu</div>
                      <div className="loc-heading" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', lineHeight: 1.3 }}>Location Details</div>
                    </div>
                  </div>
                </div>

                <div>
                  <p style={{ fontWeight: 700, color: '#f0f0f0', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                    St. Xavier's Catholic College of Engineering
                  </p>
                  <p className="loc-address" style={{ color: 'rgba(255,255,255,0.5)', margin: 0, fontSize: '0.9rem', lineHeight: 1.6 }}>Chunkankadai, Nagercoil, Tamil Nadu 629003.</p>
                </div>

                <div className="loc-venue-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,107,107,0.15)', color: '#ff6b6b', fontSize: '0.8rem', fontWeight: 700, padding: '0.45rem 1rem', borderRadius: 20, width: 'fit-content' }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
                  </svg>
                  Conference Hall
                </div>

                <style>{`
                  .loc-dir-btn-footer {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    background: linear-gradient(135deg, #8B1A1A 0%, #c0392b 100%);
                    color: #fff;
                    font-weight: 800;
                    font-size: 0.95rem;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    padding: 1rem 1.25rem;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: transform 0.2s, background 0.2s;
                  }
                  .loc-dir-btn-footer:hover {
                    transform: translateY(-2px);
                    background: linear-gradient(135deg, #6b1313 0%, #a93226 100%);
                  }
                `}</style>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=8.194079,77.385030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="loc-dir-btn-footer"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-bottom-text">
              © {confData.name} — {confData.fullName}. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
