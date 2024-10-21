import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-container">
    <h1 className="about-heading">About Me</h1>
    <p className="about-paragraph">
      Hello! I'm Razeen Mahroof, a passionate Software Developer based in UST. 
      I specialize in creating dynamic and responsive web applications. With a keen eye for design and a solid foundation in coding, I strive to build user-friendly and efficient software solutions.
    </p>
    <p className="about-paragraph">
      My journey in software development began with a curiosity for technology and a desire to solve real-world problems. Over the years, I have honed my skills in various programming languages and frameworks, always eager to learn and adapt to new challenges.
    </p>
    <p className="about-paragraph">
      When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or sharing my knowledge with fellow developers. I believe in continuous learning and the power of collaboration in the tech community.
    </p>
    <p className="about-paragraph">
      Feel free to reach out if you'd like to connect or collaborate on exciting projects!
    </p>
  </div>
  );
};

export default About;
