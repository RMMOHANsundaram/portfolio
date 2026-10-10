import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';

export const Contact = ({ onToast, onCopy }) => {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onToast('Please fill out all required fields');
      return;
    }

    setSubmitting(true);
    try {
      const response = await sendContactMessage(formData);
      if (response.success) {
        onToast('Message received! Thank you for reaching out.');
        
        // Also trigger mailto so user can send direct email
        const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry from ' + formData.name
        )}&body=${encodeURIComponent(
          `Hi Mohan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        window.location.href = mailtoUrl;

        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        onToast(response.message || 'Failed to submit form.');
      }
    } catch (err) {
      onToast('Opening mail client...');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">06. Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in discussing an internship, freelance project, or full-stack collaboration? Feel free to reach out.
          </p>
        </div>

        <div className="contact-layout">
          {/* Direct Contact Cards */}
          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-type">
                <span>Email</span>
                <span>✉️</span>
              </div>
              <span className="contact-val">{profile.email}</span>
              <div className="contact-actions">
                <button
                  type="button"
                  className="action-btn-link"
                  onClick={() => onCopy(profile.email, 'Email copied')}
                >
                  Copy Email
                </button>
                <span>·</span>
                <a href={`mailto:${profile.email}`} className="action-btn-link">
                  Open Mail App
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-type">
                <span>Phone / WhatsApp</span>
                <span>📞</span>
              </div>
              <span className="contact-val">{profile.phone}</span>
              <div className="contact-actions">
                <button
                  type="button"
                  className="action-btn-link"
                  onClick={() => onCopy(profile.phone, 'Phone number copied')}
                >
                  Copy Phone
                </button>
                <span>·</span>
                <a href={`tel:${profile.phone}`} className="action-btn-link">
                  Call Direct
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-type">
                <span>LinkedIn</span>
                <span>💼</span>
              </div>
              <span className="contact-val">r-mohan-004709327</span>
              <div className="contact-actions">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn-link"
                >
                  Open Profile ↗
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-type">
                <span>GitHub</span>
                <span>🐙</span>
              </div>
              <span className="contact-val">RMMOHANsundaram</span>
              <div className="contact-actions">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn-link"
                >
                  Open GitHub ↗
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-type">
                <span>LeetCode</span>
                <span>⚡</span>
              </div>
              <span className="contact-val">mohan2006rm</span>
              <div className="contact-actions">
                <a
                  href={profile.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-btn-link"
                >
                  Open LeetCode ↗
                </a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-type">
                <span>Location</span>
                <span>📍</span>
              </div>
              <span className="contact-val">{profile.location}</span>
              <div className="contact-actions">
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Open to remote &amp; on-site roles
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="contact-form-card">
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
              Send a Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '20px' }}>
              Submit your inquiry to automatically record and dispatch an email.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="e.g. Internship Opportunity / Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={submitting}
                style={{ marginTop: '8px' }}
              >
                <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
