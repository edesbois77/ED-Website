import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft, Mail, Calendar, Download, Package } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ThankYouPage: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: nextStepsRef, isVisible: nextStepsVisible } = useScrollAnimation();
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollAnimation();

  // Auto-scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDownloadCV = () => {
    const cvPath = `${import.meta.env.BASE_URL}cv/Edward_Desbois_CV.pdf`;
    const link = document.createElement('a');
    link.href = cvPath;
    link.download = 'Edward_Desbois_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back Link */}
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

        {/* Success Header */}
        <div 
          ref={contentRef}
          className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-100 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Success Icon */}
          <div className="mb-6 sm:mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Thank You!
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Your message has been received successfully. We appreciate you taking the time to reach out to <span className="font-bold">ED</span>.
          </p>
        </div>

        {/* Confirmation Details */}
        <div 
          ref={nextStepsRef}
          className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-200 ${nextStepsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 tracking-tight text-center">
              What Happens Next?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-3">
                  Message Review
                </h3>
                <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                  Our team will carefully review your inquiry and requirements within the next few hours.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-3">
                  Personal Response
                </h3>
                <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                  You'll receive a personalized response within 24 hours, typically much sooner.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-black mb-3">
                  Strategic Discussion
                </h3>
                <p className="text-gray-600 font-light text-sm sm:text-base leading-relaxed">
                  We'll schedule a consultation to discuss how <span className="font-bold">ED</span> can help achieve your goals.
                </p>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-white rounded-xl border border-gray-200 text-center">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Mail className="h-5 w-5 text-black" />
                <span className="font-medium text-black">Response Guarantee</span>
              </div>
              <p className="text-gray-600 font-light text-sm sm:text-base">
                We typically respond within 4-6 hours during business hours. 
                For urgent matters, expect to hear from us even sooner.
              </p>
            </div>
          </div>
        </div>

        {/* While You Wait Section */}
        <div 
          ref={ctaRef}
          className={`transition-all duration-1000 delay-400 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8 tracking-tight text-center">
              While You Wait
            </h2>
            
            <p className="text-base sm:text-lg text-gray-600 font-light text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
              Explore more about <span className="font-bold">ED's</span> capabilities and see how our modular approach 
              has delivered results for other organizations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {/* Download CV */}
              <button
                onClick={handleDownloadCV}
                className="group bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all text-center border border-gray-100 hover:border-gray-200"
              >
                <Download className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 group-hover:text-black mx-auto mb-3 transition-colors" />
                <h3 className="font-medium text-black mb-2 text-sm sm:text-base">Download CV</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm">
                  Get the traditional format
                </p>
              </button>

              {/* Explore Products */}
              <Link
                to="/products"
                className="group bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all text-center border border-gray-100 hover:border-gray-200"
              >
                <Package className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 group-hover:text-black mx-auto mb-3 transition-colors" />
                <h3 className="font-medium text-black mb-2 text-sm sm:text-base">Product Suite</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm">
                  Explore all modules
                </p>
              </Link>

              {/* Case Studies */}
              <Link
                to="/case-studies"
                className="group bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all text-center border border-gray-100 hover:border-gray-200"
              >
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 group-hover:text-black mx-auto mb-3 transition-colors" />
                <h3 className="font-medium text-black mb-2 text-sm sm:text-base">Case Studies</h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm">
                  See proven results
                </p>
              </Link>

              {/* About ED */}
              <Link
                to="/about"
                className="group bg-gray-50 hover:bg-gray-100 p-4 sm:p-6 rounded-xl transition-all text-center border border-gray-100 hover:border-gray-200"
              >
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-gray-600 group-hover:text-black mx-auto mb-3 transition-colors" />
                <h3 className="font-medium text-black mb-2 text-sm sm:text-base">About <span className="font-bold">ED</span></h3>
                <p className="text-gray-600 font-light text-xs sm:text-sm">
                  Learn the story
                </p>
              </Link>
            </div>

            {/* Contact Info Reminder */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-500 text-sm sm:text-base font-light leading-relaxed">
                <strong>Need immediate assistance?</strong><br />
                Call us directly at <span className="font-medium text-black">+1 (555) 123-4567</span> or email 
                <span className="font-medium text-black"> hello@ed-solutions.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;