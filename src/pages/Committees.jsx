import React from 'react';
import { confData } from '../data/conferenceData';

const Committees = () => {
  const { committees } = confData;

  const CommitteeSection = ({ title, members }) => (
    <div style={{ marginBottom: 'var(--spacing-2xl)' }}>
      <h3 className="text-gradient" style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', fontSize: '2rem' }}>{title}</h3>
      <div className="grid-3">
        {members.map((member, index) => (
          <div key={index} className="glass-card text-center" style={{ padding: 'var(--spacing-lg)' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--gradient-primary)', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', color: 'white', opacity: 0.8 }}>
              {member.name.charAt(0)}
            </div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>{member.name}</h4>
            <p className="text-muted" style={{ fontSize: '0.9rem' }}>{member.affiliation}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Organizing Committee</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Meet the dedicated team of professionals organizing {confData.name}.
          </p>
        </div>

        <CommitteeSection title="General Chairs" members={committees.generalChairs} />
        <CommitteeSection title="Program Chairs" members={committees.programChairs} />
        
        <div style={{ background: 'var(--bg-surface-solid)', padding: 'var(--spacing-2xl) 0', margin: '0 calc(-50vw + 50%)' }}>
          <div className="container">
            <h3 className="text-gradient" style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)', fontSize: '2rem' }}>Technical Program Committee</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-md)' }}>
              {committees.technicalCommittee.map((member, index) => (
                <div key={index} className="glass-panel" style={{ padding: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {member.name.charAt(0)}
                  </div>
                  <div>
                    <h5 style={{ margin: 0 }}>{member.name}</h5>
                    <p className="text-muted" style={{ margin: 0, fontSize: '0.8rem' }}>{member.affiliation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Committees;
