'use client';

import React from 'react';
import './contact.css'; // Import CSS for styling

const ContactUsPage = () => {
  return (
    <div className="contactPage">
      <header className="contactHeader">
       <u><h1>Contact Us</h1></u>
        <p>We'd love to hear from you!</p>
      </header>

      <section className="contactSection">
        <div className="contactInfo">
          <h2>Get in Touch</h2>
          <p>
           by Syeda Aramish

"Whether you have a project in mind, a question, or simply want to connect, I’d love to hear from you! Feel free to reach out, and let’s explore the world of creativity and innovation together."

</p>
          <div className="contactDetails">
            <p>Email: <a href="mailto:contact@example.com">contact@example.com</a></p>
            <p>Phone: <a href="tel:+123456789">+1 234 567 89</a></p>
            <p>Address: 123, Some Street, Some City, Country</p>
          </div>
        </div>

        <form className="contactForm">
          <h2>Send Us a Message</h2>
          <div className="formGroup">
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message:</label>
            <textarea id="message" placeholder="Write your message here"></textarea>
          </div>
          <button type="submit" className="submitButton">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUsPage;
