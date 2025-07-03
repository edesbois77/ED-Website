import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Eye } from 'lucide-react';
import { products } from '../data/mockData';
import { useBasket } from '../context/BasketContext';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ProductSuitePage: React.FC = () => {
  const { addItem } = useBasket();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  const handleAddToBasket = (product: any) => {
    addItem(product);
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back Link - Above Title */}
        <div 
          ref={headerRef}
          className={`mb-4 sm:mb-6 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Header */}
        <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 tracking-tight">
            Product Suite
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            Discover our comprehensive suite of modular business solutions
          </p>
        </div>

        {/* Products List */}
        <div className="space-y-8 sm:space-y-10 md:space-y-12">
          {products.map((product, index) => (
            <ProductSection 
              key={product.id} 
              product={product} 
              index={index}
              onAddToBasket={handleAddToBasket}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ProductSectionProps {
  product: any;
  index: number;
  onAddToBasket: (product: any) => void;
}

const ProductSection: React.FC<ProductSectionProps> = ({ product, index, onAddToBasket }) => {
  const { ref, isVisible } = useScrollAnimation();

  // Product overview text (exactly 4 lines) - you can customize these for each product
  const getProductOverview = (productId: string) => {
    const overviews: { [key: string]: string } = {
      'connect-ed': 'Connect-ED opens the door to senior decision-makers across media, sport and entertainment. Built over 25 years of trust, care and instinct, it\'s not just who you know but how you connect with purpose and value.',
      'creat-ed': 'Creat-ED brings a creative mindset to every challenge, delivering ideas that excite brands, challenge convention and spark meaningful change. It\'s not just what you create, it\'s how you think.',
      'direct-ed': 'Direct-ED strengthens leadership at every level, from boardroom clarity to team chemistry, with passion at its core. It unlocks trust, sharpens culture, and drives performance, even in high-stakes environments.',
      'monetis-ed': 'Monetis-ED delivers revenue through strategy, storytelling and precision selling. From knowing where to fish to landing the deal, this module brings structure, substance and standout results.',
      'strategis-ed': 'Strategis-ED takes a step back, finds what matters and charts a path forward. Clear, inclusive and grounded in reality. It\'s strategy made simple, actionable and built to stick.',
      'analys-ed': 'Analyz-ED turns listening into action. From customer surveys to real-time performance data, it helps shape smarter strategy, sharper creative and better outcomes, driven by insight, not assumption.',
      'deliver-ed': 'Deliver-ED is built on outcomes. It reflects two decades of exceeding targets, growing teams and driving lasting client success, not once, but time and again.',
      'communicat-ed': 'Communicat-ED delivers clarity that inspires action, from boardroom strategy to team culture and commercial storytelling. It\'s communication with purpose, not just polish.'
    };
    
    return overviews[productId] || 'Enhance your business operations with this powerful solution. Streamlined workflows improve efficiency across your organization. Advanced features adapt to your unique business requirements. Proven results deliver measurable value to your bottom line.';
  };

  const overview = getProductOverview(product.id);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
        {/* Product Image - Left Side */}
        <div className="relative group overflow-hidden rounded-2xl order-first lg:order-first">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-64 sm:h-80 lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Product Content - Right Side */}
        <div className="flex flex-col space-y-4 sm:space-y-6 order-last lg:order-last">
          {/* Product Name */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4 tracking-tight">
              {product.name}
            </h2>
            
            {/* 4-Line Overview - Single paragraph with line breaks */}
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              {overview}
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-medium text-black">Key Features</h4>
            <div className="space-y-2 sm:space-y-3">
              {product.features.map((feature: string, featureIndex: number) => (
                <div key={featureIndex} className="flex items-start space-x-3">
                  <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 sm:mt-3 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light leading-relaxed text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
            <button
              onClick={() => onAddToBasket(product)}
              className="group bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <Plus className="h-4 w-4" />
              <span>Add To Basket</span>
            </button>
            
            <Link
              to={`/product/${product.id}`}
              className="group text-black hover:text-gray-600 px-6 sm:px-8 py-3 rounded-full font-medium transition-all flex items-center justify-center space-x-2 border border-gray-200 hover:border-gray-300 text-sm sm:text-base"
            >
              <Eye className="h-4 w-4" />
              <span>View Details</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider for all but last product */}
      {index < products.length - 1 && (
        <div className="pt-6 sm:pt-8">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
        </div>
      )}
    </div>
  );
};

export default ProductSuitePage;