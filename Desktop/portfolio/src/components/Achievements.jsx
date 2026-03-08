import '../styles/Achievements.css'

function Achievements() {
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

  return (
    <div className="achievements">
      <h2>Achievements</h2>
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
