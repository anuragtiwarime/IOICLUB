import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527177/img25_j57sn0-min_ij6s18.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949608/img16_qo7fvz.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527641/img17_jc57om-min_e2ilvn.jpg",
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
    const newIndex =
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageTransition(newIndex, "left");
  };

  const showNextImage = () => {
    const newIndex =
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    handleImageTransition(newIndex, "right");
  };

  const handleViewMore = () => {
    window.location.href = "/lifeatpwioi";
  };

  const getSlideAnimation = () => {
    if (!isAnimating) return "translate-x-0 scale-100 opacity-100";
    return direction === "right"
      ? "-translate-x-full scale-90 opacity-0"
      : "translate-x-full scale-90 opacity-0";
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-center text-white mb-2">
            Life at PW IOI
          </h2>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative h-72 overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-500 hover:-translate-y-2"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image}
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <span className="text-white text-3xl">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleViewMore}
            className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-black rounded-full hover:bg-gray-700 transform transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            View More
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100]">
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl"></div>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <div className="relative w-full max-w-7xl mx-auto">
                <button
                  onClick={showPreviousImage}
                  className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-200 focus:outline-none z-[102]"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={showNextImage}
                  className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 p-2 text-white/70 hover:text-white transition-colors transform hover:scale-110 duration-200 focus:outline-none z-[102]"
                >
                  <ChevronRight size={48} />
                </button>
                <button
                  onClick={closeModal}
                  className="fixed top-4 right-4 md:top-8 md:right-8 p-2 text-white/70 hover:text-white bg-black/50 rounded-full hover:bg-black/70 transition-all duration-200 focus:outline-none z-[102]"
                >
                  <X size={24} />
                </button>
                <div className="relative z-[101]">
                  <img
                    src={images[currentImageIndex]}
                    alt={`Gallery Image ${currentImageIndex + 1}`}
                    className={`max-w-full max-h-[85vh] mx-auto object-contain rounded-lg shadow-2xl transform transition-all duration-500 ${getSlideAnimation()}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
