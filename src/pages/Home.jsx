import AccessCard from '../components/AccessCard';
import ImageSlider from '../components/ImageSlider';
import COOCard from '../components/COOCard';
import AcademicHeadCard from '../components/AcademicHeadCard';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';


export default function Home() {
  
  return (
    <div className="pt-16">
      {/* Image Slider */}
      <ImageSlider />

      {/* Meet our Leadership */}
      <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-black mb-12">
        Meet Our Leadership
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4">
        {/* COO Section */}
        <div className="flex flex-col items-center md:items-start">
          <COOCard
            image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736947135/CTO_rmphg5.jpg"
            name="Gopal Sharma"
            role="Chief Operating Officer"
            description="Gold Medalist from IIT-BHU, COO at Physics Wallah, passionate about learning, growth, and revolutionizing education."
            linkedin="https://www.linkedin.com/in/gopal-sharma-344290293/" 
          />
        </div>

      
{/* Academic Heads Section */}
<div className="flex flex-col gap-4 w-full">
  {/* Academic Head 1 */}
  <div className="flex flex-col w-full">
    <AcademicHeadCard
      image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736947135/SOT_en3k6m.jpg"
      name="Janishar Ali"
      role="Head, School of Technology"
      description="AVP at PhysicsWallah, ex-founder of CuriousJr (acquired by PhysicsWallah) and MindOrks, passionate innovator."
      linkedin="https://www.linkedin.com/in/janishar-ali/" // LinkedIn URL
    />
  </div>

  {/* Academic Head 2 */}
  <div className="flex flex-col w-full">
    <AcademicHeadCard
      image="https://res.cloudinary.com/djbjfsshe/image/upload/v1737342952/120A7616_sasg6x.jpg"
      name="Prakash Nimbalkar"
      role="Head, School of Management"
      description="Marketing Consultant, GTM & Startup Advisor, Mentor @ Startup Hub MeitY, Wadhwani Foundations, NASSCOM and Visiting Faculty."
      linkedin="https://www.linkedin.com/in/prakash-nimbalkar/" // LinkedIn URL
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
            image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736950547/leave_dcshti.jpg"
            buttonLink="https://pw.jotform.com/242621898990067" // Replace with actual link
          />
          <AccessCard
            title="Concession Form"
            description="Please fill out the form below to apply for a concession. Ensure all information is correct for timely approval of your request."
            image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736950544/concession_utyvyt.jpg"
            buttonLink="https://pw.jotform.com/242623356705961" 
          />
          <AccessCard
            title="Internship and Event"
            description="Please complete the form below to register for an internship or event. Accurate details will help us process your application efficiently."
            image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736950546/internship_uvoxo3.jpg"
            buttonLink="https://pw.jotform.com/243390511127045" // Replace with actual link
          />
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery></Gallery>
      {/* Footer */}
      <Footer />
    </div>
  );
}
