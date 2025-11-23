
import React, { useState } from 'react'
import './signup.css'
import { useLanguage } from '../../contexts/LanguageContext'
import { Link } from 'react-router-dom'

export default function SignUp({ onSignUp }) {
  const { t } = useLanguage()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const validate = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return 'All fields are required.'
    }
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRe.test(email)) {
      return 'Please enter a valid email address.'
    }
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.'
    }
    if (password !== confirmPassword) {
      return 'Passwords do not match.'
    }
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    const v = validate()
    if (v) {
      setError(v)
      return
    }
    setLoading(true)
    try {
      await new Promise((r) => setTimeout(r, 700))
      if (onSignUp) onSignUp({ firstName, lastName, email })
      console.log('SignUp submitted', { firstName, lastName, email, password })
    } catch (err) {
      setError('Sign up failed. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2 className="signup-heading">{t.signup.heading}</h2>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">{t.signup.firstName}</label>
            <input
              id="firstName"
              type="text"
              className="form-input"
              placeholder={t.signup.firstName}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              autoComplete="given-name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">{t.signup.lastName}</label>
            <input
              id="lastName"
              type="text"
              className="form-input"
              placeholder={t.signup.lastName}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">{t.signup.email}</label>
          <input
            id="email"
            type="email"
            className="form-input"
            placeholder={t.signup.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">{t.signup.password}</label>
          <input
            id="password"
            type="password"
            className="form-input"
            placeholder={t.signup.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">{t.signup.confirmPassword}</label>
          <input
            id="confirmPassword"
            type="password"
            className="form-input"
            placeholder={t.signup.confirmPassword}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />
        </div>

        {error && (
          <div className="error-message">{error}</div>
        )}

        <button
          type="submit"
          className="signup-button"
          disabled={loading}
        >
          {loading ? 'Creating Account...' : t.signup.submit}
        </button>

        <p className="login-link">
          {t.signup.haveAccount} <Link to="/login">{t.signup.loginLink}</Link>
        </p>
      </form>
    </div>
  )
}
// ...existing code...