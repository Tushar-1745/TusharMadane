import React from 'react';

const Education = () => {

  const pStyle={
    marginBottom: '0px',
    fontSize: '20px'
  }
  const EduHeading={
    alignItems: 'center', textDecoration: 'underline'
  }
  const EduBox={
    border: '4px solid black', height: '350px', width: '420px'
  }
  const EduDetailBox={
    display:'flex', flexDirection:'column', alignItems:'flex-start', marginLeft:'20px', marginTop:'-11px'
  }
  return (
    <div>
      <h1 style={{fontSize:'60px', fontStyle: 'italic', textAlign: 'center'}}>Education</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div style={EduBox}>
          <h2 style={EduHeading}>Primary Education</h2>
          <div style={EduDetailBox}>
            <p style={pStyle}><strong>Name: </strong>Shaskiya Vidyaniketan, Pusegaon</p>
            <p style={pStyle}><strong>Address: </strong>Pusegaon, Tel-Khatav, Dist-Satara</p>
            <p style={pStyle}><strong>SSC Percentage: </strong>97</p>
          </div>
        </div>

        <div style={EduBox}>
          <h2 style={EduHeading}> Junior College</h2>
          <div style={EduDetailBox}>
            <p style={pStyle}><strong>Name: </strong>Laxmanrao Apte Jr. College</p>
            <p style={pStyle}><strong>Address: </strong>Deccan Gymkhana, Pune-411004</p>
            <p style={pStyle}><strong>Course:</strong>12th Science Stream</p>
            <p style={pStyle}><strong>HSC Percentage: </strong>73.23</p>
            <p style={pStyle}><strong>Course Duration: </strong>2018-2020</p>
          </div>
        </div>

      <div style={EduBox}>
        <h2 style={EduHeading}>Senior College</h2>
        <div style={EduDetailBox}>
          <p style={{ ...pStyle, marginLeft:'-15px' }}><strong>Name: </strong>Sinhgad Institute of Technology and Science</p>
          <p style={pStyle}><strong>Address: </strong>Narhegaon, Ambegaon, Pune</p>
          <p style={pStyle}><strong>Course:</strong> Computer Science and Engineering</p>
          <p style={pStyle}><strong>CGPA: </strong>73.23</p>
          <p style={pStyle}><strong>Course Duration: </strong>2020-2024</p>
        </div>
      </div>

      </div>
    </div>
  );
};

export default Education;

