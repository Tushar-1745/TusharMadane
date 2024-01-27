import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin, IoLogoOctocat } from 'react-icons/io5';
import { GrGithub } from 'react-icons/gr';

import { useState } from 'react';

const navbarStyle = {
  border: 'black 5px solid',
  margin: '20px 20px auto 20px',
  height: '80px',
  borderRadius: '20px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',  // Updated to space-between
  alignItems: 'center',  // Center items vertically
  fontSize: '20px'
}
const homeImageStyle = {
  width: '50px',  // Adjust the width as needed
  height: '50px', // Adjust the height as needed
  margin: 'auto 25px'
};
const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const boxStyle = {
  margin: 'auto 20px',
  textDecoration: 'none',  // Remove underline
}

const logoStyle = {
  margin: '0 20px', color: 'black'
}

const buttonStyle = {
  fontSize: '21px', border: 'none', outline: 'none', color: 'black', padding: '10px 16px',
  backgroundColor: 'inherit', fontFamily: 'inherit', margin: 0, cursor: 'pointer',
}

const divStyle = {
  position: 'relative', display: 'inline-block'
}
const LinkStyle = {
  color: 'white', padding: '6px 16px', textDecoration: 'none', display: 'block', textAlign: 'left',
}
const dropdownStyle = {
  // position: 'absolute', backgroundColor: '#f9f9f9', minWidth: '50px',
  position: 'absolute', backgroundColor: '#0A1434', minWidth: '50px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', zIndex: 1,
}

function Navbar() {
  const linkedinLink = 'https://www.linkedin.com/in/tushar-madane-29071b252/'
  const leetcodeLink = 'https://leetcode.com/Tushar1745/'
  const githubLink = 'https://github.com/Tushar-1745'

  const [isExperienceDropdownOpen, setIsExperienceDropdownOpen] = useState(false);

  return (
    <>
      <div style={navbarStyle}>
        <div style={linkContainerStyle}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgwo34i6dF8u55chEwhiibz6jMGUS1UbdRsc_hTBHLEQvEJM5qCY7qeYD4WroO9cHzB5w&usqp=CAU"
            alt="Home"
            style={homeImageStyle}
          />
          <Link to="/" style={boxStyle}>Home</Link>
          <Link to="/education" style={boxStyle}>Education</Link>
          <Link to="/certifications" style={boxStyle}>Certifications</Link>

          <div style={divStyle}
            onMouseEnter={() => setIsExperienceDropdownOpen(true)}
            onMouseLeave={() => setIsExperienceDropdownOpen(false)}>
            <button style={buttonStyle}>Experience </button>
            {isExperienceDropdownOpen && (
              <div style={dropdownStyle} >
                <Link to="/experience/projects" style={LinkStyle}>Projects</Link>
                <Link to="/experience/internship" style={LinkStyle}> Internship</Link>
                <Link to="/experience/job" style={LinkStyle}>Job</Link>
              </div>
            )}
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
  )
}

export default Navbar;