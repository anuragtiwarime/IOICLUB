import PropTypes from 'prop-types';

function AccessCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
      <img src={image} alt={title} />
      <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      <button className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">
        Apply
      </button>
    </div>
  );
}

AccessCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AccessCard;
