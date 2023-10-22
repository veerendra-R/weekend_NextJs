// pages/about.js
import React from 'react';
import NavBar from '../components/NavBar';

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="about-container">
        <h1>About Us</h1>
        <p>This is the about page of the app.</p>
      </div>
    </div>
  );
};

export default About;
