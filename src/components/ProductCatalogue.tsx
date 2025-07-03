import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { products } from '../data/mockData';
import { useBasket } from '../context/BasketContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductCatalogue: React.FC = () => {
  const { addItem } = useBasket();
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAddToBasket = (product: any) => {
    addItem(product);
  };

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToProduct = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="catalogue" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div 
          ref={ref}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Product Suite
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light px-4 mb-6 sm:mb-8">
            A comprehensive suite of modular solutions designed to power your business transformation.
          </p>

          {/* Navigation Arrows - Under subtitle */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={prevProduct}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <span className="text-sm text-gray-500 font-light">
              {currentIndex + 1} of {products.length}
            </span>

            <button
              onClick={nextProduct}
              className="bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={currentIndex === products.length - 1}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile: Single Product View */}
        <div className="block lg:hidden">
          <div className="px-4">
            <ProductCard 
              product={products[currentIndex]}
              isActive={true}
              isPreview={false}
              onAddToBasket={handleAddToBasket}
              isMobile={true}
            />
          </div>
        </div>

        {/* Desktop: Carousel Container */}
        <div className="hidden lg:block relative overflow-hidden">
          {/* Products Container - Always centered layout */}
          <div className="flex items-stretch justify-center h-[750px]">
            {/* Previous Product Preview (if exists) */}
            {currentIndex > 0 && (
              <div className="w-[600px] flex-shrink-0 relative">
                <div className="relative h-full">
                  <ProductCard 
                    product={products[currentIndex - 1]}
                    isActive={false}
                    isPreview={true}
                    onAddToBasket={handleAddToBasket}
                    isMobile={false}
                  />
                  {/* Gradient overlay for left preview */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            )}

            {/* Main Product - Always centered with consistent spacing */}
            <div className="w-[600px] flex-shrink-0 mx-4">
              <ProductCard 
                product={products[currentIndex]}
                isActive={true}
                isPreview={false}
                onAddToBasket={handleAddToBasket}
                isMobile={false}
              />
            </div>

            {/* Next Product Preview (if exists) */}
            {currentIndex < products.length - 1 && (
              <div className="w-[600px] flex-shrink-0 relative">
                <div className="relative h-full">
                  <ProductCard 
                    product={products[currentIndex + 1]}
                    isActive={false}
                    isPreview={true}
                    onAddToBasket={handleAddToBasket}
                    isMobile={false}
                  />
                  {/* Gradient overlay for right preview */}
                  <div className="absolute inset-0 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProduct(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-black w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: any;
  isActive: boolean;
  isPreview: boolean;
  onAddToBasket: (product: any) => void;
  isMobile: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isActive, isPreview, onAddToBasket, isMobile }) => {
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-500 h-full flex flex-col ${
        isActive 
          ? 'shadow-2xl shadow-black/15' 
          : 'shadow-md hover:shadow-lg'
      } ${isMobile ? 'max-w-sm mx-auto' : ''}`}
    >
      {/* Image - Increased heights for better fit */}
      <div className="relative overflow-hidden flex-shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className={`w-full object-cover transition-transform duration-700 hover:scale-105 ${
            isMobile ? 'h-56 sm:h-72' : 'h-96'
          }`}
        />
      </div>

      {/* Content */}
      <div className={`flex flex-col flex-grow ${isMobile ? 'p-4 sm:p-6' : 'p-6'}`}>
        {/* Product Name */}
        <h3 className={`font-bold text-black mb-3 tracking-tight ${
          isMobile ? 'text-xl sm:text-2xl' : 'text-2xl'
        }`}>
          {product.name}
        </h3>

        {/* Product Title - Only show if it exists */}
        {product.title && (
          <h4 className={`text-gray-600 mb-4 font-light ${
            isMobile ? 'text-base sm:text-lg' : 'text-lg'
          }`}>
            {product.title}
          </h4>
        )}

        {/* Description */}
        <div className="mb-6">
          <p className={`text-gray-700 leading-relaxed font-light ${
            isMobile ? 'text-sm sm:text-base' : 'text-base'
          }`}>
            {product.summary}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6 flex-grow">
          <div className="space-y-3">
            {product.features.slice(0, 3).map((feature: string, index: number) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-black rounded-full flex-shrink-0 mt-2.5"></div>
                <span className={`text-gray-600 font-light leading-relaxed ${
                  isMobile ? 'text-xs sm:text-sm' : 'text-sm'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className={`flex gap-3 mt-auto ${isPreview ? 'opacity-50' : 'opacity-100'} ${
          isMobile ? 'flex-col sm:flex-row' : 'flex-row'
        }`}>
          <button
            onClick={() => onAddToBasket(product)}
            className={`group bg-black hover:bg-gray-800 text-white rounded-full font-medium transition-all flex items-center justify-center space-x-2 ${
              isMobile ? 'px-4 py-3 text-xs sm:text-sm' : 'px-6 py-3 text-sm'
            }`}
          >
            <Plus className="h-4 w-4" />
            <span>Add To Basket</span>
          </button>
          
          <Link
            to={`/product/${product.id}`}
            className={`group text-black hover:text-gray-600 rounded-full font-medium transition-all flex items-center justify-center space-x-2 border border-gray-200 hover:border-gray-300 ${
              isMobile ? 'px-4 py-3 text-xs sm:text-sm' : 'px-6 py-3 text-sm'
            }`}
          >
            <Eye className="h-4 w-4" />
            <span>View Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;