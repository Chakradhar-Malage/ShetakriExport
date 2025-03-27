// import React from 'react';
// import Header from './Header'; // Assuming a reusable Header component
// import Footer from './Footer'; // Assuming a reusable Footer component
// import './ContactUs.css'; // Import custom styles

// function ContactUs() {
//   // Handle form submission (placeholder for backend integration)
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//     // In a real app, replace this with logic to send form data to a backend
//   };

//   return (
//     <div className="contact-us">
//       <Header />
//       <main className="contact-content top 50">
//         {/* Contact Information Section */}
//         <section className="contact-info">
//           <h2>Contact Information</h2>
//           <ul>
//             <li>
//               <i className="fas fa-map-marker-alt"></i> Address: 123 Farm Road, Agriculture City, AG 12345
//             </li>
//             <li>
//               <i className="fas fa-phone"></i> Phone: (123) 456-7890
//             </li>
//             <li>
//               <i className="fas fa-envelope"></i> Email: contact@croptrade.com
//             </li>
//           </ul>
//         </section>

//         {/* Contact Form Section */}
//         <section className="contact-form">
//           <h2>Send Us a Message</h2>
//           <form onSubmit={handleSubmit}>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" name="name" placeholder="Your Name" required />

//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" name="email" placeholder="Your Email" required />

//             <label htmlFor="subject">Subject</label>
//             <input type="text" id="subject" name="subject" placeholder="Subject" required />

//             <label htmlFor="message">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               placeholder="Your Message"
//               required
//             ></textarea>

//             <button type="submit">Submit</button>
//           </form>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default ContactUs;

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
      <main className="contact-content top 50">
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
          {/* Map Container */}
          <div className="map-container">
            <h3 style={{color: 'black'}}>Our Location</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.42830835991!2d78.98723716782292!3d21.161149036413608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4951dd15b33d1%3A0x2e6c99b66b8c325c!2sNagpur%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1696451234567!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Company Location in Nagpur"
            ></iframe>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" style={{ color: 'black' }} placeholder="Your Name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" style={{ color: 'black' }} placeholder="Your Email" required />

            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" style={{ color: 'black' }} placeholder="Subject" required />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              style={{ color: 'black' }}
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