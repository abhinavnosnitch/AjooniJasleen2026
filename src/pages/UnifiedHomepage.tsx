import HeroSection from './Home';
import WhatWeDoSection from '../components/WhatWeDoSection';
import WhyUsSection from '../components/WhyUsSection';
import ServicesSection from '../components/ServicesSection';
import FeaturedProjectsSection from '../components/FeaturedProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import SectionDivider from '../components/SectionDivider';

const UnifiedHomepage = () => {
  return (
    <div className="min-h-screen bg-luxury-ivory noise-texture overflow-x-hidden w-full">
      {/* Hero Section */}
      <HeroSection />


      {/* What We Do Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <WhatWeDoSection />
      </div>

      <SectionDivider />

      {/* Why Us Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <WhyUsSection />
      </div>

      <SectionDivider />

      {/* Services Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <ServicesSection />
      </div>

      <SectionDivider />

      {/* Featured Projects Section */}
      <FeaturedProjectsSection />

      <SectionDivider />

      {/* Testimonials Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <TestimonialsSection />
      </div>

      <SectionDivider />

      {/* Contact Section */}
      <div className="py-12 bg-luxury-ivory overflow-x-hidden w-full">
        <ContactSection />
      </div>
    </div>
  );
};

export default UnifiedHomepage;
