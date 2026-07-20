import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';
import { FiCalendar, FiMapPin, FiMonitor, FiSend, FiCheckCircle, FiGlobe, FiCpu, FiBarChart2, FiCloud, FiEye, FiBookOpen } from 'react-icons/fi';
import { MdOutlineSchool } from 'react-icons/md';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
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
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{isNaN(parseInt(target)) ? target : val}{suffix}</span>;
}

/* ─── Hero Slider ─── */
function HeroSlider({ images }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);
  return (
    <div style={{ position: 'absolute', inset: 0 }}>
      {images.map((img, i) => (
        <div
          key={i}
          style={{
            position: 'absolute', inset: 0,
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: i === active ? 1 : 0,
            transition: 'opacity 1.2s ease',
          }}
        />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,5,5,0.15) 0%, rgba(30,5,5,0.35) 40%, rgba(80,10,10,0.72) 75%, rgba(60,5,5,0.88) 100%)' }} />
    </div>
  );
}

/* ─── About Section (Tabbed) ─── */
function AboutSection({ confData }) {
  const [activeTab, setActiveTab] = React.useState(0);

  const tabs = [
    { label: 'About the Conference', icon: <FiBookOpen size={15} /> },
    { label: 'About Our Institution', icon: <MdOutlineSchool size={16} /> },
    { label: 'About Kanyakumari', icon: <FiMapPin size={15} /> },
  ];

  const touristSpots = [
    { name: 'Vivekananda Rock Memorial', desc: 'Iconic monument on a rocky island at the confluence of three seas' },
    { name: 'Thiruvalluvar Statue', desc: '133-ft statue of Tamil poet-philosopher Thiruvalluvar' },
    { name: 'Kanyakumari Temple', desc: 'Ancient Devi temple at the southernmost tip of India' },
    { name: 'Sunset & Sunrise Point', desc: 'Witness both sunrise and sunset over the ocean' },
    { name: 'Padmanabhapuram Palace', desc: '16th century wooden palace, a masterpiece of Kerala architecture' },
    { name: 'Mathoor Aqueduct', desc: "Asia's largest aqueduct — an engineering marvel" },
  ];

  const transportModes = [
    { mode: 'Air', detail: 'Nearest airport: Trivandrum International Airport (~90 km)' },
    { mode: 'Train', detail: 'Nagercoil Junction — a major railway hub connecting Delhi, Mumbai, Bangalore & Kolkata. Kanyakumari Railway Station is ~20 km away.' },
    { mode: 'Bus', detail: 'TNSTC & KSRTC buses from Chennai, Coimbatore, Madurai & Trivandrum' },
    { mode: 'Road', detail: 'NH 44 & NH 66 — easily accessible by car or taxi from nearby cities' },
  ];

  return (
    <section style={{ background: '#f8f8f8', padding: '5rem 0' }}>
      <style>{`
        .about-tabs-wrap {
          display: flex;
          gap: 0;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e0e0e0;
          margin-bottom: 2.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .about-tab-btn {
          flex: 1;
          padding: 1rem 1.25rem;
          background: #fff;
          border: none;
          cursor: pointer;
          font-family: 'Outfit', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #666;
          border-right: 1px solid #e0e0e0;
          transition: background 0.2s, color 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          line-height: 1.3;
          text-align: center;
        }
        .about-tab-btn:last-child { border-right: none; }
        .about-tab-btn.active {
          background: #8B1A1A;
          color: #fff;
        }
        .about-tab-btn:hover:not(.active) {
          background: #fdf3f3;
          color: #8B1A1A;
        }
        .about-tab-panel {
          animation: tabFadeIn 0.35s ease;
        }
        @keyframes tabFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .about-inst-highlights {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin: 1.5rem 0;
        }
        .about-inst-stat {
          background: #fdf3f3;
          border: 1px solid rgba(139,26,26,0.12);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
        }
        .about-inst-stat-num {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.6rem;
          color: #8B1A1A;
          line-height: 1;
          margin-bottom: 0.3rem;
        }
        .about-inst-stat-label {
          font-size: 0.75rem;
          color: #666;
          font-weight: 500;
        }
        .kk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .kk-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 1.25rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .kk-card h4 {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .kk-spot-item {
          padding: 0.55rem 0;
          border-bottom: 1px solid #f5f5f5;
          font-size: 0.875rem;
        }
        .kk-spot-item:last-child { border-bottom: none; }
        .kk-spot-name {
          font-weight: 600;
          color: #2d2d2d;
          margin-bottom: 0.15rem;
        }
        .kk-spot-desc { color: #777; font-size: 0.8rem; }
        .kk-transport-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.7rem 0;
          border-bottom: 1px solid #f5f5f5;
          font-size: 0.875rem;
        }
        .kk-transport-item:last-child { border-bottom: none; }
        .kk-transport-mode {
          font-weight: 700;
          color: #8B1A1A;
          min-width: 80px;
          font-size: 0.85rem;
        }
        .kk-transport-detail { color: #555; }
        @media (max-width: 768px) {
          .kk-grid { grid-template-columns: 1fr; }
          .about-tab-btn { font-size: 0.78rem; padding: 0.85rem 0.5rem; }
        }
      `}</style>
      <div className="container">
        <div className="sec-header" data-reveal>
          <div className="sec-badge">Discover More</div>
          <h2>About</h2>
          <div className="sec-divider"></div>
        </div>

        {/* Tab Buttons */}
        <div className="about-tabs-wrap" data-reveal data-delay="1">
          {tabs.map((tab, i) => (
            <button
              key={i}
              className={`about-tab-btn${activeTab === i ? ' active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div className="about-tab-panel" key={activeTab}>

          {/* ── Tab 1: About the Conference ── */}
          {activeTab === 0 && (
            <div className="about-grid">
              <div className="about-text">
                <p>
                  Against the backdrop of rapid global transformation toward intelligent systems and emerging computing technologies,{' '}
                  <strong>{confData.name}</strong> — {confData.fullName} — serves as a premier international academic forum bringing together
                  researchers, scholars, and industry practitioners from around the world.
                </p>
                <p>
                  The conference focuses on Computing, Artificial Intelligence, and emerging technologies — providing an interdisciplinary platform
                  to share research findings, discuss current challenges, and explore cutting-edge innovations. It aims to bridge the gap between
                  theoretical advancements and real-world implementations that shape the future of digital innovation.
                </p>
                <p>
                  Submissions from academia, government, and industry are encouraged. We warmly welcome scholars from around the world to submit
                  their papers and participate in the conference!
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <Link to="/committees" className="btn btn-secondary">Meet the Committee</Link>
                  <Link to="/call-for-papers" className="btn btn-primary">Call For Papers →</Link>
                </div>
              </div>
              <div className="about-dates-card">
                <div className="about-dates-header">
                  <span><FiCalendar aria-hidden="true" /></span> Important Dates
                </div>
                {confData.importantDates.map((item, i) => (
                  <div key={i} className="date-row">
                    <div className="date-row-label">{item.title}</div>
                    <div className="date-row-value">{item.date}</div>
                  </div>
                ))}
                <div className="about-venue-row">
                  <strong><FiMapPin aria-hidden="true" /> Venue:</strong>{' '}
                  <a href="https://www.google.com/maps?q=8.194079,77.385030" target="_blank" rel="noopener noreferrer" style={{ color: '#8B1A1A', textDecoration: 'underline', fontWeight: 600 }}>
                    SXCCE, Nagercoil, Tamil Nadu ↗
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab 2: About Our Institution ── */}
          {activeTab === 1 && (
            <div>
              <div className="about-inst-highlights">
                <div className="about-inst-stat"><div className="about-inst-stat-num">8</div><div className="about-inst-stat-label">UG Programmes</div></div>
                <div className="about-inst-stat"><div className="about-inst-stat-num">9</div><div className="about-inst-stat-label">PG Programmes</div></div>
                <div className="about-inst-stat"><div className="about-inst-stat-num">9</div><div className="about-inst-stat-label">Research Depts</div></div>
                <div className="about-inst-stat"><div className="about-inst-stat-num">2022</div><div className="about-inst-stat-label">Autonomous Since</div></div>
              </div>
              <div className="about-text">
                <p>
                  St. Xavier's Catholic College of Engineering (Autonomous) vibrates with the vision of <strong><em>'Creating a Technically Empowered Humane Society'</em></strong> by offering cutting edge technical and managerial education to the rural youth of Tamil Nadu and beyond.
                </p>
                <p>
                  SXCCE is conferred with <strong>Autonomous Status</strong> from the academic year 2022–2023 for the next 10 years by UGC. The institution offers <strong>Eight undergraduate programmes</strong> (CSE, IT, ECE, EEE, Civil, Mechanical, AI&DS and CSE – Cyber Security) and <strong>Nine postgraduate programmes</strong> including MCA and MBA, besides nine University recognized research departments.
                </p>
                <p>
                  Anna University has approved SXCCE as an <strong>"Institute Level Research Centre"</strong> for a period of three years up to June 2027. All programmes are approved by AICTE, and all UG and MBA programmes have permanent affiliation of Anna University, Chennai.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                  <a href="https://www.sxcce.edu.in" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Visit SXCCE Website ↗</a>
                  <a href="https://www.google.com/maps?q=8.194079,77.385030" target="_blank" rel="noopener noreferrer" className="btn btn-secondary"><FiMapPin style={{ marginRight: '4px' }} aria-hidden="true" /> View on Maps</a>
                </div>
              </div>
            </div>
          )}

          {/* ── Tab 3: About Kanyakumari ── */}
          {activeTab === 2 && (
            <div>
              <p className="about-text" style={{ color: '#4a4a4a', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '1.5rem' }}>
                Kanyakumari, located at the southernmost tip of India, is a land where three seas meet — the Arabian Sea, the Bay of Bengal, and the Indian Ocean. Known for its spectacular sunrises, sunsets, and rich cultural heritage, it is a must-visit destination that complements your conference visit perfectly.
              </p>
              <div className="kk-grid">
                <div className="kk-card">
                  <h4><FiMapPin aria-hidden="true" /> Tourist Spots</h4>
                  {touristSpots.map((spot, i) => (
                    <div key={i} className="kk-spot-item">
                      <div className="kk-spot-name">{spot.name}</div>
                      <div className="kk-spot-desc">{spot.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="kk-card">
                  <h4><FiGlobe aria-hidden="true" /> How to Reach</h4>
                  {transportModes.map((t, i) => (
                    <div key={i} className="kk-transport-item">
                      <span className="kk-transport-mode">{t.mode}</span>
                      <span className="kk-transport-detail">{t.detail}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: '1rem', padding: '0.75rem', background: '#fdf3f3', borderRadius: '8px', fontSize: '0.82rem', color: '#666' }}>
                    <FiMapPin aria-hidden="true" style={{ marginRight: '4px', color: '#8B1A1A' }} /><strong>SXCCE</strong> is located in Nagercoil, ~20 km from Kanyakumari and ~90 km from Trivandrum Airport.
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
════════════════════════════════════════════════════════ */
const Home = () => {
  useReveal();
  useSEO(
    'Home',
    'Welcome to ICICCT 2027 - International Conference on Intelligent Communications and Computing Technologies at SXCCE, Tamil Nadu, India.'
  );

  const heroImages = [
    '/images/college-build.png',
  ];

  const stats = [
    { value: '4', suffix: '', label: 'Tech Tracks' },
    { value: '2', suffix: '', label: 'Keynote Speakers' },
    { value: '2', suffix: '', label: 'Conference Days' },
    { value: '-', suffix: '', label: 'Attendees' },
  ];

  const trackColors = ['#8B1A1A', '#c0392b', '#e74c3c', '#a93226'];
  const trackIcons = [<FiCpu aria-hidden="true" />, <FiBarChart2 aria-hidden="true" />, <FiCloud aria-hidden="true" />, <FiEye aria-hidden="true" />];
  const tracks = confData.tracks.map((t, i) => ({
    icon: trackIcons[i] || '',
    title: t.title.split(': ')[1] || t.title,
    topics: t.topics.slice(0, 5),
    color: trackColors[i] || '#8B1A1A',
  }));

  return (
    <div>
      <style>{`
        /* ── Hero ── */
        .hero-section {
          position: relative;
          min-height: 92vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 4rem 0;
        }
        .hero-conf-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.35);
          color: #fff;
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 0.45rem 1.2rem;
          border-radius: 20px;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(4px);
        }
        /* ── Hero title shimmer effect ── */
        @keyframes shimmerSweep {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes titleFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; transform: scaleX(0.95); }
          50%       { opacity: 1;   transform: scaleX(1); }
        }
        @keyframes subtitleReveal {
          0%   { opacity: 0; transform: translateY(12px) blur(4px); filter: blur(4px); }
          100% { opacity: 1; transform: translateY(0)    blur(0);   filter: blur(0); }
        }
        @keyframes borderShimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-title {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          line-height: 1.05;
          margin-bottom: 0.5rem;
          animation: titleFloat 6s ease-in-out infinite;
          display: block;
          text-align: center;
        }
        .hero-title-main {
          display: inline;
          background: linear-gradient(
            90deg,
            #fff 0%,
            #fff 30%,
            #ffcdd2 45%,
            #fff 55%,
            #fff 70%,
            #ffb3b3 85%,
            #fff 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerSweep 4s linear infinite;
          filter: drop-shadow(0 2px 12px rgba(0,0,0,0.7));
          letter-spacing: -1px;
        }
        .hero-title-year {
          font-size: 1em;
          font-weight: 900;
          background: linear-gradient(135deg, #ff8a80, #ef9a9a, #ffcdd2);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 2px;
          filter: drop-shadow(0 0 12px rgba(255,120,100,0.5));
          vertical-align: baseline;
          margin-left: 0.1em;
        }
        .hero-title-glow-bar {
          width: 120px;
          height: 3px;
          margin: 0.6rem auto 1.2rem;
          background: linear-gradient(90deg, transparent, #ef9a9a, #fff, #ef9a9a, transparent);
          background-size: 200% 100%;
          border-radius: 2px;
          animation: borderShimmer 3s ease infinite, glowPulse 3s ease-in-out infinite;
          box-shadow: 0 0 10px rgba(255,150,130,0.6);
        }
        .hero-subtitle-wrap {
          display: block;
          background: rgba(0,0,0,0.30);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 12px;
          padding: 0.75rem 1.5rem;
          margin: 0 auto 1.25rem;
          max-width: 620px;
          animation: subtitleReveal 0.9s ease 0.3s both;
          text-align: center;
        }
        .hero-subtitle {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(1rem, 2.2vw, 1.25rem);
          font-weight: 700;
          background: linear-gradient(90deg, rgba(255,255,255,0.9) 0%, #ffcdd2 40%, rgba(255,255,255,0.95) 80%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.65;
          letter-spacing: 0.01em;
          margin: 0;
        }
        .hero-date-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.25);
          color: rgba(255,255,255,0.9);
          font-size: 0.95rem;
          font-weight: 600;
          padding: 0.6rem 1.4rem;
          border-radius: 30px;
          margin-bottom: 2rem;
          backdrop-filter: blur(4px);
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .hero-date-badge:hover {
          background: rgba(255,255,255,0.2);
          border-color: rgba(255,255,255,0.4);
        }
        .hero-btns {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-top: 2rem;
        }
        .hero-btn-primary {
          background: #fff;
          color: #8B1A1A;
          font-weight: 700;
          font-size: 1rem;
          padding: 0.85rem 2rem;
          border-radius: 6px;
          transition: all 0.25s;
          border: 2px solid #fff;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hero-btn-primary:hover {
          background: #8B1A1A;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
        }
        .hero-btn-secondary {
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: 1rem;
          padding: 0.85rem 2rem;
          border-radius: 6px;
          transition: all 0.25s;
          border: 2px solid rgba(255,255,255,0.6);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }
        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
          border-color: #fff;
          transform: translateY(-2px);
        }
        .hero-scroll-dots {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 3;
        }
        .scroll-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.35);
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
        .scroll-dot.active {
          background: #fff;
          transform: scale(1.3);
        }

        /* ── Announcement ticker ── */
        .ticker-section {
          background: #8B1A1A;
          padding: 0.7rem 0;
          overflow: hidden;
        }
        .ticker-inner {
          display: inline-flex;
          gap: 4rem;
          white-space: nowrap;
          animation: tickerMove 30s linear infinite;
          color: #fff;
          font-size: 0.88rem;
          font-weight: 500;
        }
        .ticker-sep {
          color: rgba(255,255,255,0.4);
        }
        @keyframes tickerMove { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

        /* ── Section dividers ── */
        .sec-alt { background: #f8f8f8; }
        .sec-white { background: #fff; }

        /* ── Info cards row (date, venue, mode) ── */
        .info-strip {
          background: #8B1A1A;
          padding: 2rem 0;
        }
        .info-strip-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1px;
        }
        .info-strip-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1.25rem;
          border-right: 1px solid rgba(255,255,255,0.15);
        }
        .info-strip-item:last-child { border-right: none; }
        .info-strip-icon {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
          color: #fff;
        }
        .info-strip-label {
          font-size: 0.72rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.6);
          margin-bottom: 0.25rem;
        }
        .info-strip-value {
          font-weight: 700;
          color: #fff;
          font-size: 1rem;
          font-family: 'Outfit', sans-serif;
        }

        /* ── Stats ── */
        .stat-block {
          text-align: center;
          padding: 2rem 1rem;
          border-right: 1px solid #e8e8e8;
        }
        .stat-block:last-child { border-right: none; }
        .stat-number {
          font-family: 'Outfit', sans-serif;
          font-weight: 900;
          font-size: 3rem;
          color: #8B1A1A;
          line-height: 1;
          margin-bottom: 0.35rem;
        }
        .stat-label {
          font-size: 0.85rem;
          color: #777;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        /* ── About section ── */
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 3rem;
          align-items: flex-start;
        }
        .about-text p {
          color: #4a4a4a;
          line-height: 1.85;
          font-size: 0.97rem;
        }
        .about-dates-card {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.07);
          overflow: hidden;
        }
        .about-dates-header {
          background: #8B1A1A;
          color: #fff;
          padding: 1rem 1.25rem;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .date-row {
          padding: 0.9rem 1.25rem;
          border-bottom: 1px solid #f0f0f0;
        }
        .date-row:last-child { border-bottom: none; }
        .date-row-label {
          font-size: 0.78rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }
        .date-row-value {
          font-weight: 700;
          color: #8B1A1A;
          font-size: 0.97rem;
        }
        .about-venue-row {
          padding: 0.9rem 1.25rem;
          background: #fdf3f3;
          font-size: 0.88rem;
          color: #555;
        }

        /* ── Track cards ── */
        .track-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          height: 100%;
        }
        .track-card:hover {
          box-shadow: 0 6px 24px rgba(139,26,26,0.12);
          transform: translateY(-4px);
          border-color: #8B1A1A;
        }
        .track-card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #f0f0f0;
        }
        .track-icon {
          width: 48px; height: 48px;
          border-radius: 10px;
          background: #fdf3f3;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .track-num {
          font-size: 0.72rem;
          color: #8B1A1A;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .track-title {
          font-weight: 700;
          color: #1a1a1a;
          font-size: 0.97rem;
          line-height: 1.3;
        }
        .track-topic-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          padding: 0.35rem 0;
          font-size: 0.875rem;
          color: #555;
          border-bottom: 1px solid #f8f8f8;
        }
        .track-topic-item:last-child { border-bottom: none; }
        .topic-dot {
          color: #8B1A1A;
          font-size: 0.6rem;
          margin-top: 5px;
          flex-shrink: 0;
        }

        /* ── Organized by ── */
        .org-section {
          background: #fff;
        }
        .org-logo-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 2rem;
          border: 1px solid #eee;
          border-radius: 10px;
          background: #fafafa;
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .org-logo-box:hover {
          box-shadow: 0 4px 16px rgba(0,0,0,0.09);
          border-color: #ddd;
        }
        .org-logo-box img {
          max-height: 100px;
          max-width: 180px;
          object-fit: contain;
          margin-bottom: 1rem;
        }
        .org-logo-name {
          font-weight: 600;
          color: #3d3d3d;
          font-size: 0.9rem;
        }

        /* ── Gallery ── */
        .gallery-card {
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid #e0e0e0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
        }
        .gallery-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .gallery-card:hover img { transform: scale(1.04); }
        .gallery-caption {
          padding: 1rem 1.25rem;
          background: #fff;
        }
        .gallery-caption h4 {
          font-size: 1rem;
          color: #1a1a1a;
          margin-bottom: 0.3rem;
        }
        .gallery-caption p {
          font-size: 0.82rem;
          color: #777;
          margin: 0;
        }

        /* ── CTA Banner ── */
        .cta-banner {
          background: linear-gradient(135deg, #8B1A1A 0%, #6b1313 100%);
          padding: 5rem 0;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-banner::before {
          content: '';
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cta-banner h2 {
          color: #fff;
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 800;
          margin-bottom: 1rem;
        }
        .cta-banner p {
          color: rgba(255,255,255,0.8);
          max-width: 560px;
          margin: 0 auto 2rem;
          font-size: 1rem;
          line-height: 1.7;
        }

        /* ── Section headers ── */
        .sec-header {
          margin-bottom: 3rem;
          text-align: center;
        }
        .sec-badge {
          display: inline-block;
          background: #fdf3f3;
          color: #8B1A1A;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 0.3rem 0.9rem;
          border-radius: 20px;
          border: 1px solid rgba(139,26,26,0.18);
          margin-bottom: 0.75rem;
        }
        .sec-header h2 {
          color: #1a1a1a;
          margin-bottom: 0.75rem;
        }
        .sec-header p {
          color: #666;
          font-size: 1rem;
          max-width: 560px;
          margin: 0 auto;
        }
        .sec-divider {
          width: 48px;
          height: 3px;
          background: #8B1A1A;
          border-radius: 2px;
          margin: 0.75rem auto 0;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .about-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .hero-section { min-height: 80vh; }
          .info-strip-grid { grid-template-columns: repeat(2, 1fr); }
          .info-strip-item { border-bottom: 1px solid rgba(255,255,255,0.15); }
          .stat-block { border-right: none; border-bottom: 1px solid #e8e8e8; }
        }
        @media (max-width: 480px) {
          .info-strip-grid { grid-template-columns: 1fr; }
          .hero-btns .hero-btn-primary, .hero-btns .hero-btn-secondary { width: 100%; justify-content: center; }
        }
      `}</style>

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="hero-section">
        <HeroSlider images={heroImages} />
        <div className="container hero-content">
          <div data-reveal>
            <div className="hero-conf-badge"><FiCalendar aria-hidden="true" style={{ marginRight: '4px' }} /> {confData.date}</div>
            <h1 className="hero-title">
              <span className="hero-title-main">
                ICICCT<span className="hero-title-year">2027</span>
              </span>
            </h1>
            <div className="hero-title-glow-bar" />
            <div className="hero-subtitle-wrap">
              <p className="hero-subtitle">{confData.fullName}</p>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=8.194079,77.385030" target="_blank" rel="noopener noreferrer" className="hero-date-badge">
              <span><FiMapPin aria-hidden="true" /></span>
              <span>{confData.location}, Tamil Nadu, India</span>
            </a>
          </div>
          <div className="hero-btns" data-reveal data-delay="1">
            <Link to="/submissions" className="hero-btn-primary"><FiSend aria-hidden="true" /> Submit Paper</Link>
            <Link to="/registration" className="hero-btn-secondary">Register Now →</Link>
            <Link to="/call-for-papers" className="hero-btn-secondary">Call For Papers</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ TICKER ═══════════════ */}
      <div className="ticker-section" style={{ overflow: 'hidden' }}>
        <div className="ticker-inner">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: 'inline-flex', gap: '3rem' }}>
              <span><FiCalendar aria-hidden="true" /> Paper Submission Deadline: {confData.importantDates[0]?.date}</span>
              <span className="ticker-sep">|</span>
              <span><FiGlobe aria-hidden="true" /> {confData.fullName}</span>
              <span className="ticker-sep">|</span>
              <span><FiMapPin aria-hidden="true" /> {confData.location}, Tamil Nadu, India</span>
              <span className="ticker-sep">|</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════ INFO STRIP ═══════════════ */}
      <div className="info-strip">
        <div className="container">
          <div className="info-strip-grid">
            <div className="info-strip-item">
              <div className="info-strip-icon"><FiCalendar aria-hidden="true" /></div>
              <div className="info-strip-label">Conference Dates</div>
              <div className="info-strip-value">{confData.date}</div>
            </div>
            <div className="info-strip-item">
              <div className="info-strip-icon"><FiMapPin aria-hidden="true" /></div>
              <div className="info-strip-label">Venue</div>
              <div className="info-strip-value">{confData.location}, Tamil Nadu</div>
            </div>

            <div className="info-strip-item">
              <div className="info-strip-icon"><FiBookOpen aria-hidden="true" /></div>
              <div className="info-strip-label">Submission Deadline</div>
              <div className="info-strip-value">{confData.importantDates[0]?.date}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="sec-white" style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', border: '1px solid #eee', borderRadius: '10px', overflow: 'hidden' }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-block" data-reveal data-delay={String(i + 1)}>
                <div className="stat-number">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT (TABBED) ═══════════════ */}
      <AboutSection confData={confData} />

      {/* ═══════════════ TRACKS ═══════════════ */}
      <section className="sec-white" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="sec-header" data-reveal>
            <div className="sec-badge">Research Areas</div>
            <h2>Conference Tracks</h2>
            <p>Submit your research in any of these four major thematic tracks.</p>
            <div className="sec-divider"></div>
          </div>
          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {tracks.map((t, i) => (
              <div key={i} className="track-card" data-reveal data-delay={String((i % 2) + 1)}>
                <div className="track-card-header">
                  <div className="track-icon">{t.icon}</div>
                  <div>
                    <div className="track-num">Track {i + 1}</div>
                    <div className="track-title">{t.title}</div>
                  </div>
                </div>
                <div>
                  {t.topics.map((topic, j) => (
                    <div key={j} className="track-topic-item">
                      <span className="topic-dot">●</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                  <div style={{ marginTop: '0.75rem' }}>
                    <Link to="/call-for-papers" style={{ color: '#8B1A1A', fontSize: '0.85rem', fontWeight: 600 }}>
                      View all topics →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ORGANIZED BY ═══════════════ */}
      <section className="sec-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="sec-header" data-reveal>
            <div className="sec-badge">Organizers</div>
            <h2>Organized By</h2>
            <div className="sec-divider"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: 700, margin: '0 auto' }} data-reveal data-delay="1">
            <div className="org-logo-box" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                <div style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', width: '100%' }}>
                  <img src="/images/college-logo.png" alt="SXCCE" loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
                </div>
                <div className="org-logo-name">St. Xavier's Catholic College of Engineering</div>
              </div>
              <a href="https://www.google.com/maps?q=8.194079,77.385030" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.78rem', color: '#8B1A1A', marginTop: '0.75rem', display: 'block', fontWeight: 500 }}>Nagercoil, Tamil Nadu, India ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SPONSORS ═══════════════ */}
      <section className="sec-white" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="sec-header" data-reveal>
            <div className="sec-badge">Support</div>
            <h2>Our Sponsors</h2>
            <div className="sec-divider"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', maxWidth: 800, margin: '0 auto' }} data-reveal data-delay="1">
            <div className="org-logo-box" style={{ padding: '1.5rem', height: '100%', justifyContent: 'space-between' }}>
              <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src="/images/sponsors/college-logo.png" alt="SXCCE" loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="org-logo-name" style={{ marginTop: '1rem' }}>SXCCE</div>
            </div>
            <div className="org-logo-box" style={{ padding: '1.5rem', height: '100%', justifyContent: 'space-between' }}>
              <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src="/images/sponsors/IISER.jpg" alt="IISER" loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="org-logo-name" style={{ marginTop: '1rem' }}>IISER</div>
            </div>
            <div className="org-logo-box" style={{ padding: '1.5rem', height: '100%', justifyContent: 'space-between' }}>
              <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <img src="/images/sponsors/UNICAMP.png" alt="UNICAMP" loading="lazy" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; }} />
              </div>
              <div className="org-logo-name" style={{ marginTop: '1rem' }}>UNICAMP</div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }} data-reveal data-delay="2">
            <p style={{ color: '#555', fontSize: '1.05rem', marginBottom: '1rem', fontWeight: 500 }}>Interest in sponsoring us?</p>
            <Link to="/contact" style={{ display: 'inline-flex', padding: '0.75rem 2rem', background: '#8B1A1A', color: '#fff', borderRadius: '6px', fontWeight: 600, textDecoration: 'none', transition: 'background 0.3s' }} onMouseOver={(e) => e.target.style.background = '#6b1313'} onMouseOut={(e) => e.target.style.background = '#8B1A1A'}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ CAMPUS GALLERY ═══════════════ */}
      <section className="sec-alt" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="sec-header" data-reveal>
            <div className="sec-badge">Campus & Department</div>
            <h2>Our Infrastructure</h2>
            <div className="sec-divider"></div>
          </div>
          <div className="grid-2" data-reveal data-delay="1">
            <div className="gallery-card">
              <img src="/images/college-build.png" alt="College Campus" loading="lazy" onError={(e) => { e.target.src = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
              <div className="gallery-caption">
                <h4>College Campus</h4>
                <p>St. Xavier's Catholic College of Engineering campus, Nagercoil</p>
              </div>
            </div>
            <div className="gallery-card">
              <img src="/images/Dept-image.jpg" alt="Department of IT" loading="lazy" onError={(e) => { e.target.src = 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'; }} />
              <div className="gallery-caption">
                <h4>Department of Information Technology</h4>
                <p>State-of-the-art labs and facilities for research and innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA BANNER ═══════════════ */}
      <section className="cta-banner">
        <div className="container" data-reveal style={{ position: 'relative', zIndex: 1 }}>
          <h2>Ready to Present Your Research?</h2>
          <p>
            Submit your paper today and join researchers worldwide at {confData.name} — advancing the frontiers of intelligent communications and computing technologies.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/submissions" className="hero-btn-primary"><FiSend aria-hidden="true" /> Submit Paper Now</Link>
            <Link to="/registration" className="hero-btn-secondary">Register for Conference →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
