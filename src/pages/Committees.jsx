import React, { useEffect } from 'react';
import { confData } from '../data/conferenceData';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const Committees = () => {
  const { committees } = confData;
  useReveal();

  const CommitteeSection = ({ title, members, accent }) => (
    <div style={{ marginBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-reveal>
        <h3 className="glow-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{title}</h3>
        <div style={{ width: 50, height: 2, borderRadius: 2, background: accent || '#38bdf8', margin: '0 auto' }} />
      </div>
      <div className="grid-3">
        {members.map((member, index) => (
          <div
            key={index}
            className="glass-card text-center"
            data-reveal
            data-delay={String((index % 3) + 1)}
            style={{ padding: '2rem 1.5rem' }}
          >
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
              margin: '0 auto 1.25rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem', color: '#fff', fontWeight: 700,
              boxShadow: '0 0 24px rgba(14,165,233,0.25)',
            }}>
              {member.name.charAt(0)}
            </div>
            <h4 style={{ fontSize: '1.15rem', color: '#f1f5f9', marginBottom: '0.35rem' }}>
              {member.name}
            </h4>
            <p style={{ color: 'rgba(226,232,240,0.5)', fontSize: '0.9rem' }}>
              {member.affiliation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.1s; }
        [data-reveal][data-delay="2"] { transition-delay:.2s; }
        [data-reveal][data-delay="3"] { transition-delay:.3s; }
        .glow-text {
          background: linear-gradient(90deg,#38bdf8,#818cf8,#e879f9,#38bdf8);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:txtF 4s linear infinite;
        }
        @keyframes txtF { to{background-position:300% center;} }
        .tech-member {
          display:flex; align-items:center; gap:1rem; padding:1rem;
          background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06);
          border-radius:12px; transition:border-color .3s, transform .3s;
        }
        .tech-member:hover { border-color:rgba(56,189,248,0.3); transform:translateX(6px); }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Organizing Committee
            </h1>
            <p style={{ color: 'rgba(226,232,240,0.55)', maxWidth: 600, margin: '0.5rem auto 0', fontSize: '1.1rem' }}>
              Meet the dedicated team of professionals organizing {confData.name}.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        <CommitteeSection title="General Chairs" members={committees.generalChairs} accent="#0ea5e9" />
        <CommitteeSection title="Program Chairs" members={committees.programChairs} accent="#8b5cf6" />

        {/* Technical Committee – distinct layout */}
        <div style={{ marginTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }} data-reveal>
            <h3 className="glow-text" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              Technical Program Committee
            </h3>
            <div style={{ width: 50, height: 2, borderRadius: 2, background: '#ec4899', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '1rem' }}>
            {committees.technicalCommittee.map((member, index) => (
              <div key={index} className="tech-member" data-reveal data-delay={String((index % 3) + 1)}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1rem', color: '#fff', flexShrink: 0,
                }}>
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h5 style={{ margin: 0, color: '#f1f5f9', fontSize: '0.95rem' }}>{member.name}</h5>
                  <p style={{ margin: 0, color: 'rgba(226,232,240,0.45)', fontSize: '0.8rem' }}>{member.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committees;
