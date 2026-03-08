import { useEffect, useRef, useState, useCallback } from 'react'
import '../styles/Hero.css'
import profilePhoto from '/src/assets/profile-photo.jpg'

function Hero() {
  const heroRef = useRef(null)
  const profileRef = useRef(null)
  const spotlightRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [profileTransform, setProfileTransform] = useState({ rotateX: 0, rotateY: 0 })
  const [buttonTransform, setButtonTransform] = useState({ x: 0, y: 0 })
  const buttonRef = useRef(null)

  // Split name into letters for animation
  const name = "Rama Sai Jahnavi"
  const nameLetters = name.split('').map((char, index) => (
    <span 
      key={index} 
      className="letter"
      style={{ animationDelay: `${0.5 + index * 0.04}s` }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    // Trigger animation immediately on mount since hero is first visible
    setIsVisible(true)
    if (heroRef.current) {
      heroRef.current.classList.add('animate-in')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            entry.target.classList.add('animate-in')
          } else {
            setIsVisible(false)
            entry.target.classList.remove('animate-in')
          }
        })
      },
      { threshold: 0.2 }
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Spotlight cursor effect
  const handleMouseMove = useCallback((e) => {
    if (!heroRef.current || !spotlightRef.current) return
    
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    setMousePosition({ x, y })
    spotlightRef.current.style.left = `${x}px`
    spotlightRef.current.style.top = `${y}px`
  }, [])

  // 3D Tilt effect for profile image
  const handleProfileMouseMove = useCallback((e) => {
    if (!profileRef.current) return
    
    const rect = profileRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 8
    const rotateX = ((centerY - e.clientY) / (rect.height / 2)) * 8
    
    setProfileTransform({ rotateX, rotateY })
  }, [])

  const handleProfileMouseLeave = useCallback(() => {
    setProfileTransform({ rotateX: 0, rotateY: 0 })
  }, [])

  // Magnetic button effect
  const handleButtonMouseMove = useCallback((e) => {
    if (!buttonRef.current) return
    
    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * 0.2
    const deltaY = (e.clientY - centerY) * 0.2
    
    setButtonTransform({ x: deltaX, y: deltaY })
  }, [])

  const handleButtonMouseLeave = useCallback(() => {
    setButtonTransform({ x: 0, y: 0 })
  }, [])

  // Smooth scroll to next section
  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills')
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div 
      className={`hero ${isVisible ? 'animate-in' : ''}`} 
      ref={heroRef}
      onMouseMove={handleMouseMove}
    >
      {/* Cinematic Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Cursor Spotlight Effect */}
      <div className="spotlight" ref={spotlightRef} />
      
      {/* Scroll Transition Overlay */}
      <div className="scroll-transition" />

      <div className="hero-content">
        <div className="hero-left">
          {/* Name with Masked Text Reveal */}
          <div className="name-container">
            <h1>{nameLetters}</h1>
          </div>
          
          {/* Subtitle with Animated Underline */}
          <div className="subtitle-wrapper">
            <p className="hero-subtitle">Aspiring Software Engineer</p>
            <div className="subtitle-underline" />
          </div>
          
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <a href="mailto:pottapogulajahnavi@gmail.com">pottapogulajahnavi@gmail.com</a>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>+91-6301981410</span>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <a href="https://www.linkedin.com/in/jahnavi-p2005/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.com/RamaSaiJahnavi" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>

          {/* Magnetic CTA Button */}
          <button 
            ref={buttonRef}
            className="magnetic-btn"
            onClick={scrollToNext}
            onMouseMove={handleButtonMouseMove}
            onMouseLeave={handleButtonMouseLeave}
            style={{
              transform: `translate(${buttonTransform.x}px, ${buttonTransform.y}px)`
            }}
          >
            View My Work
          </button>
        </div>

        {/* Profile Image with 3D Tilt */}
        <div className="hero-right">
          <div 
            className="profile-container"
            ref={profileRef}
            onMouseMove={handleProfileMouseMove}
            onMouseLeave={handleProfileMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${profileTransform.rotateX}deg) rotateY(${profileTransform.rotateY}deg)`
            }}
          >
            <div className="profile-border" />
            <div className="profile-border-inner" />
            <img 
              src={profilePhoto} 
              alt="Pottapogula Rama Sai Jahnavi - Aspiring Software Engineer" 
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="profile-photo-placeholder" style={{display: 'none'}}>
              <span>Add your photo here</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Section Divider */}
      <div className="section-divider" />
    </div>
  )
}

export default Hero
