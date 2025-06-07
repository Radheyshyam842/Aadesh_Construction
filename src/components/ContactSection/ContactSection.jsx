// src/components/ContactSection.js
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUser, FaCommentDots, FaHardHat, FaBuilding } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  useEffect(() => {
    emailjs.init("yWBRST9XwsmKdHMjr");
  }, []);

  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create template parameters
    const templateParams = {
      to_email: 'radhey2017purohit@gmail.com', // Add recipient email
      from_name: e.target.user_name.value,
      reply_to: e.target.user_email.value,
      phone_number: e.target.user_phone.value,
      project_type: e.target.project_type.value,
      message: e.target.message.value
    };

    emailjs.send(
      'service_n9vlc3m',
      'template_76v1lsw',
      templateParams,
      'yWBRST9XwsmKdHMjr'
    )
    .then((result) => {
      console.log('SUCCESS!', result.text);
      setSubmitStatus('success');
      form.current.reset();
    })
    .catch((error) => {
      console.error('FAILED...', error.text);
      setSubmitStatus('error');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="gradient-text">Let's Build Together</span>
        </h2>
        
        <div className="contact-grid">
          <div className="form-container">
            <form ref={form} onSubmit={handleSubmit} className="contact-form">
              <div className="input-group">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
                <div className="input-highlight"></div>
              </div>

              <div className="input-group">
                <FaEnvelope className="input-icon" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                />
                <div className="input-highlight"></div>
              </div>

              <div className="input-group">
                <FaPhone className="input-icon" />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Your Phone"
                  required
                />
                <div className="input-highlight"></div>
              </div>

              <div className="input-group">
                <FaBuilding className="input-icon" />
                <select name="project_type" required>
                  <option value="">Select Project Type</option>
                  <option value="Residential">Residential Construction</option>
                  <option value="Commercial">Commercial Project</option>
                  <option value="Industrial">Industrial Construction</option>
                  <option value="Renovation">Renovation</option>
                </select>
                <div className="input-highlight"></div>
              </div>

              <div className="input-group">
                <FaCommentDots className="input-icon" />
                <textarea
                  name="message"
                  placeholder="Tell us about your project"
                  required
                ></textarea>
                <div className="input-highlight"></div>
              </div>

              <div className="button-group">
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <span className="button-shine"></span>
                </button>
                
                <button 
                  type="button" 
                  className="call-button"
                  onClick={() => window.location.href="tel:+919785311771"}
                >
                  Call Us
                  <span className="button-shine"></span>
                </button>
              </div>

              {submitStatus && (
                <div className={`submit-status ${submitStatus}`}>
                  {submitStatus === 'success' 
                    ? '✅ Message sent successfully!' 
                    : '❌ Failed to send message. Please try again.'}
                </div>
              )}
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="contact-info">
            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Visit Us</h3>
              <p>123 Construction Avenue, Rajasthan, India</p>
            </div>
            <div className="info-card">
              <FaPhone className="info-icon" />
              <h3>Call Us</h3>
              <p>+91 9785311771</p>
            </div>
            <div className="info-card">
              <FaHardHat className="info-icon" />
              <h3>Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
