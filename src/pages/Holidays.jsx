import React from 'react';
import Footer from '../components/Footer';

const Holidays = () => {
  const holidays = [
    { name: "New Year", date: "01 Jan 2025" },
    { name: "Pongal", date: "14 Jan 2025" },
    { name: "Republic Day", date: "26 Jan 2025" },
    { name: "Holi", date: "14 Mar 2025" },
    { name: "Gudi Padwa", date: "30 Mar 2025" },
    { name: "Ramzan Eid", date: "31 Mar 2025" },
    { name: "Rongali Bihu", date: "14 Apr 2025" },
    { name: "Good Friday", date: "18 Apr 2025" },
    { name: "Labour Day/May Day", date: "01 May 2025" },
    { name: "Eid-ul-Azha", date: "07 Jun 2025" },
    { name: "Independence Day", date: "15 Aug 2025" },
    { name: "Onam", date: "05 Sep 2025" },
    { name: "Durga Puja", date: "30 Sep 2025" },
    { name: "Durga Puja", date: "01 Oct 2025" },
    { name: "Dusshera/ Durga Puja/ Gandhi Jayanti", date: "02 Oct 2025" },
    { name: "Diwali/Ugadi", date: "21 Oct 2025" },
    { name: "Goverdhan Puja", date: "22 Oct 2025" },
    { name: "Bhai Dooj", date: "23 Oct 2025" },
    { name: "Chatt Pooja-Sandhya Argh", date: "27 Oct 2025" },
    { name: "Kannada Rajyotsava", date: "01 Nov 2025" }
  ];

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
