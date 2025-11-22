

import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import { useLanguage } from '../../contexts/LanguageContext';
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  const { lang, setLang, t } = useLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    if (isLoginPage) {
      setIsLoginPage(false);
      navigate('/signup');
    } else {
      setIsLoginPage(true);
      navigate('/login');
    }
  };

  const handleLanguageSelect = (selectedLang) => {
    setLang(selectedLang);
    setIsLangDropdownOpen(false);
  };

  const getLanguageLabel = () => {
    return lang === 'en' ? 'Language' : 'భాష';
  };

  return (
    <nav className="navbar">
      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <Link 
            to="/" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.home}
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/dashboards" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.dashboards}
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/view-grievances" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.viewGrievances}
          </Link>
        </li>

        <li className="nav-item">
          <Link 
            to="/file-upload" 
            className="nav-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.navbar.fileUpload}
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        <input 
          type="text" 
          className="search-input" 
          placeholder={t.navbar.searchPlaceholder} 
        />

        {/* Language Dropdown */}
        <div className="lang-dropdown" ref={dropdownRef}>
          <button 
            className="lang-button"
            onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
            aria-label="Select language"
          >
            <span className="lang-icon">🌐</span>
            <span className="lang-text">{getLanguageLabel()}</span>
            <span className="lang-arrow">▼</span>
          </button>

          {isLangDropdownOpen && (
            <div className="lang-dropdown-menu">
              <button
                className={`lang-option ${lang === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageSelect('en')}
              >
                English
              </button>
              <button
                className={`lang-option ${lang === 'te' ? 'active' : ''}`}
                onClick={() => handleLanguageSelect('te')}
              >
                తెలుగు
              </button>
            </div>
          )}
        </div>

        <button 
          className="login-btn"
          onClick={handleNavClick}
        >
          {isLoginPage ? t.navbar.register : t.navbar.login}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;