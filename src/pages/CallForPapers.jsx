import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';

function useReveal() {
  useEffect(() => {
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
}

const trackIcons = ['', '', '', ''];

const CallForPapers = () => {
  useReveal();

  return (
    <div className="page-wrapper">
      <style>{`
        .track-cfp-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
          display: flex;
          flex-direction: column;
        }
        .track-cfp-card:hover {
          box-shadow: 0 8px 28px rgba(139,26,26,0.12);
          transform: translateY(-4px);
          border-color: rgba(139,26,26,0.3);
        }
        .track-cfp-header {
          background: #8B1A1A;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.85rem;
        }
        .track-cfp-icon {
          font-size: 1.5rem;
        }
        .track-cfp-label {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.7);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
        .track-cfp-title {
          color: #fff;
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.3;
          font-family: 'Outfit', sans-serif;
        }
        .track-cfp-body {
          padding: 1.25rem 1.5rem;
          flex: 1;
        }
        .track-topic-row {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.45rem 0;
          border-bottom: 1px solid #f5f5f5;
          font-size: 0.875rem;
          color: #444;
        }
        .track-topic-row:last-child { border-bottom: none; }
        .track-topic-bullet {
          color: #8B1A1A;
          font-weight: 700;
          font-size: 0.7rem;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .cfp-guidelines-box {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
        }
        .guideline-item {
          display: flex;
          align-items: flex-start;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid #f5f5f5;
        }
        .guideline-item:last-child { border-bottom: none; }
        .guideline-icon {
          width: 32px; height: 32px;
          background: #fdf3f3;
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.95rem;
          flex-shrink: 0;
          border: 1px solid rgba(139,26,26,0.1);
        }
        .guideline-title {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 0.92rem;
          margin-bottom: 0.2rem;
        }
        .guideline-desc {
          font-size: 0.83rem;
          color: #666;
          line-height: 1.5;
        }

        .cfp-cta-box {
          background: linear-gradient(135deg, #8B1A1A, #6b1313);
          border-radius: 10px;
          padding: 2.5rem;
          text-align: center;
          color: #fff;
        }
        .cfp-cta-box h3 { color: #fff; margin-bottom: 0.75rem; }
        .cfp-cta-box p { color: rgba(255,255,255,0.82); margin-bottom: 1.5rem; }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Call For Papers</span>
          </div>
          <h1>Call For Papers</h1>
          <p>We invite high-quality original research papers in all areas of intelligent communications and computing technologies.</p>
        </div>
      </div>

      {/* Tracks */}
      <section style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container">
          <div className="sec-header" data-reveal style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-badge">Research Tracks</div>
            <h2 style={{ color: '#1a1a1a', marginTop: '0.5rem' }}>Conference Tracks &amp; Topics</h2>
            <p style={{ color: '#666', maxWidth: 600, margin: '0 auto' }}>
              {confData.name} solicits papers on all aspects of intelligent communications and computing. Topics include, but are not limited to:
            </p>
            <div className="section-divider"></div>
          </div>
          <div className="grid-2" style={{ gap: '1.25rem' }}>
            {confData.tracks.map((track, index) => (
              <div key={index} className="track-cfp-card" data-reveal data-delay={String((index % 2) + 1)}>
                <div className="track-cfp-header">
                  <span className="track-cfp-icon">{trackIcons[index] || ''}</span>
                  <div>
                    <div className="track-cfp-label">Track {index + 1}</div>
                    <div className="track-cfp-title">{track.title.split(': ')[1] || track.title}</div>
                  </div>
                </div>
                <div className="track-cfp-body">
                  {track.topics.map((topic, i) => (
                    <div key={i} className="track-topic-row">
                      <span className="track-topic-bullet">▶</span>
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section style={{ background: '#fff', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
            <div data-reveal>
              <div className="section-badge">Guidelines</div>
              <h2 style={{ color: '#1a1a1a', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Submission Guidelines</h2>
              <div className="cfp-guidelines-box">
                {[
                  { icon: '', title: 'Original Work', desc: 'Papers must report original research not previously published or under consideration elsewhere.' },
                  { icon: '', title: 'Paper Length', desc: 'Full papers: 6–8 pages. Short papers: 4–5 pages, including all figures, tables, and references.' },
                  { icon: '', title: 'Paper Format', desc: 'Use the conference template. LaTeX and MS Word templates are available for download.' },
                  { icon: '', title: 'Plagiarism Policy', desc: 'All submissions will be checked for plagiarism. Maximum similarity: 14%. AI-generated content is not allowed.' },
                  { icon: '', title: 'Language', desc: 'Papers must be written in English and proofread before submission.' },
                  { icon: '', title: 'Review Process', desc: 'All submissions undergo double-blind peer review by at least two experts in the relevant field.' },
                ].map((g, i) => (
                  <div key={i} className="guideline-item">
                    <div className="guideline-icon">{g.icon}</div>
                    <div>
                      <div className="guideline-title">{g.title}</div>
                      <div className="guideline-desc">{g.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal data-delay="1">
              <div className="section-badge">Publication</div>
              <h2 style={{ color: '#1a1a1a', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Publication Info</h2>
              <div className="cfp-guidelines-box" style={{ marginBottom: '1.5rem' }}>
                <p style={{ color: '#3d3d3d', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1rem' }}>
                  All accepted and presented papers at {confData.name} will be published in the conference proceedings by a reputed international publisher.
                  Published papers will be indexed in major scientific databases.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  {['Scopus', 'Web of Science', 'IEEE Xplore', 'Springer'].map(db => (
                    <span key={db} style={{ background: '#fdf3f3', border: '1px solid rgba(139,26,26,0.2)', color: '#8B1A1A', fontSize: '0.8rem', fontWeight: 600, padding: '4px 12px', borderRadius: '20px' }}>
                      {db}
                    </span>
                  ))}
                </div>
                <p style={{ color: '#666', fontSize: '0.83rem', lineHeight: 1.6, margin: 0 }}>
                  <strong>Note:</strong> Authors must present their paper at the conference for it to be included in the proceedings.
                </p>
              </div>

              <div className="cfp-cta-box" data-reveal data-delay="2">
                <h3>Ready to Submit?</h3>
                <p>Submit your paper through our online submission portal.</p>
                <Link to="/submissions" className="btn" style={{ background: '#fff', color: '#8B1A1A', fontWeight: 700, padding: '0.75rem 2rem', borderRadius: '6px', display: 'inline-block' }}>
                   Go to Submission Portal →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallForPapers;
