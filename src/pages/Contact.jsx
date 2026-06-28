import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const initialForm = { name: '', email: '', subject: '', message: '' };

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Contact = () => {
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
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        .glow-text {
          background: linear-gradient(90deg,#38bdf8,#818cf8,#e879f9,#38bdf8);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:txtF 4s linear infinite;
        }
        @keyframes txtF { to{background-position:300% center;} }
        .dark-input {
          padding:14px 16px;
          border-radius:10px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.04);
          color:#e2e8f0;
          font-size:1rem;
          font-family:inherit;
          outline:none;
          width:100%; box-sizing:border-box;
          transition:border-color .25s, background .25s;
        }
        .dark-input::placeholder { color:rgba(226,232,240,.35); }
        .dark-input:focus {
          border-color:rgba(56,189,248,.5);
          background:rgba(56,189,248,.04);
        }
        .dark-input:disabled { opacity:.5; }
        .submit-btn {
          padding:14px;
          background:linear-gradient(135deg,#0ea5e9,#8b5cf6);
          color:#fff; border:none; border-radius:10px;
          font-size:1.05rem; font-weight:700; cursor:pointer;
          font-family:'Outfit', sans-serif;
          margin-top:.5rem;
          transition:box-shadow .35s, transform .3s;
          display:flex; align-items:center; justify-content:center; gap:.6rem;
        }
        .submit-btn:hover:not(:disabled) {
          box-shadow:0 12px 36px rgba(139,92,246,.4);
          transform:translateY(-2px);
        }
        .submit-btn:disabled { opacity:.65; cursor:not-allowed; }
        .success-banner {
          background:rgba(34,197,94,.1);
          border:1px solid rgba(34,197,94,.3);
          border-radius:10px; padding:14px 18px;
          margin-bottom:1.5rem;
          color:#4ade80; font-weight:600;
          display:flex; align-items:center; gap:.6rem;
        }
        .error-banner {
          background:rgba(239,68,68,.1);
          border:1px solid rgba(239,68,68,.3);
          border-radius:10px; padding:14px 18px;
          margin-bottom:1.5rem;
          color:#f87171; font-weight:600;
          display:flex; align-items:center; gap:.6rem;
        }
        @keyframes spin { to { transform:rotate(360deg); } }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Get in Touch
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 600, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              Have a question or feedback? Fill out the form below.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', justifyContent: 'center', paddingBottom: '4rem' }}>
        <div
          data-reveal
          style={{
            width: '100%', maxWidth: 680,
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 20,
            padding: '2.5rem',
          }}
        >
          {/* Success */}
          {status === 'success' && (
            <div className="success-banner">
              <span style={{ fontSize: '1.2rem' }}>✓</span>
              Message sent successfully! We'll get back to you soon.
            </div>
          )}

          {/* Error */}
          {status === 'error' && (
            <div className="error-banner">
              <span style={{ fontSize: '1.2rem' }}>⚠</span>
              {errorMsg}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
              disabled={isSending}
              className="dark-input"
            />
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              disabled={isSending}
              className="dark-input"
            />
            <input
              id="contact-subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              disabled={isSending}
              className="dark-input"
            />
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message..."
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
              disabled={isSending}
              className="dark-input"
              style={{ resize: 'vertical' }}
            />
            <button
              id="contact-submit"
              type="submit"
              disabled={isSending}
              className="submit-btn"
            >
              {isSending ? (
                <>
                  <span style={{
                    width: 18, height: 18,
                    border: '2px solid rgba(255,255,255,.3)',
                    borderTopColor: '#fff',
                    borderRadius: '50%',
                    display: 'inline-block',
                    animation: 'spin 0.8s linear infinite',
                  }} />
                  Sending...
                </>
              ) : '✉️ Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
