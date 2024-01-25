import React from 'react';

const boxStyle = {
  border: '2px solid black',
  margin: '5px',
  height: '400px',
  width: '80%',
  background: 'linear-gradient(#3598db, #3498db, #2ecc71)',
};

const ProjectCard = ({ project }) => {
  return (
    <div>
      <div className="box" style={boxStyle}>
        <h2 style={{ textAlign: 'center', fontSize: '30px' }}>{project.title}</h2>
        <p style={{ marginLeft: '15px' }}>{project.description}</p>
        <h3 style={{ textAlign: 'center', marginBottom:'0px' }}>Technologies Used: </h3>
        <ul style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-aound' }}>
          {project.technologies.map((tech, index) => (
            <li style={{marginLeft:'140px'}} key={index}>{tech}</li>
          ))}
        </ul>
        <div style={{marginTop:'10px', textAlign: 'center', fontSize: '20px' }}>
          <a href={project.githubLink} target='_blank' rel="noopener noreferrer">
            Watch out project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
