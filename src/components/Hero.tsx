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
      className="relative bg-white hero-background"
    >
      {/* Very light overlay for better text readability */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 h-full">
        {/* Text Content - Responsive positioning */}
        <div className={`flex flex-col justify-center h-full py-8 sm:py-12 lg:py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Welcome to ED
          </h1>

          <div className="text-base sm:text-lg md:text-xl text-black mb-8 sm:mb-12 max-w-xl font-light leading-relaxed space-y-3 sm:space-y-4">
            <p>This site is a creative twist on my CV.</p>
            <p>Each ED product represents a skill I specialise in, packaged as a service you can aquire simply by ‘adding it to basket’ and getting in touch.</p>
            <p>Inside, you’ll find product overviews, testimonials, case studies and a breakdown of what ED is all about.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl group/buttons">
            <Link
              to="/about"
              className="group/findout bg-black hover:bg-black text-white hover:text-white border border-black hover:border-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base group-hover/buttons:bg-black group-hover/buttons:text-white whitespace-nowrap"
            >
              <span>Find Out More</span>
              <ArrowRight className="h-4 w-4 group-hover/findout:translate-x-0.5 transition-transform" />
            </Link>

            <Link
              to="/products"
              className="group/products bg-transparent hover:bg-black text-black hover:text-white border border-black hover:border-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base group-hover/buttons:bg-black group-hover/buttons:text-white whitespace-nowrap"
            >
              <span>Product Suite</span>
            </Link>

            <button
              onClick={handleDownloadCV}
              className="group/download bg-transparent hover:bg-black text-black hover:text-white border border-black hover:border-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base group-hover/buttons:bg-black group-hover/buttons:text-white whitespace-nowrap"
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