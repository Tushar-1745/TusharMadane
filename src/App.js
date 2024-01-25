import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Footer from './components/Footer';

import Education from './pages/Education';
import Achievements from './pages/Achievements';
import Certifications from './components/Certifications';
import ProjectCarousel from './components/projects/ProjectCarousel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/achievements' element={<Achievements/>}></Route>
          <Route path='/certifications' element={<Certifications/>}></Route>
        </Routes>
      </BrowserRouter>
      <Intro/>
      <ProjectCarousel/>
      <Education/>
      <Footer/>
    </div>
  );
}

export default App;
