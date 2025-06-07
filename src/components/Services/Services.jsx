// src/components/Services/Services.jsx
import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🏠',
      title: 'Residential Construction',
      description: 'Custom homes, villas, apartments—designed for comfort, elegance, and durability.',
      features: ['Custom Homes', 'Luxury Villas', 'Modern Apartments', 'Smart Homes']
    },
    {
      icon: '🏬',
      title: 'Commercial Projects',
      description: 'Shops, malls, offices—strategically built to impress and perform.',
      features: ['Office Complexes', 'Shopping Malls', 'Hotels', 'Restaurants']
    },
    {
      icon: '🏭',
      title: 'Industrial & Infrastructure',
      description: 'Warehouses, roads, factories—engineered for strength and scalability.',
      features: ['Factories', 'Warehouses', 'Roads & Bridges', 'Public Works']
    },
    {
      icon: '🔄',
      title: 'Renovation & Remodeling',
      description: 'Breathe new life into your space with expert renovation services.',
      features: ['Interior Renovation', 'Structural Updates', 'Modern Upgrades', 'Space Optimization']
    },
    {
      icon: '📦',
      title: 'Turnkey Projects',
      description: 'One-stop solution—from design to execution, we handle everything.',
      features: ['End-to-End Service', 'Project Management', 'Quality Control', 'Timely Delivery']
    },
    {
      icon: '🏗️',
      title: 'Architecture & Design',
      description: 'Innovative designs that blend aesthetics with functionality.',
      features: ['3D Visualization', 'Green Building', 'Space Planning', 'Custom Design']
    }
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2 className="services-title">
          <span className="gradient-text">Our Core Services</span>
        </h2>
        <p className="services-subtitle">Built With Precision. Designed for Impact.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx} className="feature-item">
                  <span className="feature-bullet">▪</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="consultation-banner">
        <div className="banner-content">
          <h3>Have a project in mind? We offer FREE consultations!</h3>
          <p>Talk to our experts today.</p>
          <button className="consultation-button">
            Schedule Consultation
            <span className="button-shine"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
