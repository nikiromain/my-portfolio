'use client'

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="/logo.png" 
        alt="Logo" 
        className="logo-image"
      />
      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo-image {
          height: 80px;
          width: auto;
          transition: all 0.3s ease;
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
        }

        .logo-container:hover .logo-image {
          transform: scale(1.1);
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
        }

        @media (max-width: 768px) {
          .logo-image {
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .logo-image {
            height: 50px;
          }
        }
      `}</style>
    </div>
  )
}

export default Logo
