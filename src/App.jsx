import { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/SVG/Everson Logos-07.svg'

function App() {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="maintenance-container">
      <div className="animated-background">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-circle circle-4"></div>
      </div>
      
      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="Everson Logo" className="logo" />
        </div>

        <h1 className="main-title">
          Coming Soon{dots}
        </h1>
        
        <div className="divider"></div>

        <p className="message">
          Website is under maintenance
        </p>

        <p className="apology">
          Sorry for the inconvenience caused
        </p>

        <p className="signature">
          - Everson Family
        </p>

        <div className="contact-info">
          <p>For inquiries, please contact us:</p>
          <a href="mailto:eversonindia25@gmail.com" className="email-link">
            eversonindia25@gmail.com
          </a>
          <p className="phone-number">📞 +91 9913477765</p>
        </div>
      </div>
    </div>
  )
}

export default App