import { useState } from 'react'
import '../styles/FeedbackBox.css'

function FeedbackBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'feedback',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Feedback submitted:', formData)
    setSubmitted(true)
    
    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        category: 'feedback',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="feedback-container">
      {/* Feedback Button */}
      <button 
        className={`feedback-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Send Feedback or Requirements"
      >
        {isOpen ? '✕' : '💡'}
      </button>

      {/* Feedback Form Window */}
      {isOpen && (
        <div className="feedback-window">
          <div className="feedback-header">
            <h4>💬 Share Your Thoughts</h4>
            <p>We'd love to hear your feedback or requirements!</p>
          </div>

          {submitted ? (
            <div className="feedback-success">
              <div className="success-icon">✓</div>
              <h5>Thank You!</h5>
              <p>Your message has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="category">Category *</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="feedback">💡 General Feedback</option>
                  <option value="suggestion">💭 Suggestion</option>
                  <option value="requirement">📋 Project Requirement</option>
                  <option value="collaboration">🤝 Collaboration Opportunity</option>
                  <option value="bug">🐛 Report an Issue</option>
                  <option value="other">📌 Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Share your thoughts, ideas, or requirements..."
                  rows="4"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message 🚀
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  )
}

export default FeedbackBox
