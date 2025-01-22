import AccessCard from "./AccessCard";
const StudentAccessPortal = ()=>{
  return(
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
  );
}
export default StudentAccessPortal;