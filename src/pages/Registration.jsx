import React, { useEffect } from 'react';
import { confData } from '../data/conferenceData';

import useReveal from '../hooks/useReveal';
import useSEO from '../hooks/useSEO';

const Registration = () => {
  useReveal();
  useSEO(
    'Registration Fees & Details',
    'Get details on registration fees, payment methods, bank accounts, and guidelines for national and international authors/listeners for ICICCT 2027.'
  );

  return (
    <div className="page-wrapper">
      <style>{`
        .fee-table-wrap {
          background: #fff;
          border: 1px solid #e8e8e8;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.07);
          overflow: hidden;
        }
        .fee-table {
          width: 100%;
          border-collapse: collapse;
        }
        .fee-table thead tr {
          background: #8B1A1A;
        }
        .fee-table th {
          padding: 1rem 1.25rem;
          color: #fff;
          font-weight: 600;
          font-size: 0.87rem;
          letter-spacing: 0.04em;
          text-align: left;
        }
        .fee-table td {
          padding: 0.9rem 1.25rem;
          border-bottom: 1px solid #f0f0f0;
          font-size: 0.92rem;
          color: #3d3d3d;
        }
        .fee-table tbody tr:last-child td { border-bottom: none; }
        .fee-table tbody tr:nth-child(even) { background: #fafafa; }
        .fee-table tbody tr:hover { background: #fdf3f3; }
        .fee-amount {
          font-weight: 700;
          color: #8B1A1A;
          font-size: 1.05rem;
        }

        .reg-info-box {
          background: #fdf3f3;
          border: 1px solid rgba(139,26,26,0.15);
          border-left: 4px solid #8B1A1A;
          border-radius: 8px;
          padding: 1.25rem 1.5rem;
          margin-bottom: 1.5rem;
        }
        .reg-info-box h4 {
          color: #8B1A1A;
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }
        .reg-info-box p, .reg-info-box li {
          color: #555;
          font-size: 0.875rem;
          line-height: 1.7;
          margin: 0;
        }
        .reg-info-box ul {
          list-style: none;
          padding: 0;
        }
        .reg-info-box ul li::before {
          content: ' ';
          color: #8B1A1A;
          font-weight: 700;
        }

        .reg-step {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 0;
          border-bottom: 1px solid #f0f0f0;
        }
        .reg-step:last-child { border-bottom: none; }
        .step-num {
          width: 34px; height: 34px;
          background: #8B1A1A;
          color: #fff;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-weight: 700;
          font-size: 0.9rem;
          flex-shrink: 0;
          font-family: 'Outfit', sans-serif;
        }
        .step-title {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 0.92rem;
          margin-bottom: 0.2rem;
        }
        .step-desc {
          font-size: 0.82rem;
          color: #666;
          line-height: 1.5;
        }
      `}</style>

      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="page-hero-breadcrumb">
            <a href="/">Home</a><span>/</span><span>Registration</span>
          </div>
          <h1>Registration &amp; Fees</h1>
          <p>Secure your place at {confData.name} — {confData.date}.</p>
        </div>
      </div>

      <section style={{ background: '#f8f8f8', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

            {/* Fee Table */}
            <div data-reveal>
              <div className="section-badge">Registration Fees</div>
              <h2 style={{ color: '#1a1a1a', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Fee Structure</h2>
              <div className="fee-table-wrap">
                <table className="fee-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Mode</th>
                      <th>Fee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {confData.pricing.map((tier, i) => (
                      <tr key={i}>
                        <td><strong>{tier.category}</strong></td>
                        <td>{tier.mode}</td>
                        <td className="fee-amount">{tier.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="reg-info-box" style={{ marginTop: '1.5rem' }}>
                <h4> Fee Includes</h4>
                <ul>
                  <li>Access to all conference sessions</li>
                  <li>Conference proceedings &amp; materials</li>
                  <li>Certificate of presentation / participation</li>
                  <li>Networking events and workshops</li>
                </ul>
              </div>
            </div>

            {/* Registration Steps */}
            <div data-reveal data-delay="1">
              <div className="section-badge">How to Register</div>
              <h2 style={{ color: '#1a1a1a', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Registration Steps</h2>
              <div style={{ background: '#fff', border: '1px solid #e8e8e8', borderRadius: '10px', padding: '1.5rem', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', marginBottom: '1.5rem' }}>
                {[
                  { title: 'Submit Your Paper', desc: 'Submit your research paper through the online submission portal and receive an acceptance notification.' },
                  { title: 'Pay Registration Fee', desc: 'After acceptance, complete the registration by paying the applicable fee via bank transfer or online payment.' },
                  { title: 'Send Confirmation', desc: 'Email your payment receipt and filled registration form to the conference email address.' },
                  { title: 'Receive Confirmation', desc: 'You will receive a confirmation email with your registration details and conference access information.' },
                ].map((step, i) => (
                  <div key={i} className="reg-step">
                    <div className="step-num">{i + 1}</div>
                    <div>
                      <div className="step-title">{step.title}</div>
                      <div className="step-desc">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="reg-info-box">
                <h4> Important Notes</h4>
                <ul>
                  <li>At least one author per paper must register</li>
                  <li>Registration fees are non-refundable</li>
                  <li>Early registration is recommended</li>
                  <li>Authors presenting multiple papers need to register for each paper</li>
                </ul>
              </div>

              <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <a href="#" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2.5rem' }}>
                  Register Now →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
