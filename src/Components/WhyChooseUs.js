
import React from "react";
import ourvaluepropositions from "../Assets/OurValuePropositionsImg.png";


const WhyChooseUs = () => {
  return (
    <>
      {/* WHY CHOOSE US SECTION */}
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

      {/* OUR VALUE PROPOSITIONS SECTION */}
      <section className="bg-gray-200 text-gray-800 py-12 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-8">
          
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={ourvaluepropositions} // Replace with your image path
              alt="Tomatoes on vine"
              className="w-full h-auto rounded-lg shadow-lg border-4 border-orange-500"
            />
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Our Value Propositions
            </h2>
            <div className="space-y-6">

              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white font-bold rounded-full">
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Quality Assurance</h3>
                  <p className="text-gray-700">
                    Meeting international standards
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white font-bold rounded-full">
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Market Insights</h3>
                  <p className="text-gray-700">
                    Weekly updates &amp; trend forecasts
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white font-bold rounded-full">
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Financial Transparency</h3>
                  <p className="text-gray-700">
                    Clear policies &amp; fair transactions
                  </p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white font-bold rounded-full">
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Payment Terms</h3>
                  <p className="text-gray-700">
                    Immediate &amp; structured payments<br></br>
                    No Credit Policy<br></br>
                    Upfront 20% Payment: Paid after receiving Bill of Lading<br></br>
                    Fast Settlements: Remaining 80% paid within 3-4 days of sale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
