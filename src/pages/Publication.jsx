import React, { useEffect } from 'react';
import { confData } from '../data/conferenceData';

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

const Publication = () => {
  useReveal();

  const indexBadges = ['EI Compendex', 'Scopus', 'Web of Science (CPCI)'];

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.1s; }
        [data-reveal][data-delay="2"] { transition-delay:.2s; }
        [data-reveal][data-delay="3"] { transition-delay:.3s; }
        .glow-text {
          background: linear-gradient(90deg,#38bdf8,#818cf8,#e879f9,#38bdf8);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:txtF 4s linear infinite;
        }
        @keyframes txtF { to{background-position:300% center;} }
        .idx-badge {
          padding:.6rem 1.5rem;
          border:1px solid rgba(56,189,248,.3);
          border-radius:999px;
          color:#38bdf8;
          font-weight:700;
          font-size:.9rem;
          background:rgba(56,189,248,.06);
          transition:background .3s, border-color .3s, transform .3s;
        }
        .idx-badge:hover {
          background:rgba(56,189,248,.12);
          border-color:rgba(56,189,248,.6);
          transform:translateY(-2px);
        }
        .pub-card {
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:16px; padding:2rem;
          transition:border-color .35s, transform .4s;
        }
        .pub-card:hover {
          border-color:rgba(56,189,248,.3);
          transform:translateY(-5px);
        }
        .journal-item {
          padding:.5rem 0;
          color:rgba(226,232,240,.6);
          display:flex; align-items:center; gap:.6rem;
        }
        .journal-item::before {
          content:'◆'; color:#8b5cf6; font-size:.6rem;
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Publication &amp; Indexing
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 800, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              Conference proceedings and journal special issues.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Conference Proceedings */}
        <div
          data-reveal
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,.05), rgba(139,92,246,.05))',
            border: '1px solid rgba(56,189,248,.12)',
            borderRadius: 20,
            padding: '3rem 2.5rem',
            textAlign: 'center',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{
            width: 72, height: 72, margin: '0 auto 1.5rem',
            background: 'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem',
            boxShadow: '0 0 30px rgba(14,165,233,.3)',
          }}>
            📚
          </div>
          <h2 style={{ color: '#f1f5f9', marginBottom: '1rem' }}>Conference Proceedings</h2>
          <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 700, margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
            All accepted and presented full papers will be published in the <strong style={{ color: '#38bdf8' }}>{confData.name} Conference Proceedings</strong>.
            The proceedings will be submitted for indexing by major scientific databases.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {indexBadges.map((b, i) => (
              <div key={i} className="idx-badge">{b}</div>
            ))}
          </div>
        </div>

        {/* Two-column cards */}
        <div className="grid-2">
          <div className="pub-card" data-reveal data-delay="1">
            <h3 className="glow-text" style={{ marginBottom: '1rem' }}>Special Issues (SCI/EI)</h3>
            <p style={{ color: 'rgba(226,232,240,.55)', marginBottom: '1rem', lineHeight: 1.8 }}>
              Selected excellent papers will be recommended for publication in special issues of international journals (SCI/EI indexed).
            </p>
            <div>
              <div className="journal-item">Journal of Intelligent Computing (JIC) - SCI</div>
              <div className="journal-item">International Journal of Emerging Tech - Scopus</div>
            </div>
          </div>

          <div className="pub-card" data-reveal data-delay="2">
            <h3 className="glow-text" style={{ marginBottom: '1rem' }}>Review Process</h3>
            <p style={{ color: 'rgba(226,232,240,.55)', lineHeight: 1.8 }}>
              All submissions will be double-blind peer-reviewed by at least 2-3 independent reviewers
              based on technical quality, relevance, originality, significance, and clarity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publication;
