import React from 'react';
import { confData } from '../data/conferenceData';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Program = () => {
  useReveal();
  useSEO(
    'Program Schedule',
    'View the comprehensive program and daily schedule of technical events, presentations, and keynote talks at ICICCT 2027.'
  );

  return (
    <div className="page-wrapper">
      <style>{`
        .program-day-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 12px;
          padding: 2rem 2.5rem;
          margin-bottom: 2rem;
          box-shadow: 0 2px 12px rgba(0,0,0,0.06);
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .program-day-card:hover {
          box-shadow: 0 6px 20px rgba(139,26,26,0.08);
          border-color: rgba(139,26,26,0.2);
        }
        .program-day-title {
          color: #8B1A1A;
          font-weight: 800;
          font-family: 'Outfit', sans-serif;
          font-size: 1.35rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }
        .program-day-num {
          width: 36px; height: 36px;
          background: #8B1A1A;
          color: #fff;
          border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .event-row {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 1.5rem;
          padding: 1.1rem;
          background: #fdf3f3;
          border: 1px solid rgba(139,26,26,0.1);
          border-radius: 8px;
          align-items: center;
          border-left: 4px solid #8B1A1A;
          transition: transform 0.2s, background 0.2s;
        }
        .event-row:hover {
          transform: translateX(4px);
          background: rgba(139,26,26,0.08);
        }
        .event-time {
          color: #1a1a1a;
          font-weight: 700;
          font-size: 0.95rem;
          font-family: 'Outfit', sans-serif;
        }
        .event-title {
          color: #3d3d3d;
          font-size: 1rem;
          font-weight: 500;
        }

        .program-cta {
          background: linear-gradient(135deg, #8B1A1A, #6b1313);
          color: #fff;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.05rem;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .program-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(139,26,26,0.3);
        }

        @media (max-width: 640px) {
          .event-row {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            padding: 1rem;
          }
          .event-time { color: #8B1A1A; }
          .program-day-card { padding: 1.5rem; }
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Program Schedule</span>
          </div>
          <h1>Program Schedule</h1>
          <p>The comprehensive schedule for {confData.name}. Times are subject to minor changes.</p>
        </div>
      </div>

      <div style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {confData.schedule.map((dayData, index) => (
              <div key={index} className="program-day-card" data-reveal data-delay={String((index % 2) + 1)}>
                <h2 className="program-day-title">
                  <span className="program-day-num">{index + 1}</span>
                  {dayData.day}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {dayData.events.map((event, i) => (
                    <div key={i} className="event-row">
                      <div className="event-time"> {event.time}</div>
                      <div className="event-title">{event.title}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center" data-reveal style={{ paddingTop: '2rem' }}>
            <button className="program-cta">
               Download Detailed PDF Schedule
            </button>
            <p style={{ color: '#777', fontSize: '0.85rem', marginTop: '1rem' }}>
              Note: The final schedule will be released one week before the conference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
