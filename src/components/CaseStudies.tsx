import React from 'react';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/mockData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CaseStudies: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div 
          ref={ref}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover how leading companies transformed their operations by utilising <span className="font-bold">ED</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} index={index} />
          ))}
        </div>
      </div>
    </section>
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
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-medium text-black mb-3 sm:mb-4 group-hover:text-gray-600 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light text-sm sm:text-base">
          {caseStudy.description}
        </p>
        
        <button className="group/btn flex items-center space-x-2 text-black hover:text-gray-600 font-medium transition-colors text-sm sm:text-base">
          <span>Read story</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CaseStudies;