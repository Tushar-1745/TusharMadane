import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Education from './pages/Education';
import Certifications from './components/Certifications';
import ProjectCarousel from './components/projects/ProjectCarousel';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar style={{position: 'fixed'}}/>
        <Routes>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/certifications' element={<Certifications/>}></Route>
        </Routes>
      </BrowserRouter>
      <div><Intro/></div>
      <div style={{marginTop: '-100px'}}><ProjectCarousel/></div>
      <div style={{marginTop: '100px'}}><Education/></div>
      <div style={{marginTop: '100px'}}><Certifications/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
