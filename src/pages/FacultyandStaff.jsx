import SOM from '../assets/SOM.jpeg';
import Kaibalya from '../assets/Kaibalya.JPG';
import Shubham from '../assets/Shubham.jpeg';
import Dipanshu from '../assets/Dipanshu.jpg';

const FacultyandStaff = () => {
  const facultyData = [
    {
      image: Kaibalya,
      name: "Kaibalya Biswal",
      about: "He is a highly motivated individual, driven to do the best by applying his technical skills, enthusiasm, dedication, responsibility followed by great work ethic. Professor at PW-Institute of Innovation. Skilled in DSML, Tableau, Statistics. Did his Masters degree in applied physics and after that got hands on 2 years of experience in Data Science and Machine learning. Apart from educational degree and career building, he has represented at district level intra club cricket tournament under vision of Odisha cricket association (OCA) affiliated by BCCI.",
    },
    {
      image: Shubham,
      name: "Shubham Gautam",
      about: "A passionate learner who enjoys computer science, algorithms, programming, and mathematics. Nothing brings me greater joy than helping students in mastering computer science and achieve their dream success. I am on a mission to simplify computer science concepts for various learners and empower them to become efficient problem solvers.",
    },
    {
      image: Dipanshu,
      name: "Dipanshu Dayal",
      about: "I am Btech graduate from NIT Warangal, 2016 passout. I had a lot of liking for mathematics and passion for teaching. So the combination got me into the field of teaching and here I am, 7 years down the line still exploring into the vast jungle. Other than maths and teaching I have developed a liking for gym and regular workout to keep fit.",
    },
    {
      image: SOM,
      name: "Arjun Singh",
      about: "I am a technical trainer and software engineer with over 15 years of experience in teaching and software engineering. I enjoy sharing knowledge to help others grow and have worked with a mix of startups and big tech companies in India and globally. A traveler and chess enthusiast, I also find joy in swimming and reading philosophy. I value simplicity and a thoughtful approach in both work and life.",
    },
    // Add other faculty members here
  ];

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8 text-center">Faculty and Staff</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyData.map((faculty, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105"
          >
            <div className="flex flex-col items-center text-center">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
            </div>
            <div>
              <p className="text-gray-700 text-sm">{faculty.about}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyandStaff;
