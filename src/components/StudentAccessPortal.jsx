import React from 'react';
import AccessCard from "./AccessCard";

const StudentAccessPortal = () => {
  return (
    <section className="relative py-16 px-4 tech-pattern-bg tech-gradient">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')] opacity-10 bg-cover bg-center" />
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-black mb-12">
          Student Access Portal
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <AccessCard
            title="Leave Request Form"
            description="Kindly complete the form below to request a leave. Ensure all details are accurate for smooth processing of your application."
            image="https://res.cloudinary.com/dkxongd5z/image/upload/v1736950547/leave_dcshti.jpg"
            buttonLink="https://pw.jotform.com/242621898990067"
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
            buttonLink="https://pw.jotform.com/243390511127045"
          />
        </div>
      </div>
    </section>
  );
}

export default StudentAccessPortal;