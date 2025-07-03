import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useBasket } from '../context/BasketContext';

const Header: React.FC = () => {
  const { getItemCount } = useBasket();
  const location = useLocation();
  const itemCount = getItemCount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden group-hover:opacity-80 transition-opacity">
              <img
                src="https://i.imgur.com/9TYbf14.png"
                alt="ED Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-black hover:font-semibold transition-all text-sm font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-black hover:font-semibold transition-all text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/products"
              className="text-gray-600 hover:text-black hover:font-semibold transition-all text-sm font-medium"
            >
              Product Suite
            </Link>
            <button
              onClick={() => scrollToSection('case-studies')}
              className="text-gray-600 hover:text-black hover:font-semibold transition-all text-sm font-medium"
            >
              Case Studies
            </button>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-black hover:font-semibold transition-all text-sm font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Right Side - Basket and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Basket */}
            <Link
              to="/basket"
              className="relative group flex items-center space-x-2 hover:bg-gray-50 px-3 py-2 rounded-lg transition-all"
              onClick={closeMobileMenu}
            >
              <ShoppingCart className="h-5 w-5 text-gray-600 group-hover:text-black" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-medium rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="text-gray-600 group-hover:text-black group-hover:font-semibold hidden sm:block text-sm font-medium transition-all">
                Basket
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white/85 backdrop-blur-xl">
            <nav className="py-4 space-y-2">
              <Link
                to="/"
                className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                to="/products"
                className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium"
                onClick={closeMobileMenu}
              >
                Product Suite
              </Link>
              <button
                onClick={() => scrollToSection('case-studies')}
                className="block w-full text-left px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium"
              >
                Case Studies
              </button>
              <Link
                to="/contact"
                className="block px-4 py-3 text-gray-600 hover:text-black hover:bg-gray-50 transition-all font-medium"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;