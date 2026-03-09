import { useEffect, useRef, useState } from 'react'
import '../styles/Training.css'

function Training() {
  const sectionRef = useRef(null)
  const [titleVisible, setTitleVisible] = useState(false)
  
  const trainingItems = [
    {
      title: 'From Data to Decisions: A Hands-On Approach to Data Science',
      duration: 'Jun\'25 – Jul\'25',
      details: [
        'Power BI: Developed interactive dashboards, reports, and visualizations for data-driven insights.',
        'Machine Learning: Implemented ML algorithms using Python and libraries like Scikit-learn for predictive analysis.',
        'SQL: Proficient in querying, data manipulation, and database management.',
        'Excel: Advanced skills in Pivot Tables, Charts, Data Analysis Tools, and automation for business analytics.'
      ]
    }
  ]
  
  // Viewport-based animation for heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('training-header')) {
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
    
    const header = sectionRef.current?.querySelector('.training-header')
    if (header) observer.observe(header)
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="training" ref={sectionRef}>
      <div className={`training-header ${titleVisible ? 'visible' : ''}`}>
        <div className="training-title-wrapper">
          <h2>TRAINING</h2>
          <div className="training-underline" />
        </div>
      </div>
      {trainingItems.map((item, index) => (
        <div key={index} className="training-card">
          <h3>{item.title}</h3>
          <p className="training-duration">{item.duration}</p>
          <ul className="training-details">
            {item.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
          <a href="https://drive.google.com/file/d/1N8lHIPzpeKUJwBH_rmJPUuI6uHyxbCUs/view" className="training-link" target="_blank" rel="noopener noreferrer">View Certificate</a>
        </div>
      ))}
    </div>
  )
}

export default Training
