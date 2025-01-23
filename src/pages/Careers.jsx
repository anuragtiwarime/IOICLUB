import React from "react";
import Footer from "../components/Footer";
import { Calendar, Users, IndianRupee, ArrowRight } from "lucide-react";

const positions = [
  {
    title: "Frontend Developer Intern",
    vacancies: 2,
    salary: 8000,
    description: "Join our frontend team and work on exciting projects using modern technologies like React, TypeScript, and Tailwind CSS.",
    status: "closed",
    department: "Engineering",
    duration: "3 months",
    formLink:""
  },
  {
    title: "Student Brand Strategist Intern",
    vacancies: 1,
    salary: 8000,
    description: "Help shape our brand identity and create impactful marketing strategies for our educational initiatives.",
    status: "closed",
    department: "Marketing",
    duration: "6 months",
    formLink:""
  },
  {
    title: "Teaching Assistant Intern",
    vacancies: 1,
    salary: 8000,
    description: "Support our faculty in delivering high-quality education and assist students in their learning journey.",
    status: "closed",
    department: "Education",
    duration: "4 months",
    formLink:""
  },
  // {
  //   title: "Teaching Assistant Intern",
  //   vacancies: 1,
  //   salary: 8000,
  //   description: "Support our faculty in delivering high-quality education and assist students in their learning journey.",
  //   status: "open",
  //   department: "Education",
  //   duration: "4 months",
  //   formLink:"https://forms.gle/jVTfzpFhXcZSmCft6"
  // }
];

export default function Careers() {
function handleApply(formLink){
  if(formLink){
    window.open(formLink,"_blank");
  }
  else{
    console.error("No form link provided!");
  }
}
  
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative pt-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50" />
          <div className="relative max-w-7xl mx-auto">
          <h1 className="text-4xl text-center font-bold text-gray-800 mb-3">
            Careers
          </h1>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-2"></div>
            <p className="text-gray-600 text-center max-w-2xl mx-auto text-lg mb-4">
            "Empowering Your Future with Exceptional Career Opportunities"
            </p>
          </div>
        </div>

        {/* Job Listings */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                        {position.department}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h2>
                    </div>
                    <button
                      className={`mt-4 md:mt-0 px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                                ${position.status === "open" 
                                  ? "bg-green-500 text-white hover:bg-green-400" 
                                  : "bg-red-500 text-gray-black cursor-not-allowed"}`}
                      disabled={position.status === "closed"}
                      onClick={position.status==="open" ?  () => handleApply(position.formLink):undefined}
                    >
                      {position.status === "open" ? (
                        <>
                          Apply Now
                          <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        "Closed"
                      )}
                    </button>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>

                  <div className="flex flex-wrap gap-6 text-gray-500">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      <span>{position.vacancies} position{position.vacancies > 1 ? 's' : ''}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span>{position.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="w-5 h-5" />
                      <span>{position.salary.toLocaleString('en-IN')}/month</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                  <div 
                    className={`h-full transition-all duration-500 ease-out
                              ${position.status === "open" 
                                ? "bg-black group-hover:bg-gray-800 w-full" 
                                : "bg-gray-300 w-0"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
