// import React from 'react';
// import tmpic from '../pictures/tmpic.jpg'

// const introStyle = {
//   width: '50%',
// };

// const tmPicStyle = {
//   marginTop: '35px',
//   marginLeft: '-60px',
//   height: '450px',
//   width: '250px',
//   zIndex: 1
// };


// const handleButtonClick = () => {
//   const fileName = 'TM_resume.pdf';

//   const filePath = process.env.PUBLIC_URL + '/' + fileName;

//   window.open(filePath, '_blank');
// };

// function Intro() {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'row' }}>
//       <div style={introStyle}>
//         <h3 style={{ fontSize: '30px' }}>hello there, I'm</h3>
//         <h3 style={{ fontSize: '50px', marginTop: '-25px' }}>Tushar Madane</h3>
//         <h2 style={{ fontSize: '30px', marginTop: '-20px' }}>Full-Stack Developer</h2>
//         <ul style={{ marginTop: '-20px', fontSize: '22px' }}>
//           <li>Core Java</li>
//           <li>Data Structure and Algorithm</li>
//           <li>MySQL</li>
//           <li>Python</li>
//           <li>Web Development: HTML, CSS, JavaScript</li>
//           <li>Spring Boot</li>
//           <li>ReactJs</li>
//         </ul>
//         <button style={{ fontSize: '20px', padding: '5px', borderRadius: '6px' }} onClick={handleButtonClick}>
//           CHECK OUT MY CV
//         </button>
//       </div>
//       <div>
//         <img style={tmPicStyle} src={tmpic} alt="" />
//       </div>
//     </div>
//   );
// }

// export default Intro;

import React from 'react';
import tmpic from '../pictures/tmpic.jpg';

const introContainerStyle = {
  marginTop: '20px',
  marginLeft: '50px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start', // Align items at the start of the cross-axis (vertically)
  justifyContent: 'center', // Center horizontally
  height: '100vh', // Set height to full viewport height
};

const introContentStyle = {
  width: '50%',
  textAlign: 'start',
};

const tmPicStyle = {
  marginTop: '35px',
  marginLeft: '-150px',
  height: '450px',
  width: '250px',
  zIndex: 1,
};

const listStyle = {
  marginLeft: '70px',
  marginTop: '-20px',
  fontSize: '22px',
  padding: 0,
  textAlign: 'left', // Align list items to the left
};

const listItemStyle = {
  marginBottom: '10px', // Adjust the margin between list items
};

const handleButtonClick = () => {
  const fileName = 'TM_resume.pdf';
  const filePath = process.env.PUBLIC_URL + '/' + fileName;
  window.open(filePath, '_blank');
};

function Intro() {
  return (
    <div style={introContainerStyle}>
      <div style={introContentStyle}>
        <h3 style={{ fontSize: '30px' }}>Hello there, I'm</h3>
        <h3 style={{ fontSize: '50px', marginTop: '-25px' }}>Tushar Madane</h3>
        <h2 style={{ fontSize: '30px', marginTop: '-20px' }}>Full-Stack Developer</h2>
        <ul style={listStyle}>
          <li style={listItemStyle}>Core Java</li>
          <li style={listItemStyle}>Data Structure and Algorithm</li>
          <li style={listItemStyle}>MySQL</li>
          <li style={listItemStyle}>Python</li>
          <li style={listItemStyle}>Web Development: HTML, CSS, JavaScript</li>
          <li style={listItemStyle}>Spring Boot</li>
          <li style={listItemStyle}>ReactJs</li>
        </ul>
        <button style={{ fontSize: '20px', padding: '5px', borderRadius: '6px', marginTop: '20px' }} onClick={handleButtonClick}>
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

