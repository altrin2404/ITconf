import React, { useEffect, useRef, useState } from 'react';
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

function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return;
        started.current = true; obs.disconnect();
        const num = parseInt(target);
        if (isNaN(num)) { setVal(target); return; }
        const step = Math.ceil(num / 50);
        let cur = 0;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= num) { setVal(num); clearInterval(timer); }
          else setVal(cur);
        }, 30);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{isNaN(parseInt(target)) ? target : val}{suffix}</span>;
}

const History = () => {
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
        .history-card {
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:16px; padding:2rem; text-align:center;
          transition:border-color .35s, transform .45s cubic-bezier(.23,1,.32,1), box-shadow .4s;
          position:relative; overflow:hidden;
        }
        .history-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,#38bdf8,#8b5cf6,#ec4899);
          opacity:.6; transition:opacity .3s;
        }
        .history-card:hover::before { opacity:1; }
        .history-card:hover {
          border-color:rgba(56,189,248,.3);
          transform:translateY(-7px);
          box-shadow:0 24px 64px rgba(0,0,0,.35);
        }
        .year-big {
          font-size:3.5rem; font-weight:900;
          color:rgba(56,189,248,.1);
          line-height:1; margin-bottom:-1.5rem;
        }
        .year-label {
          position:relative; z-index:1;
        }
        .hist-stat-label {
          color:rgba(226,232,240,.45); font-size:.78rem;
          letter-spacing:.05em; text-transform:uppercase;
        }
        .hist-stat-val {
          color:#818cf8; font-weight:800; font-size:1.3rem;
        }
        .hist-btn {
          display:inline-flex; align-items:center; gap:.4rem;
          width:100%; justify-content:center;
          padding:.65rem 1rem; border-radius:999px;
          font-weight:600; font-size:.85rem; cursor:pointer;
          background:transparent;
          color:rgba(226,232,240,.65);
          border:1px solid rgba(255,255,255,.12);
          transition:border-color .3s, color .3s, background .3s;
          font-family:'Outfit', sans-serif;
          margin-top:1.25rem;
        }
        .hist-btn:hover {
          border-color:rgba(56,189,248,.5); color:#fff;
          background:rgba(56,189,248,.08);
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Conference History
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 600, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              A look back at our past successful conferences around the globe.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <div className="grid-3">
          {confData.history.map((hist, index) => (
            <div key={index} className="history-card" data-reveal data-delay={String(index + 1)}>
              <div className="year-big">{hist.year}</div>
              <h2 className="year-label glow-text" style={{ fontSize: '2rem' }}>{hist.year}</h2>
              <h4 style={{ color: '#e2e8f0', marginBottom: '1.25rem', fontWeight: 500 }}>
                📍 {hist.location}
              </h4>
              <div style={{
                display: 'flex', justifyContent: 'space-around',
                borderTop: '1px solid rgba(255,255,255,.06)',
                paddingTop: '1rem',
              }}>
                <div>
                  <div className="hist-stat-val">
                    <Counter target={String(hist.attendees)} suffix="+" />
                  </div>
                  <div className="hist-stat-label">Attendees</div>
                </div>
                <div>
                  <div className="hist-stat-val">
                    <Counter target={String(hist.papers)} />
                  </div>
                  <div className="hist-stat-label">Papers</div>
                </div>
              </div>
              <button className="hist-btn">
                View {hist.year} Proceedings →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
