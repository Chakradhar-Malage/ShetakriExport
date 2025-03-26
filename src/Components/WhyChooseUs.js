const WhyChooseUs = () => {
  return (
    <section className="bg-gray-800 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        
        {/* Title */}
        <h2 className="text-4xl font-serif text-white mb-8">Why Choose Us?</h2>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl">🌍</span>
            <p className="mt-2 text-lg">Global Network</p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl">♻️</span>
            <p className="mt-2 text-lg">Sustainable & Organic Focus</p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl">💰</span>
            <p className="mt-2 text-lg">Fair & Transparent Pricing</p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <span className="text-5xl">🤝</span>
            <p className="mt-2 text-lg">Direct Farmer Partnerships</p>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
