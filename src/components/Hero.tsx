import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const handleDownloadCV = async () => {
  const cvPath = `${import.meta.env.BASE_URL}cv/Edward_Desbois_CV.pdf`;
  console.log('Trying to download:', cvPath); // <-- Add this
  try {
    const response = await fetch(cvPath, { method: 'HEAD' });
    if (!response.ok) {
      alert('Sorry, the CV file is currently unavailable.');
      return;
    }
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Edward_Desbois_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    alert('Sorry, something went wrong. Please try again later.');
  }
};

  return (
    <section 
      ref={ref}
      className="relative hero-background-grey"
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="relative z-10 w-full px-4 sm:px-6 h-full lg:max-w-7xl lg:mx-auto">
        {/* Text Content - Top aligned */}
        <div className={`flex flex-col justify-start items-center text-center h-full pt-8 sm:pt-12 lg:pt-16 transition-all duration-1000 w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Welcome to <span className="font-bold">ED</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-black mb-4 sm:mb-6 max-w-4xl font-light leading-relaxed">
            This site is a creative twist on my CV.
          </p>

          <div className="text-base sm:text-lg md:text-xl text-black mb-6 sm:mb-8 max-w-2xl font-light leading-relaxed space-y-2 sm:space-y-3">
            <p>Each <span className="font-bold">ED</span> product represents a skill I specialise in, packaged as a service you can acquire simply by 'adding it to basket' and getting in touch.</p>
            <p>Inside, you'll find product overviews, testimonials, case studies and a breakdown of what <span className="font-bold">ED</span> is all about.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 group/buttons">
            <Link
              to="/about"
              className="group/findout bg-black hover:bg-transparent text-white hover:text-black border border-black hover:border-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base group-hover/buttons:bg-transparent group-hover/buttons:text-black group-hover/buttons:hover:bg-transparent group-hover/buttons:hover:text-black whitespace-nowrap"
            >
              <span>Find&nbsp;Out&nbsp;More</span>
              <ArrowRight className="h-4 w-4 group-hover/findout:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/products"
              className="group/products bg-transparent hover:bg-black text-black hover:text-white border border-black hover:border-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap"
            >
              <span>Product&nbsp;Suite</span>
            </Link>

            <button
              onClick={handleDownloadCV}
              className="group/download bg-transparent hover:bg-black text-black hover:text-white border border-black hover:border-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base whitespace-nowrap"
            >
              <Download className="h-4 w-4" />
              <span>Download&nbsp;CV</span>
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