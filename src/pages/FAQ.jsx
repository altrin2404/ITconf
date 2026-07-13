import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const FAQ = () => {
  useReveal();
  useSEO(
    'Frequently Asked Questions',
    'Frequently Asked Questions about ICICCT 2027 registration, submission deadlines, travel and venue details.'
  );
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <style>{`
        .faq-item {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          margin-bottom: 1rem;
          transition: all 0.3s ease;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .faq-item:hover {
          border-color: rgba(139,26,26,0.3);
          box-shadow: 0 4px 16px rgba(139,26,26,0.08);
        }
        .faq-question {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 1.05rem;
          font-weight: 600;
          color: #1a1a1a;
          user-select: none;
          background: #fff;
          transition: background 0.3s;
        }
        .faq-item.active .faq-question {
          background: #fdf3f3;
          color: #8B1A1A;
        }
        .faq-icon {
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fdf3f3;
          color: #8B1A1A;
          transition: transform 0.3s ease, background 0.3s;
          flex-shrink: 0;
        }
        .faq-item.active .faq-icon {
          transform: rotate(180deg);
          background: #8B1A1A;
          color: #fff;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
          color: #555;
          line-height: 1.7;
          font-size: 0.95rem;
          background: #fff;
        }
        .faq-item.active .faq-answer {
          max-height: 300px;
          padding: 0 1.5rem 1.5rem 1.5rem;
          border-top: 1px solid rgba(139,26,26,0.1);
          margin-top: -1px; /* hide gap */
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>FAQ</span>
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to the most common queries about the conference.</p>
        </div>
      </div>

      <div style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div data-reveal>
            {faqs.length > 0 ? (
              faqs.map((faq, index) => (
                <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                  <div className="faq-question" onClick={() => toggleFaq(index)}>
                    <span>{faq.question}</span>
                    <div className="faq-icon">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </div>
                  </div>
                  <div className="faq-answer">
                    <div style={{ paddingTop: '1.25rem' }}>{faq.answer}</div>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ background: '#fff', border: '1px dashed #ccc', borderRadius: '10px', padding: '3rem 2rem', textAlign: 'center' }}>
                <div style={{ color: '#888', fontSize: '1.1rem', fontWeight: '500' }}>To Be Announced (TBA)</div>
                <p style={{ color: '#999', marginTop: '0.5rem', fontSize: '0.9rem' }}>Frequently Asked Questions will be updated closer to the event.</p>
              </div>
            )}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }} data-reveal>
            <p style={{ color: '#666', marginBottom: '1rem' }}>Still have questions?</p>
            <a href="/contact" className="btn btn-secondary">Contact Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
