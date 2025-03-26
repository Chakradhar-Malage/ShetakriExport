const HeroSection = () => {
    return (
      <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-16">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold leading-tight">
            Crop Trade : Your gateway to quality crops.
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            Crops Trade offers a wide range of variety of crops.
          </p>
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold">
              Start Trading Now
            </button>
            <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg font-semibold">
              Purchase Crops
            </button>
          </div>
        </div>
  
        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/handshake.png" // Replace with your handshake image path
            alt="Handshake"
            className="w-72 md:w-96"
          />
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  