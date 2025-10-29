'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import { useTheme } from '@/app/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo-wrapper" onClick={() => scrollToSection('hero')}>
            <Logo />
          </div>
          <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
            <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
              About
            </a>
            <a href="#skills" onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
              Contact <span className="arrow">→</span>
            </a>
          </div>
          <div className="nav-actions">
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>
            <button 
              className={`hamburger ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 2rem 0 1rem;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(20px);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1rem;
          margin-bottom: 1rem;
          background: transparent;
        }

        .nav-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .theme-toggle {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .theme-toggle svg {
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.1);
        }

        .theme-toggle:hover svg {
          color: var(--primary-color);
        }

        .nav-logo-wrapper {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .nav-menu {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-primary);
          text-decoration: none;
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .arrow {
          transition: transform 0.3s ease;
          font-size: 1.1em;
        }

        .nav-link:hover .arrow {
          transform: translateX(5px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: var(--text-primary);
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .nav-menu {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(10, 10, 10, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            transition: right 0.3s ease;
            border-top: 1px solid var(--border-color);
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </>
  )
}

export default Navbar
