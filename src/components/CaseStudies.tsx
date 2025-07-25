import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../data/mockData';
import { detailedCaseStudies } from '../data/caseStudiesData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const CaseStudies: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="case-studies" className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:max-w-7xl lg:mx-auto">
        <div 
          ref={ref}
          className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 tracking-tight">
            Success Stories
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover how top brands exceeded their goals with ED products.
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

  // Map the case study IDs from mockData to the detailed case study IDs
  const getCaseStudyDetailId = (caseStudyId: string) => {
    const idMapping: { [key: string]: string } = {
      '1': 'coca-cola-fanrituals',
      '2': 'one-football', 
      '3': 'fedex-nextinline'
    };
    return idMapping[caseStudyId] || 'coca-cola-fanrituals';
  };

  // Get logo from detailed case studies
  const getLogo = (caseStudyId: string) => {
    const detailPageId = getCaseStudyDetailId(caseStudyId);
    const detailedCaseStudy = detailedCaseStudies.find(cs => cs.id === detailPageId);
    return detailedCaseStudy?.logo;
  };

  const detailPageId = getCaseStudyDetailId(caseStudy.id);
  const logo = getLogo(caseStudy.id);

  return (
    <div 
      ref={ref}
      className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Image - Now links to individual case study */}
      <div className="relative overflow-hidden">
        <Link to={`/case-study/${detailPageId}`} className="block">
          <img
            src={caseStudy.image}
            alt={caseStudy.title}
            className="w-full h-40 sm:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {/* Client Logo Overlay */}
        {logo && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <img
              src={logo}
              alt="Client logo"
              className="h-6 w-auto object-contain"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8">
        <h3 className="text-lg sm:text-xl font-medium text-black mb-3 sm:mb-4 group-hover:text-gray-600 transition-colors">
          {caseStudy.title}
        </h3>
        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light text-sm sm:text-base">
          {caseStudy.description}
        </p>
        
        <Link 
          to={`/case-study/${detailPageId}`}
          className="group/btn flex items-center space-x-2 text-black hover:text-gray-600 font-medium transition-colors text-sm sm:text-base"
        >
          <span>Read story</span>
          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;