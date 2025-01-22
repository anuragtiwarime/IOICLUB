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
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Academic Holiday List
          </h1>
          <div className="w-24 h-1 bg-gray-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {holidays.map((holiday, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-lg p-4 hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 right-0 bg-gray-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  {holiday.date.split(' ')[0]}
                </div>
                <div className="pt-6">
                  <div className="text-sm text-gray-500 mb-1">
                    {`${holiday.date.split(' ')[1]} ${holiday.date.split(' ')[2]}`}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {holiday.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          * All dates are subject to change based on government announcements
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Holidays;