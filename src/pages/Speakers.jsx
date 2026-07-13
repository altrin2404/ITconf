import React, { useEffect } from 'react';
import { confData } from '../data/conferenceData';

import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Speakers = () => {
  useReveal();
  useSEO(
    'Keynote Speakers',
    'Meet our keynote speakers and distinguished international researchers presenting at ICICCT 2027.'
  );

  return (
    <div className="page-wrapper">
      <style>{`
        .speaker-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          overflow: hidden;
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .speaker-card:hover {
          box-shadow: 0 8px 28px rgba(139,26,26,0.12);
          transform: translateY(-4px);
          border-color: rgba(139,26,26,0.25);
        }
        .speaker-photo-wrap {
          width: 140px;
          height: 140px;
          margin: 2rem auto 0 auto;
          border-radius: 50%;
          overflow: hidden;
          background: #fdf3f3;
          border: 4px solid #fff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
          position: relative;
          z-index: 2;
        }
        .speaker-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .speaker-photo-placeholder {
          width: 140px;
          height: 140px;
          margin: 2rem auto 0 auto;
          border-radius: 50%;
          background: linear-gradient(135deg, #fdf3f3, #f5e8e8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: rgba(139,26,26,0.3);
          border: 4px solid #fff;
          box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }
        .speaker-card-body {
          padding: 1.5rem 2rem 2rem 2rem;
          text-align: center;
        }
        .speaker-role-badge {
          display: inline-block;
          background: #8B1A1A;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: 20px;
          margin-bottom: 0.75rem;
        }
        .speaker-name {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.3rem;
        }
        .speaker-affil {
          color: #777;
          font-size: 0.88rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        .speaker-divider {
          border: none;
          border-top: 1px solid #f0f0f0;
          margin: 1.25rem auto;
          width: 60%;
        }
        .speaker-topic-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #8B1A1A;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }
        .speaker-topic {
          font-size: 0.92rem;
          color: #3d3d3d;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }
        .speaker-bio {
          font-size: 0.875rem;
          color: #666;
          line-height: 1.7;
          margin: 0;
        }

        .speakers-coming-soon {
          background: #fdf3f3;
          border: 2px dashed rgba(139,26,26,0.2);
          border-radius: 10px;
          padding: 3rem;
          text-align: center;
          color: #888;
        }
        .speakers-coming-soon h3 {
          color: #8B1A1A;
          margin-bottom: 0.5rem;
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Speakers</span>
          </div>
          <h1>Keynote Speakers</h1>
          <p>Hear from world-renowned researchers and industry leaders at {confData.name}.</p>
        </div>
      </div>

      <section style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container">
          <div className="section-header" data-reveal>
            <div className="section-badge">Invited Speakers</div>
            <h2 style={{ color: '#1a1a1a' }}>Keynote Speakers</h2>
            <div className="section-divider"></div>
          </div>

          {confData.speakers.length > 0 ? (
            <div className="grid-2">
              {confData.speakers.map((speaker, i) => (
                <div key={speaker.id} className="speaker-card" data-reveal data-delay={String(i + 1)}>
                  {speaker.image
                    ? <div className="speaker-photo-wrap">
                        <img src={speaker.image} alt={speaker.name} className="speaker-photo"
                          onError={(e) => { e.target.parentElement.style.display = 'none'; e.target.parentElement.nextSibling.style.display = 'flex'; }}
                        />
                      </div>
                    : null
                  }
                  <div className="speaker-photo-placeholder" style={{ display: speaker.image ? 'none' : 'flex' }}></div>
                  <div className="speaker-card-body">
                    <span className="speaker-role-badge">{speaker.role}</span>
                    <div className="speaker-name">{speaker.name}</div>
                    <div className="speaker-affil">
                      <span></span> {speaker.affiliation}
                    </div>
                    <hr className="speaker-divider" />
                    <div className="speaker-topic-label">Talk Topic</div>
                    <div className="speaker-topic">{speaker.topic}</div>
                    <p className="speaker-bio">{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="speakers-coming-soon" data-reveal>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
              <h3>Speakers to be Announced</h3>
              <p>The keynote speakers for {confData.name} will be announced soon. Please check back later.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Speakers;
