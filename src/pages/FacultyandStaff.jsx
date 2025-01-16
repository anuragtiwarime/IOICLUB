

import Footer from '../components/Footer';
const FacultyandStaff = () => {
  const facultyData = [
    
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736947134/Shubham_ptqlrv.jpg", 
      name: "Shubham Gautam",
      about: "A passionate learner who enjoys computer science, algorithms, programming, and mathematics. Nothing brings me greater joy than helping students in mastering computer science and achieve their dream success. I am on a mission to simplify computer science concepts for various learners and empower them to become efficient problem solvers.",
      
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736947134/Dipanshu_hyovcz.jpg", 
      name: "Dipanshu Dayal",
      about: "I am Btech graduate from NIT Warangal, 2016 passout. I had a lot of liking for mathematics and passion for teaching. So the combination got me into the field of teaching and here I am, 7 years down the line still exploring into the vast jungle. Other than maths and teaching I have developed a liking for gym and regular workout to keep fit.",
     
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736947822/pic_-_Arjun_Thakur_1_ruypmk.jpg", 
      name: "Arjun Thakur",
      about: "I am a technical trainer and software engineer with over 15 years of experience in teaching and software engineering. I enjoy sharing knowledge to help others grow and have worked with a mix of startups and big tech companies in India and globally. A traveler and chess enthusiast, I also find joy in swimming and reading philosophy. I value simplicity and a thoughtful approach in both work and life.",
      
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736947135/Kaibalya_yr4ttd.jpg", 
      name: "Kaibalya Biswal",
      about: "He is a highly motivated individual, driven to do the best by applying his technical skills, enthusiasm, dedication, responsibility followed by great work ethic. Professor at PW-Institute of Innovation. Skilled in DSML, Tableau, Statistics. Did his Masters degree in applied physics and after that got hands on 2 years of experience in Data Science and Machine learning. Apart from educational degree and career building, he has represented at district level intra club cricket tournament under vision of Odisha cricket association (OCA) affiliated by BCCI.",
      
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948734/120A5975_-_Shagun_Gaur_ivhmch.jpg", 
      name: "Shagun Gaur",
      about: "With nine years of experience teaching finance at top institutes like IIT Bombay, IIM Indore, NMIMS, TISS, and Mumbai University, I’ve honed my expertise as an award-winning educator and financial strategist. My contributions to education earned recognition from the Governor of Maharashtra and the honor of meeting the President of India, Mr. Ram Nath Kovind.Beyond academia, I’ve worked with global giants like YouTube and Google and consulted for the Big 4, seamlessly blending academic rigor with industry insights. Passionate about fostering critical thinking and collaboration, I aim to create transformative, student-centered learning experiences.",
     
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948599/image1_-_Anisha_Koshy_ypvmqg.jpg",
      name:"Anisha Koshy",
      about:"Anisha Koshy brings a dynamic and compassionate approach to teaching English, transforming classroom spaces into vibrant landscapes of intellectual discovery. As an alumna of Lady Shri Ram College, University of Delhi, where she completed her master's degree, Anisha believes that language is more than a subject—it's a bridge that connects diverse experiences, ideas, and imaginations. She sees every classroom discussion as an opportunity to expand horizons, challenge perspectives, and nurture critical thinking.Outside the classroom, she enjoys discovering new cultures and sharing her adventures through storytelling."
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948087/Untitled_design_2_-_Kinjal_Sengupta_ddjfnl.png",
      name:"Kinjal Sengupta",
      about:"I’m proud to lead the Career Excellence team at PWIOI, where we’re focused on empowering students to build confidence, communication and become career-ready. Over the past 8 years, I’ve mentored and trained more than 10,000 individuals in corporate training, soft skills, and ESL. As a visiting faculty at Symbiosis International University, I’ve had the opportunity to guide young minds and inspire their growth. I believe in staying curious, and making every learning journey exciting, fun, and impactful."
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948074/120A1776_-_Sapna_Nibsaiya_ddsbli.jpg",
      name:"Dr. Sapna Nibsaiya",
      about:"Educator with over 18 years of extensive experience in management education and curriculum development. Author of 2 books, have presented numerous research papers at both national and international levels, also won the Best-Case Study award from the Confederation of Indian Industry, Mumbai, in February 2017, for a groundbreaking case on Transgenders Inclusive Workforce. Certified strategy professional from IIM Kozhikode."
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948407/120A2514_-_Nitin_M_mkikdi.jpg",
      name:"Nitin Manjunath",
      about:"I am a BTech graduate from VTU, 2014, passed out. I had a lot of liking for developing full-stack applications and was also passionate about teaching. Over the past 10 years, I have worked with tech leads and also been a part of various edtech leaders and trained more than 20,000 students both in online and offline modes. My passion for teaching and making the tough concepts simpler made me take up teaching as a profession."
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736947822/pic_-_Arjun_Thakur_1_ruypmk.jpg",
      name:"Saurabh Moharikar",
      about:"I am a data scientist with 17 years of industry experience spanning across 17 years in test prep and Ed-Tech industries. I am a huge fan of regression, classification models and data visualisation. Proficient in tools like python, power bi, Tableau, MS Excel and SQL.I am a self motivated person and an avid reader. I love sharing knowledge and help people become professionally better than what they are and more importantly in the process becoming professionally better myself."
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948073/Syed_Zabi_-_Syed_Zabi_Ulla_mimpqu.jpg",
      name:"Syed Zabi Ulla",
      about:"7 Years of imparting Technical Education | Certified FSD Instructor | Enabling Graduates secure Employment in Tech Roles.A Software Engineer by Qualification, A Technical-Training Specialist by Profession, A Technocrat by Choice, A Technophile by Passion and lastly, A GURU by Heart."
    },
    {
      image: "https://res.cloudinary.com/dkxongd5z/image/upload/v1736948072/ali_z1qegf.png",
      name:"Janishar Ali Anwar",
      about:"My name is Ali, and I graduated from IIT-BHU (2010-2015) with a Dual Degree. I am a programmer and tech entrepreneur. Starting as a self-taught coder, I went on to found companies like Mindorks and CuriousJr, impacting over 10 million users. Over the past 10 years of my career, I have witnessed technology evolve and have helped companies solve their most challenging problems."
    },
    {
      image:"https://res.cloudinary.com/dkxongd5z/image/upload/v1736948981/120A8008_cnpqzn.jpg",
      name :"Satya Sai Neerukonda",
      about:""
    }


    
  ];

  return (
    <>
    <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8 text-center">Faculty and Staff</h1>

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
  <h3 className="text-lg lg:mt-10 font-semibold text-gray-800 mb-2">{faculty.name}</h3>
  <p className="text-gray-600 text-sm text-justify leading-relaxed">
    {/* Faculty about content here */}
  </p>
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
