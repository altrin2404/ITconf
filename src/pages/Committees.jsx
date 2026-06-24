import React from 'react';

const Committees = () => {
  // Placeholder data for committee members
  const members = Array(6).fill({
    name: 'Dr. [Placeholder]',
    role: 'Committee Chair',
    affiliation: 'University of Technology',
    image: 'https://via.placeholder.com/150'
  });

  return (
    <div className="page-container container py-4">
      <h1 className="text-center mb-4">Committees</h1>
      <div className="committee-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 'var(--spacing-xl)' }}>
        {members.map((member, index) => (
          <div key={index} className="member-card text-center" style={{ padding: 'var(--spacing-md)', border: '1px solid var(--secondary-color)', borderRadius: 'var(--border-radius-lg)' }}>
            <img src={member.image} alt={member.name} style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: 'var(--spacing-md)' }} />
            <h3 style={{ marginBottom: 'var(--spacing-xs)' }}>{member.name}</h3>
            <p style={{ color: 'var(--primary-color)', fontWeight: 600, marginBottom: 'var(--spacing-xs)' }}>{member.role}</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Committees;
