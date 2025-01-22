import React from 'react';
import { Linkedin } from 'lucide-react';

const AcademicHeadCard = ({ image, name, role, description, linkedin }) => {
  return (
    <div className="w-full glass-effect rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-48 md:h-full object-cover object-center"
          />
        </div>
        <div className="md:w-2/3 p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-blue-600 font-medium mb-3">{role}</p>
          <p className="text-gray-600 mb-4 text-sm">{description}</p>
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
    </div>
  );
};

export default AcademicHeadCard;