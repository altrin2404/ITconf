import React from 'react';

const CallForPapers = () => {
  return (
    <div className="page-container container py-4">
      <h1 className="text-center mb-4">Call For Papers</h1>
      <div className="content-box" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-xl)', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <p style={{ marginBottom: 'var(--spacing-md)' }}>ICITT 2026 solicits papers on all aspects of Computing technology and Artificial Intelligence. The topics of the conference include, but are not limited to the following:</p>
        
        <div className="track-list" style={{ marginTop: 'var(--spacing-lg)' }}>
          <h3 style={{ color: 'var(--primary-color)' }}>Track 1: Advanced Data Analytics and AI Integration</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
            <li>Data Mining and Knowledge Discovery</li>
            <li>Big Data Analytics</li>
            <li>Machine Learning & Deep Learning</li>
          </ul>

          <h3 style={{ color: 'var(--primary-color)' }}>Track 2: Applied AI Innovations</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-lg)', marginBottom: 'var(--spacing-lg)' }}>
            <li>AI in Healthcare</li>
            <li>AI in Finance & Business</li>
            <li>Smart Manufacturing</li>
          </ul>

          <h3 style={{ color: 'var(--primary-color)' }}>Track 3: AI in Next-Generation Technologies</h3>
          <ul style={{ listStyleType: 'disc', paddingLeft: 'var(--spacing-lg)' }}>
            <li>Quantum Computing</li>
            <li>Cloud-Native AI Platforms</li>
            <li>Blockchain and AI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
