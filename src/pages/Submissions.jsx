import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Section = ({ id, title, icon, children }) => (
  <div id={id} style={{ paddingTop: 80, marginTop: -80 }}>
    <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden', marginBottom: '2rem' }} data-reveal>
      <div style={{ background: '#8B1A1A', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.2rem' }}>{icon}</span>
        <h2 style={{ color: '#fff', margin: 0, fontSize: '1.25rem', fontFamily: 'Outfit, sans-serif' }}>{title}</h2>
      </div>
      <div style={{ padding: '1.75rem' }}>
        {children}
      </div>
    </div>
  </div>
);

const Submissions = () => {
  useReveal();
  useSEO(
    'Submission Portal & Guidelines',
    'Submit papers to ICICCT 2027. Review our editorial policy, page limits, plagiarism policy, and AI-tool usage guidelines.'
  );

  return (
    <div className="page-wrapper">
      <style>{`
        .sub-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          padding: 0.5rem 0;
          font-size: 0.92rem;
          color: #444;
          border-bottom: 1px solid #f5f5f5;
          line-height: 1.6;
        }
        .sub-list li:last-child { border-bottom: none; }
        .sub-list-bullet { color: #8B1A1A; font-weight: 700; flex-shrink: 0; }
        .sub-text { color: #444; font-size: 0.95rem; line-height: 1.8; margin-bottom: 1rem; }
        .template-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.4rem;
          border: 2px solid #8B1A1A;
          border-radius: 6px;
          color: #8B1A1A;
          font-weight: 600;
          font-size: 0.9rem;
          background: #fff;
          cursor: pointer;
          transition: all 0.2s;
        }
        .template-btn:hover {
          background: #8B1A1A;
          color: #fff;
        }
        .portal-cta-box {
          background: linear-gradient(135deg, #8B1A1A, #6b1313);
          border-radius: 10px;
          padding: 2.5rem;
          text-align: center;
          color: #fff;
          margin-bottom: 2rem;
        }
        .portal-cta-box h3 { color: #fff; font-size: 1.4rem; margin-bottom: 0.75rem; }
        .portal-cta-box p { color: rgba(255,255,255,0.82); margin-bottom: 1.5rem; }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Submissions</span>
          </div>
          <h1>Paper Submissions</h1>
          <p>Guidelines, templates, and policies for submitting your research paper.</p>
        </div>
      </div>

      <section style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>

          {/* Section 1 — Submit Your Paper: TBA */}
          <div data-reveal style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden', marginBottom: '2rem' }}>
            <div style={{ background: '#8B1A1A', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '1.2rem' }}>📄</span>
              <h2 style={{ color: '#fff', margin: 0, fontSize: '1.25rem', fontFamily: 'Outfit, sans-serif' }}>Submit Your Paper</h2>
            </div>
            <div style={{ padding: '2.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🕐</div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#8B1A1A', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                To Be Announced Soon
              </div>
              <p style={{ color: '#888', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                The submission portal will be opened shortly. Please check back later.
              </p>
            </div>
          </div>

          {/* Section 2 — Paper Formatting: TBA */}
          <div id="formatting" style={{ paddingTop: 80, marginTop: -80 }}>
            <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: 10, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden', marginBottom: '2rem' }} data-reveal>
              <div style={{ background: '#8B1A1A', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontSize: '1.2rem' }}></span>
                <h2 style={{ color: '#fff', margin: 0, fontSize: '1.25rem', fontFamily: 'Outfit, sans-serif' }}>Paper Formatting</h2>
              </div>
              <div style={{ padding: '2.5rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🕐</div>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#8B1A1A', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  To Be Announced Soon
                </div>
                <p style={{ color: '#888', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
                  Formatting guidelines will be published shortly. Please check back later.
                </p>
              </div>
            </div>
          </div>

          {/* Editorial Policy */}
          <Section id="editorial-policy" title="Editorial Policy" icon="">
            <p className="sub-text">
              All submitted articles should report original research results — experimental or theoretical — not previously presented or under consideration elsewhere.
              Articles submitted to the conference must meet these criteria.
            </p>
            <p className="sub-text">
              We firmly believe that ethical conduct is the most essential virtue of any academic.
              Hence, any act of plagiarism or other misconduct is totally unacceptable and cannot be tolerated.
              All the papers will be checked for plagiarism in Turnitin and max 14% of plagiarism will be accepted.
            </p>
            <ul className="sub-list" style={{ listStyle: 'none', padding: 0 }}>
              {[
                'At least one author per accepted paper must register and present the paper at the conference.',
                'Authors are responsible for the accuracy, originality, and ethical standards of their work.',
                'All papers undergo double-blind peer review by at least two domain experts.',
                'Accepted papers will be included in the conference program only after registration and presentation.',
              ].map((item, i) => (
                <li key={i}>
                  <span className="sub-list-bullet">▶</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>


        </div>
      </section>
    </div>
  );
};

export default Submissions;
