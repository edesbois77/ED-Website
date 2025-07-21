import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { BasketProvider } from './context/BasketContext';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import PromotionalBar from './components/PromotionalBar';
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

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    if (redirect) {
      navigate(redirect, { replace: true });
    }
  }, [navigate]);

  return null; // This component renders nothing, just does the redirect logic
}

function App() {
  return (
    <BasketProvider>
      <Router basename={import.meta.env.BASE_URL || "/"}>
        {/* This component checks for ?redirect= and navigates as needed */}
        <RedirectHandler />
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <PromotionalBar />
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