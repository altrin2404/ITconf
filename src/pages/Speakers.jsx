import React from 'react';

const Speakers = () => {
  // Placeholder data for speakers
  const speakers = Array(4).fill({
    name: 'Dr. [Placeholder]',
    topic: 'Keynote on AI Trends',
    affiliation: 'Global Research Institute',
    image: 'https://via.placeholder.com/150'
  });

  return (
    <div className="page-container container py-4">
      <h1 className="text-center mb-4">Keynote Speakers</h1>
      <div className="speaker-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card text-center" style={{ padding: 'var(--spacing-md)', border: '1px solid var(--secondary-color)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <img src={speaker.image} alt={speaker.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: 'var(--spacing-md)' }} />
            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{speaker.name}</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{speaker.topic}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{speaker.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
