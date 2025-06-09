import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Clubs from './pages/Clubs';
import Policies from './pages/Policies';
import Careers from './pages/Careers.jsx';
import FacultyandStaff from './pages/FacultyandStaff.jsx';
import TechnologyPage from './pages/TechnologyPage.jsx';
import ManagementPage from './pages/ManagementPage.jsx';
import PageNotFound from './pages/PageNotFound';
import SOT from './pages/SOT';
import SOM from './pages/SOM.jsx';
import LifeAtPWIOI from './pages/LifeAtPWIOI.jsx';
import Holidays from './pages/Holidays.jsx';
import Events from './pages/Events.jsx';
import RankPredictor from './pages/RankPredictor';
import Attendence from './components/Attendance.jsx';

import Hackathon from './hackathon/Hackathon.jsx';

import CeeLayout from '@/components/cee/CeeLayout.jsx';
import CeeExamLayout from '@/components/cee/exam/CeeExamLayout.jsx';
import CeeExamVideos from '@/components/cee/exam/CeeExamVideos.jsx';
import CeeExamReading from '@/components/cee/exam/CeeExamReading.jsx';
import CeeExamMCQs from '@/components/cee/exam/CeeExamMCQs.jsx';
import CeeExamMCQPaper from '@/components/cee/exam/CeeExamMCQPaper.jsx';
import CeeExamFillBlanks from '@/components/cee/exam/CeeExamFillBlanks.jsx';
import CeeExamFillBlanksPaper from '@/components/cee/exam/CeeExamFillBlanksPaper.jsx';
import CeeInterviewLayout from '@/components/cee/interview/CeeInterviewLayout.jsx';
import Guide from './components/cee/interview/Guide.jsx';

const MainLayout = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/hackathon/aws','/aws'];
  const shouldShowNavbar = !hideNavbarPaths.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gray-100 scroll-smooth">
      {/* {shouldShowNavbar && <Navbar />} */}
      <Routes>
        <Route path="/" element={<Hackathon />} />
        <Route path="/hackathon/aws" element={<Hackathon />} />
        <Route path="/aws" element={<Hackathon />} />
        <Route path="/clubs" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900"><Clubs /></div>} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/students/technology" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900"><TechnologyPage /></div>} />
        <Route path="/students/management" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900"><ManagementPage /></div>} />
        <Route path="/facultyandstaff" element={<FacultyandStaff />} />
        <Route path="/sot" element={<SOT />} />
        <Route path="/som" element={<SOM />} />
        <Route path="/lifeatpwioi" element={<LifeAtPWIOI />} />
        <Route path="/holidays" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900"><Holidays /></div>} />
        <Route path="/events" element={<div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-gray-900"><Events /></div>} />
        <Route path="/college-predictor" element={<RankPredictor />} />
        <Route path="/attendance-report" element={<Attendence />} />
        <Route path="/cee" element={<CeeLayout />}>
          <Route path="exam" element={<CeeExamLayout />}>
            <Route index element={<CeeExamVideos />} />
            <Route path="videos" element={<CeeExamVideos />} />
            <Route path="reading" element={<CeeExamReading />} />
            <Route path="mcqs" element={<CeeExamMCQs />}>
              <Route path=":paperId" element={<CeeExamMCQPaper />} />
            </Route>
            <Route path="fill-in-the-blanks" element={<CeeExamFillBlanks />}>
              <Route path=":paperId" element={<CeeExamFillBlanksPaper />} />
            </Route>
          </Route>
          <Route path="interview" element={<CeeInterviewLayout />}>
            <Route path="guide" element={<Guide />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

const App = () => (
  <Router>
    <ScrollToTop />
    <MainLayout />
  </Router>
);

export default App;
