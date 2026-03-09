import { useEffect, useRef, useState, useCallback } from 'react'
import '../styles/Projects.css'

function Projects() {
  const sectionRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [titleVisible, setTitleVisible] = useState(false)
  const cardRefs = useRef({})

  const filters = ['All', 'Web Dev', 'Data', 'ML']

  const projects = [
    {
      id: 1,
      title: 'Metro Booking Service',
      tag: 'Spring Boot',
      category: 'Web Dev',
      accentColor: '#f59e0b',
      duration: "Feb'26 – Present",
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80',
      description: 'A secure metro ticketing platform with JWT authentication, route optimization using graph algorithms, and QR-enabled digital booking.',
      tools: ['Spring Boot', 'MySQL', 'JWT', 'REST API', 'React'],
      link: 'https://metro-service-booking-j8gg.vercel.app/login'
    },
    {
      id: 2,
      title: 'Obesity Analysis Dashboard',
      tag: 'Power BI Project',
      category: 'Data',
      accentColor: '#8b5cf6',
      duration: "Nov'25 – Dec'25",
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      description: 'Interactive Power BI dashboard analyzing obesity trends with dynamic visualizations and demographic insights.',
      tools: ['Power BI', 'Power Query', 'DAX', 'Excel'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiYjY3OGQzZGMtZWI3ZS00YTAxLWJkMGEtNjZkODJlODQyZTEyIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D'
    },
    {
      id: 3,
      title: 'Health & Lifestyle Analytics',
      tag: 'Machine Learning',
      category: 'ML',
      accentColor: '#14b8a6',
      duration: "Nov'25 – Dec'25",
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      description: 'ML-based health prediction system using multiple algorithms for BMI and stress analysis with clustering techniques.',
      tools: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
      link: 'https://drive.google.com/file/d/14uNGYTTWWWQ3VuDUQExgu4K-l4IOMROT/view?usp=sharing'
    },
    {
      id: 4,
      title: 'Sales Performance Dashboard',
      tag: 'Microsoft Excel',
      category: 'Data',
      accentColor: '#f43f5e',
      duration: "Apr'25 – May'25",
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      description: 'Comprehensive Excel dashboard for sales metrics tracking with Pivot Tables, Charts, and interactive Slicers.',
      tools: ['Excel', 'Pivot Tables', 'Charts', 'VBA'],
      link: 'https://1drv.ms/x/c/4ded666c06c78e3a/IQDSCrG1KLg7TJ-PXrjFqObJAYWbZgD56VTb2poB01qIBq8?e=UlrDEq'
    },
    {
      id: 5,
      title: 'Employee Management System',
      tag: 'Spring Boot',
      category: 'Web Dev',
      accentColor: '#3b82f6',
      duration: "Jan'26 – Feb'26",
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
      description: 'Full-stack employee management solution with CRUD operations, role-based access control, and real-time data handling.',
      tools: ['Spring Boot', 'MySQL', 'Spring Security', 'Thymeleaf', 'Bootstrap'],
      link: 'https://employee-management-system-one-coral.vercel.app/'
    },
    {
      id: 6,
      title: 'Anime Recommendation System',
      tag: 'Power BI Project',
      category: 'Data',
      accentColor: '#ec4899',
      duration: "Dec'25 – Jan'26",
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf3483?w=600&q=80',
      description: 'Interactive Anime Recommendation System using SQL, Python, and Power BI to analyze rating patterns, genre trends, and user preferences for data-driven recommendations.',
      tools: ['Power BI', 'SQL', 'Python', 'DAX', 'Data Modeling'],
      link: 'https://app.powerbi.com/view?r=eyJrIjoiNzM3Zjk4OTAtNzljZi00MGQ1LTk0ZjYtNzllYjhiOGM0MjkzIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D'
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  // 3D Tilt Effect Handler
  const handleMouseMove = useCallback((e, cardId) => {
    const card = cardRefs.current[cardId]
    if (!card) return

    const rect = card.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    const rotateX = (mouseY / (rect.height / 2)) * -8
    const rotateY = (mouseX / (rect.width / 2)) * 8
    
    const specularX = ((e.clientX - rect.left) / rect.width) * 100
    const specularY = ((e.clientY - rect.top) / rect.height) * 100
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    card.style.setProperty('--specular-x', `${specularX}%`)
    card.style.setProperty('--specular-y', `${specularY}%`)
    
    // Dynamic shadow based on tilt
    const shadowX = rotateY * 0.5
    const shadowY = rotateX * -0.5
    card.style.boxShadow = `${shadowX}px ${shadowY + 20}px 40px rgba(0,0,0,0.4), ${shadowX * 0.5}px ${shadowY * 0.5 + 10}px 20px rgba(0,0,0,0.3)`
  }, [])

  const handleMouseLeave = useCallback((cardId) => {
    const card = cardRefs.current[cardId]
    if (!card) return
    
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2)'
    card.style.setProperty('--specular-x', '50%')
    card.style.setProperty('--specular-y', '50%')
  }, [])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('projects-header')) {
            setTitleVisible(entry.isIntersecting)
          } else {
            const cardId = parseInt(entry.target.dataset.cardId)
            const index = parseInt(entry.target.dataset.index)
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards(prev => new Set([...prev, cardId]))
              }, index * 150)
            } else {
              // Remove from visible cards when scrolling out
              setVisibleCards(prev => {
                const newSet = new Set(prev)
                newSet.delete(cardId)
                return newSet
              })
            }
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const header = sectionRef.current?.querySelector('.projects-header')
    if (header) observer.observe(header)

    const cards = sectionRef.current?.querySelectorAll('.project-card')
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [filteredProjects])

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
    setVisibleCards(new Set())
  }

  const getSlideDirection = (index) => {
    return index % 2 === 0 ? 'slide-left' : 'slide-right'
  }

  return (
    <section className="projects-section" id="projects" ref={sectionRef}>
      {/* Animated Gradient Blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div className="gradient-blob blob-3" />
      
      {/* Grid Dot Pattern */}
      <div className="grid-pattern" />

      {/* Section Header */}
      <div className={`projects-header ${titleVisible ? 'visible' : ''}`}>
        <div className="projects-title-wrapper">
          <h2 className="projects-title">PROJECTS</h2>
          <div className="projects-underline" />
        </div>
        <p className="projects-subtitle">A collection of my work showcasing real-world solutions</p>
      </div>

      {/* Filter Bar */}
      <div className="projects-filter">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={`projects-grid ${filteredProjects.length === 0 ? 'empty' : ''}`}>
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => { cardRefs.current[project.id] = el }}
            className={`project-card ${visibleCards.has(project.id) ? 'visible' : ''} ${getSlideDirection(index)}`}
            data-card-id={project.id}
            data-index={index}
            style={{ 
              '--accent-color': project.accentColor,
              '--specular-x': '50%',
              '--specular-y': '50%'
            }}
            onMouseMove={(e) => handleMouseMove(e, project.id)}
            onMouseLeave={() => handleMouseLeave(project.id)}
          >
            {/* Specular Highlight */}
            <div className="specular-highlight" />
            
            {/* Card Image */}
            <div className="card-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title}
                className="card-image"
                loading="lazy"
              />
              <div className="card-image-overlay" />
            </div>
            
            {/* Card Content */}
            <div className="card-content">
              {/* Card Header */}
              <div className="card-header-row">
                <span 
                  className="tech-badge"
                  style={{ 
                    borderColor: project.accentColor,
                    color: project.accentColor,
                    boxShadow: `0 0 15px ${project.accentColor}30`
                  }}
                >
                  {project.tag}
                </span>
                <span className="project-date">{project.duration}</span>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tools">
                {project.tools.map((tool, i) => (
                  <span key={i} className="tool-badge">{tool}</span>
                ))}
              </div>

              {/* Separator */}
              <div className="link-separator" style={{ background: `${project.accentColor}30` }} />

              {/* View Project Link */}
              <a 
                href={project.link} 
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: project.accentColor }}
              >
                <span className="link-text">View Project</span>
                <span className="link-arrow">→</span>
              </a>
            </div>

            {/* Accent Border */}
            <div 
              className="card-accent-border" 
              style={{ background: project.accentColor }}
            />
          </div>
        ))}
      </div>

      {/* Mobile Scroll Hint */}
      <div className="scroll-hint">
        <span>Swipe to explore</span>
        <div className="scroll-line" />
      </div>

      {/* Inline Styles for 3D Effects */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap');
        
        .projects-section {
          position: relative;
          padding: 6rem 2rem;
          min-height: 100vh;
          background: linear-gradient(
            90deg,
            #3C3C3C,
            #2E251A,
            #450C1C,
            #4A0754,
            #5D1A2E,
            #4A0754,
            #450C1C,
            #2E251A,
            #3C3C3C
          );
          background-size: 400% 100%;
          animation: projectsGradient 20s ease-in-out infinite;
          overflow: hidden;
        }
        
        @keyframes projectsGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        /* Gradient Blobs */
        .gradient-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          pointer-events: none;
          z-index: 0;
        }
        
        .blob-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #8b5cf6 0%, transparent 70%);
          top: -200px;
          left: -100px;
          animation: blobFloat1 25s ease-in-out infinite;
        }
        
        .blob-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #f59e0b 0%, transparent 70%);
          bottom: -150px;
          right: -100px;
          animation: blobFloat2 30s ease-in-out infinite;
        }
        
        .blob-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #14b8a6 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: blobFloat3 20s ease-in-out infinite;
        }
        
        @keyframes blobFloat1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 50px) scale(1.1); }
        }
        
        @keyframes blobFloat2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-80px, -60px) scale(1.15); }
        }
        
        @keyframes blobFloat3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-40%, -60%) scale(1.2); }
        }
        
        /* Grid Pattern */
        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
          z-index: 0;
        }
        
        /* Header Styles */
        .projects-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .projects-header.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .projects-title-wrapper {
          display: inline-block;
          margin-bottom: 1rem;
        }
        
        .projects-title {
          font-family: 'Algerian', 'Times New Roman', serif;
          font-size: 3.5rem;
          font-weight: 600;
          color: #f5f0f5;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin: 0;
        }
        
        .projects-underline {
          height: 3px;
          background: linear-gradient(90deg, transparent, #c9a86c, transparent);
          margin-top: 0.75rem;
          width: 0;
          transition: width 0.8s ease 0.3s;
        }
        
        .projects-header.visible .projects-underline {
          width: 100%;
        }
        
        .projects-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 300;
          color: rgba(212, 200, 224, 0.7);
          letter-spacing: 2px;
          margin: 0.5rem 0 1rem;
        }
        
        .project-count-badge {
          display: inline-block;
          padding: 0.4rem 1rem;
          background: rgba(201, 168, 108, 0.1);
          border: 1px solid rgba(201, 168, 108, 0.3);
          border-radius: 20px;
          font-size: 0.85rem;
          color: #c9a86c;
          letter-spacing: 1px;
          box-shadow: 0 0 20px rgba(201, 168, 108, 0.15);
        }
        
        /* Filter Bar */
        .projects-filter {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
          flex-wrap: wrap;
        }
        
        .filter-btn {
          padding: 0.6rem 1.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 25px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .filter-btn:hover {
          border-color: rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.9);
        }
        
        .filter-btn.active {
          border-color: #c9a86c;
          color: #c9a86c;
          box-shadow: 0 0 20px rgba(201, 168, 108, 0.2);
        }
        
        .filter-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a86c, transparent);
          box-shadow: 0 0 10px #c9a86c;
        }
        
        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 1.5rem;
            padding: 1rem;
            -webkit-overflow-scrolling: touch;
          }
          
          .projects-grid::-webkit-scrollbar {
            display: none;
          }
        }
        
        /* Project Card */
        .project-card {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 10px 20px rgba(0,0,0,0.2);
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          opacity: 0;
          will-change: transform, opacity;
        }
        
        .project-card.visible {
          opacity: 1;
        }
        
        .project-card.slide-left {
          transform: translateX(-80px);
        }
        
        .project-card.slide-right {
          transform: translateX(80px);
        }
        
        .project-card.visible.slide-left,
        .project-card.visible.slide-right {
          transform: translateX(0);
          transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      opacity 0.7s ease;
        }
        
        @media (max-width: 1200px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          
          .projects-title {
            font-size: 2.8rem;
          }
        }
        
        @media (max-width: 992px) {
          .projects-section {
            padding: 4rem 1.5rem;
          }
          
          .projects-title {
            font-size: 2.4rem;
          }
          
          .projects-subtitle {
            font-size: 1.1rem;
          }
          
          .filter-btn {
            padding: 0.5rem 1.2rem;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 1rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            gap: 1.2rem;
            padding: 1rem 0.5rem;
            -webkit-overflow-scrolling: touch;
          }
          
          .projects-grid::-webkit-scrollbar {
            display: none;
          }
          
          .project-card {
            min-width: 300px;
            max-width: 340px;
            scroll-snap-align: center;
          }
          
          .project-card.slide-left,
          .project-card.slide-right {
            transform: translateX(0) translateY(40px);
          }
          
          .project-card.visible.slide-left,
          .project-card.visible.slide-right {
            transform: translateY(0);
          }
          
          .projects-title {
            font-size: 2rem;
            letter-spacing: 3px;
          }
          
          .projects-filter {
            gap: 0.6rem;
            margin-bottom: 2rem;
          }
          
          .filter-btn {
            padding: 0.45rem 1rem;
            font-size: 0.8rem;
          }
          
          .card-image-wrapper {
            height: 160px;
          }
          
          .card-content {
            padding: 1.2rem;
          }
          
          .project-title {
            font-size: 1.2rem;
          }
          
          .project-description {
            font-size: 0.9rem;
          }
          
          .tool-badge {
            font-size: 0.7rem;
            padding: 0.25rem 0.6rem;
          }
        }
        
        @media (max-width: 480px) {
          .projects-section {
            padding: 2.5rem 0.8rem;
          }
          
          .projects-title {
            font-size: 1.7rem;
            letter-spacing: 2px;
          }
          
          .projects-subtitle {
            font-size: 1rem;
          }
          
          .project-count-badge {
            font-size: 0.75rem;
            padding: 0.3rem 0.8rem;
          }
          
          .project-card {
            min-width: 280px;
          }
          
          .card-image-wrapper {
            height: 140px;
          }
          
          .tech-badge {
            font-size: 0.65rem;
            padding: 0.25rem 0.6rem;
          }
          
          .project-date {
            font-size: 0.7rem;
          }
          
          .project-title {
            font-size: 1.1rem;
          }
        }
        
        @media (max-width: 360px) {
          .projects-title {
            font-size: 1.5rem;
          }
          
          .project-card {
            min-width: 260px;
          }
        }
        
        /* Specular Highlight */
        .specular-highlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at var(--specular-x, 50%) var(--specular-y, 50%),
            rgba(255, 255, 255, 0.15) 0%,
            transparent 50%
          );
          pointer-events: none;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .project-card:hover .specular-highlight {
          opacity: 1;
        }
        
        /* Accent Border */
        .card-accent-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          z-index: 5;
        }
        
        /* Card Image */
        .card-image-wrapper {
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        
        .project-card:hover .card-image {
          transform: scale(1.07);
        }
        
        .card-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            transparent 50%,
            rgba(30, 20, 35, 0.8) 100%
          );
        }
        
        /* Card Content */
        .card-content {
          padding: 1.5rem;
          position: relative;
          z-index: 3;
        }
        
        .card-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .tech-badge {
          padding: 0.35rem 0.9rem;
          border: 1px solid;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        
        .project-date {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          font-style: italic;
        }
        
        .project-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          font-weight: 600;
          color: #f5f0f5;
          margin: 0 0 1rem 0;
          line-height: 1.3;
        }
        
        .project-description {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.75);
          line-height: 1.6;
          margin: 0 0 1rem 0;
        }
        
        .project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        
        .tool-badge {
          padding: 0.3rem 0.7rem;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 15px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }
        
        .tool-badge:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.25);
          color: rgba(255, 255, 255, 0.9);
        }
        
        .link-separator {
          height: 1px;
          margin-bottom: 1rem;
        }
        
        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .project-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        
        .project-link:hover::after {
          width: 100%;
        }
        
        .project-link:hover {
          text-shadow: 0 0 20px currentColor;
        }
        
        .link-arrow {
          transition: transform 0.3s ease;
        }
        
        .project-link:hover .link-arrow {
          transform: translateX(5px);
        }
        
        /* Scroll Hint */
        .scroll-hint {
          display: none;
          text-align: center;
          margin-top: 2rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
        }
        
        @media (max-width: 768px) {
          .scroll-hint {
            display: block;
          }
        }
        
        .scroll-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent);
          margin: 0.5rem auto 0;
        }
      `}</style>
    </section>
  )
}

export default Projects
