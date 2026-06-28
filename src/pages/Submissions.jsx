import React, { useEffect } from 'react';

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

const Submissions = () => {
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
        .sub-section {
          background:rgba(255,255,255,.03);
          border:1px solid rgba(255,255,255,.08);
          border-radius:16px; padding:2rem 2.25rem;
          margin-bottom:2rem;
          transition:border-color .3s;
        }
        .sub-section:hover { border-color:rgba(56,189,248,.2); }
        .template-btn {
          display:inline-flex; align-items:center; gap:.5rem;
          padding:.7rem 1.5rem; border-radius:999px;
          font-weight:600; font-size:.9rem; cursor:pointer;
          background:transparent;
          color:rgba(226,232,240,.75);
          border:1px solid rgba(255,255,255,.14);
          transition:border-color .3s, color .3s, background .3s;
          font-family:'Outfit', sans-serif;
        }
        .template-btn:hover {
          border-color:rgba(56,189,248,.5); color:#fff;
          background:rgba(56,189,248,.08);
        }
        .portal-card {
          background:linear-gradient(135deg, rgba(14,165,233,.08), rgba(139,92,246,.08));
          border:1px solid rgba(56,189,248,.15);
          border-radius:16px; padding:2.5rem;
          text-align:center; margin-bottom:2rem;
          transition:border-color .3s;
        }
        .portal-card:hover { border-color:rgba(56,189,248,.4); }
        .ai-list li {
          padding:.6rem 0;
          color:rgba(226,232,240,.6);
          display:flex; align-items:flex-start; gap:.75rem;
          line-height:1.65;
        }
        .ai-list li::before {
          content:'•'; color:#38bdf8; font-weight:bold; flex-shrink:0;
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Submissions
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 800, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              Paper formatting, submission portals, and conference policies.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Paper Formatting */}
        <div className="sub-section" data-reveal>
          <h2 style={{ color: '#38bdf8', marginBottom: '1rem' }}>📄 Paper Formatting</h2>
          <p style={{ color: 'rgba(226,232,240,.6)', marginBottom: '1.25rem', lineHeight: 1.8 }}>
            Submitted papers must be formatted according to the official template.
            All submissions should be written in English with a maximum paper length of six (6) printed pages including figures.
          </p>
          <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            <button className="template-btn">📝 Download Word Template</button>
            <button className="template-btn">📐 Download LaTeX Template</button>
          </div>
        </div>

        {/* Submission Portal */}
        <div className="portal-card" data-reveal data-delay="1">
          <h2 style={{ color: '#f1f5f9', marginBottom: '.75rem' }}>🚀 Submission Portal</h2>
          <p style={{ color: 'rgba(226,232,240,.55)', marginBottom: '1.5rem', maxWidth: 600, margin: '0 auto 1.5rem' }}>
            Please submit your manuscript via our online submission system.
            You will need to create an account if you don't have one already.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            style={{ padding: '.9rem 2.5rem', fontSize: '1.05rem' }}
          >
            Enter Submission System →
          </a>
        </div>

        {/* Editorial Policy */}
        <div id="editorial-policy" style={{ paddingTop: 80, marginTop: -80 }}>
          <div className="sub-section" data-reveal data-delay="2">
            <h2 className="glow-text" style={{ marginBottom: '1rem' }}>Editorial Policy</h2>
            <p style={{ color: 'rgba(226,232,240,.6)', marginBottom: '1rem', lineHeight: 1.8 }}>
              All submitted articles should report original, previously unpublished research results.
              Articles submitted to the conference should meet these criteria and must not be under consideration for publication elsewhere.
            </p>
            <p style={{ color: 'rgba(226,232,240,.6)', lineHeight: 1.8 }}>
              We firmly believe that ethical conduct is the most essential virtue of any academic.
              Hence any act of plagiarism is a totally unacceptable academic misconduct and cannot be tolerated.
            </p>
          </div>
        </div>

        {/* AI Guidelines */}
        <div id="ai-guidelines" style={{ paddingTop: 80, marginTop: -80 }}>
          <div className="sub-section" data-reveal data-delay="3">
            <h2 className="glow-text" style={{ marginBottom: '1rem' }}>Guidelines for AI Tools</h2>
            <p style={{ color: 'rgba(226,232,240,.6)', marginBottom: '1rem', lineHeight: 1.8 }}>
              Authors are permitted to use generative AI and AI-assisted technologies in the writing process to improve readability and language.
              However, these technologies should only be used to improve the text, not to replace the author's critical thinking or analysis.
            </p>
            <ul className="ai-list" style={{ listStyle: 'none', padding: 0 }}>
              <li>AI tools cannot be listed as authors.</li>
              <li>Authors must disclose the use of AI tools in their manuscript.</li>
              <li>Authors are fully responsible for the content of their manuscript, even those parts produced by an AI tool.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
