import React from 'react';
// import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: Include for styling
import Header from './Header';

function HomePage() {
  return (
    <div className="home-page">
      <Header />
      {/* <h1>Crop Trade</h1>
      <p>Your one-stop platform for connecting and exploring.</p>
      <div className="options">
        <Link to="/about" className="option-card">
          <h2>About Us</h2>
          <p>Learn more about our mission and values</p>
        </Link>
        <Link to="/contact" className="option-card">
          <h2>Contact Us</h2>
          <p>Get in touch with our team</p>
        </Link>
        <Link to="/services" className="option-card">
          <h2>Our Services</h2>
          <p>Discover how we can help you</p>
        </Link>
      </div> */}
    </div>
  );
}

export default HomePage;