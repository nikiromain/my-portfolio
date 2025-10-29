'use client'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.',
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'Material-UI'],
      link: '#',
      github: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard showing real-time weather data with interactive charts and maps.',
      tech: ['React', 'Chart.js', 'OpenWeather API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'A comprehensive analytics platform for tracking social media performance and engagement metrics.',
      tech: ['Next.js', 'Python', 'PostgreSQL', 'D3.js'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-number">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIdx) => (
                  <span key={techIdx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Code →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .projects-section {
          background-color: var(--bg-secondary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr));
          gap: 2rem;
        }

        .project-card {
          background: var(--bg-color);
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
          position: relative;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
          border-color: var(--primary-color);
        }

        .project-number {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0.3;
          line-height: 1;
        }

        .project-title {
          font-size: 1.5rem;
          margin: 1rem 0;
          color: var(--text-primary);
        }

        .project-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .project-links {
          display: flex;
          gap: 1rem;
        }

        .project-link {
          color: var(--primary-color);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .project-link:hover {
          color: var(--secondary-color);
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 0;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .project-card {
            padding: 1.5rem;
          }

          .project-number {
            font-size: 3rem;
          }

          .project-title {
            font-size: 1.25rem;
          }

          .project-description {
            font-size: 0.9rem;
          }

          .project-links {
            flex-direction: column;
            gap: 0.75rem;
          }

          .project-link {
            display: block;
            text-align: center;
            padding: 0.5rem 0;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            padding: 1rem;
          }

          .project-number {
            font-size: 2.5rem;
          }

          .project-title {
            font-size: 1.1rem;
          }

          .tech-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  )
}

export default Projects


