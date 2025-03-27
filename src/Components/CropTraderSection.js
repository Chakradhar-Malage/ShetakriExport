import React from "react";
import farmer from "../Assets/Farmer.jpg";

const CropTraderSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-8 rounded-lg shadow-lg">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={farmer} // Replace with your actual image path
          alt="Farmer in field"
          className="rounded-lg shadow-lg w-full"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          Yes, We ensures <br /> transparent and efficient <br />
          crop trading through
        </h2>
        <p className="mt-4 text-gray-300 text-lg">
          <span className="italic">ShetkariExports</span> revolutionizes crop trading
          by enabling direct, secure transactions globally, eliminating
          intermediaries, and promoting fair practices.
        </p>
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-lg shadow-lg hover:opacity-90 transition">
          Start Trading Now
        </button>
      </div>
    </section>
  );
};

export default CropTraderSection;
