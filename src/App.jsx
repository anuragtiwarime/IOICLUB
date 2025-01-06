import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Policies from './pages/Policies';
import Careers from './pages/Careers.jsx';
import FacultyandStaff from './pages/FacultyandStaff.jsx';
import TechnologyPage from './pages/TechnologyPage.jsx';  
import ManagementPage from './pages/ManagementPage.jsx';

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/students/technology" element={<TechnologyPage />} />
<Route path="/students/management" element={<ManagementPage />} />

        <Route path ='/facultyandstaff' element={<FacultyandStaff/>}></Route>
      </Routes>
    </div>
  </Router>
);

export default App;
