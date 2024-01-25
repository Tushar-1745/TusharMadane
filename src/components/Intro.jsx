import React from 'react';
import tmpic from '../pictures/tmpic.jpg'

const introStyle = {
  width: '50%',
};

const tmPicStyle = {
  marginTop: '35px',
  marginLeft: '-60px',
  height: '450px',
  width: '250px',
  zIndex: 1, 
  mixBlendMode: 'color-burn'

};

const handleButtonClick = () => {
  // Assuming 'TM_resume.pdf' is the name of your PDF file
  const fileName = 'TM_resume.pdf';

  // Construct the file path from the root
  const filePath = process.env.PUBLIC_URL + '/' + fileName;

  // Open the file in a new tab
  window.open(filePath, '_blank');
};

function Intro() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={introStyle}>
        <h3 style={{ fontSize: '30px' }}>hello there, I'm</h3>
        <h3 style={{ fontSize: '50px', marginTop: '-25px' }}>Tushar Madane</h3>
        <h2 style={{ fontSize: '30px', marginTop: '-20px' }}>Full-Stack Developer</h2>
        <ul style={{ marginTop: '-20px', fontSize: '22px' }}>
          <li>Core Java</li>
          <li>Data Structure and Algorithm</li>
          <li>MySQL</li>
          <li>Python</li>
          <li>Web Development: HTML, CSS, JavaScript</li>
          <li>Spring Boot</li>
          <li>ReactJs</li>
        </ul>
        <button style={{ fontSize: '20px', padding: '5px', borderRadius: '6px' }} onClick={handleButtonClick}>
          CHECK OUT MY CV
        </button>
      </div>
      <div>
        <img style={tmPicStyle} src={tmpic} alt="" />
      </div>
    </div>
  );
}

export default Intro;