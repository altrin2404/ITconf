import React from 'react';
import { confData } from '../data/conferenceData';

const Speakers = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Keynote Speakers</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Hear from industry leaders and renowned academics at {confData.name}.
          </p>
        </div>

        <div className="grid-2">
          {confData.speakers.map((speaker) => (
            <div key={speaker.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <div style={{ width: '120px', height: '120px', borderRadius: 'var(--border-radius)', overflow: 'hidden', border: '2px solid var(--primary-color)' }}>
                  <img src={speaker.image} alt={speaker.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <div style={{ display: 'inline-block', padding: '5px 10px', background: 'var(--gradient-primary)', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>
                    {speaker.role}
                  </div>
                  <h3 style={{ margin: '0 0 5px 0' }}>{speaker.name}</h3>
                  <p className="text-muted" style={{ margin: 0 }}>{speaker.affiliation}</p>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <h5 style={{ color: 'var(--primary-color)', marginBottom: '10px' }}>Topic: {speaker.topic}</h5>
                <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', lineHeight: '1.5' }}>{speaker.bio}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Speakers;
