import { useState, useRef, useEffect } from 'react'
import '../styles/Chatbot.css'

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! I\'m Jahnavi\'s AI assistant. How can I help you today?' }
  ])
  const [inputText, setInputText] = useState('')
  const [suggestions] = useState([
    'Tell me about your projects',
    'What are your skills?',
    'How can I contact you?',
    'What is your education background?'
  ])
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputText.trim()) return

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: inputText }])
    
    // Generate bot response
    const userMessage = inputText.toLowerCase()
    let botResponse = getBotResponse(userMessage)
    
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }])
    }, 500)

    setInputText('')
  }

  const handleSuggestionClick = (suggestion) => {
    setMessages(prev => [...prev, { type: 'user', text: suggestion }])
    
    setTimeout(() => {
      const response = getBotResponse(suggestion.toLowerCase())
      setMessages(prev => [...prev, { type: 'bot', text: response }])
    }, 500)
  }

  const getBotResponse = (input) => {
    if (input.includes('project')) {
      return 'I have worked on several projects including:\n• Smart Traffic Management System\n• AI-Powered Resume Analyzer\n• E-Commerce Platform\n• Weather Forecasting App\n\nWould you like to know more about any specific project?'
    }
    if (input.includes('skill') || input.includes('technology')) {
      return 'My technical skills include:\n• Programming: C, C++, Java, Python, JavaScript\n• Frontend: HTML, CSS, React.js\n• Backend: Spring Boot, SQL\n• Tools: Excel, Power BI, Figma, Git\n• Data: Pandas, NumPy, Machine Learning'
    }
    if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
      return 'You can reach me at:\n📧 Email: pottapogulajahnavi@gmail.com\n📱 Phone: +91-6301981410\n💼 LinkedIn: linkedin.com/in/jahnavi-p2005\n🐙 GitHub: github.com/RamaSaiJahnavi'
    }
    if (input.includes('education') || input.includes('study') || input.includes('college')) {
      return 'I am currently pursuing:\n🎓 B.Tech in Computer Science & Engineering\n📍 Lovely Professional University, Punjab\n📅 2022 - 2026\n📊 CGPA: 8.5/10'
    }
    if (input.includes('hello') || input.includes('hi')) {
      return 'Hello! Welcome to my portfolio. Feel free to ask me about my skills, projects, education, or how to contact me!'
    }
    return "I'm not sure about that. You can ask me about my projects, skills, education, or how to contact me."
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend()
    }
  }

  return (
    <div className="chatbot-container">
      {/* Chat Button */}
      <button 
        className={`chatbot-button ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <div className="chatbot-info">
              <h4>Ask me anything!</h4>
              <span>Online</span>
            </div>
          </div>

          {/* Suggestion Box */}
          <div className="suggestion-box">
            <p>Suggested questions:</p>
            <div className="suggestion-chips">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-chip"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.type}`}>
                <div className="message-bubble">
                  {message.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend}>➤</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Chatbot
