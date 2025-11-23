
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import { useLanguage } from '../../contexts/LanguageContext';

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const services = t.home.services.map((title, i) => {
    const routes = ['/file-upload', '/view-grievances', '/dashboards', '/feedback'];
    return { title, icon: ['📤','⭐','👤','🎮'][i], route: routes[i] };
  });

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <main className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-description">
              {t.home.heroDescription}
            </p>
            <ul className="features-list">
              {t.home.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
          {/* Add the image on the right side */}
          <div className="hero-image">
            <img src={t.home.image} alt={t.home.imageAlt} className="responsive-image" />
          </div>
        </div>
      </div>

      <div className="services-section">
        <div className="services-grid">
          {services.map((service, index) => (
            <div  key={index} 
              className="service-card"
              onClick={() => handleServiceClick(service.route)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleServiceClick(service.route);
                }
              }}>
              <h3 className="service-title">{service.title}</h3>
              <div className="service-icon">{service.icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ...existing chatbot code uses static text - consider localizing later ... */}
       {/* Chatbot Button */}
      <button 
        className="chatbot-toggle"
        onClick={() => setShowChatbot(!showChatbot)}
      >
        💬
      </button>

      {/* Chatbot Button */}
      <button 
        className="chatbot-toggle"
        onClick={() => setShowChatbot(!showChatbot)}
        aria-label="Open PGRS Assistant"
      >
        💬
      </button>

      {/* Chatbot Widget */}
      {showChatbot && (
        <div className="chatbot-widget">
          <div className="chatbot-header">
            <div className="chatbot-avatar">🤖</div>
            <span className="chatbot-name">PGRS Assistant</span>
            <button 
              className="chatbot-close"
              onClick={() => setShowChatbot(false)}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-message">
              <p><strong>Welcome to PGRS!</strong></p>
              <p>I'm here to help you with the Public Grievance Redressal System. You can talk to me in English, Hindi, Telugu, or any regional language.</p>
              <p>Choose one of these options or type your question below:</p>
            </div>
            <div className="chatbot-options">
              <button className="chatbot-option">
                <span className="option-icon">📝</span>
                Raise Grievance
              </button>
              <button className="chatbot-option">
                <span className="option-icon">🔍</span>
                Ticket Status
              </button>
              <button className="chatbot-option">
                <span className="option-icon">📊</span>
                Dashboards
              </button>
              <button className="chatbot-option">
                <span className="option-icon">💬</span>
                Feedback
              </button>
              <button className="chatbot-option">
                <span className="option-icon">📞</span>
                Contact Us
              </button>
              <button className="chatbot-option">
                <span className="option-icon">❓</span>
                Help & FAQ
              </button>
            </div>
            <div className="skill-spotlight">
              <span className="spotlight-icon">✨</span>
              <span className="spotlight-text">Quick Tip</span>
              <p>You can track your grievance status anytime using your ticket number!</p>
            </div>
            <div className="contact-box">
              <p className="contact-title">📧 Need immediate help?</p>
              <p className="contact-detail">Call: <strong>1800-XXX-XXXX</strong></p>
              <p className="contact-detail">Email: <strong>support@pgrs.gov.in</strong></p>
            </div>
          </div>
          <div className="chatbot-footer">
            <input 
              type="text" 
              placeholder="Type your question here..."
              className="chatbot-input"
            />
            <button className="chatbot-send" aria-label="Send message">➤</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;