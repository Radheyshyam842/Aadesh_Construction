// src/components/Footer/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaHardHat, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gradient-to-r from-slate-900 via-amber-900 to-slate-900 text-gray-300 py-8 sm:py-10 px-4 sm:px-6 relative overflow-hidden">
    <div 
      className="absolute inset-0" 
      style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
        backgroundSize: '20px 20px',
        opacity: 0.1 
      }}
    ></div>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
      
      {/* Logo and Tagline */}
      <div className="space-y-3 sm:space-y-4 col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
        <div className="flex items-center justify-center sm:justify-start">
          <FaHardHat className="text-3xl sm:text-4xl text-amber-500 mr-2 animate-pulse" />
          <h3 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Aadesh Construction
          </h3>
        </div>
        <p className="text-sm leading-relaxed text-gray-400 italic max-w-xs mx-auto sm:mx-0">
          Building Dreams, Delivering Excellence
        </p>
        <div className="flex space-x-6 mt-4 justify-center sm:justify-start">
          <a href="#" className="text-amber-500 hover:text-amber-400 transform hover:scale-110 transition-all duration-300">
            <FaFacebookF />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-400 transform hover:scale-110 transition-all duration-300">
            <FaTwitter />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-400 transform hover:scale-110 transition-all duration-300">
            <FaInstagram />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-400 transform hover:scale-110 transition-all duration-300">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Navigation Links - Improved mobile layout */}
      <div className="relative group transform transition-all duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-gray-900 bg-opacity-80 rounded-lg p-6">
          <h4 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-4 text-center">
            Navigation
          </h4>
          <ul className="flex flex-col space-y-3 text-center">
            {['Home', 'About', 'Services', 'Projects'].map((item) => (
              <li key={item} className="group/item">
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="block py-2 px-4 rounded-md text-gray-400 hover:text-amber-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quick Links - Services */}
      <div className="relative group transform transition-all duration-300 hover:translate-y-0 sm:hover:-translate-y-1">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-gray-900 bg-opacity-80 rounded-lg p-4 sm:p-6">
          <h4 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-3 sm:mb-4 text-center sm:text-left">
            Our Services
          </h4>
          <ul className="space-y-2 text-gray-400 text-center sm:text-left text-sm sm:text-base">
            <li className="hover:text-amber-500 transition duration-300 ease-in-out">
              <a href="#residential">Residential Construction</a>
            </li>
            <li className="hover:text-amber-500 transition duration-300 ease-in-out">
              <a href="#commercial">Commercial Projects</a>
            </li>
            <li className="hover:text-amber-500 transition duration-300 ease-in-out">
              <a href="#renovation">Renovation Services</a>
            </li>
            <li className="hover:text-amber-500 transition duration-300 ease-in-out">
              <a href="#consultation">Construction Consultation</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Info - Improved mobile layout */}
      <div className="relative group transform transition-all duration-300">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
        <div className="relative bg-gray-900 bg-opacity-80 rounded-lg p-6">
          <h4 className="text-xl sm:text-2xl font-semibold text-amber-500 mb-4 text-center">
            Contact Us
          </h4>
          <div className="flex flex-col space-y-4">
            <a 
              href="tel:+919785311771" 
              className="flex items-center justify-center space-x-3 py-2 px-4 rounded-md text-gray-400 hover:text-amber-500 hover:bg-gray-800/50 transition-all duration-300"
            >
              <FaPhone className="text-amber-500" />
              <span>+91 9785311771</span>
            </a>
            <a 
              href="mailto:radhey2017purohit@gmail.com"
              className="flex items-center justify-center space-x-3 py-2 px-4 rounded-md text-gray-400 hover:text-amber-500 hover:bg-gray-800/50 transition-all duration-300"
            >
              <FaEnvelope className="text-amber-500" />
              <span>radhey2017purohit@gmail.com</span>
            </a>
            <div className="flex items-center justify-center space-x-3 py-2 px-4 rounded-md text-gray-400">
              <FaClock className="text-amber-500" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-t border-amber-900/30 mt-6 sm:mt-8 pt-4 text-center text-xs sm:text-sm text-gray-400 relative z-10">
      <p>&copy; {new Date().getFullYear()} Aadesh Construction. All rights reserved.</p>
      <p className="mt-2">
        Crafted with <span className="text-amber-500 animate-pulse">❤️</span> by{" "}
        <a href="#" className="text-amber-500 hover:text-amber-400 transition duration-300">
          KingTechWorld
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
