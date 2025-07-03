import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleDownloadCV = () => {
    // Check if CV file exists before attempting to download
    const cvPath = '/cv/Edward_Desbois_CV.pdf';
    
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Edward_Desbois_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Add error handling
    link.onerror = () => {
      console.error('CV file not found');
      alert('Sorry, the CV file is currently unavailable.');
    };
  };

  return (
    <section 
      ref={ref}
      className="relative bg-white hero-background"
    >
      {/* Very light overlay for better text readability */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full">
        {/* Text Content - Responsive positioning */}
        <div className={`flex flex-col justify-center h-full py-8 sm:py-12 lg:py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Introducing: <span className="font-bold">ED</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-black mb-6 sm:mb-8 max-w-xl font-light leading-relaxed">
            Modular solutions. Executive outcomes.
          </p>

          <div className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-12 max-w-xl font-light leading-relaxed space-y-3 sm:space-y-4">
            <p>This site is a creative take on my CV, turning 25 years of leadership, strategy and delivery into a suite of modular products that you can benefit from.</p>
            <p>While the company might not be real, the experience behind it very much is. Simply add the products you want to your basket and get in touch with <span className="font-bold">ED</span>.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md group/buttons">
            <Link
              to="/about"
              className="group/findout bg-black hover:bg-transparent text-white hover:text-black border border-black hover:border-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base group-hover/buttons:bg-transparent group-hover/buttons:text-black group-hover/buttons:hover:bg-transparent group-hover/buttons:hover:text-black"
            >
              <span>Find Out More</span>
              <ArrowRight className="h-4 w-4 group-hover/findout:translate-x-0.5 transition-transform" />
            </Link>

            <button
              onClick={handleDownloadCV}
              className="group/download bg-transparent hover:bg-black text-black hover:text-white border border-black hover:border-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
            >
              <Download className="h-4 w-4" />
              <span>Download CV</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="animate-bounce">
          <div className="w-5 h-8 border border-black rounded-full flex justify-center">
            <div className="w-0.5 h-2 bg-black rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;