import React from 'react';
import HeroSection from './Home';
import CallToActionMobile from '../components/CallToActionMobile';
import CallToActionSection from '../components/CallToActionSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const UnifiedHomepage = () => {
  return (
    <div className="min-h-screen bg-luxury-ivory noise-texture overflow-x-hidden w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Mobile Hero Heading */}
      <div className="md:hidden">
        <CallToActionMobile />
      </div>

      {/* Call to Action Section */}
      <div className="bg-white overflow-x-hidden w-full">
        <CallToActionSection />
      </div>

      {/* Why Us Section */}
      <div className="py-24 bg-luxury-ivory premium-gradient overflow-x-hidden w-full">
        <WhyUsSection />
      </div>

      {/* Services Section */}
      <div className="py-24 bg-luxury-ivory overflow-x-hidden w-full">
        <ServicesSection />
      </div>

      {/* Projects Section */}
      <div className="py-24 bg-luxury-ivory premium-gradient overflow-x-hidden w-full">
        <ProjectsSection />
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-luxury-ivory premium-gradient overflow-x-hidden w-full">
        <TestimonialsSection />
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-luxury-ivory overflow-x-hidden w-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default UnifiedHomepage;