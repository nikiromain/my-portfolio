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
        <div className="cards-scroll-wrapper">
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
          padding: 0;
          margin-top: -6rem;
          background: var(--bg-color);
          overflow: hidden;
        }

        .cards-3d-container {
          width: 100%;
          perspective: 1500px;
          perspective-origin: center center;
          min-height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cards-scroll-wrapper {
          width: 100%;
          overflow: hidden;
          transform-style: preserve-3d;
          transform: rotateY(-15deg);
          animation: turn3d 10s linear infinite;
        }

        .cards-scroll-inner {
          display: flex;
          gap: 2rem;
          animation: scroll 30s linear infinite;
          width: max-content;
          transform-style: preserve-3d;
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

        @keyframes turn3d {
          0%, 100% {
            transform: rotateY(-15deg) rotateX(0deg);
          }
          25% {
            transform: rotateY(15deg) rotateX(2deg);
          }
          50% {
            transform: rotateY(-15deg) rotateX(0deg);
          }
          75% {
            transform: rotateY(15deg) rotateX(-2deg);
          }
        }

        .card-content {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 30px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .card-item:hover .card-content {
          transform: translateY(-10px);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .card-content h3 {
          font-family: 'Satoshi', sans-serif;
          font-size: 2rem;
          color: white;
          margin-bottom: 1rem;
        }

        .card-content p {
          font-family: 'Inter', sans-serif;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .cards-3d-container {
            min-height: 400px;
          }

          .card-item {
            min-width: 300px;
            height: 350px;
          }

          .cards-scroll-inner {
            gap: 1.5rem;
          }

          .cards-3d-container {
            perspective: 1000px;
          }
        }
      `}</style>
    </section>
  )
}

export default Cards3D

