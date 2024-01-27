// import React from 'react'
// import { Link } from 'react-router-dom'
// import { IoLogoLinkedin, IoLogoOctocat } from 'react-icons/io5';
// import {GrGithub } from 'react-icons/gr';

// const navbarStyle = {
//   border: 'black 5px solid',
//   margin: '20px 20px auto 20px',
//   height: '80px',
//   borderRadius: '20px',
//   display: 'flex',
//   flexDirection: 'row',
//   justifyContent: 'space-between',  // Updated to space-between
//   alignItems: 'center',  // Center items vertically
//   fontSize: '20px'
// }
// const homeImageStyle = {
//   width: '50px',  // Adjust the width as needed
//   height: '50px', // Adjust the height as needed
//   margin: 'auto 25px'
// };
// const linkContainerStyle = {
//   display: 'flex',
//   flexDirection: 'row',
// }

// const boxStyle = {
//   margin: 'auto 20px',
//   textDecoration: 'none',  // Remove underline
// }

// const logoStyle={
//   margin: '0 20px', color: 'black'
// }

// function Navbar() {
//   const linkedinLink = 'https://www.linkedin.com/in/tushar-madane-29071b252/'
//   const leetcodeLink = 'https://leetcode.com/Tushar1745/'
//   const githubLink = 'https://github.com/Tushar-1745'
  
//   return (
//     <>
//       <div style={navbarStyle}>
//         <div style={linkContainerStyle}>
//         <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwo34i6dF8u55chEwhiibz6jMGUS1UbdRsc_hTBHLEQvEJM5qCY7qeYD4WroO9cHzB5w&usqp=CAU"
//             alt="Home"
//             style={homeImageStyle}
//           />
//           <Link to="/" style={boxStyle}>Home</Link>
//           <Link to="/education" style={boxStyle}>Education</Link>
//           <Link to="/certifications" style={boxStyle}>Certifications</Link>
//         </div>
//         <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
//           <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
//             <IoLogoLinkedin size={30} />
//           </a>
//           <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
//             <IoLogoOctocat size={30} />
//           </a>
//           <a href={githubLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
//             <GrGithub size={30} />
//           </a>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoLinkedin, IoLogoOctocat } from 'react-icons/io5';
import { GrGithub } from 'react-icons/gr';

const navbarStyle = {
  border: 'black 5px solid',
  margin: '20px 20px auto 20px',
  height: '80px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '20px',
};
const homeImageStyle = {
  width: '50px',
  height: '50px',
  margin: 'auto 25px',
};
const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
};

const boxStyle = {
  margin: 'auto 20px',
  textDecoration: 'none',
};

const logoStyle = {
  margin: '0 20px',
  color: 'black',
};

const dropdownContentStyle = {
  display: 'none',
  position: 'absolute',
  backgroundColor: '#f9f9f9',
  minWidth: '160px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)',
  zIndex: 1,
};

const dropdownLinkStyle = {
  float: 'none',
  color: 'black',
  padding: '12px 16px',
  textDecoration: 'none',
  display: 'block',
  textAlign: 'left',
};

const dropdownHoverStyle = {
  ':hover': {
    backgroundColor: '#ddd',
  },
};

const dropdownContainerStyle = {
  float: 'left',
  overflow: 'hidden',
};

const dropdownButtonStyle = {
  fontSize: '16px',
  border: 'none',
  outline: 'none',
  color: 'white',
  padding: '14px 16px',
  backgroundColor: 'inherit',
  fontFamily: 'inherit',
  margin: 0,
};

const Navbar = () => {
  const linkedinLink = 'https://www.linkedin.com/in/tushar-madane-29071b252/';
  const leetcodeLink = 'https://leetcode.com/Tushar1745/';
  const githubLink = 'https://github.com/Tushar-1745';

  return (
    <>
      <div style={navbarStyle}>
        <div style={linkContainerStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwo34i6dF8u55chEwhiibz6jMGUS1UbdRsc_hTBHLEQvEJM5qCY7qeYD4WroO9cHzB5w&usqp=CAU"
            alt="Home"
            style={homeImageStyle}
          />
          <Link to="/" style={boxStyle}>
            Home
          </Link>
          <Link to="/education" style={boxStyle}>
            Education
          </Link>
          <Link to="/certifications" style={boxStyle}>
            Certifications
          </Link>
          <div style={dropdownContainerStyle}>
            <button style={dropdownButtonStyle}>Experience</button>
            <div style={{ ...dropdownContentStyle, ...dropdownHoverStyle }}>
              <Link to="/experience/internship" style={dropdownLinkStyle}>
                Internship
              </Link>
              <Link to="/experience/job" style={dropdownLinkStyle}>
                Job
              </Link>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
            <IoLogoLinkedin size={30} />
          </a>
          <a href={leetcodeLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
            <IoLogoOctocat size={30} />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" style={logoStyle}>
            <GrGithub size={30} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;




