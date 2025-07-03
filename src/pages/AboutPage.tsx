import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Package } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AboutPage: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: section1Ref, isVisible: section1Visible } = useScrollAnimation();
  const { ref: section2Ref, isVisible: section2Visible } = useScrollAnimation();
  const { ref: proofRef, isVisible: proofVisible } = useScrollAnimation();
  const { ref: mobileRef, isVisible: mobileVisible } = useScrollAnimation();
  const { ref: section3Ref, isVisible: section3Visible } = useScrollAnimation();

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
            About <span className="font-bold">ED</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-light">
            A creative CV. A commercial case study.
          </p>
        </div>

        {/* Section 1: Main Content */}
        <div 
          ref={section1Ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-24 md:mb-32 transition-all duration-1000 ${section1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Main Text Content */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Let's clear something up, <span className="font-bold">ED</span> isn't a real company.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                It's a play on my initials (Edward Desbois) and what most people call me anyway. More importantly, it's a productised version of my career: 25 years of leadership, commercial thinking and creative delivery, all packaged in a format that cuts through.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                In today's competitive market, you can't afford to sit still. So I built <span className="font-bold">ED</span> as a way to show what I can do, how I think and why I'm still hungry to learn. Part self-promotion, part sales pitch, part creative expression, <span className="font-bold">ED</span> is my way of reminding others (and myself) just how much value I can bring.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              Yes, it's a bit of fun but it's also serious.
              </p>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
              Because if I've spent years selling digital solutions to the world's biggest brands and helped companies generate hundreds of millions, why wouldn't I apply that thinking to my own career?
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-gray-200">
              <button
                onClick={handleDownloadCV}
                className="group bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </button>
              
              <Link
                to="/products"
                className="group text-black hover:text-gray-600 border border-gray-300 hover:border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Package className="h-4 w-4" />
                <span>View Product Suite</span>
              </Link>
            </div>
          </div>

          {/* Image - Fixed positioning for mobile */}
          <div className="order-first lg:order-last">
            <div className="relative group overflow-hidden rounded-2xl w-full">
              <img
                src="https://i.imgur.com/XuTvRSY.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="ED Solutions Platform"
                className="w-full h-64 sm:h-80 lg:h-[700px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Section 2: Expertise Areas - MOVED BACK TO CORRECT POSITION */}
        <div 
          ref={section2Ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-24 md:mb-32 transition-all duration-1000 delay-200 ${section2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Image - Fixed positioning for mobile */}
          <div>
            <div className="relative group overflow-hidden rounded-2xl w-full">
              <img
                src="https://i.imgur.com/plK4cLO.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Team Collaboration"
                className="w-full h-64 sm:h-80 lg:h-[700px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4 sm:mb-6">
                Proven Across Industries
              </h2>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                <span className="font-bold">ED</span> isn't a traditional CV and it's not traditional consulting either. Each module in the suite is built from years of real-world experience, distilled into practical tools you can apply immediately. No fluff. No theory. Just proven approaches to growth, leadership, and commercial performance.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Whether you're launching a new product, entering a new market, or transforming a team, <span className="font-bold">ED's</span> modular design means you can start where the pressure is highest and scale from there. It's capability on demand, built for speed, clarity and tangible results.
              </p>
            </div>

            {/* Key Areas */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-medium text-black">Core Expertise Areas</h3>
              <div className="space-y-2 sm:space-y-3">
                {[
                  'Global Leadership: High-performing international teams',
                  'Proven Revenue Generator: $294M generated',
                  'Planning & Budgeting: P&Ls, hiring and growth strategy',
                  'Entrepreneurial Mindset: Building new ideas and solutions',
                  'Strategic Storytelling: Turning challenges into clear narratives',
                  'Data-Driven Decision Maker: Using insights to drive action',
                  'Impactful Communicator: Adapts messaging for all audiences'
                ].map((area, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-2.5 sm:mt-3 flex-shrink-0"></div>
                    <span className="text-gray-700 font-light leading-relaxed text-sm sm:text-base">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Proof in Performance Section - 4 Numbers */}
        <div 
          ref={proofRef}
          className={`mb-16 sm:mb-24 md:mb-32 transition-all duration-1000 delay-300 ${proofVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4 sm:mb-6">
              Proof in Performance
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Numbers that matter. Results that speak for themselves.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">
                $296M
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Total revenue delivered across multiple organisations and markets
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">
                25+
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Years of experience across digital, media, sports and technology
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">
                176%
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Revenue growth over the past 5 years. Taking annual revenues from $17M to $47M.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-3 sm:mb-4">
                $26M
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Largest ever individual deal concluded - Visit Britain (2011-2016)
              </p>
            </div>
          </div>
        </div>

        {/* Everywhere. And Nowhere Section */}
        <div 
          ref={mobileRef}
          className={`mb-16 sm:mb-24 md:mb-32 transition-all duration-1000 delay-400 ${mobileVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-4 sm:mb-6">
              Everywhere. And Nowhere
            </h2>
            <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl mx-auto">
              Mock socials. Real experience. The only link that matters is ours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-6">
            {/* Instagram */}
            <div className="text-center">
              <div className="text-sm sm:text-base font-medium text-black mb-4">
                Instagram
              </div>
              <div className="mb-4">
                <img
                  src="https://i.imgur.com/Pjr5ljE.png"
                  alt="Instagram Mobile App"
                  className="w-full max-w-[200px] mx-auto h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Authentic storytelling that connected brands to culture through creator-led content at scale.
              </p>
            </div>

            {/* TikTok */}
            <div className="text-center">
              <div className="text-sm sm:text-base font-medium text-black mb-4">
                TikTok
              </div>
              <div className="mb-4">
                <img
                  src="https://i.imgur.com/GpgifFr.png"
                  alt="TikTok Mobile App"
                  className="w-full max-w-[200px] mx-auto h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Viral content strategies that transformed brand engagement through micro-moment marketing.
              </p>
            </div>

            {/* YouTube */}
            <div className="text-center">
              <div className="text-sm sm:text-base font-medium text-black mb-4">
                YouTube
              </div>
              <div className="mb-4">
                <img
                  src="https://i.imgur.com/4Yx304W.png"
                  alt="YouTube Mobile App"
                  className="w-full max-w-[200px] mx-auto h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Long-form storytelling that turned complex strategy into actionable insight and audience trust.
              </p>
            </div>

            {/* Facebook */}
            <div className="text-center">
              <div className="text-sm sm:text-base font-medium text-black mb-4">
                Facebook
              </div>
              <div className="mb-4">
                <img
                  src="https://i.imgur.com/0w0I2FM.png"
                  alt="Facebook Mobile App"
                  className="w-full max-w-[200px] mx-auto h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Community-led frameworks that scaled engagement and delivered consistent global reach.
              </p>
            </div>

            {/* Spotify */}
            <div className="text-center">
              <div className="text-sm sm:text-base font-medium text-black mb-4">
                Spotify
              </div>
              <div className="mb-4">
                <img
                  src="https://i.imgur.com/chry0kB.png"
                  alt="Spotify Mobile App"
                  className="w-full max-w-[200px] mx-auto h-auto"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Modular insights delivered through thought-led audio built for leaders on the move.
              </p>
            </div>
          </div>
        </div>
        
        {/* Section 3: Call to Action */}
        <div 
          ref={section3Ref}
          className={`transition-all duration-1000 delay-500 ${section3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black tracking-tight mb-6 sm:mb-8">
              Ready To Deploy <span className="font-bold">ED</span>?
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                Choose the modules that align with your immediate needs. Deploy proven systems that have already delivered results across multiple industries and markets. Scale your impact with experience that's been tested, refined and packaged for immediate implementation.
              </p>
              
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                This isn't about learning new theories or waiting for results. It's about accessing 25 years of proven experience, delivered in a format you can understand and deploy today.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/products"
                className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
              >
                <span>Explore <span className="font-bold">ED</span> Modules</span>
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 text-black hover:text-gray-600 border border-gray-300 hover:border-gray-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;