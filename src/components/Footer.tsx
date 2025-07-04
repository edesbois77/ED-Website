import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    // Navigate to home page with section anchor
    window.location.href = `/#${sectionId}`;
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Logo & Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-md overflow-hidden">
                <img
                  src="https://i.imgur.com/9TYbf14.png"
                  alt="ED Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-600 mb-6 sm:mb-8 max-w-md leading-relaxed font-light text-sm sm:text-base">
              Empowering businesses worldwide with innovative modular solutions 
              that drive growth and operational excellence.
            </p>
            <div className="flex items-center space-x-2 text-gray-600">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-light">hello@ed-solutions.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-black font-medium mb-4 sm:mb-6 text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors font-light text-sm">About <span className="font-bold">ED</span></Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Product Suite</Link></li>
              <li><button onClick={() => scrollToSection('case-studies')} className="text-gray-600 hover:text-black transition-colors font-light text-sm">Case Studies</button></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Products Column 1 */}
          <div>
            <h3 className="text-black font-medium mb-4 sm:mb-6 text-sm sm:text-base">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/product/connect-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Connect-<span className="font-bold">ED</span>™</Link></li>
              <li><Link to="/product/creat-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Creat-<span className="font-bold">ED</span>™</Link></li>
              <li><Link to="/product/direct-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Direct-<span className="font-bold">ED</span>™</Link></li>
              <li><Link to="/product/monetis-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Monetis-<span className="font-bold">ED</span>™</Link></li>
            </ul>
          </div>

          {/* Products Column 2 */}
          <div>
            <h3 className="text-black font-medium mb-4 sm:mb-6 text-sm sm:text-base opacity-0 lg:opacity-100">&nbsp;</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/product/strategis-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Strategis-<span className="font-bold">ED</span>™</Link></li>
              <li><Link to="/product/analys-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Analys-<span className="font-bold">ED</span>™</Link></li>
              <li><Link to="/product/deliver-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Deliver-<span className="font-bold">ED</span>™</Link></li>
              <li><Link to="/product/communicat-ed" className="text-gray-600 hover:text-black transition-colors font-light text-sm">Communicat-<span className="font-bold">ED</span>™</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-xs sm:text-sm font-light text-center sm:text-left">
            © 2025 <span className="font-bold">ED</span> Solutions. All rights reserved.
          </p>
          <div className="flex space-x-6 sm:space-x-8">
            <a href="#" className="text-gray-500 hover:text-black text-xs sm:text-sm transition-colors font-light">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black text-xs sm:text-sm transition-colors font-light">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;