// pages/contact.js
import React from 'react';
import NavBar from '../components/NavBar';

const Contact = () => {
  return (
    <div>
       <NavBar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>This is the contact page of the app.</p>
      </div>
    </div>
  );
};

export default Contact;
