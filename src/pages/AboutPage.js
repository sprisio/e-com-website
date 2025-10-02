import React from 'react';

const aboutPageStyles = {
    padding: '2rem 4rem',
    textAlign: 'center',
    lineHeight: '1.6',
};

const AboutPage = () => {
  return (
    <div style={aboutPageStyles}>
      <h2>About Techpotli Showcase</h2>
      <p>
        This project is a modern e-commerce showcase built with the MERN stack in mind. 
        It demonstrates key front-end development skills using React, including component-based architecture, 
        API data fetching, state management with hooks, and dynamic routing with React Router.
      </p>
      <p>
        Created as a demonstration of rapid learning and implementation abilities.
      </p>
    </div>
  );
};

export default AboutPage;