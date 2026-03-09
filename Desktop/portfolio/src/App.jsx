import { useState, useEffect } from 'react'
import './styles/App.css'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Chatbot from './components/Chatbot'
import FeedbackBox from './components/FeedbackBox'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'training', 'certifications', 'achievements', 'education']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setIsScrolled(window.scrollY > 50)
    }

    // Enhanced smooth scroll handler for anchor links with proper offset
    const handleAnchorClick = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      
      if (targetElement) {
        // Calculate navbar height dynamically
        const navbar = document.querySelector('.navbar')
        const navbarHeight = navbar ? navbar.offsetHeight : 65
        
        // Get element position relative to viewport
        const elementPosition = targetElement.getBoundingClientRect().top
        
        // Calculate final position with offset
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight
        
        // Smooth scroll to position
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        
        // Close mobile menu after clicking
        setIsMobileMenuOpen(false)
        setActiveSection(targetId)
      }
    }

    // Attach click handlers to all navigation links
    const navLinks = document.querySelectorAll('.nav-links a')
    navLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick)
    })

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll)
    
    // Click outside to close mobile menu
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.navbar')) {
        setIsMobileMenuOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchstart', handleClickOutside)
    
    // Cleanup event listeners
    return () => {
      window.removeEventListener('scroll', handleScroll)
      navLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick)
      })
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Remove the handleNavClick function as it's no longer needed
  // Navigation is now handled in the useEffect anchor click handler

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'training', label: 'Training' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'education', label: 'Education' }
  ]

  return (
    <div className="app">
      {/* Overlay for mobile menu */}
      <div 
        className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      ></div>
      
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-brand">Portfolio</div>
        
        {/* Hamburger Menu Icon */}
        <button 
          className="hamburger-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Toggle menu'}
        >
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`} 
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="training"><Training /></section>
        <section id="certifications"><Certifications /></section>
        <section id="achievements"><Achievements /></section>
        <section id="education"><Education /></section>
      </main>
      
      <footer>
        <p>&copy; 2026 Pottapogula Rama Sai Jahnavi. All rights reserved.</p>
      </footer>
      
      <Chatbot />
      <FeedbackBox />
    </div>
  )
}

export default App
