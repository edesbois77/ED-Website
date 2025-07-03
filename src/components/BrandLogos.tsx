import React from 'react';
import { brandLogos } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const BrandLogos: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          ref={ref}
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Tried. Tested. Delivered.
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            These brands didn't just test <span className="font-bold">ED</span>'s service modules, they used them to win.
          </p>
        </div>

        {/* Scrolling Logo Bar - Completely Continuous */}
        <div className="relative">
          {/* Container with seamless infinite scroll */}
          <div 
            className="flex animate-scroll-logos space-x-4 sm:space-x-6 md:space-x-8"
            style={{
              /* Ensure the animation never pauses */
              animationPlayState: 'running',
              /* Make the container wide enough for seamless loop */
              width: 'max-content'
            }}
          >
            {/* First complete set of all 18 logos */}
            {brandLogos.map((logoUrl, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] border border-gray-100 hover:shadow-md transition-all"
              >
                <img
                  src={logoUrl}
                  alt={`Brand logo ${index + 1}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Second complete set of all 18 logos for seamless loop */}
            {brandLogos.map((logoUrl, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] border border-gray-100 hover:shadow-md transition-all"
              >
                <img
                  src={logoUrl}
                  alt={`Brand logo ${index + 1}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Third set to ensure complete seamlessness */}
            {brandLogos.map((logoUrl, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-white rounded-xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 min-w-[120px] sm:min-w-[150px] md:min-w-[180px] border border-gray-100 hover:shadow-md transition-all"
              >
                <img
                  src={logoUrl}
                  alt={`Brand logo ${index + 1}`}
                  className="h-12 sm:h-16 md:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;