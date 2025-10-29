'use client'

import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="contact-section">
      <div className="marquee-container">
        <div className="marquee">
          <span>Let&apos;s Connect</span>
          <span>Let&apos;s Connect</span>
          <span>Let&apos;s Connect</span>
          <span>Let&apos;s Connect</span>
          <span>Let&apos;s Connect</span>
          <span>Let&apos;s Connect</span>
        </div>
      </div>
      <div className="contact-wrapper">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-badge">
                <span className="blinking-dot"></span>
                Let&apos;s work together
              </div>
              <p>
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach out!
              </p>
              <hr className="contact-divider" />
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:nikisha.romain@gmail.com">nikisha.romain@gmail.com</a>
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="social-links">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .marquee-container {
          width: 100%;
          overflow: hidden;
          background: var(--bg-color);
          padding: 4rem 0;
          margin: 0;
        }

        .contact-wrapper {
          width: 100%;
        }

        .marquee {
          display: flex;
          gap: 4rem;
          animation: scroll 20s linear infinite;
          white-space: nowrap;
        }

        .marquee span {
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
          font-size: 120px;
          color: var(--text-primary);
          font-weight: 400;
          display: inline-block;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .contact-section {
          background-color: var(--bg-color);
          padding: 0;
          display: block;
        }

        .contact-section > * {
          width: 100%;
        }

        .contact-wrapper {
          width: 100%;
          padding: 4rem 0;
        }

        .contact-wrapper .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          width: 100%;
        }

        .contact-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          margin-bottom: 1.5rem;
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
          font-size: 0.9rem;
          color: var(--text-primary);
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 50px;
          transition: all 0.3s ease;
        }

        .contact-badge:hover {
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .blinking-dot {
          width: 8px;
          height: 8px;
          background: var(--primary-color);
          border-radius: 50%;
          animation: blink 2s infinite;
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .contact-info p {
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
          color: var(--text-primary);
          margin-bottom: 2rem;
          line-height: 0.9;
          font-size: 35px;
        }

        .contact-divider {
          width: 60px;
          height: 1px;
          background: var(--border-color);
          border: none;
          margin: 2rem 0;
        }

        .contact-item {
          margin-bottom: 1.5rem;
        }

        .contact-item strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.5rem;
        }

        .contact-item a,
        .contact-item span {
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-item a:hover {
          color: var(--primary-color);
        }

        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .social-links a {
          color: var(--text-secondary);
          text-decoration: none;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
        }

        .social-links a:hover {
          color: var(--primary-color);
          transform: translateY(-2px);
        }

        .social-links a svg {
          width: 24px;
          height: 24px;
        }

        .contact-form {
          background: transparent;
          padding: 0;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-primary);
          font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.75rem 0;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border-color);
          border-radius: 0;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-bottom-color: var(--primary-color);
        }

        .submit-btn {
          width: 100%;
          padding: 12px 32px;
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 8px;
          font-size: 15px;
          font-weight: 400;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.35);
        }

        @media (max-width: 768px) {
          .marquee-container {
            padding: 2rem 0;
          }

          .marquee span {
            font-size: 60px;
          }

          .contact-wrapper {
            padding: 2rem 0;
          }

          .contact-wrapper .container {
            padding: 0 1rem;
          }

          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-info p {
            font-size: 24px;
          }

          .contact-badge {
            font-size: 0.8rem;
            padding: 8px 16px;
          }

          .contact-divider {
            width: 40px;
            margin: 1.5rem 0;
          }

          .contact-details {
            margin-top: 1.5rem;
          }

          .contact-item {
            margin-bottom: 1rem;
            font-size: 0.9rem;
          }

          .social-links {
            gap: 1rem;
            margin-top: 1.5rem;
          }

          .social-links a svg {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .marquee span {
            font-size: 40px;
          }

          .contact-info p {
            font-size: 20px;
          }

          .contact-badge {
            font-size: 0.75rem;
          }

          .contact-item strong {
            font-size: 0.875rem;
          }

          .contact-item a,
          .contact-item span {
            font-size: 0.875rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-content {
            gap: 3rem;
          }

          .contact-info p {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  )
}

export default Contact


