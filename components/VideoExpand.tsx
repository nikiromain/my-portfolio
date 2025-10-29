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
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        
        // Calculate progress based on how much of the section has been scrolled
        const distance = scrollTop - sectionTop + windowHeight
        const totalDistance = sectionHeight + windowHeight
        const progress = Math.max(0, Math.min(1, distance / totalDistance))
        setScrollProgress(progress)
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
            <source src="https://framerusercontent.com/assets/1g8IkhtJmlWcC4zEYWKUmeGWzI.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="text-right">Unlocked</div>
        <div className="text-center">Creativity Unlocked</div>
      </div>
      <style jsx>{`
        .video-expand-section {
          position: relative;
          width: 100%;
          padding: 6rem 0;
          min-height: 150vh;
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
          width: ${400 + scrollProgress * 1400}px;
          max-width: 98%;
          margin: 0 auto;
          transition: border-radius 0.3s ease;
          border-radius: 20px;
          overflow: hidden;
          z-index: 1;
        }

        .expand-video {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          filter: grayscale(${100 - scrollProgress * 100}%) brightness(${0.5 + scrollProgress * 0.5});
        }
      `}</style>
    </section>
  )
}

export default VideoExpand

