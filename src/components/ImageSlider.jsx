import { useState, useEffect } from 'react';
import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.JPG';
import img8 from '../assets/img8.JPG';
import img9 from '../assets/img9.JPG';

const images = [
  img9,
  img8,
  img7,
  img6,
  img5,
  img4,
  img3,
  img2,
  img1,
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-[300px] md:h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg shadow-xl filter brightness-90 contrast-110"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-3xl p-3 rounded-full focus:outline-none hover:bg-gray-700 transition-transform duration-300 hover:scale-110 shadow-lg"
        onClick={handlePrev}
      >
        <GoChevronLeft />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-3xl p-3 rounded-full focus:outline-none hover:bg-gray-700 transition-transform duration-300 hover:scale-110 shadow-lg"
        onClick={handleNext}
      >
        <GoChevronRight />
      </button>
    </div>
  );
}
