import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const [filter, setFilter] = useState('all');

  const filterOptions = [
    { key: 'all', label: 'All Skills' },
    { key: 'languages', label: 'Programming Languages' },
    { key: 'web', label: 'Web & Frameworks' },
    { key: 'databases', label: 'Databases & Storage' },
    { key: 'tools', label: 'Tools & Practices' },
  ];

  const filteredGroups =
    filter === 'all'
      ? portfolioData.skills
      : portfolioData.skills.filter((g) => g.category === filter);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">02. Capabilities</div>
          <h2 className="section-title">Technical Skills &amp; Stack</h2>
          <p className="section-subtitle">
            A structured view of languages, backend frameworks, databases, and development workflows.
          </p>
        </div>

        <div className="skills-filter-bar">
          {filterOptions.map((opt) => (
            <button
              key={opt.key}
              type="button"
              className={`filter-btn ${filter === opt.key ? 'active' : ''}`}
              onClick={() => setFilter(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredGroups.map((group, idx) => (
            <div className="skill-group-card" key={idx}>
              <div className="skill-group-header">
                <span className="skill-group-icon">{group.icon}</span>
                <span>{group.title}</span>
              </div>
              <div className="skill-chips">
                {group.skills.map((skill, sIdx) => (
                  <span className="skill-chip" key={sIdx}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
