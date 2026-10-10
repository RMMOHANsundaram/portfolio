import React from 'react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { profile } = portfolioData;

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <span>© 2026 {profile.name} · Full Stack MERN Developer</span>
        </div>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
};
