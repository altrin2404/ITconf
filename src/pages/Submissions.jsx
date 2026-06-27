import React from 'react';

const Submissions = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Submissions</h1>
          <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            Information regarding paper formatting, submission portals, and conference policies.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)' }}>
          <h2 style={{ color: 'var(--primary-color)' }}>Paper Formatting</h2>
          <p className="text-muted" style={{ marginBottom: '15px' }}>
            Submitted papers must be formatted according to the official template. 
            All submissions should be written in English with a maximum paper length of six (6) printed pages including figures.
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button className="btn btn-secondary">Download Word Template</button>
            <button className="btn btn-secondary">Download LaTeX Template</button>
          </div>
        </div>

        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)', background: 'linear-gradient(rgba(30,41,59,0.5), rgba(6,182,212,0.1))' }}>
          <h2 style={{ color: 'var(--text-light)' }}>Submission Portal</h2>
          <p className="text-muted" style={{ marginBottom: '20px' }}>
            Please submit your manuscript via our online submission system. You will need to create an account if you don't have one already.
          </p>
          <a href="#" className="btn btn-primary">Enter Submission System</a>
        </div>

        <div id="editorial-policy" style={{ paddingTop: '80px', marginTop: '-80px' }}>
          <div className="glass-card" style={{ marginBottom: 'var(--spacing-2xl)' }}>
            <h2 className="text-gradient">Editorial Policy</h2>
            <p className="text-muted" style={{ marginBottom: '15px' }}>
              All submitted articles should report original, previously unpublished research results. Articles submitted to the conference should meet these criteria and must not be under consideration for publication elsewhere.
            </p>
            <p className="text-muted">
              We firmly believe that ethical conduct is the most essential virtue of any academic. Hence any act of plagiarism is a totally unacceptable academic misconduct and cannot be tolerated.
            </p>
          </div>
        </div>

        <div id="ai-guidelines" style={{ paddingTop: '80px', marginTop: '-80px' }}>
          <div className="glass-card">
            <h2 className="text-gradient">Guidelines for AI Tools</h2>
            <p className="text-muted" style={{ marginBottom: '15px' }}>
              Authors are permitted to use generative AI and AI-assisted technologies in the writing process to improve readability and language. However, these technologies should only be used to improve the text, not to replace the author's critical thinking or analysis.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: '10px' }}>AI tools cannot be listed as authors.</li>
              <li style={{ marginBottom: '10px' }}>Authors must disclose the use of AI tools in their manuscript.</li>
              <li>Authors are fully responsible for the content of their manuscript, even those parts produced by an AI tool.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Submissions;
