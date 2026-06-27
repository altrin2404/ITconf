import React from 'react';
import { confData } from '../data/conferenceData';

const Registration = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Registration Process & Fee</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            Secure your spot at {confData.name}.
          </p>
        </div>

        <div className="glass-panel" style={{ padding: 'var(--spacing-xl)', marginBottom: 'var(--spacing-3xl)', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                <th style={{ padding: '15px', color: 'var(--primary-color)' }}>Category</th>
                <th style={{ padding: '15px', color: 'var(--primary-color)' }}>Fee</th>
              </tr>
            </thead>
            <tbody>
              {confData.pricing.map((tier, index) => (
                <tr key={index} style={{ borderBottom: '1px solid var(--border-color)', background: index % 2 === 0 ? 'rgba(0,0,0,0.02)' : 'transparent' }}>
                  <td style={{ padding: '15px', color: 'var(--text-main)', fontWeight: '500' }}>{tier.category}</td>
                  <td style={{ padding: '15px', color: 'var(--text-muted)' }}>{tier.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Registration;
