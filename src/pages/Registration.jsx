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

const Registration = () => {
  useReveal();

  return (
    <div className="page-wrapper">
      <style>{`
        [data-reveal] { opacity:0; transform:translateY(32px); transition:opacity .7s ease, transform .7s ease; }
        [data-reveal].revealed { opacity:1; transform:translateY(0); }
        [data-reveal][data-delay="1"] { transition-delay:.1s; }
        [data-reveal][data-delay="2"] { transition-delay:.2s; }
        .glow-text {
          background: linear-gradient(90deg,#38bdf8,#818cf8,#e879f9,#38bdf8);
          background-size:300% auto;
          -webkit-background-clip:text; -webkit-text-fill-color:transparent;
          background-clip:text; animation:txtF 4s linear infinite;
        }
        @keyframes txtF { to{background-position:300% center;} }
        .fee-table {
          width:100%; border-collapse:collapse; text-align:left;
        }
        .fee-table thead tr {
          border-bottom:2px solid rgba(56,189,248,.2);
        }
        .fee-table th {
          padding:1rem 1.25rem;
          color:#38bdf8;
          font-weight:700;
          font-size:.85rem;
          letter-spacing:.08em;
          text-transform:uppercase;
        }
        .fee-table tbody tr {
          border-bottom:1px solid rgba(255,255,255,.06);
          transition:background .2s;
        }
        .fee-table tbody tr:hover {
          background:rgba(56,189,248,.04);
        }
        .fee-table td {
          padding:1rem 1.25rem;
        }
        .fee-table td:first-child {
          color:#e2e8f0;
          font-weight:500;
        }
        .fee-table td:last-child {
          color:#818cf8;
          font-weight:700;
          font-size:1.05rem;
        }
        .fee-table tbody tr:nth-child(even) {
          background:rgba(255,255,255,.015);
        }
        .fee-table tbody tr:nth-child(even):hover {
          background:rgba(56,189,248,.04);
        }
      `}</style>

      {/* Hero */}
      <div className="dark-page-hero">
        <div className="dot-grid-sm" />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div data-reveal>
            <h1 className="glow-text" style={{ fontSize: 'clamp(2.5rem,7vw,4rem)', fontWeight: 900 }}>
              Registration &amp; Fees
            </h1>
            <p style={{ color: 'rgba(226,232,240,.55)', maxWidth: 600, margin: '.5rem auto 0', fontSize: '1.1rem' }}>
              Secure your spot at {confData.name}.
            </p>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '4rem' }}>
        {/* Fee Table */}
        <div
          data-reveal
          style={{
            background: 'rgba(255,255,255,.03)',
            border: '1px solid rgba(255,255,255,.08)',
            borderRadius: 16,
            padding: '0.5rem',
            overflowX: 'auto',
            marginBottom: '3rem',
          }}
        >
          <table className="fee-table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Fee</th>
              </tr>
            </thead>
            <tbody>
              {confData.pricing.map((tier, index) => (
                <tr key={index}>
                  <td>{tier.category}</td>
                  <td>{tier.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>




        {/* CTA */}
        <div className="text-center" data-reveal data-delay="2" style={{ paddingTop: '2rem' }}>
          <a
            href="#"
            className="btn btn-primary"
            style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}
          >
            Register Now →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
