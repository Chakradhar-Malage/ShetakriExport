import React from 'react';
import Header from './Header'; // Assuming a reusable Header component
import Footer from './Footer'; // Assuming a reusable Footer component
import './ContactUs.css'; // Import custom styles

function ContactUs() {
  // Handle form submission (placeholder for backend integration)
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    // In a real app, replace this with logic to send form data to a backend
  };

  return (
    <div className="contact-us">
      <Header />
      <main className="contact-content">
        {/* Contact Information Section */}
        <section className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i> Address: 123 Farm Road, Agriculture City, AG 12345
            </li>
            <li>
              <i className="fas fa-phone"></i> Phone: (123) 456-7890
            </li>
            <li>
              <i className="fas fa-envelope"></i> Email: contact@croptrade.com
            </li>
          </ul>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" placeholder="Subject" required />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ContactUs;

