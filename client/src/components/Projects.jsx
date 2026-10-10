import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const featured = portfolioData.projects.find((p) => p.isFeatured);
  const regularProjects = portfolioData.projects.filter((p) => !p.isFeatured);
  const otherRepos = portfolioData.otherRepos;

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">03. Showcase</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Real-world applications spanning health-tech hackathons, full-stack ordering platforms, and system tools.
          </p>
        </div>

        <div className="projects-container">
          {/* Spotlight Featured Project */}
          {featured && (
            <article className="featured-project-card">
              <div className="project-top-row">
                <div className="featured-tag">{featured.featuredTag || '★ Spotlight Project'}</div>
                <div className="project-date">{featured.subtitle}</div>
              </div>

              <h3 className="featured-project-title">{featured.title}</h3>

              <p className="project-desc">{featured.description}</p>

              {featured.bullets && (
                <ul className="project-bullets">
                  {featured.bullets.map((bullet, bIdx) => (
                    <li className="project-bullet" key={bIdx}>
                      <span className="bullet-icon">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="project-tech-stack">
                {featured.techStack.map((tech, tIdx) => (
                  <span className="tech-tag" key={tIdx}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href="#contact" className="btn btn-primary btn-sm">
                  Request Demo / Contact
                </a>
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm"
                >
                  Team GitHub Org ↗
                </a>
              </div>
            </article>
          )}

          {/* Secondary Projects Grid */}
          <div className="projects-grid">
            {regularProjects.map((proj) => (
              <article className="project-card" key={proj.id}>
                <div className="card-top">
                  <div className="card-badge-row">
                    <span className="card-category-badge">{proj.category}</span>
                    <span className="tech-tag">{proj.techStack[0]}</span>
                  </div>
                  <h3 className="card-title">{proj.title}</h3>
                  <p className="card-desc">{proj.description}</p>
                  <div className="project-tech-stack" style={{ marginTop: '10px', marginBottom: 0 }}>
                    {proj.techStack.map((t, idx) => (
                      <span className="tech-tag" key={idx}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm"
                  >
                    <span>Source Code</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* More Repositories */}
          <div className="more-repos-section">
            <h4 className="more-repos-header">Other Notable Repositories</h4>
            <div className="repos-grid">
              {otherRepos.map((repo, idx) => (
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card"
                  key={idx}
                >
                  <div className="repo-card-header">
                    <span>{repo.name}</span>
                    <span>↗</span>
                  </div>
                  <span className="repo-lang">{repo.desc}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
