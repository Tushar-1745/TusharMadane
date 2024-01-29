// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Intro from './components/Intro';
// import Footer from './components/Footer';
// import Education from './pages/Education';
// import Certifications from './components/Certifications';
// import ProjectCarousel from './components/projects/ProjectCarousel';


// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Navbar style={{ position: 'fixed' }} />
//         <Routes>
//           <Route path='/education' element={<Education />}></Route>
//           <Route path='/certifications' element={<Certifications />}></Route>
//         </Routes>
//       </BrowserRouter>
//       <div><Intro /></div>
//       <div style={{ marginTop: '-100px' }}><ProjectCarousel /></div>
//       <div style={{ marginTop: '100px' }}><Education /></div>
//       <div style={{ marginTop: '100px' }}><Certifications /></div>
//       <div><Footer /></div>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, useRoutes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Intro from './components/Intro';
import ProjectCarousel from './components/projects/ProjectCarousel';
import Education from './pages/Education';
import Certifications from './components/Certifications';
import Job from './components/Job';
import Internship from './components/Internship';
import Documents from './components/Documents'
import Photos from './components/Photos'

const AppContent = () => {
  const location = useLocation();
  const route = useRoutes([
    { path: '/', element: <div><Intro/><ProjectCarousel/><Education/><Certifications/></div> },
    { path: '/education', element: <Education /> },
    { path: '/certifications', element: <Certifications /> },
    { path: '/experience/internship', element: <Internship /> },
    { path: '/experience/projects', element: <ProjectCarousel /> },
    { path: '/experience/Job', element: <Job /> },
    { path: '/mypage/documents', element: <Documents /> },
    { path: '/mypage/photos', element: <Photos /> },
  ]);

  return (
    <div>
      <Navbar currentRoute={location.pathname} />
      {route}
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AppContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


