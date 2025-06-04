import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

function Process() {
  const [activeStep, setActiveStep] = useState(-1);
  
  const steps = [
    {
      title: "Registration",
      description: "Register for the AWS Hackathon to secure your spot",
      duration: "2 minutes"
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
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const stepHeight = 220; // Estimated height of each step
    const offset = 700;    // Adjust based on header/padding above first step

    const scrolled = scrollTop - offset;
    const currentStep = Math.floor(scrolled / stepHeight);

    setActiveStep(Math.max(-1, Math.min(currentStep, steps.length - 1)));
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Set initial

  return () => window.removeEventListener('scroll', handleScroll);
}, [steps.length]);



  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
            AWS Hackathon Journey
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these steps to participate in our AWS Hackathon and showcase your cloud computing skills!
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop: Center Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 rounded-full" 
               style={{ height: `${(steps.length - 1) * 220 + 100}px` }}></div>

          {/* Desktop: Progress Line */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
            style={{ 
              height: activeStep >= 0 ? `${Math.min(activeStep * 220 + 100, (steps.length - 1) * 220 + 100)}px` : '0px'
            }}
          ></div>

          {/* Mobile: Left Vertical Line */}
          <div className="md:hidden absolute left-4 top-0 w-1 bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-600 rounded-full" 
               style={{ height: `${(steps.length - 1) * 220  + 80}px` }}></div>

          {/* Mobile: Progress Line */}
          <div 
            className="md:hidden absolute left-4 top-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full transition-all duration-500 ease-out"
            style={{ 
              height: activeStep >= 0 ? `${Math.min(activeStep * 140 + 40, (steps.length - 1) * 220 + 80)}px` : '0px'
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const isActive = index <= activeStep;
              const isCurrentStep = index === activeStep;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className={`flex items-center w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  {/* Desktop Cards */}
                  <div className="hidden md:block w-5/12">
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
                            ${isLeft ? '-right-3 -top-3' : '-left-3 -top-3'}
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

                  {/* Desktop Center connector */}
                  <div className="hidden md:flex w-2/12 items-center justify-center">
                    <div className="flex items-center">
                      {/* Line pointing to center */}
                      {isLeft && (
                        <div className={`w-8 h-0.5 transition-all duration-500 ${isActive ? 'bg-orange-500' : 'bg-blue-400'}`}></div>
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

                      {/* Line pointing from center */}
                      {!isLeft && (
                        <div className={`w-8 h-0.5 transition-all duration-500 ${isActive ? 'bg-orange-500' : 'bg-indigo-600'}`}></div>
                      )}
                    </div>
                  </div>

                  {/* Desktop Empty space */}
                  <div className="hidden md:block w-5/12"></div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start w-full">
                    {/* Timeline dot and connector */}
                    <div className="flex flex-col items-center mr-4">
                      {/* Center dot */}
                      <div 
                        className={`
                          w-5 h-5 rounded-full border-4 border-white shadow-lg transition-all duration-500 z-10 relative mt-14
                          ${isActive 
                            ? 'bg-gradient-to-br from-orange-400 to-orange-600 shadow-orange-200' 
                            : 'bg-blue-400'
                          }
                          ${isCurrentStep ? 'animate-pulse scale-125' : ''}
                        `}
                      ></div>
                      
                      {/* Horizontal connector line */}
                      <div className={`w-8 h-0.5 transition-all duration-500 ${isActive ? 'bg-orange-500' : 'bg-blue-400'}`}></div>
                    </div>

                    {/* Mobile Card */}
                    <div className="flex-1 pb-8">
                      <div className={`relative group transition-all duration-500 ${isCurrentStep ? 'scale-105' : ''}`}>
                        <div 
                          className={`
                            relative overflow-hidden rounded-2xl p-4 border-2 shadow-lg transition-all duration-500
                            ${isActive 
                              ? 'bg-gradient-to-br from-blue-600 to-indigo-700 border-orange-400 border-2 shadow-blue-200' 
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
                              absolute w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-lg transition-all duration-500
                              -right-2 -top-2
                              ${isActive 
                                ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white' 
                                : 'bg-white text-blue-600 border-2 border-blue-200'
                              }
                            `}
                          >
                            {isActive ? <CheckCircle size={16} /> : index + 1}
                          </div>

                          <div className="relative z-10">
                            <h3 className={`text-lg font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                              {step.title}
                            </h3>
                            <p className={`text-sm mb-2 leading-relaxed ${isActive ? 'text-blue-100' : 'text-gray-600'}`}>
                              {step.description}
                            </p>
                            <div className={`flex items-center text-xs font-medium ${isActive ? 'text-blue-200' : 'text-blue-600'}`}>
                              <Clock size={12} className="mr-1" />
                              {step.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;