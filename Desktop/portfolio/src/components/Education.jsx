import { useEffect, useRef, useState } from 'react'
import '../styles/Education.css'

function Education() {
  const sectionRef = useRef(null)
  const [titleVisible, setTitleVisible] = useState(false)
  
  const education = [
    {
      institution: 'Lovely Professional University',
      location: 'Punjab, India',
      degree: 'Bachelor of Technology - Computer Science and Engineering',
      details: 'CGPA: 8.91',
      duration: 'Aug\'23 – Present'
    },
    {
      institution: 'Sri Chaitanya',
      location: 'Vishakhapatnam, Andhra Pradesh',
      degree: 'Intermediate',
      details: 'CGPA: 8.2',
      duration: 'Jun\'21 – Jul\'23'
    },
    {
      institution: 'Sri Chaitanya Techno School',
      location: 'Vishakhapatnam, Andhra Pradesh',
      degree: 'Matriculation',
      details: 'CGPA: 10.0',
      duration: 'Apr\'20 – Jun\'21'
    }
  ]
  
  // Viewport-based animation for heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('education-header')) {
            requestAnimationFrame(() => {
              setTitleVisible(entry.isIntersecting)
            })
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
      }
    )
    
    const header = sectionRef.current?.querySelector('.education-header')
    if (header) observer.observe(header)
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="education" ref={sectionRef}>
      <div className={`education-header ${titleVisible ? 'visible' : ''}`}>
        <div className="education-title-wrapper">
          <h2>EDUCATION</h2>
          <div className="education-underline" />
        </div>
      </div>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-header">
              <h3>{edu.institution}</h3>
              <span className="education-location">{edu.location}</span>
            </div>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-details">{edu.details}</p>
            <p className="education-duration">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Education
