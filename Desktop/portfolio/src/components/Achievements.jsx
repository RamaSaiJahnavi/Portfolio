import { useEffect, useRef, useState } from 'react'
import '../styles/Achievements.css'

function Achievements() {
  const sectionRef = useRef(null)
  const [titleVisible, setTitleVisible] = useState(false)
  const cardRefs = useRef([])
  
  // All achievements in descending order by date
  const achievements = [
    {
      title: 'Selected for the Final Round in Analytical Leaderboard',
      description: 'Qualified for the final round in Analytical Leaderboard competition.',
      date: 'Dec \'25',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="url(#trophyGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="trophyGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0f5"/>
              <stop offset="0.5" stopColor="#c9a86c"/>
              <stop offset="1" stopColor="#f5f0f5"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: '4 Star Rating in C++ and C',
      description: 'Earned 4-star rating in C++ and C programming languages on HackerRank.',
      date: 'Aug \'25',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="url(#starGradient1)" strokeWidth="2"/>
          <path d="M12 6L13.5 9.5L17.5 10L14.5 13L15 17L12 15L9 17L9.5 13L6.5 10L10.5 9.5L12 6Z" fill="url(#starGradient1)"/>
          <defs>
            <linearGradient id="starGradient1" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0f5"/>
              <stop offset="0.5" stopColor="#c9a86c"/>
              <stop offset="1" stopColor="#f5f0f5"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: '5-Star Badge on HackerRank',
      description: 'Earned a 5-star badge in Java for consistent performance.',
      date: 'Jun \'25',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="url(#badgeGradient)" strokeWidth="2"/>
          <path d="M12 6L13.5 9.5L17.5 10L14.5 13L15 17L12 15L9 17L9.5 13L6.5 10L10.5 9.5L12 6Z" fill="url(#badgeGradient)"/>
          <defs>
            <linearGradient id="badgeGradient" x1="3" y1="3" x2="21" y2="21" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0f5"/>
              <stop offset="0.5" stopColor="#c9a86c"/>
              <stop offset="1" stopColor="#f5f0f5"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: '200+ Coding Problems Solved',
      description: 'Solved 200+ coding problems across HackerRank & Codechef, sharpening problem-solving skills.',
      date: 'Jan \'25',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="url(#codeGradient)" strokeWidth="2"/>
          <path d="M9 9L15 15M15 9L9 15" stroke="url(#codeGradient)" strokeWidth="2" strokeLinecap="round"/>
          <defs>
            <linearGradient id="codeGradient" x1="4" y1="4" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0f5"/>
              <stop offset="0.5" stopColor="#c9a86c"/>
              <stop offset="1" stopColor="#f5f0f5"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: 'Participated in Smart India Hackathon (36 hours)',
      description: 'Participated in Smart India Hackathon, a 36-hour national level hackathon.',
      date: 'Sep \'23',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L14.5 7H20L16 12L18 18L12 15L6 18L8 12L4 7H9.5L12 2Z" stroke="url(#hackathonGradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="hackathonGradient" x1="4" y1="2" x2="20" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0f5"/>
              <stop offset="0.5" stopColor="#c9a86c"/>
              <stop offset="1" stopColor="#f5f0f5"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      title: 'Scored 96 Percentile in JEE Main',
      description: 'Achieved 96 percentile in JEE Main examination, demonstrating strong analytical skills.',
      date: 'Jan \'23',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="url(#targetGradient)" strokeWidth="2"/>
          <circle cx="12" cy="12" r="6" stroke="url(#targetGradient)" strokeWidth="2"/>
          <circle cx="12" cy="12" r="2" fill="url(#targetGradient)"/>
          <defs>
            <linearGradient id="targetGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#f5f0f5"/>
              <stop offset="0.5" stopColor="#c9a86c"/>
              <stop offset="1" stopColor="#f5f0f5"/>
            </linearGradient>
          </defs>
        </svg>
      )
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
  
  // Viewport-based animation for achievement cards (alternating slide-in)
  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          } else {
            entry.target.classList.remove('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    cardRefs.current.forEach((card) => {
      if (card) cardObserver.observe(card)
    })
    
    return () => cardObserver.disconnect()
  }, [achievements])

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
          <div 
            key={index} 
            className={`achievement-card ${index % 2 === 0 ? 'slide-left' : 'slide-right'}`}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <div className="achievement-content">
              <div className="achievement-header">
                <span className="achievement-icon">{achievement.icon}</span>
                <h3>{achievement.title}</h3>
              </div>
              <p className="achievement-desc">{achievement.description}</p>
              <span className="achievement-date">{achievement.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements
