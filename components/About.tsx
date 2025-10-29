'use client'

const About = () => {
  // Generate random positions for particles
  const generateParticles = () => {
    return [...Array(50)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 5 + Math.random() * 5,
    }))
  }

  const particles = generateParticles()

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
                Digital strategist and web designer and developer with over six years of experience. Team lead and change management.
              </p>
              <hr className="title-divider" />
              <div className="skills-list">
                <span className="skill-btn">HTML</span>
                <span className="skill-btn">CSS</span>
                <span className="skill-btn">Web Designer</span>
                <span className="skill-btn">CRM</span>
              </div>
              <hr className="title-divider" />
              <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Years</p>
                </div>
                <div className="stat">
                  <h3>100+</h3>
                  <p>Clients</p>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="video-wrapper">
                <div className="particles-background">
                  {particles.map((particle) => (
                    <div 
                      key={particle.id} 
                      className="particle"
                      style={{
                        left: `${particle.left}%`,
                        top: `${particle.top}%`,
                        animationDelay: `${particle.delay}s`,
                        animationDuration: `${particle.duration}s`
                      }}
                    ></div>
                  ))}
                </div>
                <div className="profile-image-wrapper">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
                    alt="Profile"
                    className="profile-image"
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
          grid-template-columns: 1fr 1fr;
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

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          animation: float infinite ease-in-out;
          box-shadow: 0 0 3px rgba(255, 255, 255, 0.5);
          will-change: transform, opacity;
        }

        @keyframes float {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translate(30px, -30px) scale(1);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translate(60px, -60px) scale(1);
            opacity: 0;
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
          background: var(--bg-color);
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
          background: rgba(255, 255, 255, 0.1);
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat {
          text-align: center;
          padding: 2rem;
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
          font-size: 2.5rem;
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
            padding: 1.5rem 1rem;
          }

          .stat h3 {
            font-size: 2rem;
          }

          .video-wrapper {
            min-height: 350px;
          }

          .profile-image-wrapper {
            width: 70%;
          }
        }

        @media (max-width: 480px) {
          .subsection-title {
            font-size: 1.75rem;
          }

          .about-stats {
            grid-template-columns: 1fr;
          }

          .stat h3 {
            font-size: 1.75rem;
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
      `}</style>
    </section>
  )
}

export default About

