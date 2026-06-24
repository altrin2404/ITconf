import React from 'react';

const Submissions = () => {
  return (
    <div className="page-container container py-4 animate-fade-in">
      <div className="text-center mb-4">
        <h1 style={{ color: 'var(--primary-color)' }}>Submissions</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Please read the guidelines carefully before submitting your paper to ICITT 2026.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--spacing-xl)' }}>
        
        {/* Left Column: Requirements and Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div className="info-card" style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--text-light)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ color: 'var(--text-light)', borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: 'var(--spacing-sm)', marginBottom: 'var(--spacing-md)' }}>Submission Information</h3>
            <p style={{ marginBottom: 'var(--spacing-lg)' }}>Submissions will be taken through Microsoft CMT. Kindly use the button below to submit your paper.</p>
            <div style={{ display: 'flex', gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
              <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ flex: 1, backgroundColor: 'white', color: 'var(--primary-dark)', border: 'none' }}>Submit Your Paper</a>
              <a href="#" className="btn btn-primary" style={{ flex: 1, border: '1px solid rgba(255,255,255,0.3)' }}>Download Template</a>
            </div>
          </div>

          <div className="info-card" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--secondary-color)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius-lg)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>Submission Requirements</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}><strong style={{ color: 'var(--text-main)' }}>File Format:</strong> Final PDF with fonts embedded.</li>
              <li><strong style={{ color: 'var(--text-main)' }}>Permissions:</strong> Include any permissions for copyrighted material.</li>
            </ul>
          </div>

          <div className="info-card" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--secondary-color)', padding: 'var(--spacing-lg)', borderRadius: 'var(--border-radius-lg)' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>Plagiarism & Originality</h3>
            <p>Ensure the originality of your paper with a plagiarism limit under <strong>14%</strong>. AI-generated content is strictly not allowed.</p>
          </div>

          <div className="info-card" style={{ backgroundColor: 'var(--bg-light)', borderLeft: '4px solid var(--accent-color)', padding: 'var(--spacing-lg)', borderRadius: '0 var(--border-radius-lg) var(--border-radius-lg) 0' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-md)' }}>GENERAL</h3>
            <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-md)' }}>
              <li style={{ marginBottom: 'var(--spacing-sm)' }}>Use the provided template. Do not change layout, margins, or add page numbers, headers, or footers.</li>
              <li>Spell-check and proof-read before submission, as no changes can be made post-submission.</li>
            </ul>
          </div>
        </div>

        {/* Right Column: Guidelines Details */}
        <div className="guidelines-card" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--secondary-color)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: 'var(--spacing-sm)', marginBottom: 'var(--spacing-xl)' }}>Submission Guidelines</h2>
          
          <h4 style={{ backgroundColor: 'var(--secondary-color)', padding: 'var(--spacing-sm) var(--spacing-md)', borderRadius: 'var(--border-radius)', display: 'inline-block', marginBottom: 'var(--spacing-md)' }}>FRONTMATTER</h4>
          <div style={{ paddingLeft: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Title:</strong>
              <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Use APA Style: capitalize main words; keep small words in lowercase unless the first word.</p>
              <p style={{ margin: '0', fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--primary-light)' }}>Example: 'Texturization of Monocrystalline Silicon Wafers' (correct).</p>
            </div>
            
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Authors and Affiliations:</strong>
              <ul style={{ margin: 'var(--spacing-xs) 0 0 0', paddingLeft: 'var(--spacing-md)', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <li>Use 'first name last name' format without punctuation; repeat first name if no last name.</li>
                <li>Mark corresponding author with an asterisk (*); provide email for the corresponding author.</li>
                <li>List affiliations with department, institution, city, country in English.</li>
              </ul>
            </div>

            <div>
              <strong>Abstract:</strong>
              <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Provide a complete abstract. If citing, include full references.</p>
            </div>
          </div>

          <h4 style={{ backgroundColor: 'var(--secondary-color)', padding: 'var(--spacing-sm) var(--spacing-md)', borderRadius: 'var(--border-radius)', display: 'inline-block', marginBottom: 'var(--spacing-md)' }}>MAIN CONTENT</h4>
          <div style={{ paddingLeft: 'var(--spacing-md)' }}>
            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Keywords:</strong>
              <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Provide at least 3 keywords, separated by commas.</p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>Body:</strong>
              <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Use consistent heading numbering (e.g., 1.1, 1.1.1). Avoid skipping heading levels.</p>
            </div>

            <div style={{ marginBottom: 'var(--spacing-md)' }}>
              <strong>References and Citations:</strong>
              <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Cite every reference in text and follow conference guidelines for formatting.</p>
            </div>

            <div>
              <strong>Lists, Tables, Figures:</strong>
              <ul style={{ margin: 'var(--spacing-xs) 0 0 0', paddingLeft: 'var(--spacing-md)', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                <li>Number figures/tables sequentially with captions. Keep them close to where cited.</li>
                <li>Tables should be editable (not images) and fit the template layout.</li>
              </ul>
            </div>
            
            <div style={{ marginTop: 'var(--spacing-md)' }}>
              <strong>Paper Format & Layout:</strong>
              <p style={{ margin: 'var(--spacing-xs) 0 0 0', fontSize: '0.95rem', color: 'var(--text-muted)' }}>Ensure all diagrams, charts, and tables are clear and legible. Follow the template for margins and layout.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Submissions;
