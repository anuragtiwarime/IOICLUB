import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "../components/Footer";

const LifeAtPWIOI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527177/img25_j57sn0-min_ij6s18.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949608/img16_qo7fvz.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527641/img17_jc57om-min_e2ilvn.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949638/img18_mjjqru.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949593/img9_hk85o8.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949942/img19_l0lhs8.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527041/img30_vjvwoa-min_tohwfm.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949647/img31_minlu7.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527309/img27_scdcg1-min_jz2zg2.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527436/img23_awsttv-min_ze0b7a.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949639/img28_mcjbkt.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949636/img29_neubpf.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737527543/img26_rx0pgh-min_mqy4av.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949622/img24_yzf6ry.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949620/img22_cymqhj.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737475319/img20_hr9oor-min_qpgx87.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949612/img21_mjrrsx.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949612/img14_hcgyzj.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949604/img15_jsnpnb.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949603/img13_deelc9.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737436401/Hackwinner2_ni3yes.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1737436401/Hackwinner_ggj2gt.jpg"
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

    setDirection(slideDirection);
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const showPreviousImage = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    handleImageTransition(newIndex, "left");
  };

  const showNextImage = () => {
    const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
    handleImageTransition(newIndex, "right");
  };

  const getSlideAnimation = () => {
    if (!isAnimating) return "translate-x-0 scale-100 opacity-100";
    return direction === "right"
      ? "-translate-x-full scale-90 opacity-0"
      : "translate-x-full scale-90 opacity-0";
  };

  return (
    <>
      <section className="relative min-h-screen py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dkxongd5z/image/upload/v1737447325/bg_wujk7h.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-center text-white mb-2">
              Life at PW IOI
            </h2>
            <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative h-72 overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-500 hover:-translate-y-2"
                onClick={() => handleImageClick(index)}
              >
                {/* Image */}
                <img
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
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
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100]">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/95 backdrop-blur-xl"></div>

          {/* Modal Content Wrapper */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Navigation and Controls Container */}
              <div className="relative w-full max-w-7xl mx-auto">
                {/* Navigation Buttons */}
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

                {/* Close Button */}
                <button
                  onClick={closeModal}
                  className="fixed top-4 right-4 md:top-8 md:right-8 p-2 text-white/70 hover:text-white bg-black/50 rounded-full hover:bg-black/70 transition-all duration-200 focus:outline-none z-[102]"
                >
                  <X size={24} />
                </button>

                {/* Image Container */}
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
      <Footer />
    </>
  );
};

export default LifeAtPWIOI;