import PropTypes from 'prop-types';

function AccessCard({ title, description, image, buttonLink }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105">
      <img src={image} alt={title} />
      <h3 className="text-xl font-semibold text-black mb-4">{title}</h3>
      <p className="text-gray-500 mb-6">{description}</p>
      <a
          href={buttonLink}
          className="bg-black text-white px-6 py-3 hover:bg-gray-800 text-center block w-full"
          target="_blank"
        >
          Access Form
        </a>
    </div>
  );
}

AccessCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AccessCard;
