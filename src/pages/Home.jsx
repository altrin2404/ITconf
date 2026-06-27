import React from 'react';
import { Link } from 'react-router-dom';
import { confData } from '../data/conferenceData';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated Background Elements */}
        <div style={{ position: 'absolute', top: '20%', left: '10%', width: '300px', height: '300px', background: 'var(--primary-color)', filter: 'blur(150px)', opacity: '0.2', borderRadius: '50%' }}></div>
        <div style={{ position: 'absolute', bottom: '20%', right: '10%', width: '400px', height: '400px', background: 'var(--secondary-color)', filter: 'blur(150px)', opacity: '0.2', borderRadius: '50%' }}></div>

        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', padding: '10px 20px', background: 'rgba(255,255,255,0.05)', borderRadius: '50px', border: '1px solid var(--border-color)', marginBottom: '20px', backdropFilter: 'blur(10px)' }}>
            <span className="text-gradient" style={{ fontWeight: '600' }}>{confData.date}</span>
          </div>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', letterSpacing: '-2px', marginBottom: '10px' }}>
            <span className="text-gradient">{confData.name}</span>
          </h1>

          <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--text-light)', fontWeight: '300', maxWidth: '800px', margin: '0 auto 30px' }}>
            {confData.fullName}
          </p>

          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px' }}>
            📍 {confData.location}
          </p>

          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/submissions" className="btn btn-primary">Submit Paper</Link>
            <Link to="/registration" className="btn btn-secondary">Register Now</Link>
          </div>
        </div>
      </section>

      {/* Ticker Section */}
      <div style={{ background: 'var(--bg-surface-solid)', padding: '15px 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <div style={{ display: 'inline-block', animation: 'marquee 25s linear infinite', color: 'var(--primary-color)', fontWeight: '600' }}>
            All accepted papers will be submitted for indexing in ------------------. • Early  registration ends soon!
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: 'var(--spacing-2xl)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-2xl)', alignItems: 'center' }}>
            <div>
              <h2 className="text-gradient">About {confData.name}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '20px', textAlign: 'justify' }}>
                Against the backdrop of the global transformation toward intelligent systems and emerging computing technologies, {confData.name} serves as a premier international forum.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', textAlign: 'justify' }}>
                We bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Computing, Artificial Intelligence, and emerging tech. It also provides a premier interdisciplinary platform for researchers, practitioners, and educators to present and discuss the most recent innovations, trends, and concerns as well as practical challenges encountered and solutions adopted in these fields.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {/* Quick Stat Cards */}
              <div className="glass-card text-center" style={{ padding: '20px' }}>
                <h3 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>4+</h3>
                <p className="text-muted">Tech Tracks</p>
              </div>
              <div className="glass-card text-center" style={{ padding: '20px' }}>
                <h3 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>50+</h3>
                <p className="text-muted">Speakers</p>
              </div>
              <div className="glass-card text-center" style={{ padding: '20px', gridColumn: 'span 2' }}>
                <h3 className="text-gradient" style={{ fontSize: '2.5rem', margin: 0 }}>Indexed</h3>
                <p className="text-muted">EI Compendex & Scopus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates Section */}
      <section className="section" style={{ background: 'var(--bg-surface-solid)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-2xl)' }}>Important <span className="text-gradient">Dates</span></h2>
          <div className="grid-3">
            {confData.importantDates.map((item, index) => (
              <div key={index} className="glass-card text-center" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--gradient-primary)' }}></div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{item.title}</h3>
                <p className="text-gradient" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{item.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors/Organizers Section */}
      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: 'var(--spacing-xl)' }}>Sponsered <span className="text-gradient">By</span></h2>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '30px', opacity: 0.7 }}>
            {/* Placeholders for logos */}
            <div className="glass-card" style={{ width: '200px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sponsor 1</div>
            <div className="glass-card" style={{ width: '200px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sponsor 2</div>
            <div className="glass-card" style={{ width: '200px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Sponsor 3</div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
