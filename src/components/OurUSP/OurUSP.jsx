import React from 'react';
import './OurUSP.css';

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
      features: ['Office Buildings', 'Shopping Centers', 'Hotels', 'Restaurants']
    },
    {
      icon: '🏭',
      title: 'Industrial & Infrastructure',
      description: 'Warehouses, roads, factories—engineered for strength and scalability.',
      features: ['Factories', 'Warehouses', 'Roads & Bridges', 'Public Works']
    },
    {
      icon: '🔄',
      title: 'Renovation Services',
      description: 'Breathe new life into your space with expert renovation services.',
      features: ['Interior Upgrades', 'Structural Updates', 'Modern Amenities', 'Space Optimization']
    },
    {
      icon: '📦',
      title: 'Turnkey Projects',
      description: 'One-stop solution—from design to execution, we handle everything.',
      features: ['Full Management', 'Quality Control', 'Timely Delivery', 'Cost Efficiency']
    },
    {
      icon: '🏗️',
      title: 'Custom Solutions',
      description: 'Tailored construction solutions for your unique needs.',
      features: ['Custom Design', 'Expert Consultation', '3D Visualization', 'Project Planning']
    }
  ];

  return (
    <section className="usp-section" id="services">
      <h2 className="usp-heading">
        <span className="gradient-text">Our Core Services</span>
      </h2>
      <p className="usp-subheading">Built With Precision. Designed for Impact.</p>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <ul className="service-features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="consultation-banner">
        <h3>Have a project in mind?</h3>
        <p>Get your FREE consultation today!</p>
        <button className="cta-button" onClick={() => window.location.href="tel:+919785311771"}>
          Talk to Our Experts
          <span className="button-shine"></span>
        </button>
      </div>
    </section>
  );
};

export default Services;
