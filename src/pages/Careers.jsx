import React, { useState } from "react";
import Footer from "../components/Footer";
import { ArrowRight, FileText } from "lucide-react";
import positions from "../data/careers.json";

export default function Careers() {
  const [modalContent, setModalContent] = useState(null);

  function handleApply(formLink) {
    if (formLink) {
      window.open(formLink, "_blank");
    } else {
      console.error("No form link provided!");
    }
  }

  function openModal(pdfLink) {
    if (pdfLink) {
      setModalContent(pdfLink);
    } else {
      console.error("No PDF link provided!");
    }
  }

  function closeModal() {
    setModalContent(null);
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
                    <div className="flex flex-col md:flex-row gap-3 mt-4 md:mt-0">
                      {position.status === "open" && (
                        <button
                          className="px-6 py-2 rounded-full font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2"
                          onClick={() => openModal(position.pdf)}
                        >
                          <FileText className="w-4 h-4" />
                          Details
                        </button>
                      )}
                      <button
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                          position.status === "open"
                            ? "bg-green-500 text-white hover:bg-green-400"
                            : "bg-red-500 text-white cursor-not-allowed"
                        }`}
                        disabled={position.status === "closed"}
                        onClick={
                          position.status === "open"
                            ? () => handleApply(position.formLink)
                            : undefined
                        }
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
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-full bg-gray-100 group-hover:bg-gray-200 transition-colors duration-300">
                  <div
                    className={`h-full transition-all duration-500 ease-out ${
                      position.status === "open"
                        ? "bg-black group-hover:bg-gray-800 w-full"
                        : "bg-gray-300 w-0"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
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
              title="Job Description"
              className="w-full h-[60vh] md:h-[75vh] rounded-lg border border-gray-300"
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}