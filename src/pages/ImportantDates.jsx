import React, { useEffect } from 'react';
import { confData } from '../data/conferenceData';

const ImportantDates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.1s; }
        [data-reveal][data-delay="2"] { transition-delay:.2s; }
        [data-reveal][data-delay="3"] { transition-delay:.3s; }
        [data-reveal][data-delay="4"] { transition-delay:.4s; }
        
        .timeline {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 0;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0; left: 50%;
          width: 2px;
          background: rgba(148,163,184,0.15);
          transform: translateX(-50%);
        }
        .tl-item {
          display: grid;
          grid-template-columns: 1fr 40px 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
          align-items: center;
        }
        .tl-item:last-child { margin-bottom: 0; }
        .tl-left { text-align: right; }
        .tl-card {
          background: rgba(15,22,60,0.5);
          border: 1px solid rgba(100,120,255,0.15);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .tl-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .tl-dot {
          width: 20px; height: 20px;
          border-radius: 50%;
          border: 4px solid #080d1f;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(56,189,248,0.1);
        }
        @media (max-width: 768px) {
          .timeline::before { left: 30px; }
          .tl-item {
            grid-template-columns: 40px 1fr;
            gap: 1rem;
          }
          .tl-left { display: none; }
          .tl-item > div:nth-child(3) { grid-column: 2; }
          .tl-dot { margin-left: 10px; }
        }
      `}</style>
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Important Dates
            </h1>
            <p style={{ color: 'rgba(226,232,240,0.55)', maxWidth: 600, margin: '0.5rem auto 0', fontSize: '1.1rem' }}>
              Mark your calendar for these key deadlines.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="timeline">
          {confData.importantDates.map((item, i) => {
            const isLeft = i % 2 === 0;
            const accentColor = isLeft ? '#38bdf8' : '#8b5cf6';
            return (
              <div key={i} className="tl-item" data-reveal data-delay={String((i % 4) + 1)}>
                {/* Left slot */}
                <div className="tl-left">
                  {isLeft && (
                    <div className="tl-card" style={{ borderColor: `${accentColor}22` }}>
                      <p style={{ fontSize: '.75rem', color: accentColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginTop: '.3rem' }}>
                        {item.date}
                      </p>
                    </div>
                  )}
                </div>
                {/* Dot */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="tl-dot" style={{ background: `linear-gradient(135deg, ${accentColor}, #818cf8)` }} />
                </div>
                {/* Right slot */}
                <div>
                  {!isLeft && (
                    <div className="tl-card" style={{ borderColor: `${accentColor}22` }}>
                      <p style={{ fontSize: '.75rem', color: accentColor, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.06em' }}>
                        {item.title}
                      </p>
                      <p style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginTop: '.3rem' }}>
                        {item.date}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImportantDates;
