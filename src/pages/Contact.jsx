import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';
import { FiMapPin, FiCalendar, FiGlobe, FiMonitor, FiPhone } from 'react-icons/fi';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const initialForm = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  useReveal();
  useSEO(
    'Contact Us',
    'Contact the ICICCT 2027 organizing committee, get institutional directions, and send direct inquiries regarding the conference.'
  );
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  useReveal();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');
    try {
      await addDoc(collection(db, 'contact_messages'), {
        ...form,
        submittedAt: serverTimestamp(),
      });
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      console.error('Firestore error:', err);
      setErrorMsg('Something went wrong. Please try again later.');
      setStatus('error');
    }
  };

  const isSending = status === 'sending';

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

        .contact-form-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
        }
        .contact-form-card h3 {
          color: #1a1a1a;
          margin-bottom: 1.5rem;
          font-size: 1.3rem;
        }

        .form-group {
          margin-bottom: 1.1rem;
        }
        .form-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #3d3d3d;
          margin-bottom: 0.4rem;
        }
        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-size: 0.95rem;
          font-family: inherit;
          color: #1a1a1a;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
          outline: none;
          box-sizing: border-box;
        }
        .form-input::placeholder { color: #aaa; }
        .form-input:focus {
          border-color: #8B1A1A;
          box-shadow: 0 0 0 3px rgba(139,26,26,0.1);
        }
        .form-input:disabled { background: #f8f8f8; opacity: 0.7; }

        .submit-btn-light {
          width: 100%;
          padding: 0.85rem;
          background: #8B1A1A;
          color: #fff;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          transition: background 0.2s, transform 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }
        .submit-btn-light:hover:not(:disabled) {
          background: #6b1313;
          transform: translateY(-1px);
        }
        .submit-btn-light:disabled { opacity: 0.65; cursor: not-allowed; }

        .alert-success {
          background: #e8f5e9;
          border: 1px solid #81c784;
          border-radius: 8px;
          padding: 0.85rem 1rem;
          margin-bottom: 1.25rem;
          color: #2e7d32;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .alert-error {
          background: #fdecea;
          border: 1px solid #ef9a9a;
          border-radius: 8px;
          padding: 0.85rem 1rem;
          margin-bottom: 1.25rem;
          color: #c62828;
          font-weight: 600;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Contact</span>
          </div>
          <h1>Get In Touch</h1>
          <p>Have a question about {`ICICCT2027`}? We're here to help. Fill out the form or contact us directly.</p>
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
                        St. Xavier's Catholic College of Engineering (SXCCE)
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
                      <a href="tel:123456789" style={{ color: '#fff', textDecoration: 'none' }}>123456789</a>
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
                  title="SXCCE Location"
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

            {/* Contact Form */}
            <div className="contact-form-card" data-reveal data-delay="1">
              <h3> Send Us a Message</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Have a query about paper submission, registration, or the conference? Fill out the form and we'll get back to you within 2 business days.
              </p>

              {status === 'success' && (
                <div className="alert-success">
                  <span></span> Message sent successfully! We'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="alert-error">
                  <span></span> {errorMsg}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={isSending}
                      className="form-input"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What is your query about?"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Describe your question or feedback in detail..."
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                    required
                    disabled={isSending}
                    className="form-input"
                    style={{ resize: 'vertical' }}
                  />
                </div>
                <button
                  id="contact-submit"
                  type="submit"
                  disabled={isSending}
                  className="submit-btn-light"
                >
                  {isSending ? (
                    <>
                      <span style={{
                        width: 18, height: 18,
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        display: 'inline-block',
                        animation: 'spin 0.8s linear infinite',
                      }} />
                      Sending...
                    </>
                  ) : ' Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
