// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';

const AboutUs = () => (
  <section id="about" className="about">
    <div className="about-content">
      <div className="about-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/assets/aboutusimg.png`}
          alt="Adesh Construction Legacy"
          className="about-image"
        />
      </div>
      
      <div className="about-text">
        <h2 className="about-heading">
          <span className="gradient-text">About Adesh Construction</span>
        </h2>
        <div className="tagline">A Legacy of Quality. A Future of Innovation.</div>
        
        <p className="about-description">
          Founded with a clear mission to bring <span className="text-yellow-400">honesty</span>, 
          <span className="text-orange-500">craftsmanship</span>, and 
          <span className="text-yellow-400">reliability</span> to construction, 
          Adesh Construction has become a trusted name across Rajasthan and beyond.
        </p>

        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">200+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Client Retention</span>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-item">
            <span className="feature-icon text-yellow-400">🏗️</span>
            <span className="feature-text">Professional Excellence</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">📍</span>
            <span className="feature-text">Locally Rooted, Nationally Capable</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">🤝</span>
            <span className="feature-text">Customer-First Approach</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">⭐</span>
            <span className="feature-text">Quality Assurance</span>
          </div>
        </div>

        <blockquote className="mission-quote">
          "We believe buildings are more than structures—they're the foundation of your dreams."
        </blockquote>

        <button className="cta-button">
          Discover Our Legacy
          <span className="button-shine"></span>
        </button>
      </div>
    </div>
  </section>
);

export default AboutUs;
