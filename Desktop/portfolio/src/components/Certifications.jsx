import '../styles/Certifications.css'

function Certifications() {
  const certifications = [
    {
      title: 'From Data to Decisions: Hands-on Approach to Data Science',
      issuer: 'LPU',
      date: 'Jul\'25',
      link: 'https://drive.google.com/file/d/1N8lHIPzpeKUJwBH_rmJPUuI6uHyxbCUs/view'
    },
    {
      title: 'Computer Networks',
      issuer: 'Coursera',
      date: 'Apr\'25',
      link: '#'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Oct\'23',
      link: '#'
    }
  ]

  return (
    <div className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="certification-card">
            <h3>{cert.title}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            {cert.link && cert.link !== '#' && (
              <a 
                href={cert.link} 
                className="cert-view-link" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="link-text">View Certificate</span>
                <span className="link-icon">→</span>
                <span className="link-shimmer"></span>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
