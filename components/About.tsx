'use client'

const About = () => {
  // Generate floating gradient orbs
  const generateOrbs = () => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 10 + Math.random() * 10,
      size: 60 + Math.random() * 120,
      blur: 30 + Math.random() * 40,
    }))
  }

  const orbs = generateOrbs()

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-grid">
            <div className="about-left">
              <div className="about-badge">
                <span className="blinking-dot"></span>
                About Me
              </div>
              <h3 className="subsection-title">Meet Nikisha</h3>
              <p className="about-text">
                I'm Nikisha Romain, a Digital Strategist, Web Designer, and Developer with over six years of experience helping businesses build their online presence. I've worked with more than 200 clients across the Caribbean, creating impactful websites across various industries. As a Team Lead skilled in change management, I focus on delivering innovative, results-driven digital solutions that help brands grow and stand out online.
              </p>
              <hr className="title-divider" />
              <div className="skills-list">
                <span className="skill-btn">Client Relationship Management</span>
                <span className="skill-btn">SEO & Web Optimization</span>
                <span className="skill-btn">Digital Marketing Strategy</span>
                <span className="skill-btn">Project Management & Team Leadership</span>
                <span className="skill-btn">UI/UX & QA Testing</span>
                <span className="skill-btn">HubSpot</span>
                <span className="skill-btn">Zoho</span>
                <span className="skill-btn">Jira</span>
                <span className="skill-btn">WordPress</span>
                <span className="skill-btn">Google Analytics</span>
                <span className="skill-btn">HTML</span>
                <span className="skill-btn">CSS</span>
                <span className="skill-btn">CRM & CMS Platforms</span>
                <span className="skill-btn">Social Media Marketing</span>
              </div>
              <hr className="title-divider" />
              <div className="about-stats">
                <div className="stat">
                  <h3>250+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>6+</h3>
                  <p>Years</p>
                </div>
                <div className="stat">
                  <h3>300+</h3>
                  <p>Clients</p>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="video-wrapper">
                <div className="particles-background">
                  {orbs.map((orb) => (
                    <div 
                      key={orb.id} 
                      className="floating-orb"
                      style={{
                        left: `${orb.left}%`,
                        top: `${orb.top}%`,
                        animationDelay: `${orb.delay}s`,
                        animationDuration: `${orb.duration}s`,
                        width: `${orb.size}px`,
                        height: `${orb.size}px`,
                        filter: `blur(${orb.blur}px)`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="profile-image-wrapper">
                  <img 
                    src="/profile.jpeg"
                    alt="Nikisha Romain"
                    className="profile-image"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFkZCBQcm9maWxlIEltYWdlPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .about-section {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 60px 60px 0 0;
          margin: 0;
          padding: 4rem 0;
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          width: 100%;
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          margin-bottom: 1.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: rgb(255, 255, 255);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out;
        }

        .about-badge:hover {
          border-color: rgba(255, 255, 255, 0.6);
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

        .container {
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .about-content {
          width: 100%;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 5rem;
          align-items: stretch;
        }

        .video-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          min-height: 500px;
          border-radius: 20px;
          overflow: hidden;
        }

        .particles-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          overflow: hidden;
        }

        .floating-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 40%, rgba(255, 255, 255, 0.05) 70%, transparent 100%);
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.3), 0 0 80px rgba(255, 255, 255, 0.15);
          animation: floatOrb infinite ease-in-out;
          will-change: transform, opacity;
          pointer-events: none;
        }

        @keyframes floatOrb {
          0% {
            transform: translate(0, 0) scale(0.7);
            opacity: 0.4;
          }
          25% {
            transform: translate(50px, -60px) scale(1.0);
            opacity: 0.7;
          }
          50% {
            transform: translate(100px, -120px) scale(1.3);
            opacity: 0.8;
          }
          75% {
            transform: translate(150px, -100px) scale(1.1);
            opacity: 0.7;
          }
          100% {
            transform: translate(200px, -180px) scale(0.7);
            opacity: 0.4;
          }
        }

        .profile-image-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
          aspect-ratio: 1;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .profile-image-wrapper:hover .profile-image {
          filter: grayscale(70%);
        }

        .subsection-title {
          font-size: 3rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
        }

        .title-divider {
          width: 100%;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          margin: 2rem 0;
        }

        .about-text {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
        }

        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .skill-btn {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          border-radius: 8px;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .skill-btn:hover {
          color: var(--text-primary);
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.25);
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 1.5rem;
          margin-top: 3rem;
        }

        .stat {
          text-align: center;
          padding: 1.25rem 1.5rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stat:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.3);
        }

        .stat h3 {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #e0e0e0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          color: #ffffff;
        }

        .stat p {
          color: var(--text-secondary);
          font-size: 0.9rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 2rem 0;
            border-radius: 40px 40px 0 0;
          }

          .container {
            padding: 0 1rem;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .subsection-title {
            font-size: 2rem;
          }

          .about-stats {
            grid-template-columns: repeat(3, 1fr);
            gap: 1rem;
            margin-top: 2rem;
          }

          .stat {
            padding: 1rem 0.75rem;
          }

          .stat h3 {
            font-size: 1.75rem;
          }

          .video-wrapper {
            min-height: 350px;
          }

          .profile-image-wrapper {
            width: 70%;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 1.5rem 0;
          }

          .subsection-title {
            font-size: 1.75rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .stat {
            padding: 0.75rem 0.5rem;
          }

          .stat h3 {
            font-size: 1.5rem;
          }

          .skills-list {
            gap: 0.5rem;
          }

          .skill-btn {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .about-grid {
            gap: 3rem;
          }

          .subsection-title {
            font-size: 2.5rem;
          }
        }

        :global(:root.light) .about-section {
          background: rgba(245, 245, 245, 0.8);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
        }

        :global(:root.light) .about-badge {
          color: rgb(10, 10, 10);
          border: 1px solid rgba(10, 10, 10, 0.2);
        }

        :global(:root.light) .about-badge:hover {
          border-color: rgba(10, 10, 10, 0.4);
        }

        :global(:root.light) .particles-background {
          background: #f0f0f0;
        }

        :global(:root.light) .floating-orb {
          background: radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(99, 102, 241, 0.1) 40%, rgba(99, 102, 241, 0.05) 70%, transparent 100%);
          box-shadow: 0 0 40px rgba(99, 102, 241, 0.2), 0 0 80px rgba(99, 102, 241, 0.1);
        }

        :global(:root.light) .profile-image-wrapper {
          border: 3px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        :global(:root.light) .title-divider {
          background: rgba(0, 0, 0, 0.2);
        }

        :global(:root.light) .stat {
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
        }

        :global(:root.light) .stat:hover {
          background: rgba(255, 255, 255, 0.8);
          box-shadow: 0 12px 40px rgba(99, 102, 241, 0.2);
        }

        :global(:root.light) .stat h3 {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        :global(:root.light) .skill-btn {
          background: rgba(255, 255, 255, 0.6);
          color: var(--text-primary);
          border: 1px solid rgba(0, 0, 0, 0.1);
        }

        :global(:root.light) .skill-btn:hover {
          background: rgba(255, 255, 255, 0.9);
          border-color: rgba(99, 102, 241, 0.3);
        }
      `}</style>
    </section>
  )
}

export default About

