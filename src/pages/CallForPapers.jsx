import React, { useEffect, useRef } from 'react';
import { confData } from '../data/conferenceData';
import { Link } from 'react-router-dom';

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

function MuseCard({ children, style, ...props }) {
  const ref = useRef();
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--cx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--cy', `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} className="muse-card" style={style} onMouseMove={onMove} {...props}>
      {children}
    </div>
  );
}

const trackColors = ['#0ea5e9', '#8b5cf6', '#ec4899', '#06b6d4'];
const trackIcons = ['🤖', '🔒', '☁️', '📡'];

const CallForPapers = () => {
  useReveal();

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.1s; }
        [data-reveal][data-delay="2"] { transition-delay:.2s; }
        [data-reveal][data-delay="3"] { transition-delay:.3s; }
        [data-reveal][data-delay="4"] { transition-delay:.4s; }
        .glow-text {
          background: linear-gradient(90deg,#38bdf8,#818cf8,#e879f9,#38bdf8);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:txtF 4s linear infinite;
        }
        @keyframes txtF { to{background-position:300% center;} }
        .muse-card {
          --cx:50%; --cy:50%;
          position:relative; overflow:hidden; cursor:default;
          background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08);
          border-radius:16px; padding:2rem;
          transition:border-color .35s, transform .45s cubic-bezier(.23,1,.32,1), box-shadow .4s;
        }
        .muse-card::before {
          content:''; position:absolute; inset:0; border-radius:inherit;
          background:radial-gradient(380px circle at var(--cx) var(--cy), rgba(56,189,248,.09), transparent 70%);
          opacity:0; transition:opacity .3s; pointer-events:none;
        }
        .muse-card:hover::before { opacity:1; }
        .muse-card:hover {
          border-color:rgba(56,189,248,.3); transform:translateY(-7px);
          box-shadow:0 24px 64px rgba(0,0,0,.35), 0 0 0 1px rgba(56,189,248,.1);
        }
        .topic-item {
          display:flex; align-items:center; gap:.75rem;
          padding:.65rem 0;
          color:rgba(226,232,240,.6);
          transition:color .2s, padding-left .2s;
        }
        .topic-item:hover { color:#e2e8f0; padding-left:4px; }
        .topic-chevron { color:#38bdf8; font-size:.85rem; }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Call For Papers
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 800, margin: '.5rem auto 0', fontSize: '1.1rem', lineHeight: 1.7 }}>
              We invite submissions of high-quality research papers describing original and unpublished results
              in all areas of IT and Computer Science.
            </p>
          </div>
        </div>
      </div>

      {/* Tracks */}
      <div className="container" style={{ paddingBottom: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
          {confData.tracks.map((track, index) => (
            <MuseCard key={index} data-reveal data-delay={String(index + 1)}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.4rem', marginBottom: '1.25rem',
                background: 'rgba(255,255,255,.05)',
                border: '1px solid rgba(255,255,255,.1)',
                boxShadow: `0 0 20px ${trackColors[index]}30`,
              }}>
                {trackIcons[index] || '📄'}
              </div>
              <div style={{ width: 32, height: 2, borderRadius: 2, background: trackColors[index], marginBottom: '1rem' }} />
              <h3 style={{ color: '#f1f5f9', fontSize: '1.05rem', marginBottom: '1rem' }}>
                {track.title}
              </h3>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '.75rem' }}>
                {track.topics.map((topic, i) => (
                  <div key={i} className="topic-item">
                    <span className="topic-chevron">▹</span>
                    {topic}
                  </div>
                ))}
              </div>
            </MuseCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-reveal style={{ padding: '3rem 0' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <div style={{
              position: 'absolute', inset: '-40px', borderRadius: '50%', pointerEvents: 'none',
              background: 'radial-gradient(circle, rgba(139,92,246,.1), transparent 70%)',
            }} />
            <h3 className="glow-text" style={{ fontSize: '1.6rem', marginBottom: '1.25rem', position: 'relative' }}>
              Ready to submit your research?
            </h3>
            <Link
              to="/submissions"
              className="btn btn-primary"
              style={{ padding: '1rem 3rem', fontSize: '1.15rem', position: 'relative' }}
            >
              🚀 Go to Submission Portal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
