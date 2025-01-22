import React, { useState } from 'react';
import COC from '../assets/COC.pdf';
import AP from '../assets/AP.pdf';
import SP from '../assets/SP.pdf';
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
            Our Acadmic Policies
          </h1>
          <div className="w-24 h-1 bg-black mx-auto rounded-full mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* Added gap-6 */}
        {policies.map((policy, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform hover:scale-105"
          >
            <p className="text-xl font-semibold mb-4">{policy.title}</p>
            <p className="text-gray-700 mb-6">{policy.description}</p>
            <button
              onClick={() => openModal(policy.file)}
              className="px-4 py-2 bg-black text-white font-semibold  shadow hover:bg-gray-800"
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
              className="text-black font-bold text-3xl absolute top-0 right-2 hover:text-gray-600"
            >
              ×
            </button>
            <iframe
              src={modalContent}
              title="Policy Document"
              className="w-full h-[60vh] md:h-[75vh] rounded-lg"
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
