import React from 'react';

const Registration = () => {
  return (
    <div className="page-container container py-4 animate-fade-in">
      <div className="text-center mb-4">
        <h1 style={{ color: 'var(--primary-color)' }}>Registration</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Complete your registration for ICITT 2026. Review the fee structure and payment details below.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 'var(--spacing-xl)' }}>
        
        {/* Left Column: Fee Structure */}
        <div className="info-card" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--secondary-color)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
          <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>Registration Process & Fee</h2>
          
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--primary-dark)', color: 'var(--text-light)' }}>
                <th style={{ padding: 'var(--spacing-md)', borderTopLeftRadius: 'var(--border-radius)' }}>Category</th>
                <th style={{ padding: 'var(--spacing-md)', borderTopRightRadius: 'var(--border-radius)' }}>Fee</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--secondary-color)' }}>
                <td style={{ padding: 'var(--spacing-md)' }}>Ph.D. / Post Graduate / Graduate Students</td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>INR 7500/-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--secondary-color)', backgroundColor: 'var(--bg-light)' }}>
                <td style={{ padding: 'var(--spacing-md)' }}>Faculty / Academician</td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>INR 8500/-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--secondary-color)' }}>
                <td style={{ padding: 'var(--spacing-md)' }}>Corporate / Industry Person</td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>INR 9500/-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--secondary-color)', backgroundColor: 'var(--bg-light)' }}>
                <td style={{ padding: 'var(--spacing-md)' }}>International Students, Research Scholar & Faculty</td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>USD 120</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--secondary-color)' }}>
                <td style={{ padding: 'var(--spacing-md)' }}>Poster Presentations</td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>INR 1000/-</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--secondary-color)', backgroundColor: 'var(--bg-light)' }}>
                <td style={{ padding: 'var(--spacing-md)' }}>Paper Presentation Only (No Publication)</td>
                <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>INR 2500/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Column: Bank Details & Action */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
          <div className="info-card" style={{ backgroundColor: 'var(--bg-main)', border: '1px solid var(--secondary-color)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-md)' }}>
            <h2 style={{ color: 'var(--primary-color)', borderBottom: '2px solid var(--secondary-color)', paddingBottom: 'var(--spacing-sm)', marginBottom: 'var(--spacing-lg)' }}>Bank Details</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Account Name</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0, color: 'var(--text-muted)' }}>--------------</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Bank Name & Branch</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0, color: 'var(--text-muted)' }}>--------------</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Account Number</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0, fontFamily: 'monospace', color: 'var(--text-muted)' }}>--------------</p>
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>IFSC Code</p>
                <p style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0, fontFamily: 'monospace', color: 'var(--text-muted)' }}>--------------</p>
              </div>
            </div>
          </div>

          <div className="action-card text-center" style={{ backgroundColor: 'var(--primary-dark)', padding: 'var(--spacing-xl)', borderRadius: 'var(--border-radius-lg)', color: 'var(--text-light)', boxShadow: 'var(--shadow-lg)' }}>
            <h3 style={{ color: 'var(--text-light)', marginBottom: 'var(--spacing-md)' }}>Ready to Register?</h3>
            <p style={{ marginBottom: 'var(--spacing-lg)', opacity: 0.9 }}>After making the payment using the bank details above, please fill out the registration form.</p>
            <a href="https://forms.gle/LjHVrwYGu1eiM97s5" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ backgroundColor: 'white', color: 'var(--primary-dark)', border: 'none', display: 'inline-block', fontSize: '1.1rem' }}>
              Register Now
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Registration;
