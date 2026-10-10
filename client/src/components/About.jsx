import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { about } = portfolioData;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">01. Overview</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Dedicated to creating robust, high-performance web applications that solve real-world problems.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            {about.bioParagraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="about-pillars">
            {about.pillars.map((pillar, idx) => (
              <div className="pillar-item" key={idx}>
                <div className="pillar-icon">{pillar.icon}</div>
                <div className="pillar-text">
                  <h4>{pillar.title}</h4>
                  <p>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
