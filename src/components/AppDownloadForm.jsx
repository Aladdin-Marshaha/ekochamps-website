import React, { useState } from 'react';
import './AppDownloadForm.scss';

const AppDownloadForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Här kan du lägga till logik för att skicka formuläret
  };

  return (
    <div className="download-app">
      <div className="container">
        <h1 className="page-title">
          Get Ready to Recycle Smarter!
          <span className="rocket">🚀</span>
        </h1>
        <p className="page-subtitle">
          Be among the first to experience our revolutionary app! 
          Leave your details and we'll notify you as soon as it's available.
        </p>
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              placeholder="What features are you most excited about?"
            />
          </div>
          
          <button type="submit" className="submit-btn">
            Notify Me! 📲
          </button>
        </form>
        
        <div className="app-preview">
          <h3>Coming Soon Features:</h3>
          <div className="features-grid">
            <div className="feature">
              <span className="icon">📱</span>
              <h4>Smart Scanning</h4>
              <p>AI-powered item recognition</p>
            </div>
            <div className="feature">
              <span className="icon">🎯</span>
              <h4>Personalized Goals</h4>
              <p>Tailored sustainability targets</p>
            </div>
            <div className="feature">
              <span className="icon">🏆</span>
              <h4>Gamified Rewards</h4>
              <p>Earn points and unlock achievements</p>
            </div>
            <div className="feature">
              <span className="icon">🌍</span>
              <h4>Impact Tracking</h4>
              <p>See your environmental contribution</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadForm;