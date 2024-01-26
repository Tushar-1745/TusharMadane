import React from 'react'
import { Link } from 'react-router-dom'

const navbarStyle={
    border: 'black 5px solid',
    margin: '20px 20px auto 20px',
    height:'80px',
    borderRadius: '20px',
    display:'flex',
    flexDirection: 'row',
    fontSize: '20px'
}

const boxStyle={
  margin: 'auto 20px',
}
const img0Style={
  height: '50px',
  width: '100px',
  marginTop: '15px',
  marginLeft: '650px',
  objectFit: 'contain',
  mixBlendMode: 'color-born'
}
const img1Style={
  marginLeft: '20px',
  height: '80px',
  width: '120px',
  objectFit: 'contain',
  mixBlendMode: 'color-born'
}
const img2Style={
  marginLeft:'20px',
  height: '50px',
  marginTop: '12px',
  width: '100px',
  mixBlendMode: 'color-born'
}

function Navbar() {
  return (
    <>
        <div style={navbarStyle}>
            <Link to="/" style={boxStyle}>Home</Link>
            <Link to="/education" style={boxStyle}>Education</Link>
            <Link to="/certifications" style={boxStyle}>Certifications</Link>
            <a href="https://leetcode.com/Tushar1745/" target="_blank" rel="noopener noreferrer">
                <img style={ img0Style} src='https://static-00.iconduck.com/assets.00/linkedin-icon-2048x2048-ya5g47j2.png' alt=''/>
            </a>
            <a href="https://leetcode.com/Tushar1745/" target="_blank" rel="noopener noreferrer">
                <img style={ img1Style} src='data:image/png;base64,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' alt="LeetCode Logo"></img>
            </a>
            <a href="https://github.com/Tushar-1745" target="_blank" rel="noopener noreferrer">
                <img style={ img2Style}src='https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png' alt=""></img>
            </a>
        </div>
    </>
  )
}

export default Navbar


