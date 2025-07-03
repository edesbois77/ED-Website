console.log("✅ HomePage loaded");


import React from 'react';
import Hero from '../components/Hero';
import ProductCatalogue from '../components/ProductCatalogue';
import Testimonials from '../components/Testimonials';
import BrandLogos from '../components/BrandLogos';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <ProductCatalogue />
      <Testimonials />
      <BrandLogos />
      <CaseStudies />
      <Contact />
    </div>
  );
};

export default HomePage;