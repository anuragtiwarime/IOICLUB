import React from 'react';
import Footer from '../components/Footer';
import holidays from '../data/holidays.json';

const Holidays = () => {
  

  return (
    <>
      <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            Academic Holiday List
          </h1>
          <div className="w-24 h-1 bg-black mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {holidays.map((holiday, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-bold text-white">
                    {holiday.name}
                  </h3>
                  <div className="bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {holiday.date}
                  </div>
                </div>
                <p className="text-gray-300">
                  {`${holiday.date.split(' ')[1]} ${holiday.date.split(' ')[2]}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-300">
          * All dates are subject to change based on government announcements
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Holidays;
