import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from "../Assets/Logo.png";

const Header = () => {
  return (
    <div>
      <nav class=" navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <img src={logo} className='Logo-img'/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className='custom-nav-link'>Home</Link>
            </li>
            <li class="nav-item active">
              <Link to="/contact-us" className='custom-nav-link'>Contact Us</Link>
            </li>
            <li class="nav-item active">
              <Link to="/about-us" className='custom-nav-link'>About Us</Link>
            </li>
            <li class="nav-item active">
              <Link to="/services" className='custom-nav-link'>Services</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header