// import React from "react";
// import { FaFacebook, FaTwitter, FaLinkedin, FaHandshake, FaCheckCircle, FaTag, FaChartLine, FaGlobe, FaClock } from 'react-icons/fa';
// import Header from "./Header";
// import TeamInspectingCrop from "../Assets/TeamInspectingCrop.png";

// const ServicesPage = () => {
//   return (
//     <div className="bg-black text-white min-h-screen flex flex-col">

//       <Header />

//       {/* Hero Section */}
//       <div className="flex flex-col items-center text-center mt-16 mb-12">
//         <h1 className="text-4xl font-bold">Our Services</h1>
//         <p className="text-white mt-2 text-lg">Providing high-quality trading solutions for fresh produce.</p>
//       </div>

//       {/* Services Section */}
//       <div className="bg-gray-200 text-black py-12 px-6 text-center mb-12">
//         <h2 className="text-3xl font-bold">What We Offer</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
//           <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
//             <FaHandshake className="text-4xl mb-2" />
//             <h3 className="font-semibold text-xl">Commission-Based Sales</h3>
//             <p>Selling fresh fruits & vegetables in Dubai.</p>
//           </div>
//           <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
//             <FaCheckCircle className="text-4xl mb-2" />
//             <h3 className="font-semibold text-xl">Supplier Compliance</h3>
//             <p>Helping suppliers meet international standards.</p>
//           </div>
//           <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
//             <FaTag className="text-4xl mb-2" />
//             <h3 className="font-semibold text-xl">Fixed Price Selling</h3>
//             <p>Option to sell at a pre-agreed price.</p>
//           </div>
//           <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
//             <FaChartLine className="text-4xl mb-2" />
//             <h3 className="font-semibold text-xl">Market Reports</h3>
//             <p>Weekly updates on trends & projections.</p>
//           </div>
//           <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
//             <FaGlobe className="text-4xl mb-2" />
//             <h3 className="font-semibold text-xl">Import & Export Support</h3>
//             <p>Long-term business policies.</p>
//           </div>
//           <div className="bg-purple-600 text-white p-8 rounded-xl shadow-md transform hover:scale-105 transition duration-300">
//             <FaClock className="text-4xl mb-2" />
//             <h3 className="font-semibold text-xl">Fast Payments</h3>
//             <p>Ensuring quick transactions.</p>
//           </div>
//         </div>
//       </div>

//       {/* Image Section */}
//       <div className="flex flex-col items-center mt-8 mb-12">
//         <img src={TeamInspectingCrop} alt="Team inspecting fresh produce for export" className="rounded-lg w-half h-1/4" />
//         <p className="text-center mt-4 text-white">Our team ensuring quality produce for export.</p>
//       </div>

//       {/* Footer */}
//       <footer className="bg-black text-white py-6 px-6 text-center border-t border-gray-700 mt-auto">
//         <div className="text-sm">© ShetkariExports | Growing the global agricultural marketplace</div>
//         <div className="text-sm mt-2">Contact: info.g7foods@gmail.com</div>
//         <div className="flex justify-center space-x-4 mt-4">
//           <a href="#" className="hover:text-purple-600"><FaFacebook className="text-2xl" /></a>
//           <a href="#" className="hover:text-purple-600"><FaTwitter className="text-2xl" /></a>
//           <a href="#" className="hover:text-purple-600"><FaLinkedin className="text-2xl" /></a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ServicesPage;


import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaHandshake, FaCheckCircle, FaTag, FaChartLine, FaGlobe, FaClock } from 'react-icons/fa';
import Header from "./Header";
import TeamInspectingCrop from "../Assets/TeamInspectingCrop.png";

const ServicesPage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
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
      <div className="flex flex-col md:flex-row items-center mt-8 mb-12 px-6">
        <img 
          src={TeamInspectingCrop} 
          alt="Team inspecting fresh produce for export" 
          className="rounded-lg w-full md:w-1/4 mb-4 md:mb-0 md:mr-4" 
        />
        <p className="text-white text-center md:text-left">
          Our team ensuring quality produce for export.<br></br>Daily Market Monitoring: Keeping clients ahead of trends <br></br> Future
Projections:
Helping businesses
make informed
decisions <br></br>
Efficient Supply
Chain: Quick &
reliable distribution
        </p>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6 text-center border-t border-gray-700 mt-auto">
        <div className="text-sm">© ShetkariExports | Growing the global agricultural marketplace</div>
        <div className="text-sm mt-2">Contact: info.g7foods@gmail.com</div>
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