import React from 'react';
import './AboutPage.css'; // 1. Import the CSS file

const AboutPage = () => {
  return (
    // 2. Use a className instead of the style object
    <div className="about-page"> 
      <h2>About This Website</h2>
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