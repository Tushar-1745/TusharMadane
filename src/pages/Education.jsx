import React from 'react';

const Education = () => {
  return (
    <div>
      <h1 style={{ fontSize: '60px', fontStyle: 'italic', textAlign: 'center' }}>Education</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>

        <div style={{border: '4px solid black', height: '300px', width: '400px'}}>
          <h2 style={{alignItems: 'center', textDecoration: 'underline'}}>Primary Education</h2>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft:'20px', marginTop:'-11px'}}>
            <p style={{ marginBottom: '0px' }}><strong>Name: </strong>Shaskiya Vidyaniketan, Pusegaon</p>
            <p style={{ marginBottom: '0px' }}><strong>Address: </strong>Pusegaon, Tel-Khatav, Dist-Satara</p>
            <p><strong>SSC Percentage: </strong>97</p>
          </div>
        </div>

        <div style={{border: '4px solid black', height: '300px', width: '400px'}}>
          <h2 style={{alignItems: 'center', textDecoration: 'underline'}}> Junior College</h2>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft:'20px', marginTop:'-11px'}}>
            <p style={{ marginBottom: '0px' }}><strong>Name: </strong>Laxmanrao Apte Jr. College</p>
            <p style={{ marginBottom: '0px' }}><strong>Address: </strong>Apte road, Deccan Gymkhana, Pune-411004</p>
            <p><strong>Course:</strong>12th Science Stream</p>
            <p><strong>HSC Percentage: </strong>73.23</p>
            <p><strong>Course Duration: </strong>2018-2020</p>
          </div>
        </div>
        
        <div style={{border: '4px solid black', height: '300px', width: '400px'}}>
          <h2 style={{alignItems: 'center', textDecoration: 'underline'}}> Senior College</h2>
          <div style={{display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft:'20px', marginTop:'-11px'}}>
            <p style={{ marginBottom: '0px' }}><strong>Name: </strong>Sinhgad Institute of Technology and Science</p>
            <p style={{ marginBottom: '0px' }}><strong>Address: </strong>Narhegaon, Ambegaon, Pune</p>
            <p><strong>Course:</strong>Bachelor Degree in Computer Science and Engineering</p>
            <p><strong>CGPA: </strong>73.23</p>
            <p><strong>Course Duration: </strong>2020-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;