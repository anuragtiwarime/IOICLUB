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
import './App.css';
import PageNotFound from './pages/PageNotFound';
import SOT from './pages/SOT';
import SOM from './pages/SOM.jsx';
import LifeAtPWIOI from './pages/LifeAtPWIOI.jsx';
import Holidays from "./pages/Holidays.jsx";
import Events from './pages/Events.jsx';
import ScrollToTop from './components/ScrollToTop';
import RankPredictor from './pages/RankPredictor';
import Attendence from './components/Attendance.jsx';



const App = () => (
  <Router>
    <ScrollToTop /> {/* Add ScrollToTop here */}
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900">
          <Clubs />
        </div>} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/students/technology" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900">
          <TechnologyPage />
        </div>} />
        <Route path="/students/management" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900">
          <ManagementPage />
        </div>} />
        <Route path="/facultyandstaff" element={<FacultyandStaff />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/sot" element={<SOT />} />
        <Route path="/som" element={<SOM />} />
        <Route path="/lifeatpwioi" element={<LifeAtPWIOI />} />
        <Route path="/holidays" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900">
          <Holidays />
        </div>} />
        <Route path="/events" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900">
          <Events />
        </div>} />
        <Route path="/rank-predictor" element={<RankPredictor />} />
        <Route path="/attendance-report" element={<Attendence />} />
      </Routes>
    </div>
  </Router>
);

export default App;
