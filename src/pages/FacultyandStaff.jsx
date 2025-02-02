
import { FaLinkedin } from 'react-icons/fa'; 
import Footer from '../components/Footer';
import facultyData from '../data/facultyAndStaff.json'
const FacultyandStaff = () => {

 

  return (
    <>
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
    <h1 className="text-4xl text-center font-bold text-gray-800 mb-3">
            Our Faculty and Staff
          </h1>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {facultyData.map((faculty, index) => (
      <div
        key={index}
        className="bg-white p-6 rounded-lg shadow-lg border hover:shadow-2xl transform transition-transform hover:scale-105"
      >
        {/* Flex for desktop and default column for mobile */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-28 h-28 rounded-full mb-4 lg:mb-0 lg:mr-6 object-cover border-4 border-gray-200 shadow-sm"
          />
          <div>
            <div className="flex items-center justify-center lg:justify-start">
              <h3 className="text-lg lg:mt-6 font-semibold text-gray-800 mb-0">
                {faculty.name}
              </h3>
              <a
                href={faculty.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 lg:mt-6 text-gray-800 hover:text-gray-600 cursor-pointer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className="text-gray-600 font-medium">{faculty.subject}</p>
          </div>
        </div>
        <div className="text-gray-600 text-sm text-justify leading-relaxed mt-4">
          {faculty.about}
        </div>
      </div>
    ))}
  </div>
</div>
<Footer />

  </>
  );
  
}

export default FacultyandStaff;
