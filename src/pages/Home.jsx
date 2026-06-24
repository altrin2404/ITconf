import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container text-center">
          <h1 className="animate-fade-in">International Conference on IT Trends</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s', fontSize: '1.25rem', marginTop: '1rem' }}>ICITT 2026</p>
          <h2 className="animate-fade-in" style={{ animationDelay: '0.4s', marginTop: '1rem', color: 'var(--accent-color)' }}>March 23-24, 2026</h2>
          <div className="hero-actions mt-3 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="btn btn-primary" style={{ marginRight: '1rem' }}>Submit Paper</button>
            <button className="btn btn-secondary">Past Proceeding</button>
          </div>
        </div>
      </section>

      <div style={{ backgroundColor: 'var(--primary-dark)', padding: '10px 0', overflow: 'hidden' }}>
        <div style={{ whiteSpace: 'nowrap', animation: 'scrollText 25s linear infinite', color: 'white', fontWeight: 'bold' }} className="text-center">
          <p style={{ display: 'inline-block', margin: 0 }}>All accepted and presented papers will be published by -------------------------</p>
        </div>
      </div>

      <section className="about-section" style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ color: 'var(--primary-color)' }}>ABOUT ICITT 2026</h2>
            <p style={{ textAlign: 'justify', marginTop: 'var(--spacing-md)' }}>
              ICITT 2026 is a comprehensive computing technology conference dealing with all aspects of IT trends. It is a leading international opportunity for computing technology and AI researchers, professionals and users to investigate innovative ideas and outcomes, and to exchange experiences on various aspects of computing and AI. The conference aims to bring together researchers, academicians, industry practitioners, and policymakers to exchange knowledge and foster discussions on the latest advances in computing technology.
            </p>
          </div>
        </div>
      </section>

      <section className="tracks-section" style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--primary-color)', color: 'white' }}>
        <div className="container">
          <h2 className="text-center" style={{ color: 'white', marginBottom: 'var(--spacing-xl)' }}>Call For Paper</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-xl)' }}>
            
            <div className="track-card" style={{ backgroundColor: 'white', color: 'var(--text-main)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>Track 1</h4>
              <h5 style={{ marginBottom: 'var(--spacing-md)' }}>Advanced Data Analytics and AI Integration</h5>
              <ul style={{ textAlign: 'left', listStyleType: 'disc', paddingLeft: 'var(--spacing-md)' }}>
                <li>Data Mining and Knowledge Discovery</li>
                <li>Big Data Analytics</li>
                <li>Machine Learning & Deep Learning</li>
              </ul>
            </div>

            <div className="track-card" style={{ backgroundColor: 'white', color: 'var(--text-main)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>Track 2</h4>
              <h5 style={{ marginBottom: 'var(--spacing-md)' }}>Applied AI Innovations</h5>
              <ul style={{ textAlign: 'left', listStyleType: 'disc', paddingLeft: 'var(--spacing-md)' }}>
                <li>AI in Healthcare</li>
                <li>AI in Finance & Business</li>
                <li>Smart Manufacturing</li>
              </ul>
            </div>

            <div className="track-card" style={{ backgroundColor: 'white', color: 'var(--text-main)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', textAlign: 'center' }}>
              <h4 style={{ color: 'var(--primary-color)' }}>Track 3</h4>
              <h5 style={{ marginBottom: 'var(--spacing-md)' }}>AI in Next-Generation Technologies</h5>
              <ul style={{ textAlign: 'left', listStyleType: 'disc', paddingLeft: 'var(--spacing-md)' }}>
                <li>Quantum Computing</li>
                <li>Cloud-Native AI Platforms</li>
                <li>Blockchain and AI</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <section className="contact-section" style={{ padding: 'var(--spacing-3xl) 0', backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: 'var(--bg-main)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <h2 className="text-center" style={{ color: 'var(--primary-color)', marginBottom: 'var(--spacing-sm)' }}>Get in Touch</h2>
            <p className="text-center" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-lg)' }}>Have a question or feedback? Fill out the form below.</p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <input type="text" placeholder="Full name" required style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--secondary-color)' }} />
              <input type="email" placeholder="Your email" required style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--secondary-color)' }} />
              <input type="text" placeholder="Subject" required style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--secondary-color)' }} />
              <textarea placeholder="Your message..." required rows="4" style={{ padding: '0.75rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--secondary-color)', resize: 'vertical' }}></textarea>
              <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>Send Message</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
