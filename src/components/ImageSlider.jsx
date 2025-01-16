import { useState, useEffect } from 'react';
import React from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
const images = [
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949604/img15_jsnpnb.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949596/img10_pieeo2.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949598/img11_jvdvmh.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949640/img23_awsttv.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949603/img13_deelc9.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949612/img14_hcgyzj.jpg"
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
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2  text-white text-3xl p-3 rounded-full focus:outline-none  transition-transform duration-300 hover:scale-110 shadow-lg"
      >
        <GoChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-3xl p-3 rounded-full focus:outline-none transition-transform duration-300 hover:scale-110 shadow-lg font-bold"
      >
        <GoChevronRight size={40} />
      </button>
    </div>
  );
}
