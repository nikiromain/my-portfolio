'use client'

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Let's Build Together</h2>
        <a href="#contact" className="contact-button">
          Contact
        </a>
      </div>
      <style jsx>{`
        .skills-section {
          background-color: var(--bg-color);
          padding: 4rem 0 0 0;
          min-height: auto;
        }

        .skills-section :global(.section-title) {
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
          background: none !important;
          color: var(--text-primary) !important;
          -webkit-text-fill-color: var(--text-primary) !important;
          font-size: 4rem;
          line-height: 1;
          margin-top: 4rem;
          margin-bottom: 4rem;
        }

        @media (max-width: 768px) {
          .skills-section :global(.section-title) {
            font-size: 2.5rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

          .skills-section {
            padding: 2rem 0;
          }

          .contact-button {
            padding: 10px 28px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .skills-section :global(.section-title) {
            font-size: 2rem;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .contact-button {
            padding: 8px 24px;
            font-size: 13px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-section :global(.section-title) {
            font-size: 3rem;
          }
        }

        .contact-button {
          display: inline-block;
          padding: 12px 32px;
          background: transparent;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
          margin-top: 2rem;
          margin-bottom: 0;
          text-align: center;
          display: block;
          width: fit-content;
          margin-left: auto;
          margin-right: auto;
        }

        .contact-button:hover {
          transform: translateY(-2px);
          border-color: var(--primary-color);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.35);
          color: var(--text-primary);
        }
      `}</style>
    </section>
  )
}

export default Skills


