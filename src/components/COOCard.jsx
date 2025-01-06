import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function COOCard({ image, name, role, description, linkedin }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col justify-between h-full items-center">
      {/* Adjusted image size */}
      <img
        src={image}
        alt={name}
        className="w-52 h-52 rounded-full mx-auto mb-4 object-cover" // Increased size here
      />
      <h3 className="text-xl font-semibold text-center text-black mb-2">{name}</h3>
      <p className="text-gray-600 text-center font-medium mb-2">{role}</p>
      <p className="text-gray-500 text-center mb-4">{description}</p>

      {/* LinkedIn Button with width of the icon */}
      <a
        href={linkedin}
        className="bg-black text-white p-2 rounded-full hover:bg-gray-800  items-center"
        target="_blank"
        rel="noopener noreferrer"
        style={{ width: '2.5rem', padding: '0.5rem' }} // Adjust padding and width to icon size
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
