import React from 'react';

const ImportantDates = () => {
  return (
    <div className="page-container container py-4">
      <h1 className="text-center mb-4">Important Dates</h1>
      <div className="content-box" style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--spacing-xl)', backgroundColor: 'var(--bg-light)', borderRadius: 'var(--border-radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid var(--secondary-color)' }}>
              <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>Paper Submission Deadline</td>
              <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>October 15, 2025</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--secondary-color)' }}>
              <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>Notification of Acceptance</td>
              <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>December 20, 2025</td>
            </tr>
            <tr style={{ borderBottom: '1px solid var(--secondary-color)' }}>
              <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>Camera Ready Paper</td>
              <td style={{ padding: 'var(--spacing-md)', textAlign: 'right' }}>January 15, 2026</td>
            </tr>
            <tr>
              <td style={{ padding: 'var(--spacing-md)', fontWeight: 600 }}>Conference Dates</td>
              <td style={{ padding: 'var(--spacing-md)', textAlign: 'right', color: 'var(--primary-color)', fontWeight: 'bold' }}>March 23-24, 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ImportantDates;
