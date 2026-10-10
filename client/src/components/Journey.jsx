import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Journey = () => {
  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">04. Milestones</div>
          <h2 className="section-title">Education &amp; Experience</h2>
          <p className="section-subtitle">
            Academic milestones, hackathon participation, and technical accomplishments.
          </p>
        </div>

        <div className="timeline-wrapper">
          {portfolioData.journey.map((item, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-node"></div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
