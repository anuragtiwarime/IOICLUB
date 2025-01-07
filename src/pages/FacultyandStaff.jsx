import som from '../assets/som.jpeg';
const FacultyandStaff = () => {
  const facultyData = [
    {
      image: som, 
      name: "Anisha Koshy",
      position: "Faculty, School of Technology",
      subject: "English",
    },
    {
      image: som, 
      name: "Dr. Jane Smith",
      position: "Associate Professor, Department of Mathematics",
      subject: "Discrete Mathematics",
    },
    {
      image: som, 
      name: "Dr. Jane Smith",
      position: "Associate Professor, Department of Mathematics",
      subject: "Discrete Mathematics",
    },
    {
      image: som, 
      name: "Dr. Jane Smith",
      position: "Associate Professor, Department of Mathematics",
      subject: "Discrete Mathematics",
    },
    {
      image: som, 
      name: "Dr. Jane Smith",
      position: "Associate Professor, Department of Mathematics",
      subject: "Discrete Mathematics",
    },
    
  ];

  return (
    <div className="pt-24 px-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-black mb-8 text-center">Faculty and Staff</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {facultyData.map((faculty, index) => (
          <div key={index} className="flex bg-white p-4 rounded-lg shadow-lg">
            
            <div className="flex-none w-1/4">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-20 h-20  object-cover"
              />
              <h3 className="text-xl font-semibold mt-2 ">{faculty.name}</h3>
            </div>

           
            <div className="ml-4 flex-1">
              <p className="text-gray-600">{faculty.position}</p>
              <p className="text-gray-500">{faculty.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyandStaff;
