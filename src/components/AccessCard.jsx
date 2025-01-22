import React from 'react';
import { ExternalLink } from 'lucide-react';

const AccessCard = ({ title, description, image, buttonLink }) => {
  return (
    <div className="glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <p className="text-gray-600 mb-6 text-sm">{description}</p>
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Access Form
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default AccessCard;