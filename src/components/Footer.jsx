import React from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--bg-surface-solid)', borderTop: '1px solid var(--border-color)', padding: 'var(--spacing-3xl) 0 var(--spacing-xl) 0', marginTop: 'auto' }}>
      <div className="container grid-4">
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gradient-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', color: 'white' }}>
              IT
            </div>
            <span className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
              {confData.name}
            </span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            {confData.fullName} bringing together researchers and practitioners globally.
          </p>
        </div>

        <div>
          <h4 style={{ color: 'var(--primary-color)' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/call-for-papers" className="text-muted" style={{ fontSize: '0.9rem' }}>Call for Papers</Link></li>
            <li><Link to="/registration" className="text-muted" style={{ fontSize: '0.9rem' }}>Registration</Link></li>
            <li><Link to="/program" className="text-muted" style={{ fontSize: '0.9rem' }}>Program Schedule</Link></li>
            <li><Link to="/speakers" className="text-muted" style={{ fontSize: '0.9rem' }}>Keynote Speakers</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--primary-color)' }}>Information</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><Link to="/publication" className="text-muted" style={{ fontSize: '0.9rem' }}>Publication & Indexing</Link></li>
            <li><Link to="/submissions#editorial-policy" className="text-muted" style={{ fontSize: '0.9rem' }}>Editorial Policy</Link></li>
            <li><Link to="/history" className="text-muted" style={{ fontSize: '0.9rem' }}>Past Conferences</Link></li>
          </ul>
        </div>

        <div>
          <h4 style={{ color: 'var(--primary-color)' }}>Contact Us</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li className="text-muted" style={{ fontSize: '0.9rem' }}>Email: </li>
            <li className="text-muted" style={{ fontSize: '0.9rem' }}>Location: {confData.location}</li>
          </ul>
          <div style={{ marginTop: '20px' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 15px', fontSize: '0.9rem' }}>Send us a message</Link>
          </div>
        </div>

      </div>

      <div className="container" style={{ borderTop: '1px solid var(--border-color)', marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <p className="text-muted" style={{ fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} {confData.name}. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#" className="text-muted" style={{ fontSize: '0.8rem' }}>Privacy Policy</a>
          <a href="#" className="text-muted" style={{ fontSize: '0.8rem' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
