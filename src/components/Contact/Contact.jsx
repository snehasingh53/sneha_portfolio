import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5717bc40-bd00-4ce0-b52b-6475bca622f4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setResult("Message sent successfully!");
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I’d love to hear from you! Whether you have questions, project ideas, or just want to connect, feel free to reach out. Use the contact form below, or email me directly at ssnehasingh53@gmail.com. Let’s start a conversation!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src="mail.png" alt="mail"/>
              <p>ssnehasingh53@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src="call.jpg" alt="phone"/>
              <p>+91 87XXXXXXXX</p>
            </div>
            <div className="contact-detail location-icon">
              <img src="location.png" alt="location"/>
              <p>Uttar Pradesh, India</p>
            </div>
          </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" id="name" required />
          <label htmlFor="email">Your email</label>
          <input type="email" placeholder="Enter your email" name="email" id="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" id="message" required></textarea>
          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
      {result && <div className="contact-result">{result}</div>}
    </div>
  );
};

export default Contact;
