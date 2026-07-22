import React from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';
import useSEO from '../hooks/useSEO';

export default function SubmitPaper() {
  useSEO(
    'Submit Paper – ICICCT 2027',
    'Paper submission for ICICCT 2027 – International Conference on Intelligent Communications and Computing Technologies at SXCCE, Nagercoil.'
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f5f5 0%, #ececec 100%)', fontFamily: 'Outfit, sans-serif', display: 'flex', flexDirection: 'column' }}>

      {/* Header */}
      <header style={{ background: '#fff', borderBottom: '1px solid #e8e8e8', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 1px 8px rgba(0,0,0,0.06)' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
          <div style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(135deg,#8B1A1A,#c0392b)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900, fontSize: '1rem' }}>C</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#1a1a1a', letterSpacing: '-0.01em' }}>ICICCT 2027</div>
            <div style={{ fontSize: '0.7rem', color: '#888', lineHeight: 1 }}>Paper Submission System</div>
          </div>
        </Link>
        <Link to="/" style={{ fontSize: '0.88rem', color: '#8B1A1A', textDecoration: 'none', fontWeight: 700 }}>← Back to Home</Link>
      </header>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem' }}>
        <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 12px 48px rgba(0,0,0,0.10)', padding: '3.5rem 2.5rem', maxWidth: 520, width: '100%', textAlign: 'center' }}>

          {/* Icon */}
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg,#8B1A1A,#c0392b)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontSize: '2.2rem', boxShadow: '0 6px 24px rgba(139,26,26,0.25)' }}>
            📄
          </div>

          {/* Title */}
          <h1 style={{ color: '#8B1A1A', fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
            Paper Submission
          </h1>
          <p style={{ color: '#888', fontSize: '0.88rem', marginBottom: '2rem' }}>
            {confData.fullName} ({confData.name})
          </p>

          {/* TBA Badge */}
          <div style={{ background: 'rgba(139,26,26,0.07)', border: '1.5px solid rgba(139,26,26,0.18)', borderRadius: 12, padding: '1.5rem 2rem', marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#8B1A1A', letterSpacing: '0.04em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              🕐 To Be Announced Soon
            </div>
            <p style={{ color: '#666', fontSize: '0.9rem', margin: 0, lineHeight: 1.6 }}>
              The paper submission portal will be opened shortly. Please check back later.
            </p>
          </div>

          <Link
            to="/"
            style={{ display: 'inline-block', padding: '0.8rem 2rem', background: '#8B1A1A', color: '#fff', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', letterSpacing: '0.02em', boxShadow: '0 4px 16px rgba(139,26,26,0.22)' }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: '1px solid #e8e8e8', background: '#fff', padding: '1rem', textAlign: 'center', fontSize: '0.78rem', color: '#aaa' }}>
        Copyright © ICICCT 2027 | St. Xavier's Catholic College of Engineering, Nagercoil
      </div>
    </div>
  );
}
