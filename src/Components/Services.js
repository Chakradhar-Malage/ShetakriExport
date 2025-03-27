// import React from 'react'
// import Header from './Header'

// const Services = () => {
//   return (
//     <div>
//       <Header />
//       <main className="services-content">
//         <section className="services-info">
//           <h2>Our Services</h2>
//           <p>
//             We offer a range of services to help farmers and buyers connect and trade agricultural products.
//             Our platform provides a seamless experience for farmers to sell their produce and for buyers to purchase fresh, high-quality products.
//           </p>
//         </section>
//       </main>
//     </div>
//   )
// }

// export default Services

import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaHandshake, FaCheckCircle, FaTag, FaChartLine, FaGlobe, FaClock } from 'react-icons/fa';
import Header from "./Header";

const ServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">🌱 ShetkariExports</div>
        <div className="space-x-6">
          <a href="#" className="text-xl no-underline hover:text-purple-600 transition-colors duration-200">Introduction</a>
          <a href="#" className="text-xl no-underline hover:text-purple-600 transition-colors duration-200">Explore</a>
          <a href="#" className="text-xl no-underline hover:text-purple-600 transition-colors duration-200">Crops</a>
          <a href="#" className="text-xl no-underline hover:text-purple-600 transition-colors duration-200">About</a>
          <a href="#" className="text-xl no-underline hover:text-purple-600 transition-colors duration-200">Contact</a>
        </div>
        <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-700 transition-colors duration-200">Trade Now</button>
      </nav> */}
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-16 mb-12">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-white mt-2 text-lg">Providing high-quality trading solutions for fresh produce.</p>
      </div>

      {/* Services Section */}
      <div className="bg-gray-200 text-black py-12 px-6 text-center mb-12">
        <h2 className="text-3xl font-bold">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
            <FaHandshake className="text-4xl mb-2" />
            <h3 className="font-semibold text-xl">Commission-Based Sales</h3>
            <p>Selling fresh fruits & vegetables in Dubai.</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
            <FaCheckCircle className="text-4xl mb-2" />
            <h3 className="font-semibold text-xl">Supplier Compliance</h3>
            <p>Helping suppliers meet international standards.</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
            <FaTag className="text-4xl mb-2" />
            <h3 className="font-semibold text-xl">Fixed Price Selling</h3>
            <p>Option to sell at a pre-agreed price.</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
            <FaChartLine className="text-4xl mb-2" />
            <h3 className="font-semibold text-xl">Market Reports</h3>
            <p>Weekly updates on trends & projections.</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
            <FaGlobe className="text-4xl mb-2" />
            <h3 className="font-semibold text-xl">Import & Export Support</h3>
            <p>Long-term business policies.</p>
          </div>
          <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
            <FaClock className="text-4xl mb-2" />
            <h3 className="font-semibold text-xl">Fast Payments</h3>
            <p>Ensuring quick transactions.</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex flex-col items-center mt-8 mb-12">
        <img src="image.png" alt="Team inspecting fresh produce for export" className="rounded-lg w-full" />
        <p className="text-center mt-4 text-white">Our team ensuring quality produce for export.</p>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6 text-center border-t border-gray-700 mt-auto">
        <div className="text-sm">© ShetkariExports | Growing the global agricultural marketplace</div>
        <div className="text-sm mt-2">Contact: info@ShetkariExports.com</div>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-purple-600"><FaFacebook className="text-2xl" /></a>
          <a href="#" className="hover:text-purple-600"><FaTwitter className="text-2xl" /></a>
          <a href="#" className="hover:text-purple-600"><FaLinkedin className="text-2xl" /></a>
        </div>
      </footer>
    </div>
  );
};

export default ServicesPage;
