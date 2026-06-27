import React from 'react';
import { confData } from '../data/conferenceData';

const History = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Conference History</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            A look back at our past successful conferences around the globe.
          </p>
        </div>

        <div className="grid-3">
          {confData.history.map((hist, index) => (
            <div key={index} className="glass-card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-light)', opacity: 0.2, marginBottom: '-30px' }}>
                {hist.year}
              </div>
              <h2 className="text-gradient" style={{ position: 'relative', zIndex: 1 }}>{hist.year}</h2>
              <h4 style={{ color: 'var(--text-light)', marginBottom: '15px' }}>{hist.location}</h4>
              
              <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid var(--border-color)', paddingTop: '15px' }}>
                <div>
                  <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>{hist.attendees}+</div>
                  <div className="text-muted" style={{ fontSize: '0.8rem' }}>Attendees</div>
                </div>
                <div>
                  <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontSize: '1.2rem' }}>{hist.papers}</div>
                  <div className="text-muted" style={{ fontSize: '0.8rem' }}>Papers Published</div>
                </div>
              </div>
              
              <button className="btn btn-secondary" style={{ marginTop: '20px', width: '100%', fontSize: '0.9rem', padding: '10px' }}>
                View {hist.year} Proceedings
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default History;
