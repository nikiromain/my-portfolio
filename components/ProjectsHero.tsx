'use client'

const ProjectsHero = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
    {
      id: 2,
      title: 'Brand Identity',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    },
    {
      id: 4,
      title: 'Task Management App',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    },
    {
      id: 6,
      title: 'Mobile App Design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    },
    {
      id: 7,
      title: 'Dashboard Design',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80',
    },
    {
      id: 8,
      title: 'UI/UX Portfolio',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80',
    },
    {
      id: 9,
      title: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80',
    },
    {
      id: 10,
      title: 'E-Commerce Redesign',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    },
  ]

  return (
    <section id="projects-hero" className="projects-hero-section">
      <div className="projects-masonry-container">
        <div className="projects-hero-content">
          <div className="projects-badge">
            <span className="blinking-dot"></span>
            Our Projects
          </div>
          <h2 className="projects-hero-title">Explore our creative work</h2>
        </div>
        <div className="projects-masonry">
          {projects.map((project, idx) => {
            // Heights in rows (each row is 25px) - creating a puzzle-like interlocking pattern
            const heights = [12, 16, 10, 14, 8, 18, 12, 20, 14, 16];
            return (
              <div 
                key={project.id} 
                className="project-card" 
                style={{ 
                  backgroundImage: `url(${project.image})`,
                  gridRow: `span ${heights[idx]}`
                }}
              >
                <div className="project-overlay">
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-arrow">↗</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <style jsx>{`
        .projects-hero-section {
          padding: 6rem 0;
          background: #0a0a0a;
        }

        .projects-hero-content {
          text-align: center;
          margin-bottom: 4rem;
          max-width: 1600px;
          width: 100%;
        }

        .projects-masonry-container {
          width: 100%;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .projects-masonry {
          display: grid;
          grid-template-columns: repeat(3, 3fr);
          grid-auto-rows: 25px;
          gap: 1rem;
          max-width: 1600px;
          width: 100%;
        }

        .projects-badge {
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

        .projects-badge:hover {
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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .projects-hero-title {
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
          font-size: 3.5rem;
          font-weight: 400;
          color: rgb(255, 255, 255);
          line-height: 1.2;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.3s ease;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          filter: grayscale(100%) brightness(0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
        }

        .project-card:hover {
          transform: translateY(-10px);
          filter: grayscale(0%) brightness(1);
        }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .project-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: rgb(255, 255, 255);
          margin: 0;
          font-family: 'Inter', sans-serif;
        }

        .project-arrow {
          font-size: 1.5rem;
          color: rgb(255, 255, 255);
          transform: rotate(-45deg);
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-arrow {
          transform: rotate(-45deg) translate(0px, -5px);
        }

        @media (max-width: 768px) {
          .projects-hero-section {
            padding: 2rem 0;
          }

          .projects-masonry-container {
            padding: 1rem;
          }

          .projects-hero-content {
            margin-bottom: 2rem;
          }

          .projects-hero-title {
            font-size: 1.75rem;
          }

          .projects-badge {
            font-size: 0.8rem;
            padding: 8px 16px;
          }

          .projects-masonry {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-top: 2rem;
          }

          .project-card {
            grid-row: span 12 !important;
          }

          .project-title {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .projects-hero-title {
            font-size: 1.5rem;
          }

          .projects-badge {
            font-size: 0.75rem;
          }

          .project-content {
            padding: 1rem;
          }

          .project-title {
            font-size: 0.9rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-hero-title {
            font-size: 3rem;
          }

          .projects-masonry {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        :global(:root.light) .projects-hero-section {
          background: var(--bg-color);
        }

        :global(:root.light) .projects-badge {
          color: rgb(10, 10, 10);
          border: 1px solid rgba(10, 10, 10, 0.2);
        }

        :global(:root.light) .projects-badge:hover {
          border-color: rgba(10, 10, 10, 0.4);
        }

        :global(:root.light) .projects-hero-title {
          color: rgb(10, 10, 10);
        }

        :global(:root.light) .project-card {
          border: 1px solid rgba(0, 0, 0, 0.1);
          filter: grayscale(50%) brightness(0.9);
        }

        :global(:root.light) .project-card:hover {
          filter: grayscale(0%) brightness(1);
        }

        :global(:root.light) .project-overlay {
          background: rgba(255, 255, 255, 0.85);
        }

        :global(:root.light) .project-title {
          color: rgb(10, 10, 10);
        }

        :global(:root.light) .project-description {
          color: rgba(10, 10, 10, 0.7);
        }
      `}</style>
    </section>
  )
}

export default ProjectsHero