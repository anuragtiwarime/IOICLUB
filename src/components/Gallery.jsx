import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949645/img25_j57sn0.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949608/img16_qo7fvz.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949629/img17_jc57om.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737440055/img18_mjjqru-min_jmglju.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949593/img9_hk85o8.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949942/img19_l0lhs8.jpg",
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageTransition = (newIndex, slideDirection) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setDirection(slideDirection);
    
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 300);
  };

  const showPreviousImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageTransition(newIndex, 'left');
  };

  const showNextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    handleImageTransition(newIndex, 'right');
  };

  const handleViewMore = () => {
    window.location.href = "/lifeatpwioi";
  };

  const getSlideAnimation = () => {
    if (!isAnimating) return 'translate-x-0 scale-100 opacity-100';
    return direction === 'right' 
      ? '-translate-x-full scale-90 opacity-0' 
      : 'translate-x-full scale-90 opacity-0';
  };

  return (
    <>
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Life at PW IOI
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer group relative"
              onClick={() => handleImageClick(index)}
            >
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10" />
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transform transition-all duration-500 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
                    <span className="text-white text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="inline-block bg-black text-white py-2 px-6 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            View More
          </button>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          {/* Left Navigation */}
          <button
            onClick={showPreviousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-200"
          >
            <ChevronLeft size={40} />
          </button>

          {/* Right Navigation */}
          <button
            onClick={showNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-200"
          >
            <ChevronRight size={40} />
          </button>

          {/* Image Container with Close Button */}
          {/* Image Container with Close Button */}
<div className="relative max-w-screen-lg max-h-[80vh] mx-16 overflow-hidden">
  {/* Close Button */}
  <button
    onClick={closeModal}
    className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition-all z-50"
  >
    <X size={26} />
  </button>

  {/* Image */}
  <div className="relative">
    <img
      src={images[currentImageIndex]}
      alt={`Gallery Image ${currentImageIndex + 1}`}
      className={`w-auto max-h-[70vh] object-contain rounded-lg transform transition-all duration-300 ease-in-out ${getSlideAnimation()}`}
    />
  </div>
</div>

        </div>
      )}
    </>
  );
};

export default Gallery;