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

const Program = () => {
  useReveal();

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.15s; }
        [data-reveal][data-delay="2"] { transition-delay:.3s; }
        .glow-text {
          background: linear-gradient(90deg,#38bdf8,#818cf8,#e879f9,#38bdf8);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:txtF 4s linear infinite;
        }
        @keyframes txtF { to{background-position:300% center;} }
        .day-card {
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:20px; padding:2rem 2.25rem;
          transition:border-color .3s;
        }
        .day-card:hover { border-color:rgba(56,189,248,.2); }
        .day-title {
          color:#38bdf8; font-weight:800;
          border-bottom:1px solid rgba(255,255,255,.06);
          padding-bottom:1rem; margin-bottom:1.25rem;
          font-size:1.35rem;
          display:flex; align-items:center; gap:.75rem;
        }
        .event-row {
          display:grid; grid-template-columns:130px 1fr;
          gap:1.25rem; padding:1rem;
          background:rgba(255,255,255,.02);
          border-radius:10px; align-items:center;
          border-left:3px solid transparent;
          transition:border-color .3s, background .3s, transform .3s;
        }
        .event-row:hover {
          border-left-color:#8b5cf6;
          background:rgba(56,189,248,.04);
          transform:translateX(4px);
        }
        .event-time {
          color:#818cf8;
          font-weight:700;
          font-family:'Outfit', sans-serif;
          font-size:.95rem;
        }
        .event-title {
          color:#e2e8f0;
          font-size:1.05rem;
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Program Schedule
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 600, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              The comprehensive schedule for {confData.name}. Times are subject to minor changes.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {confData.schedule.map((dayData, index) => (
            <div key={index} className="day-card" data-reveal data-delay={String(index + 1)}>
              <h2 className="day-title">
                <span style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg,#0ea5e9,#8b5cf6)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', color: '#fff', fontWeight: 700,
                }}>
                  {index + 1}
                </span>
                {dayData.day}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {dayData.events.map((event, i) => (
                  <div key={i} className="event-row">
                    <div className="event-time">{event.time}</div>
                    <div className="event-title">{event.title}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center" data-reveal style={{ paddingTop: '3rem' }}>
          <button className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
            📥 Download Detailed PDF Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default Program;
