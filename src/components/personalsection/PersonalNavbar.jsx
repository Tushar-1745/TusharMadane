// Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Your Logo</div>
      <ul style={navLinksStyle}>
        <li style={navLinkStyle}><a href="#">Home</a></li>
        <li style={navLinkStyle}><a href="#">About</a></li>
        <li style={navLinkStyle}><a href="#">Services</a></li>
        <li style={navLinkStyle}><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

const navbarStyle = {
  backgroundColor: '#3498db',
  padding: '15px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
};

const logoStyle = {
  fontSize: '1.5em',
  fontWeight: 'bold',
};

const navLinksStyle = {
  listStyle: 'none',
  display: 'flex',
};

const navLinkStyle = {
  marginRight: '20px',
  textDecoration: 'none',
  color: '#fff',
  transition: 'color 0.3s ease-in-out',
};

export default Navbar;
