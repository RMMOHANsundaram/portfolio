import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Stats = () => {
  return (
    <div className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {portfolioData.stats.map((stat, idx) => (
            <div className="stat-card" key={idx}>
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-info">
                <span className="stat-number">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
