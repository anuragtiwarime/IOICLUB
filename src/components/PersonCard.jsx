import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

export default function PersonCard({ image, name, role, description, linkedin }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 flex flex-col justify-between h-full">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold text-center text-black mb-2">{name}</h3>
      <p className="text-gray-600 text-center font-medium mb-2">{role}</p>
      <p className="text-gray-500 text-center mb-4">{description}</p>
      <a
        href={linkedin}
        className="bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700 flex justify-center "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}


