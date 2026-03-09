import { useEffect, useRef, useState } from 'react'
import '../styles/Achievements.css'

function Achievements() {
  const sectionRef = useRef(null)
  const [titleVisible, setTitleVisible] = useState(false)
  
  const achievements = [
    {
      title: '5-Star Badge on HackerRank',
      description: 'Earned a 5-star badge in Java for consistent performance.',
      date: 'Jun\'25'
    },
    {
      title: '200+ Coding Problems Solved',
      description: 'Solved 200+ coding problems across HackerRank & Codechef, sharpening problem-solving skills.',
      date: 'Jan\'25'
    }
  ]
  
  // Viewport-based animation for heading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('achievements-header')) {
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
    
    const header = sectionRef.current?.querySelector('.achievements-header')
    if (header) observer.observe(header)
    
    return () => observer.disconnect()
  }, [])

  return (
    <div className="achievements" ref={sectionRef}>
      <div className={`achievements-header ${titleVisible ? 'visible' : ''}`}>
        <div className="achievements-title-wrapper">
          <h2>ACHIEVEMENTS</h2>
          <div className="achievements-underline" />
        </div>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h3>{achievement.title}</h3>
            <p className="achievement-desc">{achievement.description}</p>
            <p className="achievement-date">{achievement.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
