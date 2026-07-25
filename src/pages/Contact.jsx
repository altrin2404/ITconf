import React from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FiMapPin, FiCalendar, FiGlobe, FiMonitor, FiPhone, FiMail } from 'react-icons/fi';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Contact = () => {
  useReveal();
  useSEO(
    'Contact Us',
    'Contact the ICICCT 2027 organizing committee, get institutional directions, and send direct inquiries regarding the conference.'
  );
  useReveal();

  return (
    <div className="page-wrapper">
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 2.5rem;
          align-items: start;
        }
        .contact-info-card {
          background: #8B1A1A;
          border-radius: 10px;
          padding: 2rem;
          color: #fff;
        }
        .contact-info-card h3 {
          color: #fff;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }
        .contact-info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .contact-info-icon {
          width: 38px; height: 38px;
          background: rgba(255,255,255,0.15);
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .contact-info-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.6);
          font-weight: 600;
          margin-bottom: 0.2rem;
        }
        .contact-info-value {
          color: rgba(255,255,255,0.92);
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .contact-person-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 2.5rem 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .contact-person-card h3 {
          color: #1a1a1a;
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
        }
        .contact-person-img {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fdf3f3;
          flex-shrink: 0;
        }
        .contact-person-role {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #8B1A1A;
          margin-bottom: 0.35rem;
        }
        .contact-person-affil {
          font-size: 0.95rem;
          color: #666;
          margin-bottom: 1rem;
          line-height: 1.5;
        }
        .contact-person-link {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          color: #8B1A1A;
          font-weight: 600;
          font-size: 0.92rem;
          text-decoration: none;
          padding: 0.5rem 1.1rem;
          border: 1.5px solid rgba(139,26,26,0.35);
          border-radius: 6px;
          transition: background 0.2s, color 0.2s;
        }
        .contact-person-link:hover {
          background: #8B1A1A;
          color: #fff;
          border-color: #8B1A1A;
        }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-person-card { flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Contact</span>
          </div>
          <h1>Get In Touch</h1>

        </div>
      </div>

      <section style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container">
          <div className="contact-grid" data-reveal>
            {/* Contact Info */}
            <div>
              <div className="contact-info-card">
                <h3> Conference Venue</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiMapPin aria-hidden="true" size={20} /></div>
                  <div>
                    <div class="contact-info-label">Institution</div>
                    <div className="contact-info-value">
                      <a
                        href="https://www.google.com/maps?q=8.194079,77.385030"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff', textDecoration: 'underline', fontWeight: 600 }}
                      >
                        St. Xavier's Catholic College of Engineering (Autonomous)
                      </a>,<br />
                      Chunkankadai, Nagercoil,<br />
                      Tamil Nadu – 629 003, India
                    </div>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiCalendar aria-hidden="true" size={20} /></div>
                  <div>
                    <div className="contact-info-label">Conference Dates</div>
                    <div className="contact-info-value">April 1 – 2, 2027</div>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><FiPhone aria-hidden="true" size={20} /></div>
                  <div>
                    <div className="contact-info-label">Phone Number</div>
                    <div className="contact-info-value">
                      <a href="tel:+919487767267" style={{ color: '#fff', textDecoration: 'none' }}>+91 94877 67267</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map + Location Card */}
              <style>{`
                @keyframes dir-pulse {
                  0%, 100% { box-shadow: 0 0 0 0 rgba(139,26,26,0.35); }
                  50% { box-shadow: 0 0 0 10px rgba(139,26,26,0); }
                }
                @keyframes dir-shimmer {
                  0% { left: -100%; }
                  60%, 100% { left: 160%; }
                }
                .loc-map-wrap {
                  display: grid;
                  grid-template-columns: 1fr 1fr;
                  gap: 0;
                  margin-top: 1.5rem;
                  border-radius: 14px;
                  overflow: hidden;
                  border: 1px solid #e0e0e0;
                  box-shadow: 0 6px 32px rgba(139,26,26,0.13);
                }
                .loc-map-iframe { width: 100%; height: 100%; min-height: 280px; border: 0; display: block; }
                .loc-details-card {
                  background: #fff;
                  padding: 1.75rem 1.5rem;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  gap: 1rem;
                }
                .loc-header {
                  display: flex;
                  align-items: flex-start;
                  gap: 0.75rem;
                }
                .loc-icon-circle {
                  width: 48px; height: 48px;
                  background: rgba(139,26,26,0.1);
                  border-radius: 12px;
                  display: flex; align-items: center; justify-content: center;
                  flex-shrink: 0;
                  color: #8B1A1A;
                }
                .loc-tag {
                  font-size: 0.72rem;
                  font-weight: 800;
                  text-transform: uppercase;
                  letter-spacing: 0.12em;
                  color: #8B1A1A;
                  margin-bottom: 0.2rem;
                }
                .loc-heading { font-size: 1.25rem; font-weight: 800; color: #1a1a1a; line-height: 1.3; }
                .loc-address { font-size: 0.9rem; color: #666; line-height: 1.6; }
                .loc-venue-badge {
                  display: inline-flex;
                  align-items: center;
                  gap: 0.4rem;
                  background: rgba(139,26,26,0.07);
                  color: #8B1A1A;
                  font-size: 0.8rem;
                  font-weight: 700;
                  padding: 0.45rem 1rem;
                  border-radius: 20px;
                  width: fit-content;
                }
                .loc-dir-btn {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 0.6rem;
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
                  position: relative;
                  overflow: hidden;
                  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
                }
                .loc-dir-btn:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 8px 24px rgba(139,26,26,0.3);
                  background: linear-gradient(135deg, #6b1313 0%, #a93226 100%);
                }
                .loc-dir-btn::before {
                  content: '';
                  position: absolute;
                  top: 0; left: -100%;
                  width: 55%;
                  height: 100%;
                  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent);
                  animation: dir-shimmer 2.5s ease-in-out infinite;
                }
                .loc-dir-btn:hover {
                  animation: none;
                  transform: translateY(-2px);
                  box-shadow: 0 8px 24px rgba(139,26,26,0.4);
                  background: linear-gradient(135deg, #6b1313 0%, #a93226 100%);
                }
                @media (max-width: 640px) {
                  .loc-map-wrap { grid-template-columns: 1fr; }
                  .loc-map-iframe { min-height: 200px; }
                }
              `}</style>
              <div className="loc-map-wrap">
                {/* Map */}
                <iframe
                  title="St. Xavier's Catholic College of Engineering (Autonomous) Location"
                  src="https://maps.google.com/maps?q=8.194079,77.385030&z=15&output=embed"
                  className="loc-map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Location Details Card */}
                <div className="loc-details-card">
                  <div>
                    <div className="loc-header">
                      <div className="loc-icon-circle">
                        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                          <circle cx="12" cy="9" r="2.5" />
                        </svg>
                      </div>
                      <div>
                        <div className="loc-tag">Nagercoil, Tamil Nadu</div>
                        <div className="loc-heading">Location Details</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem', marginBottom: '0.35rem' }}>
                      St. Xavier's Catholic College of Engineering
                    </p>
                    <p className="loc-address">Chunkankadai, Nagercoil, Tamil Nadu 629003.</p>
                  </div>

                  <div className="loc-venue-badge">
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                    </svg>
                    Conference Hall
                  </div>

                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=8.194079,77.385030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="loc-dir-btn"
                  >
                    GET DIRECTIONS
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Person Card */}
            <div>
              <h3 style={{ color: '#1a1a1a', marginBottom: '1.25rem', fontSize: '1.4rem' }}>For Further Details</h3>
              <div className="contact-person-card" data-reveal data-delay="1">
                <img
                  src="/images/organizingChairs/Dr. Suja A. Alex.jpg"
                  alt="Dr. Suja A. Alex"
                  className="contact-person-img"
                />
                <div>
                  <div className="contact-person-role">Organizing Chair</div>
                  <h3>Dr. Suja A. Alex</h3>
                  <p className="contact-person-affil">

                    St. Xavier's Catholic College of Engineering (Autonomous),<br />
                    Nagercoil, Tamil Nadu – 629 003, India
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <a href="mailto:suja@sxcce.edu.in" className="contact-person-link">
                      <FiMail size={15} aria-hidden="true" /> suja@sxcce.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
