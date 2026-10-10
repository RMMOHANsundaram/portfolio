import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onToast, onCopy }) => {
  const { profile, rolesTypewriter } = portfolioData;

  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = rolesTypewriter[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === activeRole.length) {
      speed = 1800;
    } else if (isDeleting && charIndex === 0) {
      speed = 400;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < activeRole.length) {
        setCurrentText(activeRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === activeRole.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(activeRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % rolesTypewriter.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, rolesTypewriter]);

  const profileJson = JSON.stringify(
    {
      name: profile.name,
      role: profile.role,
      college: profile.college,
      degree: profile.degree,
      stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Java', 'Spring Boot'],
      hackathon: profile.hackathon,
      leetcode_solved: profile.leetcodeCount,
      location: profile.location,
    },
    null,
    2
  );

  return (
    <section className="hero-section" id="top">
      <div className="container">
        <div className="hero-grid">
          <div>
            <div className="status-badge">
              <span className="status-pulse"></span>
              <span>Available for Internships &amp; Roles</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm {profile.name}.<br />
              <span className="text-gradient">
                <span className="typewriter-role">{currentText || 'Full Stack Developer'}</span>
              </span>
            </h1>

            <p className="hero-lead">
              Third-year <strong>Computer Science Engineering</strong> student at{' '}
              <strong>{profile.college}</strong>. I architect and build complete software solutions — from database models and REST APIs to dynamic React interfaces.
            </p>

            <div className="hero-cta">
              <a href="#projects" className="btn btn-primary btn-glow">
                <span>View My Work</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#contact" className="btn">Get In Touch</a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                <span>GitHub</span>
              </a>
            </div>

            <div className="hero-socials">
              <span>Connect:</span>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                LinkedIn ↗
              </a>
              <span>·</span>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="hero-social-link">
                LeetCode ↗
              </a>
              <span>·</span>
              <a href={`mailto:${profile.email}`} className="hero-social-link">
                Email ↗
              </a>
            </div>
          </div>

          {/* Code Window */}
          <div className="code-window" aria-label="Profile JSON Terminal">
            <div className="code-header">
              <div className="window-dots">
                <span className="window-dot dot-red"></span>
                <span className="window-dot dot-yellow"></span>
                <span className="window-dot dot-green"></span>
              </div>
              <span className="window-title">mohan_profile.json</span>
              <button
                type="button"
                className="code-copy-btn"
                onClick={() => onCopy(profileJson, 'Copied profile JSON')}
              >
                Copy JSON
              </button>
            </div>
            <div className="code-body">
              <pre>
                <span className="token-punct">{'{'}</span>
                {'\n'}  <span className="token-key">"name"</span>: <span className="token-string">"{profile.name}"</span>,
                {'\n'}  <span className="token-key">"role"</span>: <span className="token-string">"{profile.role}"</span>,
                {'\n'}  <span className="token-key">"college"</span>: <span className="token-string">"NEC Kovilpatti"</span>,
                {'\n'}  <span className="token-key">"stack"</span>: [<span className="token-string">"React"</span>, <span className="token-string">"Node.js"</span>, <span className="token-string">"MongoDB"</span>, <span className="token-string">"Java"</span>],
                {'\n'}  <span className="token-key">"hackathon"</span>: <span className="token-string">"SIH 2026 Finalist"</span>,
                {'\n'}  <span className="token-key">"leetcode_solved"</span>: <span className="token-number">{profile.leetcodeCount}</span>,
                {'\n'}  <span className="token-key">"open_for_work"</span>: <span className="token-bool">true</span>,
                {'\n'}  <span className="token-key">"location"</span>: <span className="token-string">"Thoothukudi, India"</span>
                {'\n'}<span className="token-punct">{'}'}</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
