import React from 'react';
import { confData } from '../data/conferenceData';
import { Link } from 'react-router-dom';

const CallForPapers = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Call For Papers</h1>
          <p className="text-muted" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
            We invite submissions of high-quality research papers describing original and unpublished results of conceptual, constructive, empirical, experimental, or theoretical work in all areas of IT and Computer Science.
          </p>
        </div>

        <div className="grid-2">
          {confData.tracks.map((track, index) => (
            <div key={index} className="glass-card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--gradient-accent)' }}></div>
              <h3 style={{ color: 'var(--text-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '15px' }}>
                {track.title}
              </h3>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {track.topics.map((topic, i) => (
                  <li key={i} style={{ padding: '8px 0', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--primary-color)' }}>▹</span> {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <h3 className="text-gradient mb-2">Ready to submit your research?</h3>
          <Link to="/submissions" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
            Go to Submission Portal
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CallForPapers;
