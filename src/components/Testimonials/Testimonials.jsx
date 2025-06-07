// src/components/Testimonials.js

import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Mrs. Neelam Joshi",
      role: "Homeowner",
      text: "From the very first meeting, I knew I was in good hands. Adesh Construction built my home like they were building their own.",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/assets/client1.jpg`
    },
    {
      name: "Mr. Ramesh Goyal",
      role: "Business Owner",
      text: "They finished our commercial project 25 days ahead of schedule without compromising quality. Amazing team!",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/assets/client2.jpg`
    },
    {
      name: "Ashok Industries",
      role: "Industrial Client",
      text: "They guided us through every step of our factory project. Best decision we made.",
      rating: 5,
      image: `${process.env.PUBLIC_URL}/assets/client3.jpg`
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="section-title">
          <span className="gradient-text">What Our Clients Say</span>
        </h2>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="shine-overlay"></div>
              <div className="testimonial-header">
                <div className="client-image-wrapper">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="client-image" 
                  />
                </div>
                <div className="rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonial.text}"
              </blockquote>
              
              <div className="testimonial-author">
                <h3>{testimonial.name}</h3>
                <p>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
