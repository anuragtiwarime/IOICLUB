import AccessCard from '../components/AccessCard';
import ImageSlider from '../components/ImageSlider';
import COOCard from '../components/COOCard';
import AcademicHeadCard from '../components/AcademicHeadCard';
import COO from '../assets/CTO.jpeg';
import img4 from '../assets/img4.jpg';
import img8 from '../assets/img8.JPG';
import img9 from '../assets/img9.JPG';
import SOM from '../assets/SOM.jpeg';
import SOT from '../assets/SOT.jpeg';
export default function Home() {
  return (
    <div className="pt-16">
      <ImageSlider />
      <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-black mb-12">
        Meet Our Leadership
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        {/* COO Section */}
        <div className="flex flex-col items-center md:items-start">
          <COOCard
            image={COO}
            name="Gopal Sharma"
            role="Chief Operating Officer"
            description="Gold Medalist from IIT-BHU, COO at Physics Wallah, passionate about learning, growth, and revolutionizing education."
            linkedin="https://www.linkedin.com/in/gopal-sharma-344290293/" 
          />
        </div>

       {/* Academic Heads Section */}
{/* Academic Heads Section */}
<div className="flex flex-col gap-4 w-full">
  {/* Academic Head 1 */}
  <div className="flex flex-col w-full">
    <AcademicHeadCard
      image={SOT}
      name="Janishar Ali"
      role="Head, School of Technology"
      description="AVP at PhysicsWallah, ex-founder of CuriousJr (acquired by PhysicsWallah) and MindOrks, passionate innovator."
      linkedin="https://www.linkedin.com/in/janishar-ali/" // LinkedIn URL
    />
  </div>

  {/* Academic Head 2 */}
  <div className="flex flex-col w-full">
    <AcademicHeadCard
      image={SOM}
      name="Dr. Sapna Nibsaiya"
      role="Head, School of Management"
      description="Experienced academic professional, trainer, and strategist with 17+ years enhancing education, skills, and career prospects."
      linkedin="https://www.linkedin.com/in/sapnanibsaiya/" // LinkedIn URL
    />
  </div>
</div>


      </div>
    </section>




      {/* Student Access Portal Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-black mb-12">
          Student Access Portal
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <AccessCard
            title="Leave Request Form"
            description="Kindly complete the form below to request a leave. Ensure all details are accurate for smooth processing of your application."
            image="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600"
            buttonLink="https://pw.jotform.com/242621898990067" // Replace with actual link
          />
          <AccessCard
            title="Concession Form"
            description="Please fill out the form below to apply for a concession. Ensure all information is correct for timely approval of your request."
            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600"
            buttonLink="https://pw.jotform.com/242623356705961" 
          />
          <AccessCard
            title="Internship and Event"
            description="Please complete the form below to register for an internship or event. Accurate details will help us process your application efficiently."
            image="https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?auto=format&fit=crop&q=80&w=600"
            buttonLink="https://pw.jotform.com/243390511127045" // Replace with actual link
          />
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-12">Life at PW IOI</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src={img4}
            alt="College Campus"
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src={img8}
            className="w-full h-48 object-cover rounded-lg"
          />
          <img
            src={img9}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <div className="text-center mt-8">
          <a
            href="https://drive.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white py-2 px-6  hover:bg-gray-800 transition-colors"
          >
            View More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <p>12th Floor, Brigade Signature Tower,</p>
              <p>Old Madras Rd, Sannatammanahalli,</p>
              <p>Bengaluru, Karnataka 560049</p>
              <p>Email: studentsuccess@pwioi.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
              <li>
                  <a
                    href="https://pwioi.com/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Holidays
                  </a>
                </li>
                <li>
                  <a
                    href="https://pwioi.com/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://pwioi.com/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Admissions
                  </a>
                </li>
                <li>
                  <a
                    href="https://pwioi.com/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Academic Programs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/watch?v=xL8op-oqRTg"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Campus Life
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://www.youtube.com/@PW-IOI"
                    className="hover:text-gray-300"
                    target="_blank"
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/pw_ioi/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/school/pw-ioi/posts/"
                    target="_blank"
                    className="hover:text-gray-300"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 PW Institute of Innovation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
