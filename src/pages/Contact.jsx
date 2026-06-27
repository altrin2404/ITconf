import React from 'react';

const Contact = () => {
  return (
    <div className="page-wrapper">
      <div className="container" style={{ padding: 'var(--spacing-2xl) var(--spacing-md)', display: 'flex', justifyContent: 'center' }}>
        
        <div className="glass-panel" style={{ padding: 'var(--spacing-2xl)', width: '100%', maxWidth: '800px', background: 'var(--bg-surface-solid)' }}>
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ color: '#7c2d12', fontSize: '2.5rem', marginBottom: '10px' }}>Get in Touch</h2>
            <p className="text-muted" style={{ fontSize: '1.2rem' }}>
              Have a question or feedback? Fill out the form below.
            </p>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              type="text" 
              placeholder="Full name" 
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' }} 
            />
            <input 
              type="email" 
              placeholder="Your email" 
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' }} 
            />
            <input 
              type="text" 
              placeholder="Subject" 
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', outline: 'none' }} 
            />
            <textarea 
              placeholder="Your message..." 
              rows="6" 
              style={{ padding: '15px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '1rem', resize: 'vertical', outline: 'none' }}
            ></textarea>
            <button 
              type="submit" 
              style={{ 
                padding: '15px', 
                background: '#7c2d12', 
                color: 'white', 
                border: 'none', 
                borderRadius: '8px', 
                fontSize: '1.1rem', 
                fontWeight: 'bold', 
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
