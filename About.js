import React from 'react';
import './About.css';

function About() {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = 'path/to/your/CV.pdf';
    link.download = 'Andranik_Aroyan_CV.pdf';
    link.click();
  };
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm Anto, a third-year Information Technology student at EUA. I am passionate about technology and driven to solve real-world problems through IT. My studies have provided me with a strong foundation in programming (Java, Python, C++), cloud computing, and network security.
      </p>
      <button onClick={downloadResume} className="resume-button">Resume</button>
    </div>
  );
}

export default About;