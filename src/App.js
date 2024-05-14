import React from 'react';
import Hero from "./components/landing/hero/Hero";
import Introduction from './components/landing/intro/Introduction';
import FeatureHighlights from './components/landing/featureHighlight/featureHighlights/FeatureHighlights';
import Header from "./components/landing/header/Header";
import TestimonialSection from './components/landing/testimonialSection/TestimonialSection';
import CTASection from './components/landing/cta/CTASection';
import Footer from './components/landing/footer/Footer';


import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Hero />
      <Introduction />
      <FeatureHighlights />
      <TestimonialSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default App;