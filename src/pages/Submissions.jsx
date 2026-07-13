import React from 'react';
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

          {/* Submission Portal */}
          <div data-reveal>
            <div className="portal-cta-box">
              <h3> Submit Your Paper</h3>
              <p>Submit your manuscript through our online submission system. Create an account if you don't have one.</p>
              <a href="#" className="btn" style={{ background: '#fff', color: '#8B1A1A', fontWeight: 700, padding: '0.85rem 2.25rem', borderRadius: 6, display: 'inline-block', fontSize: '1rem' }}>
                Enter Submission Portal →
              </a>
              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button className="template-btn" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff' }}>
                   Word Template
                </button>
                <button className="template-btn" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', color: '#fff' }}>
                   LaTeX Template
                </button>
              </div>
            </div>
          </div>

          {/* Paper Formatting */}
          <Section id="formatting" title="Paper Formatting" icon="">
            <p className="sub-text">
              Submitted papers must be formatted according to the official conference template.
              All submissions should be written in English with a maximum paper length of <strong>6 printed pages</strong>, including all figures, tables, and references.
            </p>
            <ul className="sub-list" style={{ listStyle: 'none', padding: 0 }}>
              {[
                'Use the provided Word or LaTeX template — do not change layout, margins, or fonts.',
                'The paper must include: Title, Author(s) and Affiliations, Abstract, Keywords, Main Content, References.',
                'Figures, tables, and code should be clearly legible and properly captioned.',
                'All papers must be submitted as a PDF file with fonts embedded.',
                'Ensure spelling and grammar are correct before submission — changes cannot be made post-submission.',
              ].map((item, i) => (
                <li key={i}>
                  <span className="sub-list-bullet">▶</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Editorial Policy */}
          <Section id="editorial-policy" title="Editorial Policy" icon="">
            <p className="sub-text">
              All submitted articles should report original research results — experimental or theoretical — not previously presented or under consideration elsewhere.
              Articles submitted to the conference must meet these criteria.
            </p>
            <p className="sub-text">
              We firmly believe that ethical conduct is the most essential virtue of any academic.
              Hence, any act of plagiarism or other misconduct is totally unacceptable and cannot be tolerated.
              All submissions will be checked for plagiarism. <strong>Maximum allowed similarity: 14%.</strong>
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

          {/* AI Guidelines */}
          <Section id="ai-guidelines" title="Guidelines for AI Tools" icon="">
            <p className="sub-text">
              Authors are permitted to use generative AI and AI-assisted technologies in the writing process to improve readability and language.
              However, these technologies must only be used to enhance the text — not to replace the author's critical thinking, analysis, or original contribution.
            </p>
            <ul className="sub-list" style={{ listStyle: 'none', padding: 0 }}>
              {[
                'AI-generated content used as-is (without significant modification) is strictly not allowed.',
                'AI tools (e.g., ChatGPT, Copilot) cannot be listed as authors or co-authors.',
                'Authors must disclose the use of any AI tools in their manuscript (e.g., in the Acknowledgments section).',
                'Authors are fully responsible for the entire content of their submission, including any AI-generated portions.',
                'AI-generated content detected during review may result in desk rejection.',
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
