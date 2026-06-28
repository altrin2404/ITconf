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

const Speakers = () => {
  useReveal();

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
        .speaker-card {
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:16px; padding:2rem;
          transition:border-color .35s, transform .45s cubic-bezier(.23,1,.32,1), box-shadow .4s;
        }
        .speaker-card:hover {
          border-color:rgba(56,189,248,.3);
          transform:translateY(-6px);
          box-shadow:0 24px 60px rgba(0,0,0,.35);
        }
        .speaker-avatar {
          width:100px; height:100px; border-radius:16px;
          overflow:hidden; flex-shrink:0;
          border:2px solid rgba(56,189,248,.3);
          background:rgba(255,255,255,.05);
          display:flex; align-items:center; justify-content:center;
          font-size:2.5rem; color:rgba(226,232,240,.3);
        }
        .speaker-avatar img {
          width:100%; height:100%; object-fit:cover;
        }
        .role-badge {
          display:inline-block; padding:4px 14px;
          background:linear-gradient(135deg,#0ea5e9,#8b5cf6);
          border-radius:20px; font-size:.75rem;
          font-weight:700; color:#fff;
          letter-spacing:.04em; margin-bottom:.75rem;
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Keynote Speakers
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 600, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              Hear from industry leaders and renowned academics at {confData.name}.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="grid-2">
          {confData.speakers.map((speaker) => (
            <div key={speaker.id} className="speaker-card" data-reveal data-delay={String(speaker.id)}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div className="speaker-avatar">
                  {speaker.image
                    ? <img src={speaker.image} alt={speaker.name} />
                    : '👤'
                  }
                </div>
                <div>
                  <div className="role-badge">{speaker.role}</div>
                  <h3 style={{ margin: 0, color: '#f1f5f9', fontSize: '1.2rem' }}>{speaker.name}</h3>
                  <p style={{ margin: '0.25rem 0 0', color: 'rgba(226,232,240,.5)', fontSize: '0.9rem' }}>
                    {speaker.affiliation}
                  </p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,.06)', paddingTop: '1.25rem' }}>
                <h5 style={{ color: '#38bdf8', marginBottom: '.65rem', fontSize: '.9rem', letterSpacing: '.03em' }}>
                  📌 Topic: {speaker.topic}
                </h5>
                <p style={{ color: 'rgba(226,232,240,.55)', fontSize: '.9rem', lineHeight: 1.7 }}>
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
