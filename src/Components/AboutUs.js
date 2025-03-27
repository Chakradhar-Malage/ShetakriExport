import React from "react";
import AboutUSpageFarm from "../Assets/AboutUSpageFarm.png";
import Header from "./Header";

const CropTradePage = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      {/* <nav className="flex justify-between items-center p-4">
        <div className="text-xl font-bold">🌱 ShetkariExports</div>
        <div className="space-x-6">
          <a href="#" className="text-xl no-underline">Introduction</a>
          <a href="#" className="text-xl no-underline">Explore</a>
          <a href="#" className="text-xl no-underline">Crops</a>
          <a href="#" className="text-xl no-underline">About</a>
          <a href="#" className="text-xl no-underline">Contact</a>
        </div>
        <button className="bg-purple-600 px-4 py-2 rounded">Trade Now</button>
      </nav> */}
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mt-16 p-4">
        <h1 className="text-4xl font-bold">Welcome to ShetkariExports World</h1>
        <p className="text-gray-400 mt-2">
          Discover fresh crops for trade, sourced directly from farmers.
        </p>
        <button className="mt-4 bg-purple-600 px-6 py-2 rounded">View Jobs</button>
        
        {/* Image */}
        <div className="mt-8">
          <img
            src={AboutUSpageFarm}
            alt="Agriculture Field"
            className="rounded-full w-64 h-64 object-cover"
          />
        </div>
      </div>

      {/* Commitment Section */}
      <div className="bg-gray-200 text-black py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Our Commitment to Quality</h2>
        <div className="flex md:justify-between mt-6 flex-col md:flex-row items-center">
          <div className=" md:w-1/4 p-1">
            <h3 className="font-semibold">Transparency</h3>
            <p className="text-sm text-gray-600">
              We prioritize quality and transparency in all our trades.
              Your satisfaction is our priority.
            </p>
          </div>
          <div className="md:w-1/4 p-1">
            <h3 className="font-semibold">Direct Sourcing</h3>
            <p className="text-sm text-gray-600">
              At ShetkariExpots, you can access fresh crops from local farmers!
              Support sustainability and fair trade.
            </p>
          </div>
          <div className="md:w-1/4 p-1">
            <h3 className="font-semibold">Sustainable</h3>
            <p className="text-sm text-gray-600">
              We believe in continuous learning and growth for a sustainable future.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="bg-gray-300 text-black py-12 px-6 text-center">
        <h2 className="text-2xl font-bold ">About Us</h2>
        <p className="text-gray-600 mt-2 text-start md:text-center md:m-4">
        With four years of expertise in the import and export of both perishable and nonperishable food products, we are committed to delivering excellence to exporters and
buyers through high-quality standards and efficient business solutions.
Our advanced services are designed to bridge industry gaps and address the hidden challenges of international trade.We prioritize transparency, ensuring customer satisfaction while providing valuable market insights. By keeping our clients informed about daily market trends and future projections, we empower them to make well-informed business decisions
        </p>
      </div>

      {/* Current Openings Section */}
      <div className="bg-gray-300 text-black py-12 px-6 text-center ">
        <h2 className="text-2xl font-bold ">Current Openings</h2>
        <div className="flex flex-col gap-2  items-center space-x-2 mt-4 md:flex-row md:justify-center">
          <button className="bg-purple-600 px-4 py-2 rounded text-white">ALL</button>
          <button className="bg-gray-400 px-4 py-2 rounded">IMPORT/EXPORT</button>
          <button className="bg-gray-400 px-4 py-2 rounded">CITY ADMIN</button>
          <button className="bg-gray-400 px-4 py-2 rounded">PRICING</button>
          <button className="bg-gray-400 px-4 py-2 rounded">CONTACT US</button>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>Crop Quality</div>
          <div>Trade Manager</div>
          <div>Junior Quality</div>
          <div>Market Analyst</div>
          <div>Client Relations</div>
          <div>Content Writer</div>
          <div>HR Coordinator</div>
        </div>
      </div>

      {/* Our Dedicated Team Section */}
      <div className="bg-black text-white py-12 px-6 text-center">
        <h2 className="text-2xl font-bold">Our Dedicated Team</h2>
        <p className="text-gray-400 mt-2">
          We aim to facilitate fair trade and empower farmers by providing a platform for hassle-free crop trading.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div>Demo Name - CEO</div>
          <div>Demo Name - UI/UX Designer</div>
          <div>Demo Name - Product Coordinator</div>
          <div>Demo Name - Data Analyst</div>
          <div>Demo Name - CTO</div>
          <div>Demo Name - Web Developer</div>
          <div>Demo Name - Front-End Engineer</div>
          <div>Demo Name - CFO</div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-6 px-6 text-center border-t border-gray-700">
        <div className="text-sm">© ShetkariExpots | Growing the global agricultural marketplace</div>
        <div className="text-sm mt-2">Contact: info@ShetkariExports.com</div>
      </footer>
    </div>
  );
};

export default CropTradePage;
