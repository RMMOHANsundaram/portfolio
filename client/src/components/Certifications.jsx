import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section className="section" id="certs">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">05. Credentials</div>
          <h2 className="section-title">Certifications &amp; Courses</h2>
          <p className="section-subtitle">
            Verified course completions across AI, cybersecurity, web engineering, and database design.
          </p>
        </div>

        <div className="certs-grid">
          {portfolioData.certifications.map((cert, idx) => (
            <div className="cert-card" key={idx}>
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <div className="cert-details">
                <h4 className="cert-title">{cert.title}</h4>
                <span className="cert-meta">{cert.issuer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
