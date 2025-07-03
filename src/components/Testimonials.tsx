import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Mobile: 1 item, Tablet: 2 items, Desktop: 3 items
  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [itemsPerView, setItemsPerView] = useState(getItemsPerView());
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = getItemsPerView();
      setItemsPerView(newItemsPerView);
      // Reset to first item if current index is out of bounds
      const newMaxIndex = Math.max(0, testimonials.length - newItemsPerView);
      if (currentIndex > newMaxIndex) {
        setCurrentIndex(0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const updateScrollButtons = () => {
    setCanScrollLeft(currentIndex > 0);
    setCanScrollRight(currentIndex < maxIndex);
  };

  useEffect(() => {
    updateScrollButtons();
  }, [currentIndex, maxIndex]);

  const scrollLeft = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollRight = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div 
          ref={ref}
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light mb-6 sm:mb-8">
            Trusted by industry leaders worldwide.
          </p>

          {/* Navigation Arrows - Under subtitle */}
          <div className="flex justify-center items-center space-x-4">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl ${
                !canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            <span className="text-sm text-gray-500 font-light">
              {itemsPerView === 1 
                ? `${currentIndex + 1} of ${testimonials.length}`
                : `${currentIndex + 1}-${Math.min(currentIndex + itemsPerView, testimonials.length)} of ${testimonials.length}`
              }
            </span>

            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`bg-white hover:bg-gray-50 border border-gray-200 rounded-full p-3 shadow-lg transition-all hover:shadow-xl ${
                !canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'
              }`}
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Mobile: Single Card View */}
        <div className="block md:hidden">
          <div className="px-4">
            <TestimonialCard 
              testimonial={testimonials[currentIndex]}
              index={currentIndex}
              isMobile={true}
            />
          </div>
        </div>

        {/* Desktop/Tablet: Multi-card Carousel */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Testimonials Container with Fade Effects */}
            <div className="relative">
              {/* Left Fade Overlay */}
              <div className={`absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                canScrollLeft ? 'opacity-100' : 'opacity-0'
              }`}></div>
              
              {/* Right Fade Overlay */}
              <div className={`absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${
                canScrollRight ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Scrolling Container */}
              <div className="overflow-hidden">
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ 
                    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                    width: `${(testimonials.length / itemsPerView) * 100}%`
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={testimonial.id}
                      className="px-4"
                      style={{ width: `${100 / testimonials.length}%` }}
                    >
                      <TestimonialCard 
                        testimonial={testimonial} 
                        index={index} 
                        isMobile={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
          {itemsPerView === 1 ? (
            // Mobile: Show dot for each testimonial
            testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))
          ) : (
            // Desktop: Show dot for each page
            Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-black w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: any;
  index: number;
  isMobile?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index, isMobile = false }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-all duration-500 h-full ${
        isMobile ? 'max-w-sm mx-auto' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Stars */}
      <div className="flex space-x-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-black fill-current" />
        ))}
      </div>

      {/* Content */}
      <blockquote className={`text-gray-700 mb-8 leading-relaxed font-light ${
        isMobile ? 'text-base min-h-[120px]' : 'text-base md:text-lg min-h-[120px] md:min-h-[140px]'
      }`}>
        "{testimonial.content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="text-black font-medium">{testimonial.name}</div>
          <div className="text-gray-500 text-sm font-light">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;