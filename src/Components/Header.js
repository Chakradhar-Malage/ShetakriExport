import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from "../Assets/BusinessLogo.jpeg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate = useNavigate();
  // const handleLogoClick = () => {
  //   navigate('/');
  // }
  return (
    <div className='bg-black'>
      <nav className=" text-white bg-black px-2 ">
        <div className="max-w-screen mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-auto p-2 m-2">
            {/* Logo */}
            <div className="flex-shrink-0 w-3/12 ">
            <Link to="/">
              <img src={logo} alt='logo-loading'  className="w-24 object-fill rounded-3xl"/>

            </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:justify-center md:gap-5 md:w-9/12 text-xl">
              <Link to="/" className="px-4 py-1  text-blue-500 no-underline hover:text-purple-700 hover:font-bold transition">
                Home
              </Link>
              <Link to="/about-us" className="px-4 py-1  text-blue-500 no-underline hover:text-purple-700 hover:font-bold transition">
                About
              </Link>
              <Link to="/Services" className="px-4 py-1  text-blue-500 no-underline hover:text-purple-700 hover:font-bold transition">
                Services
              </Link>
              <Link to="/contact-us" className="px-4 py-1  text-blue-500 no-underline hover:text-purple-700 hover:font-bold transition">
                Contact
              </Link>
            </div>


            {/* Mobile Menu Button */}
            <div className="md:hidden pr-6">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 opacity-60 border border-black rounded-lg ">
          <Link
            to={"/"}
            className="text-purple-300 block px-4 py-2 no-underline text-xl hover:bg-gray-800 hover:text-white hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to={"/about-us"}
            className="text-purple-300 block px-4 py-2 no-underline text-xl hover:bg-gray-800 hover:text-white hover:font-bold "
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to={"/services"}
            className="text-purple-300 block px-4 py-2 no-underline text-xl hover:bg-gray-800 hover:text-white hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to={"/contact-us"}
            className="text-purple-300 block px-4 py-2 no-underline text-xl hover:bg-gray-800 hover:text-white hover:font-bold"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
      </nav>
    </div>
  )
}

export default Header