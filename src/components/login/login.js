
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Login({ onLogin }) {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email || !password) return 'Please fill in all fields.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setLoading(true);
    // simulate login
    setTimeout(() => {
      setLoading(false);
      if (onLogin) onLogin({ email });
      navigate('/home');
    }, 700);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-heading">{t.login.heading}</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label className="form-label">{t.login.emailLabel}</label>
          <input
            className="form-input"
            type="email"
            placeholder={t.login.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t.login.passwordLabel}</label>
          <input
            className="form-input"
            type="password"
            placeholder={t.login.passwordPlaceholder}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button" type="submit" disabled={loading}>
          {loading ? t.login.submitting || 'Loading...' : t.login.submit}
        </button>

        <p className="login-link">
          {t.login.noAccount} <a href="/signup">{t.login.registerLink}</a>
        </p>
      </form>
    </div>
  );
}
// ...existing code...