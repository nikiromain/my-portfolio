'use client'

const Cards3D = () => {
  const cards = [
    {
      title: 'Web Development',
      description: 'Creating modern, responsive web applications with cutting-edge technologies.'
    },
    {
      title: 'UI/UX Design',
      description: 'Designing beautiful and intuitive user experiences.'
    },
    {
      title: 'Digital Strategy',
      description: 'Crafting comprehensive digital strategies for business growth.'
    }
  ]

  return (
    <section id="cards-3d" className="cards-3d-section">
      <div className="cards-3d-container">
        <div className="carousel-wrapper">
          <div className="cards-scroll-inner">
            {cards.map((card, idx) => (
              <div key={idx} className="card-item">
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
            {cards.map((card, idx) => (
              <div key={`duplicate-${idx}`} className="card-item">
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .cards-3d-section {
          padding: 4rem 0 1rem 0;
          margin-top: -6rem;
          background: var(--bg-color);
          overflow: hidden;
        }

        .cards-3d-container {
          width: 100%;
          min-height: 450px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .carousel-wrapper {
          width: 100%;
          overflow: hidden;
        }

        .cards-scroll-inner {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
          width: max-content;
        }

        .card-item {
          min-width: 350px;
          height: 400px;
          flex-shrink: 0;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .card-item:hover {
          filter: brightness(1.1);
        }

        .card-content {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .card-item:hover .card-content {
          border-color: rgba(255, 255, 255, 0.35);
          background: rgba(255, 255, 255, 0.12);
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
        }

        .card-content h3 {
          font-family: 'Satoshi', sans-serif;
          font-size: 2rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .card-content p {
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .cards-3d-container {
            min-height: 400px;
          }

          .card-item {
            min-width: 280px;
            height: 350px;
          }

          .cards-scroll-inner {
            gap: 1.5rem;
          }

          .card-content {
            padding: 2rem;
          }

          .card-content h3 {
            font-size: 1.75rem;
          }

          .card-content p {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .cards-3d-container {
            min-height: 350px;
          }

          .card-item {
            min-width: 250px;
            height: 320px;
          }

          .card-content {
            padding: 1.5rem;
          }

          .card-content h3 {
            font-size: 1.5rem;
          }

          .card-content p {
            font-size: 0.85rem;
          }
        }

        :global(:root.light) .card-content {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }

        :global(:root.light) .card-item:hover .card-content {
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 15px 50px rgba(99, 102, 241, 0.15);
        }

        :global(:root.light) .card-content h3 {
          color: #0a0a0a;
        }

        :global(:root.light) .card-content p {
          color: rgba(10, 10, 10, 0.7);
        }
      `}</style>
    </section>
  )
}

export default Cards3D

