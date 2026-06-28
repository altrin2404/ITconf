import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';

/* ─── Mouse-tracking spotlight hook ─── */
function useMouseSpotlight(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
      el.style.setProperty('--my', `${e.clientY - rect.top}px`);
    };
    el.addEventListener('mousemove', move);
    return () => el.removeEventListener('mousemove', move);
  }, [ref]);
}

/* ─── Scroll-reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || started.current) return;
        started.current = true;
        obs.disconnect();
        const num = parseInt(target);
        if (isNaN(num)) { setVal(target); return; }
        const step = Math.ceil(num / 60);
        let cur = 0;
        const timer = setInterval(() => {
          cur += step;
          if (cur >= num) { setVal(num); clearInterval(timer); }
          else setVal(cur);
        }, 25);
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {isNaN(parseInt(target)) ? target : val}
      {suffix}
    </span>
  );
}

/* ─── Magnetic button wrapper ─── */
function MagBtn({ children, className, to, style }) {
  const ref = useRef();
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    ref.current.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
  };
  const onLeave = () => {
    ref.current.style.transform = 'translate(0,0)';
  };
  return (
    <Link
      to={to}
      ref={ref}
      className={className}
      style={{ transition: 'transform 0.45s cubic-bezier(.23,1,.32,1)', ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </Link>
  );
}

/* ─── Muse card with per-card mouse radial glow ─── */
function MuseCard({ children, style, className, ...props }) {
  const ref = useRef();
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty('--cx', `${e.clientX - r.left}px`);
    ref.current.style.setProperty('--cy', `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      className={`muse-card${className ? ' ' + className : ''}`}
      style={style}
      onMouseMove={onMove}
      {...props}
    >
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════ */
const Home = () => {
  const heroRef = useRef();
  useMouseSpotlight(heroRef);
  useReveal();

  const tracks = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      desc: 'Deep Learning, NLP, Computer Vision, Reinforcement Learning',
      color: '#0ea5e9',
    },
    {
      icon: '🔒',
      title: 'Cyber Security & Privacy',
      desc: 'Cryptography, Network Security, Blockchain, Privacy-Preserving',
      color: '#8b5cf6',
    },
    {
      icon: '☁️',
      title: 'Cloud & Distributed Systems',
      desc: 'Edge Computing, Serverless, Cloud Native, Distributed Systems',
      color: '#ec4899',
    },
    {
      icon: '📡',
      title: 'Internet of Things',
      desc: 'Smart Cities, Industrial IoT, Sensor Networks, IoT Security',
      color: '#06b6d4',
    },
  ];

  const stats = [
    { value: '4', suffix: '+', label: 'Tech Tracks' },
    { value: '50', suffix: '+', label: 'Speakers' },
    { value: '500', suffix: '+', label: 'Attendees' },
    { value: '100', suffix: '+', label: 'Research Papers' },
  ];

  const whyAttend = [
    {
      icon: '📖',
      title: 'Indexed Publication',
      desc: 'All accepted papers submitted to EI Compendex & Scopus for global visibility.',
    },
    {
      icon: '🎤',
      title: 'Expert Keynotes',
      desc: 'Hear from world-class researchers and industry leaders across cutting-edge domains.',
    },
    {
      icon: '🤝',
      title: 'Networking',
      desc: 'Connect with 500+ attendees, researchers, faculty, and industry professionals.',
    },
    {
      icon: '🏅',
      title: 'Best Paper Awards',
      desc: 'Outstanding papers recognised with prestigious awards across all tracks.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      desc: 'International participants from universities and institutions across the globe.',
    },
    {
      icon: '🔬',
      title: 'Workshops & Demos',
      desc: 'Hands-on workshops and live demonstrations of emerging technologies.',
    },
  ];

  return (
    <div className="home-page">
      {/* ════════════════ GLOBAL PAGE STYLES ════════════════ */}
      <style>{`
        /* Navy/Indigo base */
        .home-page {
          background: transparent;
          min-height: 100vh;
          color: #e2e8f0;
          overflow-x: hidden;
        }

        /* ── Scroll-reveal ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(36px);
          transition: opacity .75s ease, transform .75s ease;
        }
        [data-reveal].revealed { opacity: 1; transform: translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay: .1s; }
        [data-reveal][data-delay="2"] { transition-delay: .2s; }
        [data-reveal][data-delay="3"] { transition-delay: .3s; }
        [data-reveal][data-delay="4"] { transition-delay: .4s; }

        /* ── Animated gradient text ── */
        .glow-text {
          background: linear-gradient(90deg, #38bdf8, #818cf8, #e879f9, #38bdf8);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textFlow 4s linear infinite;
        }
        @keyframes textFlow { to { background-position: 300% center; } }

        /* ── Glitch effect ── */
        .glitch { position: relative; display: inline-block; }
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          background: linear-gradient(90deg, #38bdf8, #818cf8, #e879f9, #38bdf8);
          background-size: 300% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: textFlow 4s linear infinite;
        }
        .glitch::before {
          animation: glitch1 3.5s infinite, textFlow 4s linear infinite;
          clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
        }
        .glitch::after {
          animation: glitch2 3.5s infinite, textFlow 4s linear infinite;
          clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
        }
        @keyframes glitch1 {
          0%,88%,100% { transform: translate(0); }
          90% { transform: translate(-3px, -1px); }
          92% { transform: translate(3px, 1px); }
          94% { transform: translate(-1px, 2px); }
        }
        @keyframes glitch2 {
          0%,86%,100% { transform: translate(0); }
          88% { transform: translate(3px, 1px); }
          90% { transform: translate(-3px, -2px); }
          92% { transform: translate(1px, -1px); }
        }

        /* ── Hero mouse-spotlight ── */
        .hero-spotlight {
          --mx: 50%;
          --my: 50%;
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background: radial-gradient(700px circle at var(--mx) var(--my),
            rgba(56,189,248,.09) 0%, transparent 65%);
        }

        /* ── Dot-grid ── */
        .dot-grid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(148,163,184,.18) 1px, transparent 1px);
          background-size: 30px 30px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* ── Floating orbs ── */
        .orb {
          position: absolute; border-radius: 50%;
          filter: blur(90px); pointer-events: none;
          animation: orbFloat 9s ease-in-out infinite;
        }
        .orb-1 { width:480px;height:480px; background:rgba(56,189,248,.14);  top:-8%;left:-5%;   animation-delay:0s; }
        .orb-2 { width:560px;height:560px; background:rgba(100,80,230,.13); bottom:-12%;right:-5%; animation-delay:-3s; }
        .orb-3 { width:280px;height:280px; background:rgba(139,92,246,.11); top:42%;left:38%;  animation-delay:-6s; }
        @keyframes orbFloat {
          0%,100% { transform: translateY(0) scale(1); }
          50%      { transform: translateY(-28px) scale(1.04); }
        }

        /* ── Scan-line overlay ── */
        .scanline {
          position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background: repeating-linear-gradient(
            to bottom,
            transparent 0px, transparent 3px,
            rgba(0,0,0,.025) 3px, rgba(0,0,0,.025) 4px
          );
        }

        /* ── Muse card ── */
        .muse-card {
          --cx: 50%;
          --cy: 50%;
          position: relative; overflow: hidden; cursor: default;
          background: rgba(15,22,60,0.5);
          border: 1px solid rgba(100,120,255,0.15);
          border-radius: 16px; padding: 1.75rem;
          transition: border-color .35s, transform .45s cubic-bezier(.23,1,.32,1), box-shadow .4s;
          backdrop-filter: blur(12px);
        }
        .muse-card::before {
          content: ''; position: absolute; inset: 0; border-radius: inherit;
          background: radial-gradient(380px circle at var(--cx) var(--cy),
            rgba(56,189,248,.09), transparent 70%);
          opacity: 0; transition: opacity .3s; pointer-events: none;
        }
        .muse-card:hover::before  { opacity: 1; }
        .muse-card:hover {
          border-color: rgba(56,189,248,.3);
          transform: translateY(-7px);
          box-shadow: 0 24px 64px rgba(0,0,0,.35), 0 0 0 1px rgba(56,189,248,.1);
        }

        /* ── Stat card ── */
        .stat-card {
          border: 1px solid rgba(100,120,255,0.15); border-radius: 16px;
          padding: 2rem; text-align: center;
          background: rgba(15,22,60,0.5); backdrop-filter: blur(12px);
          transition: all .45s cubic-bezier(.23,1,.32,1);
          position: relative; overflow: hidden;
        }
        .stat-card:hover {
          transform: translateY(-8px) scale(1.03);
          border-color: rgba(56,189,248,.4);
          box-shadow: 0 28px 56px rgba(0,0,0,.4);
        }

        /* ── Badge pill ── */
        .badge-pill {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .45rem 1.25rem; border-radius: 999px;
          border: 1px solid rgba(56,189,248,.35);
          background: rgba(56,189,248,.06);
          font-size: .78rem; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: #38bdf8;
        }
        .badge-pulse {
          width: 7px; height: 7px; border-radius: 50%; background: #38bdf8;
          animation: bPulse 1.6s ease-in-out infinite;
        }
        @keyframes bPulse {
          0%,100% { opacity:1; transform:scale(1); }
          50%      { opacity:.3; transform:scale(1.5); }
        }

        /* ── Section label ── */
        .section-label {
          font-size: .72rem; letter-spacing: .2em; text-transform: uppercase;
          color: #38bdf8; font-weight: 700; margin-bottom: .85rem;
          display: flex; align-items: center; gap: .75rem;
        }
        .section-label::before,
        .section-label::after {
          content: ''; flex: 1; height: 1px; background: rgba(56,189,248,.22);
        }

        /* ── Buttons ── */
        .btn-glow-primary {
          position: relative; display: inline-flex; align-items: center; gap: .5rem;
          padding: .9rem 2.25rem; border-radius: 999px; font-weight: 700;
          font-family: 'Outfit', sans-serif; font-size: 1rem; cursor: pointer;
          color: #fff; border: none; overflow: hidden;
          background: linear-gradient(135deg, #0ea5e9, #8b5cf6);
          box-shadow: 0 0 24px rgba(14,165,233,.35);
          transition: box-shadow .35s cubic-bezier(.23,1,.32,1);
        }
        .btn-glow-primary::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, #8b5cf6, #ec4899);
          opacity: 0; transition: opacity .35s; border-radius: inherit;
        }
        .btn-glow-primary:hover { box-shadow: 0 18px 48px rgba(139,92,246,.5); }
        .btn-glow-primary:hover::after { opacity: 1; }
        .btn-glow-primary > * { position: relative; z-index: 1; }

        .btn-outline-glow {
          display: inline-flex; align-items: center; gap: .5rem;
          padding: .9rem 2.25rem; border-radius: 999px; font-weight: 600;
          font-family: 'Outfit', sans-serif; font-size: 1rem; cursor: pointer;
          color: #cbd5e1;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.14);
          transition: border-color .3s, color .3s, background .3s, box-shadow .3s;
        }
        .btn-outline-glow:hover {
          border-color: rgba(56,189,248,.6);
          color: #fff; background: rgba(56,189,248,.07);
          box-shadow: 0 10px 30px rgba(56,189,248,.18);
        }

        /* ── Ticker ── */
        .ticker-wrap { overflow: hidden; }
        .ticker-track {
          display: inline-flex; gap: 5rem; white-space: nowrap;
          animation: tickerMove 28s linear infinite;
        }
        @keyframes tickerMove { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ── Timeline ── */
        .timeline { position: relative; max-width: 720px; margin: 0 auto; }
        .timeline::before {
          content: ''; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(to bottom, transparent, rgba(56,189,248,.4) 20%, rgba(139,92,246,.4) 80%, transparent);
          transform: translateX(-50%);
        }
        .tl-item {
          display: grid; grid-template-columns: 1fr 36px 1fr;
          gap: 1rem; margin-bottom: 2.5rem; align-items: center;
        }
        .tl-dot {
          width: 13px; height: 13px; border-radius: 50%; margin: 0 auto;
          background: linear-gradient(135deg, #38bdf8, #818cf8);
          box-shadow: 0 0 14px rgba(56,189,248,.65);
          position: relative; z-index: 1;
          animation: dotGlow 2s ease-in-out infinite;
        }
        @keyframes dotGlow {
          0%,100% { box-shadow: 0 0 8px rgba(56,189,248,.6); }
          50%      { box-shadow: 0 0 22px rgba(56,189,248,.9), 0 0 44px rgba(56,189,248,.3); }
        }
        .tl-card {
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 12px; padding: 1rem 1.25rem;
          transition: border-color .3s, transform .3s;
        }
        .tl-card:hover { border-color: rgba(56,189,248,.3); transform: scale(1.02); }

        /* ── Track accent bar ── */
        .track-bar {
          width: 32px; height: 2px; border-radius: 2px; margin-bottom: 1rem;
        }
        .track-icon-box {
          width: 50px; height: 50px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.4rem; margin-bottom: 1.25rem;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          transition: transform .35s, box-shadow .35s;
        }
        .muse-card:hover .track-icon-box { transform: scale(1.12) rotate(-6deg); }

        /* ── Sponsor pill ── */
        .sponsor-pill {
          padding: .75rem 2rem;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 12px;
          background: rgba(255,255,255,.03);
          color: rgba(255,255,255,.3);
          font-size: .875rem;
          transition: border-color .3s, color .3s;
          cursor: default;
        }
        .sponsor-pill:hover { border-color: rgba(56,189,248,.35); color: rgba(255,255,255,.65); }

        /* ── Terminal card ── */
        .terminal-card {
          background: #0d1117;
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 16px; overflow: hidden;
        }
        .terminal-header {
          padding: .75rem 1.1rem;
          background: rgba(255,255,255,.04);
          border-bottom: 1px solid rgba(255,255,255,.06);
          display: flex; gap: .5rem; align-items: center;
        }
        .dot-red   { width:10px;height:10px;border-radius:50%;background:#ff5f56; }
        .dot-amber { width:10px;height:10px;border-radius:50%;background:#ffbd2e; }
        .dot-green { width:10px;height:10px;border-radius:50%;background:#27c93f; }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-12px); }
        }

        /* Responsive */
        @media(max-width:768px){
          .timeline::before { left: 1rem; }
          .tl-item { grid-template-columns: 0 28px 1fr; gap: .75rem; }
          .tl-left { display: none; }
        }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '90px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="dot-grid" />
        <div className="hero-spotlight" />
        <div className="scanline" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div data-reveal style={{ marginBottom: '1.75rem' }}>
            <span className="badge-pill">
              <span className="badge-pulse" />
              {confData.date === 'To Be Announced'
                ? 'Registration Opening Soon'
                : confData.date}
            </span>
          </div>

          {/* Glitch title */}
          <div data-reveal data-delay="1">
            <h1
              className="glitch glow-text"
              data-text={confData.name}
              style={{
                fontSize: 'clamp(3.5rem,10vw,7.5rem)',
                fontWeight: 900,
                letterSpacing: '-3px',
                lineHeight: 1,
                marginBottom: '1.5rem',
              }}
            >
              {confData.name}
            </h1>
          </div>

          {/* Subtitle */}
          <div data-reveal data-delay="2">
            <style>{`
              @keyframes initialShimmer {
                0%   { background-position: -200% center; filter: drop-shadow(0 0 6px rgba(56,189,248,0.5)); }
                50%  { background-position: 200% center;  filter: drop-shadow(0 0 16px rgba(232,121,249,0.8)) drop-shadow(0 0 30px rgba(56,189,248,0.4)); }
                100% { background-position: -200% center; filter: drop-shadow(0 0 6px rgba(56,189,248,0.5)); }
              }
              .icicet-initial {
                font-family: 'Cinzel Decorative', serif;
                font-weight: 900;
                font-size: 1.45em;
                letter-spacing: 0.04em;
                background: linear-gradient(90deg, #38bdf8 0%, #818cf8 30%, #e879f9 60%, #38bdf8 100%);
                background-size: 300% auto;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                animation: initialShimmer 3s ease-in-out infinite;
                display: inline-block;
                line-height: 1;
                vertical-align: baseline;
              }
              .icicet-initial:nth-child(1) { animation-delay: 0s; }
              .icicet-initial:nth-child(2) { animation-delay: 0.3s; }
              .icicet-initial:nth-child(3) { animation-delay: 0.6s; }
              .icicet-initial:nth-child(4) { animation-delay: 0.9s; }
              .icicet-initial:nth-child(5) { animation-delay: 1.2s; }
              .icicet-initial:nth-child(6) { animation-delay: 1.5s; }
              .icicet-rest {
                font-family: 'Outfit', sans-serif;
                font-weight: 300;
                color: rgba(226,232,240,0.6);
                font-size: 1em;
              }
            `}</style>
            <p
              style={{
                fontSize: 'clamp(1rem,2.5vw,1.25rem)',
                maxWidth: '760px',
                margin: '0 auto 1rem',
                lineHeight: 2,
                letterSpacing: '0.01em',
              }}
            >
              {[
                { letter: 'I', rest: 'nternational ' },
                { letter: 'C', rest: 'onference on ' },
                { letter: 'I', rest: 'nnovative ' },
                { letter: 'C', rest: 'omputing and ' },
                { letter: 'E', rest: 'merging ' },
                { letter: 'T', rest: 'echnologies' },
              ].map(({ letter, rest }, i) => (
                <span key={i} style={{ whiteSpace: 'nowrap' }}>
                  <span className="icicet-initial">{letter}</span>
                  <span className="icicet-rest">{rest}</span>
                </span>
              ))}
            </p>
            <p style={{ fontSize: '1rem', color: '#38bdf8', marginBottom: '2.75rem', letterSpacing: '.04em' }}>
              📍 {confData.location}
            </p>
          </div>

          {/* CTA buttons */}
          <div
            data-reveal
            data-delay="3"
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <MagBtn to="/submissions" className="btn-glow-primary">
              <span>🚀 Submit Paper</span>
            </MagBtn>
            <MagBtn to="/registration" className="btn-outline-glow">
              Register Now →
            </MagBtn>
          </div>

          {/* Scroll hint */}
          <div
            data-reveal
            data-delay="4"
            style={{
              marginTop: '4.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '.5rem',
              opacity: 0.35,
            }}
          >
            <span style={{ fontSize: '.72rem', letterSpacing: '.15em', textTransform: 'uppercase' }}>
              Scroll to explore
            </span>
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              style={{ animation: 'float 2.2s ease-in-out infinite' }}
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════════ TICKER ═══════════════ */}
      <div
        style={{
          background: 'rgba(56,189,248,.05)',
          borderTop: '1px solid rgba(56,189,248,.15)',
          borderBottom: '1px solid rgba(56,189,248,.15)',
          padding: '13px 0',
        }}
      >
        <div className="ticker-wrap">
          <div className="ticker-track">
            {[...Array(2)].map((_, i) => (
              <span key={i} style={{ display: 'inline-flex', gap: '4rem', color: '#38bdf8', fontWeight: 600, fontSize: '.875rem' }}>
                <span>⚡ All accepted papers submitted for indexing</span>
                <span>•</span>
                <span>📅 Early bird registration ends soon</span>
                <span>•</span>
                <span>🌐 {confData.fullName}</span>
                <span>•</span>
                <span>🏆 EI Compendex &amp; Scopus Indexed</span>
                <span>•</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ═══════════════ STATS ═══════════════ */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))',
              gap: '1.25rem',
            }}
          >
            {stats.map((s, i) => (
              <div key={i} className="stat-card" data-reveal data-delay={String(i + 1)}>
                <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>
                  <span className="glow-text">
                    <Counter target={s.value} suffix={s.suffix} />
                  </span>
                </div>
                <p
                  style={{
                    color: 'rgba(226,232,240,.5)',
                    fontSize: '.875rem',
                    marginTop: '.6rem',
                    letterSpacing: '.04em',
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT ═══════════════ */}
      <section style={{ padding: '6rem 0', background: 'rgba(255,255,255,.015)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '1rem' }} data-reveal>
            <div className="section-label">About the Conference</div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div data-reveal>
              <h2
                style={{
                  fontSize: 'clamp(2rem,5vw,3rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  color: '#f8fafc',
                  marginBottom: '1.5rem',
                }}
              >
                Forging the Future of{' '}
                <span className="glow-text">Computing</span>
              </h2>
              <p style={{ color: 'rgba(226,232,240,.6)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
                Against the backdrop of the global transformation toward intelligent systems and emerging
                computing technologies,{' '}
                <strong style={{ color: '#38bdf8' }}>{confData.name}</strong> serves as a premier
                international forum.
              </p>
              <p style={{ color: 'rgba(226,232,240,.6)', lineHeight: 1.85 }}>
                We bring together leading academic scientists, researchers, and scholars to exchange
                experiences on Computing, AI, and emerging tech — providing a premier interdisciplinary
                platform for researchers, practitioners, and educators worldwide.
              </p>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link
                  to="/committee"
                  className="btn-outline-glow"
                  style={{ fontSize: '.875rem', padding: '.65rem 1.4rem' }}
                >
                  Meet the Committee
                </Link>
                <Link
                  to="/tracks"
                  className="btn-outline-glow"
                  style={{ fontSize: '.875rem', padding: '.65rem 1.4rem' }}
                >
                  View Tracks
                </Link>
              </div>
            </div>

            {/* Terminal card */}
            <div className="terminal-card" data-reveal data-delay="2">
              <div className="terminal-header">
                <span className="dot-red" />
                <span className="dot-amber" />
                <span className="dot-green" />
                <span style={{ color: 'rgba(255,255,255,.28)', fontSize: '.75rem', marginLeft: '.5rem' }}>
                  conference_info.json
                </span>
              </div>
              <pre
                style={{
                  padding: '1.5rem',
                  fontSize: '.8rem',
                  color: '#a5f3fc',
                  overflowX: 'auto',
                  lineHeight: 1.9,
                  margin: 0,
                }}
              >
{`{
  "conference": "${confData.name}",
  "edition":    "2027",
  "scope":      "International",
  "indexing": [
    "EI Compendex",
    "Scopus"
  ],
  "tracks":  4,
  "venue":   "SXCCE, Tamil Nadu",
  "status":  "open_for_submissions"
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAMPUS & DEPARTMENT GALLERY ═══════════════ */}
      <section style={{ padding: '6rem 0', background: 'rgba(255,255,255,.015)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-reveal>
            <div className="section-label">Campus & Department</div>
            <h2
              style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}
            >
              Our <span className="glow-text">Infrastructure</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {/* College Building */}
            <div
              className="muse-card"
              data-reveal
              data-delay="1"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img
                  src="/images/college-build.png"
                  alt="College Campus"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '.5rem', fontWeight: 700 }}>
                  College Campus
                </h3>
                <p style={{ color: 'rgba(226,232,240,.5)', fontSize: '.875rem', lineHeight: 1.6 }}>
                  St. Xavier's Catholic College of Engineering campus infrastructure and surroundings.
                </p>
              </div>
            </div>

            {/* Department Image */}
            <div
              className="muse-card"
              data-reveal
              data-delay="2"
              style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden', height: '240px' }}>
                <img
                  src="/images/Dept-image.jpg"
                  alt="Department of IT"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#f8fafc', marginBottom: '.5rem', fontWeight: 700 }}>
                  Department of Information Technology
                </h3>
                <p style={{ color: 'rgba(226,232,240,.5)', fontSize: '.875rem', lineHeight: 1.6 }}>
                  Our department academic blocks, laboratories, and resource facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ TRACKS ═══════════════ */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-reveal>
            <div className="section-label">Research Tracks</div>
            <h2
              style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}
            >
              Four Pillars of <span className="glow-text">Innovation</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
              gap: '1.25rem',
            }}
          >
            {tracks.map((t, i) => (
              <MuseCard key={i} data-reveal data-delay={String(i + 1)}>
                <div
                  className="track-icon-box"
                  style={{ boxShadow: `0 0 20px ${t.color}30` }}
                >
                  {t.icon}
                </div>
                <div className="track-bar" style={{ background: t.color }} />
                <h3 style={{ fontSize: '1.05rem', color: '#f8fafc', marginBottom: '.65rem' }}>
                  {t.title}
                </h3>
                <p style={{ color: 'rgba(226,232,240,.5)', fontSize: '.85rem', lineHeight: 1.75 }}>
                  {t.desc}
                </p>
              </MuseCard>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }} data-reveal>
            <Link to="/tracks" className="btn-outline-glow" style={{ fontSize: '.9rem', padding: '.7rem 1.75rem' }}>
              View All Topics →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ IMPORTANT DATES ═══════════════ */}
      <section style={{ padding: '6rem 0', background: 'rgba(255,255,255,.015)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }} data-reveal>
            <div className="section-label">Mark Your Calendar</div>
            <h2
              style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}
            >
              Important <span className="glow-text">Dates</span>
            </h2>
          </div>

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

          <div style={{ textAlign: 'center', marginTop: '3rem' }} data-reveal>
            <Link to="/program" className="btn-outline-glow" style={{ fontSize: '.9rem', padding: '.7rem 1.75rem' }}>
              View Full Schedule →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ WHY ATTEND ═══════════════ */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }} data-reveal>
            <div className="section-label">Why ICICET</div>
            <h2
              style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 800, color: '#f8fafc', margin: 0 }}
            >
              Built for <span className="glow-text">Researchers</span>
            </h2>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
              gap: '1.25rem',
            }}
          >
            {whyAttend.map((f, i) => (
              <MuseCard key={i} data-reveal data-delay={String((i % 3) + 1)}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '.5rem' }}>
                  {f.title}
                </h3>
                <p style={{ color: 'rgba(226,232,240,.5)', fontSize: '.85rem', lineHeight: 1.75 }}>
                  {f.desc}
                </p>
              </MuseCard>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ SPONSORS ═══════════════ */}
      <section style={{ padding: '5rem 0', background: 'rgba(255,255,255,.015)', textAlign: 'center' }}>
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }} data-reveal>
            <div className="section-label">Sponsored By</div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
              Our <span className="glow-text">Partners</span>
            </h2>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}
            data-reveal
            data-delay="2"
          >
            {['Sponsor 1', 'Sponsor 2', 'Sponsor 3', 'Sponsor 4'].map((s, i) => (
              <div key={i} className="sponsor-pill">{s}</div>
            ))}
          </div>
          <p style={{ color: 'rgba(226,232,240,.3)', marginTop: '2rem', fontSize: '.875rem' }} data-reveal data-delay="3">
            Interested in sponsoring?{' '}
            <Link to="/contact" style={{ color: '#38bdf8' }}>
              Contact us
            </Link>
          </p>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section style={{ padding: '7rem 0', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(139,92,246,.12), transparent)',
          }}
        />
        <div className="dot-grid" style={{ opacity: .5 }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <div className="section-label">Don't Miss Out</div>
            <h2
              style={{
                fontSize: 'clamp(2rem,5vw,3.5rem)',
                fontWeight: 900,
                color: '#f8fafc',
                marginBottom: '1rem',
              }}
            >
              Ready to{' '}
              <span className="glow-text">Present Your Research?</span>
            </h2>
            <p
              style={{
                color: 'rgba(226,232,240,.55)',
                maxWidth: '560px',
                margin: '0 auto 2.75rem',
                lineHeight: 1.85,
              }}
            >
              Submit your paper today and join the global community pushing the boundaries of
              computing and technology.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <MagBtn to="/submissions" className="btn-glow-primary">
                <span>🚀 Submit Now</span>
              </MagBtn>
              <MagBtn to="/registration" className="btn-outline-glow">
                Register →
              </MagBtn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
