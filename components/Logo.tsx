'use client'

const Logo = () => {
  return (
    <div className="logo-container">
      <svg 
        width="90" 
        height="90" 
        viewBox="0 0 80 80" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="logo-svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#e0e0e0" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Futuristic symbol/geometric shape */}
        <circle
          cx="40"
          cy="40"
          r="20"
          stroke="url(#symbolGradient)"
          strokeWidth="4"
          fill="none"
          className="symbol-shape"
        />
        <circle
          cx="40"
          cy="40"
          r="12"
          stroke="url(#symbolGradient)"
          strokeWidth="2"
          fill="none"
          className="symbol-shape"
        />
        <circle
          cx="40"
          cy="40"
          r="6"
          fill="url(#symbolGradient)"
          className="symbol-shape"
        />
        
        {/* 'n' shape - futuristic style */}
        <path
          d="M15 15 L15 42 M15 15 L15 24 L30 24 M30 24 L30 42"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="logo-letter"
          filter="url(#glow)"
        />
        
        {/* 'r' shape - futuristic style */}
        <path
          d="M42 15 L42 42 M42 15 L42 24 L56 24 L56 30 L42 30 M42 24 L56 24"
          stroke="url(#logoGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="logo-letter"
          filter="url(#glow)"
        />
        
        {/* Animated accent lines */}
        <line
          x1="15"
          y1="15"
          x2="15"
          y2="24"
          stroke="#ffffff"
          strokeWidth="3"
          className="accent-line"
        />
        <line
          x1="42"
          y1="15"
          x2="42"
          y2="24"
          stroke="#e0e0e0"
          strokeWidth="3"
          className="accent-line"
        />
      </svg>
      <style jsx>{`
        .logo-container {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo-svg {
          filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.7));
          transition: all 0.5s ease;
        }

        .logo-container:hover .logo-svg {
          transform: scale(1.2) rotate(5deg);
          filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.8));
        }

        .logo-letter {
          transition: all 0.5s ease;
        }

        .logo-container:hover .logo-letter {
          opacity: 0.85;
        }

        .symbol-shape {
          transition: all 0.6s ease;
          animation: pulse 2s infinite;
        }

        .logo-container:hover .symbol-shape {
          transform: rotate(180deg) scale(1.1);
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .accent-line {
          transition: all 0.5s ease;
          opacity: 0;
        }

        .logo-container:hover .accent-line {
          opacity: 1;
          stroke-width: 4;
        }
      `}</style>
    </div>
  )
}

export default Logo
