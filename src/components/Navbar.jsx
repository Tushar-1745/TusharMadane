import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogoLinkedin, IoLogoOctocat } from 'react-icons/io5';
import {GrGithub } from 'react-icons/gr';

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

const linkContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
}

const boxStyle = {
  margin: 'auto 20px',
}

const logoStyle={
  margin: '0 20px', color: 'black'
}

function Navbar() {
  const linkedinLink = 'https://www.linkedin.com/in/tushar-madane-29071b252/'
  const leetcodeLink = 'https://leetcode.com/Tushar1745/'
  const githubLink = 'https://github.com/Tushar-1745'
  
  return (
    <>
      <div style={navbarStyle}>
        <div style={linkContainerStyle}>
          <Link to="/" style={boxStyle}>Home</Link>
          <Link to="/education" style={boxStyle}>Education</Link>
          <Link to="/certifications" style={boxStyle}>Certifications</Link>
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


