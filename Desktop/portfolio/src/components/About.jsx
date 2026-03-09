import { useEffect, useRef } from 'react'
import '../styles/About.css'

function About() {
  const sectionRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    // Intersection Observer for entrance animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    )

    const elementsToAnimate = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elementsToAnimate?.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="about" ref={sectionRef}>
      {/* Animated Background Orbs */}
      <div className="about-background">
        <div className="floating-orb orb-1"></div>
        <div className="floating-orb orb-2"></div>
        <div className="floating-orb orb-3"></div>
      </div>

      <h2 className="about-heading animate-on-scroll">About Me</h2>
      
      <div className="about-content">
        <div className="about-intro animate-on-scroll">
          <p>
            Passionate Computer Science Engineering student at Lovely Professional University with expertise in Data Analytics, 
            Full Stack Development, and Machine Learning. Experienced in building interactive dashboards using Power BI, 
            developing responsive web applications with React and Spring Boot, and implementing ML algorithms for real-world 
            problem-solving. Dedicated to transforming complex data into actionable insights and creating innovative solutions 
            that drive business growth.
          </p>
          <div className="intro-shimmer"></div>
        </div>
        
        <div className="about-highlights">
          <div className="highlight-card animate-on-scroll" style={{ '--delay': '0ms' }}>
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"/>
                <path d="M3 9h18"/>
                <path d="M9 21V9"/>
              </svg>
            </div>
            <h3>Data Analytics & Power BI</h3>
            <p>Creating interactive dashboards and visualizations to transform raw data into meaningful business insights using Power BI, SQL, and advanced analytics.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="highlight-card animate-on-scroll" style={{ '--delay': '150ms' }}>
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="12" x="4" y="6" rx="2"/>
                <path d="M9 18v-3"/>
                <path d="M15 18v-3"/>
                <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                <circle cx="12" cy="12" r="2"/>
              </svg>
            </div>
            <h3>Full Stack / React Development</h3>
            <p>Building responsive, scalable web applications using modern technologies like React, Spring Boot, MySQL, and RESTful APIs with clean architecture.</p>
            <div className="card-glow"></div>
          </div>
          
          <div className="highlight-card animate-on-scroll" style={{ '--delay': '300ms' }}>
            <div className="highlight-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
                <path d="M20.9 14.9c-.5 2.7-2.9 4.6-5.6 4.1-1.1-.2-2.1-.7-2.9-1.5l-.4-.4-.4.4c-1.9 2-5.1 2.1-7.1.2s-2.1-5.1-.2-7.1c.8-.8 1.8-1.3 2.9-1.5 2.7-.5 5.1 1.4 5.6 4.1.1.5.1 1 0 1.5V14c0 .6.4 1 1 1s1-.4 1-1v-.7c.1-.5.1-1 0-1.5-.5-2.7-2.9-4.6-5.6-4.1-1.1.2-2.1.7-2.9 1.5l-.4.4-.4-.4c-1.9-2-5.1-2.1-7.1-.2s-2.1 5.1-.2 7.1c.8.8 1.8 1.3 2.9 1.5 2.7.5 5.1-1.4 5.6-4.1.1-.5.1-1 0-1.5V9c0-.6-.4-1-1-1s-1 .4-1 1v.7c-.1.5-.1 1 0 1.5.5 2.7 2.9 4.6 5.6 4.1 1.1-.2 2.1-.7 2.9-1.5l.4-.4.4.4c1.9 2 5.1 2.1 7.1.2s2.1-5.1.2-7.1c-.8-.8-1.8-1.3-2.9-1.5-2.7-.5-5.1 1.4-5.6 4.1-.1.5-.1 1 0 1.5z"/>
              </svg>
            </div>
            <h3>Machine Learning & AI Projects</h3>
            <p>Developing intelligent systems using Python, Scikit-learn, and deep learning frameworks to solve complex problems through predictive analytics.</p>
            <div className="card-glow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
