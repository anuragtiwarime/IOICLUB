import COOCard from "./COOCard";
import AcademicHeadCard from "./AcademicHeadCard";
const MeetOurLeaderShip = () => {
  return (
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

  );
}

export default MeetOurLeaderShip;