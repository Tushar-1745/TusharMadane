import React from 'react';
import dsa from '../pictures/dsa.jpeg';
import webdevelopment from '../pictures/webdevelopment.jpeg';

const Certifications = () => {
  return (
    <div>
      <div style={{ background: '#0A1424', padding: '20px', color: '#61C0BF', textAlign: 'center', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ margin: 0, fontSize: '36px', fontWeight: 'bold', textDecoration: 'underline' }}>Certifications</h1>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 70px', border: '2px solid black', borderRadius: '10px', height: '500px', width: '90%', backgroundColor: 'aquamarine' }} id="box2">
        <h1 style={{ margin: '0' }}>Data Structure and Algorithms using Java</h1>
        <h3 style={{ margin: '0' }}>by NPTEL</h3>
        <img style={{ margin: 'auto', height: '250px', width: '550px' }} src={dsa} alt="nothing" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="skills-container">
          <h1 style={{ margin: '0' }}>Key Skills</h1>
          <ul style={{ marginTop: '-20px', fontSize: '22px', padding: 0, textAlign: 'left' }}>
            <li style={{ marginBottom: '10px' }}>Java Language</li>
            <li style={{ marginBottom: '10px' }}>Data Structures</li>
            <li style={{ marginBottom: '10px' }}>Algorithms</li>
          </ul>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '20px 70px', border: '2px solid black', borderRadius: '10px', height: '500px', width: '90%', backgroundColor: 'aquamarine' }} id="box1">
        <h1 style={{ margin: '0' }}>Web Development</h1>
        <h3 style={{ margin: '0' }}>by Udemy</h3>
        <img style={{ margin: 'auto', height: '250px', width: '550px' }} src={webdevelopment} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className="skills-container">
          <h1 style={{ margin: '0' }}>Key Skills</h1>
          <ul style={{ marginTop: '-20px', fontSize: '22px', padding: 0, textAlign: 'left' }}>
            <li style={{ marginBottom: '10px' }}>HTML</li>
            <li style={{ marginBottom: '10px' }}>CSS</li>
            <li style={{ marginBottom: '10px' }}>JavaScript</li>
            <li style={{ marginBottom: '10px' }}>Rest API</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
