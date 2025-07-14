import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, Quote, Download, Mail } from 'lucide-react';
import { detailedCaseStudies } from '../data/caseStudiesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CaseStudyDetailPage: React.FC = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: resultsRef, isVisible: resultsVisible } = useScrollAnimation();
  const { ref: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation();

  const caseStudy = detailedCaseStudies.find(cs => cs.id === caseStudyId);

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-6 sm:mb-8">Case Study Not Found</h1>
          <Link
            to="/case-studies"
            className="inline-flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 rounded-full font-medium transition-all text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Case Studies</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Hero Image */}
        <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
          <img
            src={caseStudy.visuals.hero}
            alt={caseStudy.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-8 sm:pb-12">
              {/* Back Link */}
              <div 
                ref={headerRef}
                className={`mb-4 sm:mb-6 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                <Link
                  to="/case-studies"
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors font-light text-sm sm:text-base"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to Case Studies</span>
                </Link>
              </div>

              {/* Hero Text */}
              <div className={`transition-all duration-1000 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Client Logo */}
                <div className="mb-4 sm:mb-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 w-fit">
                    <img
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-8 sm:h-10 w-auto object-contain"
                    />
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                  {caseStudy.title}
                </h1>
                
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  {caseStudy.headlineResult}
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-white/80 text-sm sm:text-base">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{caseStudy.year}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{caseStudy.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Tag className="h-4 w-4" />
                    <span>{caseStudy.tags[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="lg:max-w-6xl lg:mx-auto px-4 sm:px-6">
          <div 
            ref={contentRef}
            className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8 sm:space-y-12">
                {/* Challenge */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                    Challenge / Objective
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                    {caseStudy.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
                    Solution / Approach
                  </h2>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
                    {caseStudy.solution}
                  </p>
                </div>

                {/* Gallery */}
                {caseStudy.visuals.gallery && (
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black mb-4 sm:mb-6">
                      Project Visuals
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {caseStudy.visuals.gallery.map((image, index) => (
                        <div key={index} className="rounded-xl overflow-hidden">
                          <img
                            src={image}
                            alt={`${caseStudy.title} visual ${index + 1}`}
                            className="w-full h-48 sm:h-56 object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 sticky top-24">
                  <h3 className="text-xl sm:text-2xl font-medium text-black mb-6 sm:mb-8">
                    Project Details
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Client
                      </h4>
                      <p className="text-black font-medium">{caseStudy.client}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Duration
                      </h4>
                      <p className="text-black font-medium">{caseStudy.duration}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                        Year
                      </h4>
                      <p className="text-black font-medium">{caseStudy.year}</p>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-3">
                        Categories
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag: string, index: number) => (
                          <span
                            key={index}
                            className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm font-light border border-gray-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                      to="/contact"
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center space-x-2 text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      <span>Discuss Similar Project</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div 
            ref={resultsRef}
            className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-200 ${resultsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-black rounded-2xl p-6 sm:p-8 md:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-tight text-center">
                Outcome / Results
              </h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
                {caseStudy.results.stats.map((stat: any, index: number) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                      {stat.value}
                    </div>
                    <p className="text-white/80 font-light text-sm sm:text-base">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Results Description */}
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light text-center max-w-4xl mx-auto">
                {caseStudy.results.description}
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div 
            ref={testimonialRef}
            className={`mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 delay-400 ${testimonialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 md:p-12 text-center">
              <Quote className="h-12 w-12 sm:h-16 sm:w-16 text-gray-400 mx-auto mb-6 sm:mb-8" />
              
              <blockquote className="text-xl sm:text-2xl md:text-3xl text-gray-800 leading-relaxed font-light mb-6 sm:mb-8 max-w-4xl mx-auto">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              
              <div>
                <div className="text-lg sm:text-xl font-medium text-black">
                  {caseStudy.testimonial.author}
                </div>
                <div className="text-gray-600 font-light">
                  {caseStudy.testimonial.role}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
              Ready to Achieve Similar Results?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 font-light max-w-2xl mx-auto">
              Every successful project starts with understanding your unique challenges and objectives. 
              Let's discuss how <span className="font-bold">ED's</span> proven approach can deliver results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
              >
                Start Your Project
              </Link>
              <Link
                to="/case-studies"
                className="text-black hover:text-gray-600 border border-gray-200 hover:border-gray-300 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
              >
                View More Case Studies
              </Link>
            </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;