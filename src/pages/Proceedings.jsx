import React from 'react';
import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Proceedings = () => {
  useReveal();
  useSEO('Proceedings - Publication', 'Information about the conference proceedings.');

  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Publication</span>
            <span>/</span>
            <span>Proceedings</span>
          </div>
          <h1>Proceedings</h1>
        </div>
      </div>
      <div style={{ padding: '4rem 0', background: '#f8f8f8', minHeight: '60vh' }}>
        <div className="container">
          <div className="content-box" data-reveal style={{ background: '#fff', padding: '3rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#444' }}>
              All the papers registered and presented in the conference will be published in Springer series (pending approval).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proceedings;
