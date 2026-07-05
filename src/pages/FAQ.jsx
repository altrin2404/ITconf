import React, { useEffect, useState } from 'react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('revealed');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

const FAQ = () => {
  useReveal();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "Question 1", answer: "Answer 1" },
    { question: "Question 2", answer: "Answer 2" },
    { question: "Question 3", answer: "Answer 3" },
    { question: "Question 4", answer: "Answer 4" },
    { question: "Question 5", answer: "Answer 5" }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.1s; }
        [data-reveal][data-delay="2"] { transition-delay:.2s; }
        
        .faq-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          margin-bottom: 1.25rem;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .faq-item:hover {
          border-color: rgba(56,189,248,0.3);
          background: rgba(255,255,255,0.05);
        }
        .faq-question {
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          font-size: 1.1rem;
          font-weight: 600;
          color: #f1f5f9;
          user-select: none;
        }
        .faq-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(56,189,248,0.1);
          color: #38bdf8;
          transition: transform 0.3s ease;
        }
        .faq-item.active .faq-icon {
          transform: rotate(180deg);
          background: rgba(232,121,249,0.15);
          color: #e879f9;
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease, padding 0.4s ease;
          padding: 0 1.5rem;
          color: rgba(226,232,240,0.65);
          line-height: 1.6;
        }
        .faq-item.active .faq-answer {
          max-height: 300px;
          padding: 0 1.5rem 1.5rem 1.5rem;
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Frequently Asked Questions
            </h1>
            <p style={{ color: 'rgba(226,232,240,0.6)', maxWidth: '600px', margin: '1rem auto 0', fontSize: '1.1rem' }}>
              Find answers to the most common queries below.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '6rem', maxWidth: '800px' }}>
        <div data-reveal data-delay="1">
          {faqs.map((faq, index) => (
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
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
