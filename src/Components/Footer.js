const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left - Contact Info */}
        <div className="flex flex-col items-center ">
          <p className="flex items-center space-x-2">
            <span>💬</span> <span>Chat With Sales</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <span>📞</span> <span>1 (888) 602-6756</span>
          </p>
          <p className="flex items-center space-x-2 mt-2">
            <span>📧</span> <span>sales@pressable.com</span>
          </p>
        </div>

        {/* Solutions */}
        <div className="flex flex-col items-center">
          <h3 className="text-green-400 font-semibold">Solutions</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Commission-Based Sales</li>
            <li>Supplier Compliance</li>
            <li>Fixed Price Selling</li>
            <li>Market Reports</li>
            <li>Import & Export Support</li>
            <li>Fast Payments</li>
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col items-center">
          <h3 className="text-green-400 font-semibold">Company</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>About Us</li>
            <li>Careers</li>
            <li>Customer Stories</li>
            <li>Contact</li>
            <li>Legal</li>
            <li>Press Kit</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="flex flex-col items-center">
          <h3 className="text-green-400 font-semibold">Resources</h3>
          <ul className="mt-2 space-y-1 text-gray-300">
            <li>Blog</li>
            <li>eBooks</li>
            <li>Knowledge Base</li>
            <li>Customer Reviews</li>
            <li>Affiliate Program</li>
            <li>Strategic Partners</li>
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4  items-center">
            <a href="#" className="text-white text-xl">🔵</a> {/* Facebook */}
            <a href="#" className="text-white text-xl">🔗</a> {/* LinkedIn */}
            <a href="#" className="text-white text-xl">🐦</a> {/* Twitter */}
            <a href="#" className="text-white text-xl">📷</a> {/* Instagram */}
            <a href="#" className="text-white text-xl">🎥</a> {/* YouTube */}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <hr className="w-full" />
        {/* <p>⚡ Powered by WordPress</p> */}
        {/* <p>Host With Pressable</p> */}
       
    </footer>
  );
};

export default Footer;
