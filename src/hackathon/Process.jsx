import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

function Process() {
  const [activeStep, setActiveStep] = useState(-1);
  
  const steps = [
    {
      title: "Registration",
      description: "Sign up for the hackathon and create your participant profile",
      duration: "5 minutes"
    },
    {
      title: "Deep Dive Session from AWS SME",
      description: "Learn from AWS Subject Matter Experts about cloud technologies",
      duration: "2 hours"
    },
    {
      title: "Quiz",
      description: "Test your understanding with a comprehensive AWS knowledge quiz",
      duration: "30 minutes"
    },
    {
      title: "Hackathon",
      description: "Build innovative solutions using AWS services and technologies",
      duration: "48 hours"
    },
    {
      title: "Submission",
      description: "Submit your project with documentation and presentation materials",
      duration: "1 hour"
    },
    {
      title: "Result Announcement",
      description: "Winners will be announced and recognized for their achievements",
      duration: "Live Event"
    },
    {
      title: "Final Briefing",
      description: "Closing ceremony with feedback and next steps for participants",
      duration: "1 hour"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % (steps.length + 1));
    }, 2000);

    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            AWS Hackathon Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 rounded-full" 
               style={{ height: `${(steps.length - 1) * 180 + 100}px` }}></div>

          {/* Progress Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full transition-all duration-1000 ease-out"
            style={{ 
              height: activeStep >= 0 ? `${Math.min(activeStep * 180 + 50, (steps.length - 1) * 180 + 100)}px` : '0px'
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              const isCurrentStep = index === activeStep;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Card */}
                  <div className="w-5/12">
                    <div className={`relative group transition-all duration-500 ${isCurrentStep ? 'scale-105' : ''}`}>
                      <div 
                        className={`
                          relative overflow-hidden rounded-2xl p-6 border-2 shadow-lg transition-all duration-500
                          ${isActive 
                            ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-black border-2 shadow-blue-200' 
                            : 'bg-white border-gray-200 hover:border-blue-300'
                          }
                          hover:shadow-xl hover:-translate-y-1
                        `}
                      >
                        {/* Glow effect for active steps */}
                        {isActive && (
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-2xl"></div>
                        )}
                        
                        {/* Step number */}
                        <div 
                          className={`
                            absolute w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-500
                            ${isLeft ? '-right-4 -top-4' : '-left-4 -top-4'}
                            ${isActive 
                              ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' 
                              : 'bg-white text-blue-600 border-2 border-blue-200'
                            }
                          `}
                        >
                          {isActive ? <CheckCircle size={20} /> : index + 1}
                        </div>

                        <div className="relative z-10">
                          <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                            {step.title}
                          </h3>
                          <p className={`text-sm mb-3 leading-relaxed ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
                            {step.description}
                          </p>
                          <div className={`flex items-center text-xs font-medium ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>
                            <Clock size={14} className="mr-1" />
                            {step.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center connector */}
                  <div className="w-2/12 flex items-center justify-center">
                    <div className="flex items-center">
                      {/* Arrow pointing to center */}
                      {isLeft && (
                        <div className={`flex items-center transition-all duration-500 ${isActive ? 'text-orange-500' : 'text-blue-400'}`}>
                          <div className="w-6 h-0.5 bg-current"></div>
                          <ArrowRight size={16} className="ml-1" />
                        </div>
                      )}

                      {/* Center dot */}
                      <div 
                        className={`
                          w-5 h-5 rounded-full border-4 border-white shadow-lg mx-2 transition-all duration-500
                          ${isActive 
                            ? 'bg-gradient-to-br from-orange-400 to-orange-600 shadow-orange-200' 
                            : isLeft ? 'bg-blue-400' : 'bg-indigo-600'
                          }
                          ${isCurrentStep ? 'animate-pulse scale-125' : ''}
                        `}
                      ></div>

                      {/* Arrow pointing from center */}
                      {!isLeft && (
                        <div className={`flex items-center transition-all duration-500 ${isActive ? 'text-orange-500' : 'text-indigo-600'}`}>
                          <ArrowRight size={16} className="mr-1 rotate-180" />
                          <div className="w-6 h-0.5 bg-current"></div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty space */}
                  <div className="w-5/12"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Ready to Start?</h2>
          <p className="text-gray-700 mb-6">
            Join hundreds of developers in this exciting AWS cloud computing challenge!
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-indigo-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Register Now
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default Process;