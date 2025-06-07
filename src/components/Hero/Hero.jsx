import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Hero.css';

const Hero = () => (
  <div className="hero relative">
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={5000}
      showStatus={false}
      transitionTime={1000}
      className="hero-carousel"
    >
      {/* Slide 1 - Main Construction */}
      <div className="carousel-slide relative h-[90vh] lg:h-[80vh]">
        <img src={`${process.env.PUBLIC_URL}/assets/banner1.webp`} alt="Construction Site" className="w-full h-full object-cover animate-scale" />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-6">
          <h1 className="text-4xl lg:text-7xl font-bold text-white drop-shadow-lg">
            Building Dreams Into <span className="text-yellow-400">Reality</span>
          </h1>
          <p className="text-xl lg:text-2xl text-yellow-100 max-w-3xl">
            We Don't Just Build Structures – <span className="text-orange-400">We Build Trust.</span>
          </p>
          <div className="flex gap-6 mt-8 animate-fadeIn">
            <button className="hero-button-shine px-10 py-5 bg-yellow-500 text-gray-900 rounded-lg text-xl font-bold">
              Call Now
            </button>
            <button className="hero-button-outline px-10 py-5 border-2 border-yellow-400 text-yellow-400 rounded-lg text-xl font-bold">
              Get Quote
            </button>
          </div>
        </div>
      </div>

      {/* Slide 2 - Quality Promise */}
      <div className="carousel-slide relative h-[90vh] lg:h-[80vh]">
        <img src={`${process.env.PUBLIC_URL}/assets/banner2.jpg`} alt="Construction Quality" className="w-full h-full object-cover animate-scale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-xl animate-slideDown">
            <span className="text-yellow-400">Excellence</span> in Every Detail
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-100 max-w-4xl animate-slideUp leading-relaxed">
            <span className="text-yellow-400">Unmatched Quality</span> | 
            <span className="text-yellow-400"> Timely Delivery</span> | 
            <span className="text-yellow-400"> Professional Excellence</span>
          </p>
          <div className="flex gap-6 mt-8 animate-fadeIn">
            <button className="hero-button-shine px-10 py-5 bg-yellow-500 text-gray-900 rounded-lg text-xl font-bold">
              Discuss Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Slide 3 - Services */}
      <div className="carousel-slide relative h-[90vh] lg:h-[80vh]">
        <img src={`${process.env.PUBLIC_URL}/assets/banner3.jpg`} alt="Construction Services" className="w-full h-full object-cover animate-scale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-xl animate-slideDown">
            <span className="text-yellow-400">Comprehensive</span> Construction Solutions
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-100 max-w-4xl animate-slideUp leading-relaxed">
            <span className="text-yellow-400">Residential</span> • 
            <span className="text-yellow-400"> Commercial</span> • 
            <span className="text-yellow-400"> Industrial</span> • 
            <span className="text-yellow-400"> Renovation</span>
          </p>
          <div className="flex gap-6 mt-8 animate-fadeIn">
            <button className="hero-button-shine px-10 py-5 bg-yellow-500 text-gray-900 rounded-lg text-xl font-bold">
              Start Your Project
            </button>
            <button className="hero-button-outline px-10 py-5 border-2 border-yellow-400 text-yellow-400 rounded-lg text-xl font-bold">
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Slide 4 - Experience */}
      <div className="carousel-slide relative h-[90vh] lg:h-[80vh]">
        <img src={`${process.env.PUBLIC_URL}/assets/banner4.jpg`} alt="Construction Experience" className="w-full h-full object-cover animate-scale" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70 flex flex-col items-center justify-center text-center px-6 lg:px-12 space-y-8">
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-xl animate-slideDown">
            <span className="text-yellow-400">25+ Years</span> of Excellence
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-100 max-w-4xl animate-slideUp leading-relaxed">
            Turning Blueprints into Masterpieces Since <span className="text-yellow-400">1998</span>
          </p>
          <div className="flex gap-6 mt-8 animate-fadeIn">
            <button className="hero-button-shine px-10 py-5 bg-yellow-500 text-gray-900 rounded-lg text-xl font-bold">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
);

export default Hero;