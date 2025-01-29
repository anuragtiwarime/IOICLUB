import { useState, useEffect } from 'react';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

const images = [
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527177/img25_j57sn0-min_ij6s18.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1738081694/DSC02660_bohvbb.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949612/img21_mjrrsx.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949636/img29_neubpf.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949942/img19_l0lhs8.jpg",
  "https://res.cloudinary.com/dkxongd5z/image/upload/v1737436401/Hackwinner_ggj2gt.jpg",
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let timer;
    if (isAutoPlaying) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="absolute inset-0 group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
            index === currentIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-110'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full 
                 focus:outline-none transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100
                 bg-black/20 hover:bg-black/40 backdrop-blur-sm z-20"
        aria-label="Previous slide"
      >
        <GoChevronLeft size={40} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white p-3 rounded-full 
                 focus:outline-none transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100
                 bg-black/20 hover:bg-black/40 backdrop-blur-sm z-20"
        aria-label="Next slide"
      >
        <GoChevronRight size={40} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                     ${index === currentIndex
                       ? 'bg-white w-4'
                       : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute bottom-6 right-6 text-white text-sm px-3 py-1 rounded-full 
                 bg-black/20 hover:bg-black/40 backdrop-blur-sm transition-all duration-300
                 opacity-0 group-hover:opacity-100 z-20"
      >
        {isAutoPlaying ? 'Pause' : 'Play'}
      </button>

      {/* Current Slide Counter */}
      <div className="absolute top-6 right-6 text-white text-sm px-3 py-1 rounded-full 
                    bg-black/20 backdrop-blur-sm z-20">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}