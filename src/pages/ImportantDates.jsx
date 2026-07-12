import React, { useEffect } from 'react';
import { confData } from '../data/conferenceData';

const ImportantDates = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const icons = ['', '', '', ''];
  const colors = ['#8B1A1A', '#c0392b', '#a93226', '#6b1313'];

  return (
    <div className="page-wrapper">
      <style>{`
        .dates-timeline {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
          padding: 1rem 0;
        }
        .dates-timeline::before {
          content: '';
          position: absolute;
          top: 0; bottom: 0; left: 40px;
          width: 2px;
          background: linear-gradient(to bottom, #8B1A1A, rgba(139,26,26,0.15));
        }
        .date-item {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
        }
        .date-item:last-child { margin-bottom: 0; }
        .date-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #8B1A1A;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
          box-shadow: 0 0 0 4px rgba(139,26,26,0.15);
        }
        .date-card {
          flex: 1;
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 1.25rem 1.5rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .date-card:hover {
          box-shadow: 0 6px 24px rgba(139,26,26,0.1);
          transform: translateX(6px);
          border-color: rgba(139,26,26,0.25);
        }
        .date-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #8B1A1A;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }
        .date-value {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1a1a1a;
          font-family: 'Outfit', sans-serif;
        }
        .date-passed {
          display: inline-block;
          background: #e8f5e9;
          color: #2e7d32;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 20px;
          margin-top: 0.4rem;
        }
        .date-upcoming {
          display: inline-block;
          background: #fdf3f3;
          color: #8B1A1A;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 20px;
          margin-top: 0.4rem;
        }
        @media (max-width: 640px) {
          .dates-timeline::before { left: 20px; }
          .date-icon-wrap { width: 32px; height: 32px; font-size: 0.8rem; }
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Important Dates</span>
          </div>
          <h1>Important Dates</h1>
          <p>Mark your calendar for these key deadlines for {confData.name}.</p>
        </div>
      </div>

      <section style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '3rem', textAlign: 'center' }} data-reveal>
            <div className="section-badge">Key Deadlines</div>
            <h2 style={{ color: '#1a1a1a' }}>Conference Timeline</h2>
            <div className="section-divider"></div>
          </div>

          <div className="dates-timeline">
            {confData.importantDates.map((item, i) => (
              <div key={i} className="date-item" data-reveal data-delay={String((i % 4) + 1)}>
                <div className="date-icon-wrap" style={{ background: colors[i] || '#8B1A1A' }}>
                  <span style={{ fontSize: '0.9rem' }}>{icons[i] || ''}</span>
                </div>
                <div className="date-card">
                  <div className="date-label">{item.title}</div>
                  <div className="date-value">{item.date}</div>
                  <div className={item.passed ? 'date-passed' : 'date-upcoming'}>
                    {item.passed ? ' Passed' : ' Upcoming'}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Note box */}
          <div style={{ maxWidth: 700, margin: '3rem auto 0' }} data-reveal>
            <div style={{ background: '#fdf3f3', border: '1px solid rgba(139,26,26,0.15)', borderLeft: '4px solid #8B1A1A', borderRadius: '8px', padding: '1.25rem 1.5rem' }}>
              <h4 style={{ color: '#8B1A1A', fontSize: '0.95rem', marginBottom: '0.5rem' }}> Note</h4>
              <p style={{ color: '#555', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                All deadlines are at <strong>11:59 PM Anywhere on Earth (AoE)</strong>. Authors are encouraged to submit early. 
                Deadlines may be extended under exceptional circumstances — check this page for the latest updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImportantDates;
