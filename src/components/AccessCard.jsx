import PropTypes from 'prop-types';

function AccessCard({ title, description, image, buttonLink }) {
  return (
    <div className="bg-white rounded-lg shadow-lg transform transition-transform hover:scale-105 group">
      {/* Image container with hover effects */}
      <div className="relative overflow-hidden">
        {/* Black transparent overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-70 z-10" />
        {/* Image with zoom effect */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
        <p className="text-gray-500 mb-6">{description}</p>
        <a
          href={buttonLink}
          className="bg-black text-white px-6 py-3 hover:bg-gray-800 text-center block w-full transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Access Form
        </a>
      </div>
    </div>
  );
}

AccessCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
};

export default AccessCard;
