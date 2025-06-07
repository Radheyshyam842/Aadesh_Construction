import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

 // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-8 w-full md:w-auto">
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={faPhone} className="text-sm group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm group-hover:text-yellow-400 transition-colors">+91 9785311771,9928778239</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={faEnvelope} className="text-sm group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm group-hover:text-yellow-400 transition-colors">info@aadesh@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer group">
                <FontAwesomeIcon icon={faLocationDot} className="text-sm group-hover:text-yellow-400 transition-colors" />
                <span className="text-sm group-hover:text-yellow-400 transition-colors">Udaipur, Rajasthan</span>
              </div>
            </div>
            
            {/* Social icons */}
            <div className="flex space-x-6 mt-3 md:mt-0">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="transform hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faFacebook} className="text-lg hover:text-blue-400" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="transform hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-lg hover:text-pink-500" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="transform hover:scale-125 transition-all duration-300">
                <FontAwesomeIcon icon={faTwitter} className="text-lg hover:text-blue-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white shadow-lg w-full z-40 sticky top-0">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-gray-700 transition-colors duration-300">
              Aadesh Construction
            </h1>
            
            {/* Hamburger icon for mobile */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="focus:outline-none transition-transform duration-300 hover:scale-110">
                <FontAwesomeIcon 
                  icon={isMenuOpen ? faTimes : faBars} 
                  className="text-2xl text-gray-800 hover:text-gray-600 transition-colors"
                />
              </button>
            </div>

            {/* Navbar links */}
            <div className={`lg:flex lg:items-center fixed lg:static bg-white w-full lg:w-auto left-0 top-[72px] transform transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'
            } lg:transform-none border-t lg:border-0 shadow-lg lg:shadow-none`}>
              <ul className="lg:flex lg:items-center lg:space-x-8 p-4 lg:p-0">
                {['Home', 'About', 'Services', 'Why Us', 'Gallery', 'Testimonials', 'Partners', 'Contact'].map((item) => (
                  <li key={item} className="mb-3 lg:mb-0">
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="block py-2 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-100 lg:hover:bg-transparent rounded-md transition-all duration-300 hover:translate-x-2 lg:hover:translate-x-0 lg:hover:scale-110"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;