import '../styles/Certifications.css'

function Certifications() {
  const certifications = [
    {
      title: 'From Data to Decisions: Hands-on Approach to Data Science',
      issuer: 'LPU',
      date: 'Jul\'25'
    },
    {
      title: 'Computer Networks',
      issuer: 'Coursera',
      date: 'Apr\'25'
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'Oct\'23'
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
