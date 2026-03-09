import '../styles/About.css'

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <p className="about-intro">
          Passionate Computer Science Engineering student at Lovely Professional University with expertise in Data Analytics, 
          Full Stack Development, and Machine Learning. Experienced in building interactive dashboards using Power BI, 
          developing responsive web applications with React and Spring Boot, and implementing ML algorithms for real-world 
          problem-solving. Dedicated to transforming complex data into actionable insights and creating innovative solutions 
          that drive business growth.
        </p>
        
        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">📊</div>
            <h3>Data Analytics & Power BI</h3>
            <p>Creating interactive dashboards and visualizations to transform raw data into meaningful business insights using Power BI, SQL, and advanced analytics.</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">💻</div>
            <h3>Full Stack / React Development</h3>
            <p>Building responsive, scalable web applications using modern technologies like React, Spring Boot, MySQL, and RESTful APIs with clean architecture.</p>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-icon">🤖</div>
            <h3>Machine Learning & AI Projects</h3>
            <p>Developing intelligent systems using Python, Scikit-learn, and deep learning frameworks to solve complex problems through predictive analytics.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
