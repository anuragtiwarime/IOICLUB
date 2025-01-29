import React, { useState, useEffect } from "react";
import { Code2, Palette, Rocket, Dumbbell, Clapperboard, Briefcase, Heart } from "lucide-react";
import clubsData from "../data/clubs.json";
import ClubImageSlider from "../components/ClubImageSlider";

const icons = {
  Code2: <Code2 className="w-12 h-12 text-cyan-500" />,
  Palette: <Palette className="w-12 h-12 text-purple-500" />,
  Rocket: <Rocket className="w-12 h-12 text-orange-500" />,
  Dumbbell: <Dumbbell className="w-12 h-12 text-green-500" />,
  Clapperboard: <Clapperboard className="w-12 h-12 text-yellow-500" />,
  Briefcase: <Briefcase className="w-12 h-12 text-indigo-500" />,
  Heart: <Heart className="w-12 h-12 text-rose-500" />
};

function Clubs() {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);
  const staticText = "Student ";
  const highlightedText = "Bodies";

  useEffect(() => {
    const fullText = staticText + highlightedText;
    let currentIndex = 0;

    const animateText = () => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsAnimating(false);
      }
    };

    if (isAnimating) {
      const timer = setInterval(animateText, 100);
      return () => clearInterval(timer);
    }
  }, [isAnimating]);

  const renderAnimatedText = () => {
    if (displayText.length <= staticText.length) {
      return <span>{displayText}</span>;
    }
    return (
      <>
        <span>{staticText}</span>
        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          {displayText.slice(staticText.length)}
        </span>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <ClubImageSlider />
        {/* Overlay with blur effect */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"></div>
        {/* Content */}
        <div className="relative z-20 text-center px-4">
          <h1 className="text-6xl font-bold mb-6 text-white">
            {renderAnimatedText()}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join our vibrant community of innovators, creators, and achievers
          </p>
        </div>
      </div>

      {/* Clubs Grid */}
      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {clubsData.map((club) => (
          <div
            key={club.name}
            className="group relative overflow-hidden rounded-2xl bg-gray-900 p-8 transition-all duration-500 hover:scale-[1.02] cursor-pointer"
          >
            <div className="relative z-10">
              <div className="mb-4">{icons[club.icon]}</div>
              <h3 className="text-2xl font-bold mb-3">{club.name}</h3>
              <p className="text-gray-400">{club.description}</p>
            </div>
            <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clubs;
