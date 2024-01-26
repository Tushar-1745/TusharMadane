// Education.js
import React from 'react';

const Education = () => {
  return (
    <div>
      <h1 style={{ fontSize: '60px', fontStyle: 'italic', textAlign: 'center' }}>Education</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div style={{ border: '4px solid black', height: '300px', width: '400px', alignItems: 'center', backgroundColor: 'rgb(182, 245, 245)' }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Primary Education</h2>
          <p><strong>Name: </strong> Shaskiya Vidyaniketan</p>
          <p><strong>Address: </strong>Pusegaon, Tel-Khatav, Dist-Satara</p>
          <p><strong>SSC Percentage: </strong>97</p>
        </div>

        <div style={{ border: '4px solid black', height: '300px', width: '400px', alignItems: 'center', backgroundColor: 'rgb(182, 245, 245)' }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Junior College</h2>
          <p><strong>Name: </strong> Laxmanrao Apte Jr. College</p>
          <p><strong>Address: </strong>Apte road, Deccan Gymkhana, Pune-411004</p>
          <p><strong>Course:</strong>12th Science Stream</p>
          <p><strong>HSC Percentage: </strong>73.23</p>
          <p><strong>Course Duration: </strong>2018-2020</p>
        </div>

        <div style={{ border: '4px solid black', height: '300px', width: '400px', alignItems: 'center', backgroundColor: 'rgb(182, 245, 245)' }}>
          <h2 style={{ textAlign: 'center', textDecoration: 'underline' }}>Senior College</h2>
          <p><strong>Name: </strong> Sinhgad Institute of Technology and Science</p>
          <p><strong>Address: </strong>Narhegaon, Ambegaon, Pune</p>
          <p><strong>Course:</strong>Bachelor Degree in Computer Science and Engineering</p>
          <p><strong>CGPA: </strong>8.16</p>
          <p><strong>Course Duration: </strong>2020-2024</p>
        </div>
      </div>
    </div>
  );
};

export default Education;