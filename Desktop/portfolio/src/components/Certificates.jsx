import { useEffect, useRef, useState } from 'react'
import '../styles/Certificates.css'

function Certificates() {
  const sectionRef = useRef(null)
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [titleVisible, setTitleVisible] = useState(false)
  const contentRefs = useRef({})

  // Helper function to format date like "May'24" instead of "May 2024"
  const formatDate = (dateString) => {
    const [month, year] = dateString.split(' ')
    const shortYear = year.slice(-2)
    return `${month}'${shortYear}`
  }

  // Certificate data organized by category
  const certificateCategories = [
    {
     id: 'coursera-networks',
     title: 'Coursera – Computer Networks',
     count: 5,
      certificates: [
        {
         id: 1,
         title: 'Bits and Bytes',
         icon: '💻',
         link: 'https://drive.google.com/file/d/1nGDVBEwLNK1YMomcNwGiXgFacLzB46A3/view?usp=sharing',
         startDate: 'Jan 2024',
         completionDate: 'Feb 2024'
        },
        {
         id: 2,
         title: 'Fundamentals of Networking Communication',
         icon: '🌐',
         link: 'https://drive.google.com/file/d/1QrneTgFlJlvBQa58JNXUfjh9Eg-bujLq/view?usp=sharing',
         startDate: 'Feb 2024',
         completionDate: 'Mar 2024'
        },
        {
         id: 3,
         title: 'Packet Switching',
         icon: '📦',
         link: 'https://drive.google.com/file/d/1jY4-xyLABZx1_l9jEFliNZjZPVXTm_NN/view?usp=sharing',
         startDate: 'Mar 2024',
         completionDate: 'Apr 2024'
        },
        {
         id: 4,
         title: 'Peer to Peer Networks',
         icon: '🔗',
         link: 'https://drive.google.com/file/d/1B7thKA4iwFlxyKHmgxaYMEz2g-I4z5pM/view?usp=sharing',
         startDate: 'Apr 2024',
         completionDate: 'May 2024'
        },
        {
         id: 5,
         title: 'TCP/IP Protocol Suite',
         icon: '🛜',
         link: 'https://drive.google.com/file/d/1IdUc8kGA2mijKWry2XU9kdtQz9YH1Vgt/view?usp=sharing',
         startDate: 'May 2024',
         completionDate: 'Jun 2024'
        }
      ]
    },
    {
     id: 'coursera-design',
     title: 'Coursera – Computer Organization and Design',
     count: 2,
      certificates: [
        {
         id: 1,
         title: 'Digital Systems',
          icon: '💻',
          link: 'https://drive.google.com/file/d/1p_uaAvE5h5jx7roEiEgcMKXfR7Ce9KV4/view?usp=sharing',
          startDate: 'Jun 2024',
          completionDate: 'Jul 2024'
        },
        {
         id: 2,
         title: 'Hardware and Operating System',
          icon: '⚙️',
          link: 'https://drive.google.com/file/d/1ooWIH8dl9AkBXgNz3Mn4WEHfP1TrgBUa/view?usp=sharing',
          startDate: 'Jul 2024',
          completionDate: 'Aug 2024'
        }
      ]
    },
    {
     id: 'infosys',
     title: 'Infosys Certifications',
     count: 4,
      certificates: [
        {
         id: 1,
         title: 'Build Generative AI Apps with No-Code Tools',
          icon: '🤖',
          link: 'https://drive.google.com/file/d/1UjrlG7gzfuOwICeQrgsoP19cY7lnheiH/view?usp=sharing',
          startDate: 'Aug 2024',
          completionDate: 'Sep 2024'
        },
        {
         id: 2,
         title: 'ChatGPT-4 Prompt Engineering',
          icon: '💬',
          link: 'https://drive.google.com/file/d/18CNgwSxSU-Ohd4FZAcOEYhVVQHhYbOGt/view?usp=sharing',
          startDate: 'Sep 2024',
          completionDate: 'Oct 2024'
        },
        {
         id: 3,
         title: 'Computational Theory & Finite Automata',
          icon: '🧮',
          link: 'https://drive.google.com/file/d/1CT0Ief_3Scpv_Jxod6Bsrz6vsIcTK0qW/view?usp=sharing',
          startDate: 'Oct 2024',
          completionDate: 'Nov 2024'
        },
        {
         id: 4,
         title: 'Master Generative AI & AI Tools',
          icon: '✨',
          link: 'https://drive.google.com/file/d/10eTkHFAq-fZCd_KMBkjbPrJFOLasM5fy/view?usp=sharing',
          startDate: 'Nov 2024',
          completionDate: 'Dec 2024'
        }
      ]
    },
    {
     id: 'python-cse',
     title: 'Python Certification – CSE Patasala',
     count: 1,
      certificates: [
        {
         id: 1,
         title: 'Advanced Python Programming',
          icon: '🐍',
          link: 'https://drive.google.com/file/d/1jXzm963WI8uqGn28qlMYH1OehSOOGCpx/view?usp=sharing',
          startDate: 'Mar 2024',
          completionDate: 'Apr 2024'
        }
      ]
    },
    {
     id: 'cloud-nptel',
     title: 'Cloud Computing – NPTEL',
     count: 1,
      certificates: [
        {
         id: 1,
         title: 'Cloud Computing Fundamentals',
          icon: '☁️',
          link: 'https://drive.google.com/file/d/1ERpDgUdSa-wovRjHwwkLrdlVJpw2v0wS/view?usp=sharing',
          startDate: 'Apr 2024',
          completionDate: 'May 2024'
        }
      ]
    },
    {
     id: 'digital-udemy',
     title: 'Digital Marketing – Udemy',
     count: 1,
      certificates: [
        {
         id: 1,
         title: 'Complete Digital Marketing Course',
          icon: '📱',
          link: 'https://drive.google.com/file/d/1DN_MSGJw7Lt6lkUx0X2rj1wSZD5E2WJH/view?usp=sharing',
          startDate: 'May 2024',
          completionDate: 'Jun 2024'
        }
      ]
    },
    {
     id: 'css-udemy',
     title: 'CSS Full Course – Udemy',
     count: 1,
      certificates: [
        {
         id: 1,
         title: 'CSS - The Complete Guide',
          icon: '🎨',
          link: 'https://drive.google.com/file/d/1opy8Q1XxT1md-FnqgSqYXQ2BLqKM_48d/view?usp=sharing',
          startDate: 'Jun 2024',
          completionDate: 'Jul 2024'
        }
      ]
    },
    {
     id: 'freecodecamp',
     title: 'FreeCodeCamp Certificate',
     count: 1,
      certificates: [
        {
         id: 1,
         title: 'Responsive Web Design Certification',
          icon: '🏆',
          link: 'https://drive.google.com/file/d/1yiFORPU2UmwYKGy5iJR28azK5ZShYaQe/view?usp=sharing',
          startDate: 'Feb 2024',
          completionDate: 'Mar 2024'
        }
      ]
    },
    {
     id: 'summer-training',
     title: 'Summer Training Certificate',
     count: 1,
      certificates: [
        {
         id: 1,
         title: 'From Data to Decisions: Data Science',
          icon: '📊',
          link: 'https://drive.google.com/file/d/1N8lHIPzpeKUJwBH_rmJPUuI6uHyxbCUs/view?usp=sharing',
          startDate: 'May 2024',
          completionDate: 'Jun 2024'
        }
      ]
    }
  ]

  // Viewport-based animation for heading
  useEffect(() => {
   const observer= new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.classList.contains('certificates-header')) {
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
    
   const header = sectionRef.current?.querySelector('.certificates-header')
    if (header) observer.observe(header)
    
    return () => observer.disconnect()
  }, [])

  const toggleCategory = (categoryId) => {
   setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

 return (
    <section className="certificates-section" id="certificates" ref={sectionRef}>
      {/* Animated Gradient Blobs */}
      <div className="gradient-blob blob-1" />
      <div className="gradient-blob blob-2" />
      <div className="gradient-blob blob-3" />
      
      {/* Grid Dot Pattern */}
      <div className="grid-pattern" />

      {/* Section Header */}
      <div className={`certificates-header ${titleVisible ? 'visible' : ''}`}>
        <div className="certificates-title-wrapper">
          <h2 className="certificates-title">CERTIFICATES</h2>
          <div className="certificates-underline" />
        </div>
        <p className="certificates-subtitle">Professional certifications and achievements</p>
      </div>

      {/* Certificate Categories Accordion */}
      <div className="certificates-container">
        {certificateCategories.map((category, catIndex) => (
          <div 
            key={category.id} 
            className={`certificate-category ${expandedCategory === category.id ? 'expanded' : ''}`}
          >
            {/* Category Header (Clickable) */}
            <div 
              className="category-header"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="category-header-content">
                <span className="category-icon">📜</span>
                <h3 className="category-title">{category.title}</h3>
                <span className="certificate-count">{category.count} Certificate{category.count > 1 ? 's' : ''}</span>
              </div>
              <div className={`category-arrow ${expandedCategory === category.id ? 'rotated' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Expandable Content */}
            <div 
              ref={el => contentRefs.current[category.id] = el}
              className="category-content"
              style={{
                maxHeight: expandedCategory === category.id 
                  ? `${contentRefs.current[category.id]?.scrollHeight || 0}px` 
                  : '0px'
              }}
            >
              <div className="certificates-grid">
                {category.certificates.map((cert, certIndex) => (
                  <div 
                    key={cert.id} 
                    className="certificate-card"
                    style={{
                      animationDelay: `${certIndex * 0.1}s`
                    }}
                  >
                    <div className="certificate-icon">{cert.icon}</div>
                    <h4 className="certificate-title">{cert.title}</h4>
                    {cert.startDate && cert.completionDate && (
                      <div className="certificate-dates">
                        <span className="date-label">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="url(#calendarGradient)" strokeWidth="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke="url(#calendarGradient)" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke="url(#calendarGradient)" strokeWidth="2" strokeLinecap="round"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke="url(#calendarGradient)" strokeWidth="2"/>
                            <defs>
                              <linearGradient id="calendarGradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#f5f0f5"/>
                                <stop offset="0.5" stopColor="#c9a86c"/>
                                <stop offset="1" stopColor="#f5f0f5"/>
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <span className="date-text">{formatDate(cert.startDate)} - {formatDate(cert.completionDate)}</span>
                      </div>
                    )}
                    <a 
                      href={cert.link}
                      className="view-certificate-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="btn-text">View Certificate</span>
                      <span className="btn-icon">→</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Inline Styles */}
      <style>{`
        @keyframes certificatesGradient {
          0%, 100% { background-position: 0% 50%; }
         50% { background-position: 100% 50%; }
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
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
         50% { transform: scale(1.05); }
        }
      `}</style>
    </section>
  )
}

export default Certificates
