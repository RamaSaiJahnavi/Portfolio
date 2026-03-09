import { useEffect, useRef } from 'react'
import { 
  Code2, 
  Layers, 
  Wrench, 
  BookOpen, 
  BarChart3, 
  Lightbulb 
} from 'lucide-react'
import '../styles/Skills.css'

function Skills() {
  const skillsRef = useRef(null)

  useEffect(() => {
    // Viewport-based Intersection Observer with reset on exit
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element entered viewport - trigger animation
            requestAnimationFrame(() => {
              entry.target.classList.add('animate-in')
            })
          } else {
            // Element left viewport - reset animation for replay
            requestAnimationFrame(() => {
              entry.target.classList.remove('animate-in')
            })
          }
        })
      },
      {
        threshold: 0.15, // Trigger when 15% visible
        rootMargin: '0px 0px -100px 0px' // Start animating 100px before entering
      }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Skills organized by category
  const skillCategories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: Code2,
      color: '#c9a86c',
      skills: [
        { name: 'Python', level: 5, label: 'Advanced', description: 'Data structures, algorithms, and automation scripts' },
        { name: 'Java', level: 4, label: 'Advanced', description: 'OOP foundation with enterprise application experience' },
        { name: 'JavaScript', level: 4, label: 'Intermediate', description: 'ES6+, DOM manipulation, and interactive web development' },
        { name: 'HTML/CSS', level: 5, label: 'Advanced', description: 'Responsive design, animations, and modern CSS' },
        { name: 'SQL', level: 5, label: 'Advanced', description: 'Database design, complex queries, and optimization' },
        { name: 'C', level: 4, label: 'Intermediate', description: 'System programming and memory management' },
        { name: 'C++', level: 3, label: 'Intermediate', description: 'Object-oriented programming and STL usage' }
      ]
    },
    {
      id: 'frameworks',
      title: 'Frameworks & Libraries',
      icon: Layers,
      color: '#c9a86c',
      skills: [
        { name: 'React.js', level: 4, label: 'Intermediate', description: 'Component architecture, hooks, and state management' },
        { name: 'Spring Boot', level: 4, label: 'Intermediate', description: 'RESTful APIs, microservices, and backend development' },
        { name: 'Pandas', level: 4, label: 'Intermediate', description: 'Data manipulation, analysis, and preprocessing' },
        { name: 'NumPy', level: 4, label: 'Intermediate', description: 'Numerical computing and array operations' },
        { name: 'Matplotlib', level: 3, label: 'Intermediate', description: 'Data visualization and plotting' }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Platforms',
      icon: Wrench,
      color: '#c9a86c',
      skills: [
        { name: 'Power BI', level: 5, label: 'Advanced', description: 'Interactive dashboards and business intelligence' },
        { name: 'Excel', level: 5, label: 'Advanced', description: 'Advanced formulas, pivot tables, and data analysis' },
        { name: 'Git', level: 4, label: 'Intermediate', description: 'Version control and collaborative development' },
        { name: 'Figma', level: 3, label: 'Intermediate', description: 'UI/UX design and collaborative prototyping' }
      ]
    },
    {
      id: 'corecs',
      title: 'Core CS',
      icon: BookOpen,
      color: '#c9a86c',
      skills: [
        { name: 'Data Structures', level: 4, label: 'Advanced', description: 'Arrays, trees, graphs, and hash tables' },
        { name: 'Algorithms', level: 4, label: 'Advanced', description: 'Sorting, searching, and optimization techniques' },
        { name: 'OOPs', level: 5, label: 'Advanced', description: 'Encapsulation, inheritance, polymorphism, and patterns' },
        { name: 'DBMS', level: 4, label: 'Intermediate', description: 'Database modeling and transaction management' }
      ]
    },
    {
      id: 'analytics',
      title: 'Data & Analytics',
      icon: BarChart3,
      color: '#c9a86c',
      skills: [
        { name: 'Data Analysis', level: 5, label: 'Advanced', description: 'Statistical analysis, cleaning, and insight extraction' },
        { name: 'Machine Learning', level: 3, label: 'Beginner', description: 'Supervised learning, model training, and evaluation' }
      ]
    },
    {
      id: 'softskills',
      title: 'Soft Skills',
      icon: Lightbulb,
      color: '#c9a86c',
      skills: [
        { name: 'Problem-Solving', level: 5, label: 'Advanced', description: 'Analytical thinking and efficient solution design' },
        { name: 'Communication', level: 4, label: 'Advanced', description: 'Technical writing and presentation skills' },
        { name: 'Teamwork', level: 5, label: 'Advanced', description: 'Collaboration and team coordination' }
      ]
    }
  ]

  const renderDots = (level) => {
    return (
      <div className="skill-dots">
        {[...Array(5)].map((_, i) => (
          <span 
            key={i} 
            className={`skill-dot ${i < level ? 'filled' : ''}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="skills" id="skills" ref={skillsRef}>
      {/* Floating Particles Background */}
      <div className="particles-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>

      {/* Section Title */}
      <div className="skills-title">
        <h2>Skills</h2>
        <div className="skills-title-underline" />
      </div>

      {/* Skills Categories */}
      <div className="skills-categories-container">
        {skillCategories.map((category, catIndex) => (
          <div className="skill-category-section" key={category.id}>
            {/* Category Header */}
            <div className="category-section-header" style={{ '--category-color': category.color }}>
              <span className="category-section-icon">
                <category.icon size={24} strokeWidth={1.5} />
              </span>
              <h3 className="category-section-title">{category.title}</h3>
              <div className="category-section-line" />
            </div>
            
            {/* Skills Grid for this Category */}
            <div className="skills-grid">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  className="skill-card" 
                  key={skill.name}
                  style={{ '--category-color': category.color }}
                >
                  <div className="skill-card-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level-tag">{skill.label}</span>
                  </div>
                  {renderDots(skill.level)}
                  <div className="skill-description">
                    {skill.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
