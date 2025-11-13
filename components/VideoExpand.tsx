'use client'

import { useEffect, useState, useRef } from 'react'

const VideoExpand = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on when section is in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Start animation when section enters viewport
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        
        // Calculate progress: 0 when section top enters viewport, 1 when scrolled through
        const scrolled = scrollTop + windowHeight - sectionTop
        const totalScroll = sectionHeight
        const progress = Math.max(0, Math.min(1, scrolled / totalScroll))
        setScrollProgress(progress)
      } else if (rect.top > windowHeight) {
        // Section hasn't entered viewport yet
        setScrollProgress(0)
      } else if (rect.bottom < 0) {
        // Section has been fully scrolled past
        setScrollProgress(1)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="video-expand" className="video-expand-section">
      <div className="video-wrapper">
        <div className="text-left">Creativity</div>
        <div className="video-container">
          <video
            className="expand-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/creativity_unlocked.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text-right">Unlocked</div>
        <div className="text-center">Creativity Unlocked</div>
      </div>
      <style jsx>{`
        .video-expand-section {
          position: relative;
          width: 100%;
          padding: 4rem 0;
          min-height: 100vh;
          overflow: hidden;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .video-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          padding: 0 2rem;
          position: relative;
          max-width: 100%;
        }

        .text-left {
          font-family: 'Satoshi', sans-serif;
          font-size: 4rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          white-space: nowrap;
          transition: all 0.3s ease;
          opacity: ${Math.max(0, 1 - scrollProgress * 2)};
          transform: translateX(${scrollProgress * 150}px);
        }

        .text-right {
          font-family: 'Satoshi', sans-serif;
          font-size: 4rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          white-space: nowrap;
          transition: all 0.3s ease;
          opacity: ${Math.max(0, 1 - scrollProgress * 2)};
          transform: translateX(${scrollProgress * -150}px);
        }

        .text-center {
          position: absolute;
          font-family: 'Satoshi', sans-serif;
          font-size: 4rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.9);
          white-space: nowrap;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) translateY(${scrollProgress * 50}px);
          opacity: ${Math.max(0, (scrollProgress - 0.5) * 2)};
          z-index: 2;
        }

        .video-container {
          position: relative;
          width: ${300 + scrollProgress * 1200}px;
          max-width: 95vw;
          margin: 0 auto;
          transition: border-radius 0.3s ease;
          border-radius: ${20 - scrollProgress * 15}px;
          overflow: hidden;
          z-index: 1;
        }

        .expand-video {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          filter: grayscale(${100 - scrollProgress * 100}%) brightness(${0.5 + scrollProgress * 0.5});
        }

        @media (max-width: 768px) {
          .video-expand-section {
            padding: 2rem 0;
            min-height: 80vh;
          }

          .video-wrapper {
            gap: 1rem;
            padding: 0 1rem;
            flex-wrap: wrap;
          }

          .text-left,
          .text-right {
            font-size: 2rem;
          }

          .text-center {
            font-size: 2rem;
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            margin-top: 1rem;
          }

          .video-container {
            width: ${200 + scrollProgress * 600}px !important;
            max-width: 90vw;
          }
        }

        @media (max-width: 480px) {
          .text-left,
          .text-right,
          .text-center {
            font-size: 1.5rem;
          }

          .video-container {
            width: ${150 + scrollProgress * 500}px !important;
          }
        }

        :global(:root.light) .text-left,
        :global(:root.light) .text-right,
        :global(:root.light) .text-center {
          color: rgba(10, 10, 10, 0.9);
        }
      `}</style>
    </section>
  )
}

export default VideoExpand

