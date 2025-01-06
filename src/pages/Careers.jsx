export default function Careers() {
  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8 text-center">Career Opportunities</h1>
      <div className="space-y-8">

        {/* Frontend Developer Intern */}
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-black mb-4">Frontend Developer Intern - PW</h2>
          <h3 className="text-lg text-black mb-2">No. of Vacancies: 2</h3>
          <h3 className="text-lg text-black mb-4">&#8377; 8000/month</h3>
          <p className="text-gray-700 mb-4">
            Join our frontend team and work on exciting projects.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors transform hover:scale-105">
            Closed
          </button>
        </div>

        {/* Student Brand Strategist Intern */}
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-black mb-4">Student Brand Strategist Intern</h2>
          <h3 className="text-lg text-black mb-2">No. of Vacancies: 1</h3>
          <h3 className="text-lg text-black mb-4">&#8377; 8000/month</h3>
          <p className="text-gray-700 mb-4">
            Join our student brand team and work on exciting projects.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors transform hover:scale-105">
            Closed
          </button>
        </div>

        {/* Teaching Assistant Intern */}
        <div className="bg-gray-200 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-black mb-4">Teaching Assistant Intern</h2>
          <h3 className="text-lg text-black mb-2">No. of Vacancies: 1</h3>
          <h3 className="text-lg text-black mb-4">&#8377; 8000/month</h3>
          <p className="text-gray-700 mb-4">
            Join our teaching assistant team and work on exciting projects.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors transform hover:scale-105">
            Closed
          </button>
        </div>

      </div>
    </div>
  );
}
