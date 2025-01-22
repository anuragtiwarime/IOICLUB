import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Footer from "../components/Footer";

const LifeAtPWIOI = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const images = [
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949645/img25_j57sn0.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949608/img16_qo7fvz.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949629/img17_jc57om.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949638/img18_mjjqru.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949593/img9_hk85o8.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949942/img19_l0lhs8.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949647/img30_vjvwoa.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949647/img31_minlu7.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949643/img27_scdcg1.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949640/img23_awsttv.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949639/img28_mcjbkt.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949636/img29_neubpf.jpg",
    "https://res.cloudinary.com/dkxongd5z/image/upload/v1736949630/img26_rx0pgh.jpg",
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
      <section className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">Life at PW IOI</h2>
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
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={showPreviousImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-200"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="relative max-w-screen-lg max-h-[80vh] mx-16 overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80 transition-all z-50"
            >
              <X size={26} />
            </button>
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className={`w-auto max-h-[70vh] object-contain rounded-lg transform transition-all duration-300 ease-in-out ${getSlideAnimation()}`}
              />
            </div>
          </div>

          <button
            onClick={showNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors transform hover:scale-110 duration-200"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
      <Footer />
    </>
  );
};

export default LifeAtPWIOI;
