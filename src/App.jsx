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
import Holydays from "./pages/Holidays.jsx"

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
        <Route path="*" element={<PageNotFound />} />
        <Route path="/sot" element={<SOT />} />
        <Route path='/som' element={<SOM></SOM>}></Route>
        <Route path="/lifeatpwioi" element={<LifeAtPWIOI />} />
        <Route path = "/holydays" element={<Holydays/>}></Route>


      </Routes>
    </div>
  </Router>
);

export default App;
