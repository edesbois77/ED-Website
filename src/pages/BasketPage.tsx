import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Mail } from 'lucide-react';
import { useBasket } from '../context/BasketContext';

const BasketPage: React.FC = () => {
  const { state, removeItem, clearBasket } = useBasket();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Link - Above Title */}
          <div className="mb-4 sm:mb-6">
            <Link
              to="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to home</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-light text-black mb-8 tracking-tight">Your Basket</h1>
            <div className="bg-gray-50 rounded-2xl p-16 border border-gray-100">
              <p className="text-lg text-gray-600 mb-8 font-light">Your basket is empty</p>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-full font-medium transition-all"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link - Above Title */}
        <div className="mb-4 sm:mb-6">
          <Link
            to="/"
            className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors font-light"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl font-light text-black mb-4 tracking-tight">Your Basket</h1>
          <p className="text-lg text-gray-600 font-light">
            Thanks for selecting these <span className="font-bold">ED</span> modules. 
          </p>
    
          <p className="text-lg text-gray-600 font-light">While you can't actually purchase these service modules directly from the website, I'd like to thank you for getting this far.
          </p>
          
          <p className="text-lg text-gray-600 font-light">If you have been impressed with what you have seen, please don't hesitate to get in touch by clicking the <span className="font-bold">'Get In Touch With ED'</span> button below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Basket Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all"
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-black mb-2">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-600 mb-2 font-light">{item.product.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {item.product.summary}
                    </p>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="text-gray-400 hover:text-gray-600 transition-colors p-2"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}

            {/* Clear Basket Button */}
            {state.items.length > 1 && (
              <button
                onClick={clearBasket}
                className="text-gray-500 hover:text-gray-700 transition-colors font-light"
              >
                Clear all items
              </button>
            )}
          </div>

          {/* Summary & CTA */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 rounded-2xl p-8 sticky top-24">
              <h2 className="text-2xl font-light text-black mb-8 tracking-tight">
                Selected Modules
              </h2>
              
              <div className="space-y-4 mb-8">
                {state.items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <span className="text-gray-600 font-light">{item.product.name}</span>
                    <span className="text-black font-medium">
                      {item.quantity}×
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex justify-between items-center text-lg">
                  <span className="text-black font-medium">Total items:</span>
                  <span className="text-black font-medium">{state.items.length}</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 mb-6"
              >
                <Mail className="h-4 w-4" />
                <span>Get In Touch With <span className="font-bold">ED</span></span>
              </Link>

              <p className="text-gray-500 text-sm text-center leading-relaxed font-light">
                Our team will contact you within 24 hours to discuss implementation 
                and provide a customized quote for your selected modules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;