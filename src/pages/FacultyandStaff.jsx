import SOM from '../assets/SOM.jpeg';
import Kaibalya from '../assets/Kaibalya.JPG';
import Shubham from '../assets/Shubham.jpeg';
import Dipanshu from '../assets/Dipanshu.jpg';
import Man from '../assets/man.webp'
import Women from '../assets/women.jpeg'
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
      image: Man, 
      name: "Arjun Singh",
      about: "I am a technical trainer and software engineer with over 15 years of experience in teaching and software engineering. I enjoy sharing knowledge to help others grow and have worked with a mix of startups and big tech companies in India and globally. A traveler and chess enthusiast, I also find joy in swimming and reading philosophy. I value simplicity and a thoughtful approach in both work and life.",
      
    },
    {
      image: Man, 
      name: "Shagun Gaur",
      about: "With nine years of experience teaching finance at top institutes like IIT Bombay, IIM Indore, NMIMS, TISS, and Mumbai University, I’ve honed my expertise as an award-winning educator and financial strategist. My contributions to education earned recognition from the Governor of Maharashtra and the honor of meeting the President of India, Mr. Ram Nath Kovind.Beyond academia, I’ve worked with global giants like YouTube and Google and consulted for the Big 4, seamlessly blending academic rigor with industry insights. Passionate about fostering critical thinking and collaboration, I aim to create transformative, student-centered learning experiences.",
     
    },
    {
      image: Women,
      name:"Anisha Koshy",
      about:"Anisha Koshy brings a dynamic and compassionate approach to teaching English, transforming classroom spaces into vibrant landscapes of intellectual discovery. As an alumna of Lady Shri Ram College, University of Delhi, where she completed her master's degree, Anisha believes that language is more than a subject—it's a bridge that connects diverse experiences, ideas, and imaginations. She sees every classroom discussion as an opportunity to expand horizons, challenge perspectives, and nurture critical thinking.Outside the classroom, she enjoys discovering new cultures and sharing her adventures through storytelling."
    },
    {
      image: Women,
      name:"Kinjal Sengupta",
      about:"I’m proud to lead the Career Excellence team at PWIOI, where we’re focused on empowering students to build confidence, communication and become career-ready. Over the past 8 years, I’ve mentored and trained more than 10,000 individuals in corporate training, soft skills, and ESL. As a visiting faculty at Symbiosis International University, I’ve had the opportunity to guide young minds and inspire their growth. I believe in staying curious, and making every learning journey exciting, fun, and impactful."
    },
    {
      image: SOM,
      name:"Dr. Sapna Nibsaiya",
      about:"Educator with over 18 years of extensive experience in management education and curriculum development. Author of 2 books, have presented numerous research papers at both national and international levels, also won the Best-Case Study award from the Confederation of Indian Industry, Mumbai, in February 2017, for a groundbreaking case on Transgenders Inclusive Workforce. Certified strategy professional from IIM Kozhikode."
    },
    {
      image: Man,
      name:"Nitin Manjunath",
      about:"I am a BTech graduate from VTU, 2014, passed out. I had a lot of liking for developing full-stack applications and was also passionate about teaching. Over the past 10 years, I have worked with tech leads and also been a part of various edtech leaders and trained more than 20,000 students both in online and offline modes. My passion for teaching and making the tough concepts simpler made me take up teaching as a profession."
    },
    {
      image: Man,
      name:"Saurabh Moharikar",
      about:"I am a data scientist with 17 years of industry experience spanning across 17 years in test prep and Ed-Tech industries. I am a huge fan of regression, classification models and data visualisation. Proficient in tools like python, power bi, Tableau, MS Excel and SQL.I am a self motivated person and an avid reader. I love sharing knowledge and help people become professionally better than what they are and more importantly in the process becoming professionally better myself."
    },
    {
      image: Man,
      name:"Syed Zabi Ulla",
      about:"7 Years of imparting Technical Education | Certified FSD Instructor | Enabling Graduates secure Employment in Tech Roles.A Software Engineer by Qualification, A Technical-Training Specialist by Profession, A Technocrat by Choice, A Technophile by Passion and lastly, A GURU by Heart."
    },
    {
      image: Man,
      name:"Janishar Ali Anwar",
      about:"My name is Ali, and I graduated from IIT-BHU (2010-2015) with a Dual Degree. I am a programmer and tech entrepreneur. Starting as a self-taught coder, I went on to found companies like Mindorks and CuriousJr, impacting over 10 million users. Over the past 10 years of my career, I have witnessed technology evolve and have helped companies solve their most challenging problems."
    }


    
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
            <p className="text-gray-700 text-sm text-justify">{faculty.about}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default FacultyandStaff;
