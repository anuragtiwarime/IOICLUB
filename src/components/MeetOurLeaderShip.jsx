import React from 'react';
import COOCard from "./COOCard";
import AcademicHeadCard from "./AcademicHeadCard";

const MeetOurLeadership = () => {
  return (
    <section className="relative py-16 px-4 tech-pattern-bg tech-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Meet Our Leadership
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* COO Section */}
          <div className="flex flex-col items-center md:items-start h-full">
            <COOCard
              image="https://res.cloudinary.com/dkxongd5z/image/upload/v1737619426/IMG_4763_jtxlag.jpg"
              name="Gopal Sharma"
              role="Chief Operating Officer"
              description="Gold Medalist from IIT-BHU, COO at Physics Wallah, passionate about learning, growth, and revolutionizing education."
              linkedin="https://www.linkedin.com/in/gopal-sharma-344290293/"
            />
          </div>

          {/* Academic Heads Section */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col w-full">
              <AcademicHeadCard
                image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736948072/ali_z1qegf.png"
                name="Janishar Ali"
                role="Head, School of Technology"
                description="AVP at PhysicsWallah, ex-founder of CuriousJr (acquired by PhysicsWallah) and MindOrks, passionate innovator."
                linkedin="https://www.linkedin.com/in/janishar-ali/"
              />
            </div>

            <div className="flex flex-col w-full">
              <AcademicHeadCard
                image="https://res.cloudinary.com/dkxongd5z/image/upload/v1747823261/PN_New_aawjdb.jpg"
                name="Prakash Nimbalkar"
                role="Head, School of Management"
                description="Marketing Consultant, GTM & Startup Advisor, Mentor @ Startup Hub MeitY, Wadhwani Foundations, NASSCOM and Visiting Faculty."
                linkedin="https://www.linkedin.com/in/prakash-nimbalkar/"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MeetOurLeadership;