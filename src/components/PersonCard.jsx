import React from 'react';

export default function PersonCard({ image, name, role, description, email }) {
  return React.createElement(
    'div',
    { className: 'bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105' },
    React.createElement('img', {
      src: image,
      alt: name,
      className: 'w-32 h-32 rounded-full mx-auto mb-4 object-cover',
    }),
    React.createElement(
      'h3',
      { className: 'text-xl font-semibold text-center text-black mb-2' },
      name
    ),
    React.createElement(
      'p',
      { className: 'text-gray-600 text-center font-medium mb-2' },
      role
    ),
    React.createElement(
      'p',
      { className: 'text-gray-500 text-center mb-4' },
      description
    ),
    React.createElement(
      'p',
      { className: 'text-blue-600 text-center' },
      email
    )
  );
}
