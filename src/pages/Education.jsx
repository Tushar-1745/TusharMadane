import React from 'react';
const EduBox = {
  border: '4px solid black',
  height: '300px',
  // width: '400px',
  background: 'linear-gradient(45deg, #ff6b6b, #48dbfb, #1dd1a1)',  // Gradient background
  borderRadius: '15px',
  padding: '20px',
};

const EduHeading = {
  alignItems: 'center',
  textDecoration: 'underline',
  color: '#2d3436',  // Dark gray text color
};

const EduDetailBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginLeft: '20px',
  marginTop: '-11px',
  color: '#2d3436',  // Dark gray text color
};

const pStyle = {
  marginBottom: '0px',
  fontSize: '18px',
};
const Education = () => {
 
  return (
    <div style={{height: '80vh'}}>
      <h1 style={{fontSize:'60px', fontStyle: 'italic', textAlign: 'center'}}>Education</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div style={{ ...EduBox, width: '350px' }}>
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

      <div style={{...EduBox, width:'430px'}}>
        <h2 style={EduHeading}>Senior College</h2>
        <div style={EduDetailBox}>
          <p style={{ ...pStyle, marginLeft:'-1px' }}><strong>Name: </strong>Sinhgad Institute of Technology and Science</p>
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

