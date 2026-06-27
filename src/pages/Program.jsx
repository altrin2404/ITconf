import React from 'react';
import { confData } from '../data/conferenceData';

const Program = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)' }}>
        
        <div className="text-center" style={{ marginBottom: 'var(--spacing-3xl)' }}>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem' }}>Program Schedule</h1>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            The comprehensive schedule for {confData.name}. (Times are subject to minor changes).
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-2xl)' }}>
          {confData.schedule.map((dayData, index) => (
            <div key={index} className="glass-panel" style={{ padding: 'var(--spacing-xl)' }}>
              <h2 style={{ color: 'var(--primary-color)', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '20px' }}>
                {dayData.day}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {dayData.events.map((event, i) => (
                  <div key={i} style={{ 
                    display: 'grid', 
                    gridTemplateColumns: '150px 1fr', 
                    gap: '20px', 
                    padding: '15px', 
                    background: 'rgba(255,255,255,0.03)', 
                    borderRadius: '8px',
                    alignItems: 'center'
                  }}>
                    <div style={{ color: 'var(--secondary-color)', fontWeight: 'bold', fontFamily: 'var(--font-heading)' }}>
                      {event.time}
                    </div>
                    <div style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-4">
          <button className="btn btn-primary">Download Detailed PDF Schedule</button>
        </div>

      </div>
    </div>
  );
};

export default Program;
