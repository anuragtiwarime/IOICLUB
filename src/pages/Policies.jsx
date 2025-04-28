import React, { useState } from 'react';
import COC from '../assets/COC.pdf';
import AP from '../assets/AP.pdf';
import SP from '../assets/SP.pdf';
import LP from '../assets/LP.pdf';
import KlibRule from '../assets/KlibRule.pdf';
import SexualHarassment from '../assets/SexualHarassment.pdf';
import AntiRaggingPolicy from '../assets/AntiRaggingPolicy.pdf';
import SocailMediaPolicy from '../assets/SocialMedia.pdf';
import CSP from '../assets/CSP.pdf';
import Footer from '../components/Footer';

export default function Policies() {
  const [modalContent, setModalContent] = useState(null);

  const policies = [
    {
      title: 'Code of Conduct',
      description: 'Learn about the guidelines and rules to ensure a respectful and productive academic environment.',
      file: COC,
    },
    {
      title: 'Attendance Policy',
      description: 'Understand the importance of attendance and the criteria for maintaining eligibility.',
      file: AP,
    },
    {
      title: 'Scholarship Policy',
      description: 'Explore the eligibility requirements and benefits of our scholarship programs.',
      file: SP,
    },
   
  ];

  const otherPolicies = [
    {
      title: 'Library Policy',
      description: 'Discover the rules and guidelines for using our library resources effectively.',
      
      file: LP,
    },
    {
      title: 'Klib Rule',
      description: 'Learn about the rules and regulations for the use of Klib.',
      file: KlibRule,
    },
    {
      title : 'Sexual Harassment Policy',
      description: 'Learn about our commitment to preventing and addressing sexual harassment in the academic environment.',
      file: SexualHarassment,
    },
    {
      title: 'Anti-Ragging Policy',
      description: 'Understand our strict stance against ragging and the measures in place to prevent it.',
      file: AntiRaggingPolicy,
    },
    {
      title: 'Social Media Policy',
      description: 'Explore the guidelines for responsible social media use within our academic community.',
      file: SocailMediaPolicy,
    },
    {
      title: 'Career Services Policy',
      description: 'Learn about the resources and support available for career development and job placement.',
      
      file: CSP,
    }


  ];

  const openModal = (file) => {
    setModalContent(file);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl text-center font-bold text-gray-800 mb-3">
          Our Academic Policies
        </h1>
        <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <p className="text-xl font-semibold mb-4 text-gray-900">{policy.title}</p>
              <p className="text-gray-700 mb-6">{policy.description}</p>
              <button
                onClick={() => openModal(policy.file)}
                className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 hover:shadow-md transition-all duration-200"
              >
                View
              </button>
            </div>
          ))}
        </div>

        <h1 className="text-4xl text-center font-bold text-gray-800 mt-12 mb-3">Other Policies</h1>
        <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherPolicies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105 hover:shadow-xl"
            >
              <p className="text-xl font-semibold mb-4 text-gray-900">{policy.title}</p>
              <p className="text-gray-700 mb-6">{policy.description}</p>
              <button
                onClick={() => openModal(policy.file)}
                className="px-6 py-2 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 hover:shadow-md transition-all duration-200"
              >
                View
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalContent && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl relative">
              <button
                onClick={closeModal}
                className="text-gray-800 font-bold text-3xl absolute top-0 right-1 hover:text-gray-600 transition-all duration-200"
              >
                ×
              </button>
              <iframe
                src={modalContent}
                title="Policy Document"
                className="w-full h-[60vh] md:h-[75vh] rounded-lg border border-gray-300"
                frameBorder="0"
              ></iframe>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
