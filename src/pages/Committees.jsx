import React from 'react';
import { confData } from '../data/conferenceData';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

/* Card for members with photos */
const MemberCard = ({ member, index }) => (
  <div
    className="member-card"
    data-reveal
    data-delay={String((index % 3) + 1)}
  >
    <div className="member-avatar">
      {member.image
        ? <img src={member.image} alt={member.name} />
        : <span className="avatar-placeholder">{member.name.charAt(0)}</span>
      }
    </div>
    <h5 className="member-name">{member.name}</h5>
    <p className="member-affiliation">{member.affiliation}</p>
  </div>
);

/* Compact row for members without photos */
const CompactMemberRow = ({ member, index }) => (
  <div className="compact-member" data-reveal data-delay={String((index % 3) + 1)}>
    <div className="compact-avatar">{member.name.charAt(0)}</div>
    <div>
      <div className="compact-name">{member.name}</div>
      <div className="compact-affil">{member.affiliation}</div>
    </div>
  </div>
);

const Committees = () => {
  const { committees } = confData;
  useReveal();
  useSEO(
    'Committees',
    'Meet the advisory committee, program committee, publicity chairs, local organizing committee, and patrons of ICICCT 2027.'
  );

  return (
    <div className="page-wrapper">
      <style>{`
        /* ── Member card with photo ── */
        .member-card {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          padding: 2rem 1.5rem;
          text-align: center;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s;
        }
        .member-card:hover {
          box-shadow: 0 6px 24px rgba(139,26,26,0.1);
          transform: translateY(-4px);
          border-color: rgba(139,26,26,0.25);
        }
        .member-avatar {
          width: 110px; height: 110px;
          border-radius: 50%;
          overflow: hidden;
          margin: 0 auto 1.1rem;
          border: 3px solid #e8e8e8;
          background: #fdf3f3;
          display: flex; align-items: center; justify-content: center;
          transition: border-color 0.25s;
        }
        .member-card:hover .member-avatar { border-color: #8B1A1A; }
        .member-avatar img { width: 100%; height: 100%; object-fit: cover; }
        .avatar-placeholder {
          font-size: 2.2rem;
          font-weight: 700;
          color: #8B1A1A;
          font-family: 'Outfit', sans-serif;
        }
        .member-name {
          font-size: 1rem;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 0.3rem;
        }
        .member-affiliation {
          font-size: 0.82rem;
          color: #777;
          line-height: 1.4;
          margin: 0;
        }

        /* ── Compact member row ── */
        .compact-member {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1rem;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          transition: border-color 0.2s, background 0.2s;
        }
        .compact-member:hover {
          border-color: rgba(139,26,26,0.25);
          background: #fdf3f3;
        }
        .compact-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          background: #8B1A1A;
          color: #fff;
          font-weight: 700;
          font-size: 0.95rem;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          font-family: 'Outfit', sans-serif;
        }
        .compact-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #1a1a1a;
        }
        .compact-affil {
          font-size: 0.78rem;
          color: #888;
          margin-top: 1px;
        }

        /* ── Committee section header ── */
        .committee-sec-title {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.75rem;
          padding-bottom: 0.85rem;
          border-bottom: 2px solid #8B1A1A;
        }
        .committee-sec-title h3 {
          font-size: 1.4rem;
          color: #8B1A1A;
          margin: 0;
        }
        .committee-sec-icon {
          width: 36px; height: 36px;
          background: #8B1A1A;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          color: #fff;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .committee-section {
          margin-bottom: 4rem;
        }

        .compact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 0.75rem;
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Committees</span>
          </div>
          <h1>Organizing Committee</h1>
          <p>Meet the distinguished academics and professionals steering {confData.name}.</p>
        </div>
      </div>

      <div style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container">

          {/* Patrons */}
          <div className="committee-section">
            <div className="committee-sec-title" data-reveal>
              <div className="committee-sec-icon"></div>
              <h3>Patrons</h3>
            </div>
            <div className="grid-3">
              {committees.patrons.map((m, i) => <MemberCard key={i} member={m} index={i} />)}
            </div>
          </div>

          {/* Organizing Chairs */}
          <div className="committee-section">
            <div className="committee-sec-title" data-reveal>
              <div className="committee-sec-icon"></div>
              <h3>Organizing Chairs</h3>
            </div>
            <div className="grid-3">
              {committees.organizingChairs.map((m, i) => <MemberCard key={i} member={m} index={i} />)}
            </div>
          </div>

          {/* Publicity Chair */}
          <div className="committee-section">
            <div className="committee-sec-title" data-reveal>
              <div className="committee-sec-icon"></div>
              <h3>Publicity Chair</h3>
            </div>
            <div className="grid-3">
              {committees.publicityChair.map((m, i) => <MemberCard key={i} member={m} index={i} />)}
            </div>
          </div>

          {/* Advisory Committee */}
          <div className="committee-section">
            <div className="committee-sec-title" data-reveal>
              <div className="committee-sec-icon"></div>
              <h3>Advisory Committee</h3>
            </div>
            <div className="compact-grid">
              {committees.advisoryCommittee.map((m, i) => <CompactMemberRow key={i} member={m} index={i} />)}
            </div>
          </div>

          {/* Program Committee */}
          <div className="committee-section">
            <div className="committee-sec-title" data-reveal>
              <div className="committee-sec-icon"></div>
              <h3>Program Committee</h3>
            </div>
            <div className="compact-grid">
              {committees.programCommittee.map((m, i) => <CompactMemberRow key={i} member={m} index={i} />)}
            </div>
          </div>

          {/* Local Organizing Committee */}
          <div className="committee-section">
            <div className="committee-sec-title" data-reveal>
              <div className="committee-sec-icon"></div>
              <h3>Local Organizing Committee</h3>
            </div>
            <div className="compact-grid">
              {committees.localOrganizingCommittee.map((m, i) => <CompactMemberRow key={i} member={m} index={i} />)}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Committees;
