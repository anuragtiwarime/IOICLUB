import React from 'react';
import { Linkedin } from 'lucide-react';

const COOCard = ({ image, name, role, description, linkedin }) => {
  return (
    <div className="w-full h-full glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-[300px] object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="text-white/90">{role}</p>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-4">{description}</p>
        <a 
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
          <span>Connect on LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default COOCard;