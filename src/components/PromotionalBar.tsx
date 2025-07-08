import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBasket } from '../context/BasketContext';
import { products } from '../data/mockData';

const PromotionalBar: React.FC = () => {
  const { addItem } = useBasket();
  const navigate = useNavigate();

  const handlePurchaseAll = () => {
    // Add all 8 products to the basket
    products.forEach(product => {
      addItem(product);
    });
    
    // Navigate to basket page
    navigate('/basket');
  };

  return (
    <div className="bg-[#FFC5D3] border-b border-gray-200 overflow-hidden">
      <div className="relative">
        {/* Scrolling content */}
        <div className="animate-scroll flex whitespace-nowrap py-3">
          {/* Repeat the message multiple times for continuous scroll */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex items-center space-x-8 px-8">
              <span className="text-black font-medium text-sm sm:text-base">
                Purchase all 8 products and acquire the services of ED today
                <button
                  onClick={handlePurchaseAll}
                  className="ml-2 bg-black text-white px-3 py-1 rounded-md text-xs font-medium hover:bg-gray-800 transition-all"
                >
                  Buy Now
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalBar;