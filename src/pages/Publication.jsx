import React from 'react';
import { confData } from '../data/conferenceData';

const Publication = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Publication & Indexing</h1>
          <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            Information about conference proceedings and journal special issues.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-2xl)', textAlign: 'center' }}>
          <div style={{ width: '80px', height: '80px', margin: '0 auto 20px', background: 'var(--gradient-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
            📚
          </div>
          <h2 style={{ color: 'var(--text-light)' }}>Conference Proceedings</h2>
          <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto 20px', lineHeight: '1.8' }}>
            All accepted and presented full papers will be published in the <strong>{confData.name} Conference Proceedings</strong>. 
            The proceedings will be submitted for indexing by major scientific databases including EI Compendex, Scopus, and Inspec.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{ padding: '10px 20px', border: '1px solid var(--primary-color)', borderRadius: '8px', color: 'var(--primary-color)', fontWeight: 'bold' }}>EI Compendex</div>
            <div style={{ padding: '10px 20px', border: '1px solid var(--primary-color)', borderRadius: '8px', color: 'var(--primary-color)', fontWeight: 'bold' }}>Scopus</div>
            <div style={{ padding: '10px 20px', border: '1px solid var(--primary-color)', borderRadius: '8px', color: 'var(--primary-color)', fontWeight: 'bold' }}>Web of Science (CPCI)</div>
          </div>
        </div>

        <div className="grid-2">
          <div className="glass-card">
            <h3 className="text-gradient">Special Issues (SCI/EI)</h3>
            <p className="text-muted" style={{ marginBottom: '15px' }}>
              Selected excellent papers will be recommended for publication in special issues of international journals (SCI/EI indexed) after extension and rigorous review.
            </p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: 'var(--text-muted)' }}>
              <li>Journal of Intelligent Computing (JIC) - SCI</li>
              <li>International Journal of Emerging Tech - Scopus</li>
            </ul>
          </div>
          
          <div className="glass-card">
            <h3 className="text-gradient">Review Process</h3>
            <p className="text-muted">
              All submissions will be double-blind peer-reviewed by at least 2-3 independent reviewers based on technical quality, relevance to the conference topics, originality, significance, and clarity.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Publication;
