import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductSuitePage from './pages/ProductSuitePage';
import BasketPage from './pages/BasketPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ThankYouPage from './pages/ThankYouPage';

function App() {
  return (
    <BasketProvider>
      <Router basename={import.meta.env.BASE_URL || "/"}>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductSuitePage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-study/:caseStudyId" element={<CaseStudyDetailPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </BasketProvider>
  );
}

export default App;