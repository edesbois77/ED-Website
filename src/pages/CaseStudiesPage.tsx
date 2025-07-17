import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { detailedCaseStudies } from '../data/caseStudiesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CaseStudiesPage: React.FC = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16">
      <div className="lg:max-w-6xl lg:mx-auto px-4 sm:px-6">
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

        {/* Header */}
        <div className={`mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Case Studies
          </h1>
          <p className="text-base sm:text-lg text-gray-600 font-light max-w-3xl">
            Real-world examples of how companies have benefited from utilising ED.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {detailedCaseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 bg-custom-dark rounded-2xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Ready to Create Your Own Success Story?
          </h2>
          <p className="text-lg sm:text-xl text-white/80 mb-6 sm:mb-8 font-light max-w-2xl mx-auto">
            These results aren't accidents, they're the outcome of proven strategies, experienced leadership and relentless focus on delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
            >
              Discuss Your Project
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-gray-200 border border-white/30 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium transition-all text-sm sm:text-base"
            >
              Explore <span className="font-bold">ED</span> Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CaseStudyCardProps {
  caseStudy: any;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, index }) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${(index % 3) * 100}ms` }}
    >
      {/* Hero Image - Now clickable */}
      <Link to={`/case-study/${caseStudy.id}`} className="block relative overflow-hidden">
        <img
          src={caseStudy.visuals.hero}
          alt={caseStudy.title}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Client Logo Overlay */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
          <img
            src={caseStudy.logo}
            alt={caseStudy.client}
            className="h-6 w-auto object-contain"
          />
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Meta Info */}
        <div className="flex items-center space-x-4 mb-3 text-xs text-gray-500">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{caseStudy.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{caseStudy.duration}</span>
          </div>
        </div>

        {/* Headline Result */}
        <div className="mb-3">
          <div className="text-2xl sm:text-3xl font-bold text-black mb-1">
            {caseStudy.headlineResult}
          </div>
          <h3 className="text-lg sm:text-xl font-medium text-gray-800 group-hover:text-black transition-colors">
            {caseStudy.title}
          </h3>
        </div>

        {/* Summary */}
        <p className="text-gray-600 mb-4 leading-relaxed font-light text-sm sm:text-base">
          {caseStudy.summary}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caseStudy.tags.slice(0, 3).map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-light"
            >
              <Tag className="h-2 w-2" />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          to={`/case-study/${caseStudy.id}`}
          className="group/btn flex items-center space-x-2 text-black hover:text-gray-600 font-medium transition-colors text-sm sm:text-base"
        >
          <span>Read full case study</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudiesPage;