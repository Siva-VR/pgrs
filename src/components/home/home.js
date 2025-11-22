
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

      {/* Chatbot Widget */}
      {showChatbot && (
        <div className="chatbot-widget">
          <div className="chatbot-header">
            <div className="chatbot-avatar">👨</div>
            <span className="chatbot-name">AI.g</span>
            <button 
              className="chatbot-close"
              onClick={() => setShowChatbot(false)}
            >
              ✕
            </button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-message">
              <p>Greetings! I'm AI.g</p>
              <p>I'm here to answer any questions you may have about travelling with Air India. Talk to me in English, French, German, or Hindi.</p>
              <p>Choose one of these popular topics or type your question below. You can also chat with me on WhatsApp: <a href="#">+91 96670 34444</a></p>
            </div>
            <div className="chatbot-options">
              <button className="chatbot-option">🎒 Baggage Allowance</button>
              <button className="chatbot-option">✈️ Booking</button>
              <button className="chatbot-option">✓ Check In</button>
              <button className="chatbot-option">✈️ Flight Status</button>
              <button className="chatbot-option">💰 Refund</button>
              <button className="chatbot-option">🗺️ Travel Guide</button>
            </div>
            <div className="skill-spotlight">
              <span className="spotlight-icon">✨</span>
              <span>Skill Spotlight</span>
              <p>Do you know I can help you to...</p>
            </div>
          </div>
          <div className="chatbot-footer">
            <input 
              type="text" 
              placeholder="Type your question here..."
              className="chatbot-input"
            />
            <button className="chatbot-send">➤</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Home;