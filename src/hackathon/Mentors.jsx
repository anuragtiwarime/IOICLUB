import React from 'react';
import { MapPin, Briefcase, Award, Users, Sparkles } from 'lucide-react';

function Mentors() {
  const mentors = [
    {
      name: "Akanksha Rai Sharma",
      role: "AWS SME / Trainer",
      organization: "AWS",
      designation: "Technical Program Manager",
      image: "../public/Akanksha.jpg", 
      brief: "Akanksha Rai Sharma is currently serving as the Technical Program Manager for AWS Academy in India and South Asia. She is a double AWS-certified professional with over 6 years of experience working on various AWS products including CloudFormation, ECS, IAM, ECR, System Manager, Amazon Bedrock, and Amazon Sagemaker Jumpstart. She holds an MBA from IIM Udaipur and has rich experience in Cloud Support. She has been conducting faculty as well as student training sessions on various cloud and allied topics for almost 5 years now.",
      specialties: ["AWS CloudFormation", "Amazon Bedrock", "System Manager", "Cloud Support"],
      experience: "6+ Years",
      education: "MBA - IIM Udaipur"
    },
    {
      name: "Abhijit Shinde",
      role: "Industry Expert",
      organization: "Centilytics",
      designation: "Data Scientist",
      image: "../public/Abhijit.jpg", // Replace with actual image path
      brief: "Abhijit is a Data Scientist specializing in NLP, ML and Generative AI with a B.Tech. from IIT Kharagpur. He leads innovative projects such as multimedia translation apps and automated meeting tools, enhancing efficiency and productivity through data-driven solutions. His expertise includes building sophisticated AI systems and interactive applications to streamline complex processes.",
      specialties: ["NLP & ML", "Generative AI", "Data Science", "AI Systems"],
      experience: "5+ Years",
      education: "B.Tech - IIT Kharagpur"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mb-6">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-800 bg-clip-text text-transparent">
            Meet Our Mentors
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
        </div>

        {/* Mentors Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {mentors.map((mentor, index) => (
            <div key={index} className="group">
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-indigo-100/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>

                {/* Content Container */}
                <div className="relative z-10 p-8">
                  {/* Profile Image Section */}
                  <div className="flex flex-col items-center mb-8">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 p-1 shadow-lg">
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                          {/* Replace this div with actual image */}
                          <img
  src={mentor.image}
  alt={mentor.name}
  className="w-full h-full object-cover"
/>

                        </div>
                      </div>
                      {/* Floating Badge */}
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                        <Sparkles className="w-3 h-3 inline mr-1" />
                        Expert
                      </div>
                    </div>

                    {/* Name and Title */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{mentor.name}</h3>
                      <div className="space-y-2">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
                          <Award className="w-4 h-4 mr-2" />
                          {mentor.role}
                        </div>
                        <div className="flex flex-wrap justify-center gap-2">
                          <div className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            <Briefcase className="w-3 h-3 mr-1" />
                            {mentor.designation}
                          </div>
                          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                            <MapPin className="w-3 h-3 mr-1" />
                            {mentor.organization}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
}

export default Mentors;