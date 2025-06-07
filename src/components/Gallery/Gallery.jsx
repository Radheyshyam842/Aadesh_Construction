// src/components/Gallery/Gallery.js
import React from 'react';
import './Gallery.css';
import IMG from '../Gallery/img1.jpg';
import IMG2 from '../Gallery/img2.jpg';
import IMG3 from '../Gallery/img3.jpg';
import IMG4 from '../Gallery/img4.jpg';
import IMG5 from '../Gallery/img5.jpg';
import IMG6 from '../Gallery/img5.jpg';

const Gallery = () => (
  <section id="gallery" className="py-16 bg-gray-100">
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Our Gallery</h2>

    {/* Photo Gallery Section */}
    <div className="max-w-6xl mx-auto px-4 mb-16">
      <h3 className="text-3xl font-semibold text-center text-gray-700 mb-8">Photo Gallery</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 animate-slide-in-left">
        {[IMG, IMG2, IMG3, IMG4, IMG5, IMG6].map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img src={image} alt={`Event ${index + 1}`} className="w-full h-48 sm:h-60 md:h-64 lg:h-72 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-lg font-semibold">
              Event {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Video Gallery Section */}
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-semibold text-center text-gray-700 mb-8">Video Gallery</h3>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-slide-in-left">
        {["VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3"].map((videoId, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Video ${index + 1}`}
              className="w-full h-48 sm:h-60 md:h-64 lg:h-72"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
