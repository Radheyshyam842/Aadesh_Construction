// src/components/WhyUs.js
import React, { useState, useEffect } from 'react';
import './WhyUs.css';

const WhyUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const reasons = [
    {
      title: 'Transparent Pricing',
      description: 'No hidden charges, no last-minute surprises. We provide detailed estimates and stick to them.',
      icon: '💰',
      stats: '100% Price Transparency'
    },
    {
      title: 'Timely Delivery',
      description: 'We respect deadlines like we respect concrete: with seriousness. Our project completion rate speaks for itself.',
      icon: '⏱️',
      stats: '95% On-Time Delivery'
    },
    {
      title: 'Material Quality',
      description: 'Only certified, high-grade construction materials. We partner with top suppliers for the best results.',
      icon: '🏗️',
      stats: 'ISO 9001 Certified'
    },
    {
      title: 'Customer First',
      description: 'We listen, we understand, we deliver exactly what you need. Your vision is our mission.',
      icon: '🤝',
      stats: '98% Client Satisfaction'
    },
    {
      title: 'On-Site Safety',
      description: 'Trained crews, zero accidents, professional standards. Safety is our top priority.',
      icon: '⚡',
      stats: 'Zero Accidents in 2023'
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with years of experience in construction and project management.',
      icon: '👥',
      stats: '50+ Certified Experts'
    }
  ];

  return (
    <section className="why-us-section">
      <div className="why-us-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="section-subtitle">
            Building Excellence, Delivering Trust
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              className={`reason-card ${activeCard === index ? 'active' : ''}`}
              key={index}
              onClick={() => isMobile && setActiveCard(activeCard === index ? null : index)}
              onMouseEnter={() => !isMobile && setActiveCard(index)}
              onMouseLeave={() => !isMobile && setActiveCard(null)}
            >
              <div className="card-content">
                <div className="reason-icon-wrapper">
                  <span className="reason-icon">{reason.icon}</span>
                </div>
                <h3 className="reason-title">{reason.title}</h3>
                <p className="reason-description">{reason.description}</p>
                <div className="reason-stats">
                  <span className="stats-value">{reason.stats}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonial-section">
          <blockquote className="mission-statement">
            "Our mission is not just to build buildings—but to build your confidence in us."
            <div className="quote-author">- Team Adesh Construction</div>
          </blockquote>
        </div>

        <div className="cta-section">
          <h3 className="cta-title">Ready to Start Your Project?</h3>
          <p className="cta-description">Let's discuss how we can bring your vision to life.</p>
          <button className="cta-button" onClick={() => window.location.href="tel:+919785311771"}>
            Schedule a Consultation
            <span className="button-shine"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
