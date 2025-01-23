import React, { useState, useEffect, useRef } from "react";
import './Footer.css';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const formRef = useRef(null); // Ref for the form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitData = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      const timestamp = new Date().toISOString();

      const res = await fetch('https://portfoliodata-40742-default-rtdb.firebaseio.com/messages.json', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          timestamp,
        }),
      });

      if (res.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        const errorMessage = await res.text();
        setResponseMessage(`Failed to send message: ${errorMessage}`);
      }
    } catch (error) {
      setResponseMessage(`An error occurred: ${error.message}`);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add the 'visible' class when the form is in view
            observer.unobserve(entry.target); // Stop observing once it's visible
          }
        });
      },
      { threshold: 0.3 } // Trigger when 10% of the element is visible
    );

    if (formRef.current) {
      observer.observe(formRef.current); // Observe the form container
    }

    // Cleanup the observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="contact-page">
      <div ref={formRef} className="contact-box hidden"> {/* Initial state as 'hidden' */}
        <h1 className="contact-heading">Contact Me</h1>
        <p className="contact-description">
          I'd love to hear from you! Please fill out the form below or reach out directly through email or LinkedIn.
        </p>

        <form className="contact-form" onSubmit={submitData}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          />
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>

        {responseMessage && <p className="response-message">{responseMessage}</p>}

        <div className="additional-info">
          <p>Email: <a href="mailto:suvarnashukla11@gmail.com">suvarnashukla11@gmail.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/suvarna-shukla-8b4942251" target="_blank" rel="noopener noreferrer">Suvarna Shukla</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
