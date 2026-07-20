import React from 'react';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Journal = () => {
  useReveal();
  useSEO('Journal - Publication', 'Information about journal publications.');

  return (
    <div className="page-wrapper">
      <style>{`
        .journal-contact-card {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: #fff;
          border-radius: 12px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          margin-top: 2rem;
          border: 1px solid #eee;
        }
        .journal-contact-image {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          border: 4px solid #fdf3f3;
        }
        @media (max-width: 768px) {
          .journal-contact-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Publication</span>
            <span>/</span>
            <span>Journal</span>
          </div>
          <h1>Journal Publication</h1>
        </div>
      </div>
      <div style={{ padding: '4rem 0', background: '#f8f8f8', minHeight: '60vh' }}>
        <div className="container">
          <div className="content-box" data-reveal style={{ background: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
            <h3 style={{ color: '#8B1A1A', marginBottom: '1.5rem' }}>Opportunity for Best Papers</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#444' }}>
              Extended versions of (at least 60% new content) selected best papers will be given an opportunity to publish in the following journal:
            </p>
            <div style={{ background: '#fdf3f3', padding: '1.5rem', borderRadius: '8px', borderLeft: '4px solid #8B1A1A', margin: '2rem 0' }}>
              <h4 style={{ margin: '0 0 0.5rem 0', color: '#1a1a1a', fontSize: '1.25rem' }}>Broad Research in Artificial Intelligence and Neuroscience</h4>
              <p style={{ margin: 0, color: '#8B1A1A', fontWeight: 600 }}>WoS, Impact Factor = 0.8</p>
            </div>
          </div>
          
          <h3 data-reveal style={{ marginBottom: '1rem' }}>Journal Contacts</h3>
          <div className="journal-contact-card" data-reveal>
            <img src="/images/Speakers/Dr. D. Jude Hemanth.jpg" alt="Dr. D. Jude Hemanth" className="journal-contact-image" />
            <div>
              <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: '#1a1a1a' }}>Dr. D Jude Hemanth</h4>
              <p style={{ fontSize: '1rem', color: '#666', marginBottom: '0.5rem' }}>Karunya University, India</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
