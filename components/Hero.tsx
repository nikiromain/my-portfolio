'use client'

import { useEffect, useState } from 'react'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="hero">
      <video 
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.5; // Slow down video to 50% speed
          }
        }}
      >
        <source src="https://framerusercontent.com/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      
      {/* 3D Silver Objects */}
      <div className="silver-3d silver-cube-1">
        <div className="silver-cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      <div className="silver-3d silver-cube-2">
        <div className="silver-cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face right"></div>
          <div className="face left"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="blinking-dot"></span>
          Hi, I'm Nikisha Romain — Web Developer & Digital Strategist
        </div>
        <h1 className="hero-title">
        Caribbean creativity, global digital strategy.
        </h1>
    
        <p className="hero-description">
        Innovative web solutions for brands that dare to lead.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse-icon">
          <div className="mouse">
            <div className="mouse-wheel"></div>
          </div>
        </div>
        <span>Scroll Down</span>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0);
          border-radius: 30px;
          margin: 2rem;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: translate(-50%, -50%);
          z-index: 0;
          filter: grayscale(100%) brightness(0.3);
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 20px;
          margin-bottom: 2rem;
          font-family: 'Inter', sans-serif;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: rgb(255, 255, 255);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-badge:hover {
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

        .hero-title {
          font-family: 'Satoshi', 'Satoshi Placeholder', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 74px;
          line-height: 74px;
          color: rgb(255, 255, 255);
          margin-bottom: 2rem;
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 48px;
            line-height: 52px;
          }
        }

        .highlight {
          background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 2rem);
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }

        .hero-description {
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 23px;
          color: rgba(255, 255, 255, 0.65);
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease-out 0.6s both;
        }

        .btn {
          padding: 12px 32px;
          border-radius: 8px;
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-style: normal;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
          transition: all 0.3s ease;
          display: inline-block;
          background: transparent;
          border: 2px solid transparent;
        }

        .btn-primary {
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.35);
        }

        .btn-secondary {
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.35);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 50px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          z-index: 10;
        }

        .scroll-indicator:hover {
          color: rgba(255, 255, 255, 1);
        }

        .mouse-icon {
          margin-bottom: 5px;
        }

        .mouse {
          width: 24px;
          height: 40px;
          border: 2px solid rgba(255, 255, 255, 0.9);
          border-radius: 15px;
          position: relative;
          animation: bounce 2s infinite;
        }

        .mouse-wheel {
          width: 3px;
          height: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scroll-wheel 2s infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        @keyframes scroll-wheel {
          0%, 100% {
            opacity: 1;
            top: 8px;
          }
          50% {
            opacity: 0;
            top: 20px;
          }
        }

        /* 3D Silver Objects */
        .silver-3d {
          position: absolute;
          z-index: 3;
          perspective: 1000px;
        }

        .silver-cube-1 {
          top: 30%;
          right: 8%;
          transform: translateY(-50%);
        }

        .silver-cube-2 {
          bottom: 20%;
          left: 10%;
          transform: translateY(-50%);
          animation-delay: -10s;
        }

        .silver-cube {
          position: relative;
          width: 120px;
          height: 120px;
          transform-style: preserve-3d;
          animation: rotateCube 20s infinite linear;
        }

        .face {
          position: absolute;
          width: 120px;
          height: 120px;
          background: 
            radial-gradient(circle at 30% 30%, 
              rgba(255, 255, 255, 1) 0%,
              rgba(240, 240, 240, 0.9) 20%,
              rgba(200, 200, 200, 0.8) 40%,
              rgba(150, 150, 150, 0.7) 60%,
              rgba(180, 180, 180, 0.8) 80%,
              rgba(255, 255, 255, 0.95) 100%
            );
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow: 
            inset 0 0 20px rgba(255, 255, 255, 0.4),
            0 0 40px rgba(255, 255, 255, 0.2),
            0 0 80px rgba(255, 255, 255, 0.1);
          filter: brightness(1.1);
        }

        .front { 
          transform: rotateY(0deg) translateZ(60px); 
        }
        
        .back { 
          transform: rotateY(180deg) translateZ(60px); 
        }
        
        .right { 
          transform: rotateY(90deg) translateZ(60px); 
        }
        
        .left { 
          transform: rotateY(-90deg) translateZ(60px); 
        }
        
        .top { 
          transform: rotateX(90deg) translateZ(60px); 
        }
        
        .bottom { 
          transform: rotateX(-90deg) translateZ(60px); 
        }

        @keyframes rotateCube {
          0% {
            transform: rotateX(0deg) rotateY(0deg);
          }
          25% {
            transform: rotateX(90deg) rotateY(90deg);
          }
          50% {
            transform: rotateX(180deg) rotateY(180deg);
          }
          75% {
            transform: rotateX(270deg) rotateY(270deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }

        @media (max-width: 768px) {
          .silver-cube-1 {
            right: 5%;
            transform: translateY(-50%) scale(0.7);
          }

          .silver-cube-2 {
            left: 5%;
            transform: translateY(-50%) scale(0.7);
          }
        }

        @media (max-width: 768px) {
          .hero {
            margin: 1rem;
            border-radius: 20px;
          }

          .hero-content {
            padding: 0 15px;
          }

          .hero-badge {
            font-size: 0.75rem;
            padding: 8px 16px;
            margin-bottom: 1.5rem;
          }

          .hero-title {
            font-size: 36px;
            line-height: 40px;
            margin-bottom: 1.5rem;
          }

          .hero-description {
            font-size: 14px;
            line-height: 20px;
            margin-bottom: 1.5rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 0.75rem;
          }

          .btn {
            width: 100%;
            text-align: center;
            padding: 10px 24px;
          }

          .scroll-indicator {
            font-size: 0.875rem;
            bottom: 30px;
          }

          .mouse {
            width: 20px;
            height: 32px;
          }

          .mouse-wheel {
            width: 2px;
            height: 6px;
            top: 6px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 28px;
            line-height: 32px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 58px;
            line-height: 62px;
          }

          .hero-badge {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
