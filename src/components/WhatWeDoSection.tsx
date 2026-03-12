import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Building, Palette, Package, RefreshCw, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';

const WhatWeDoSection = () => {
  const [currentServiceIndex, setCurrentServiceIndex] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const services = [
    {
      id: 1,
      title: 'Architectural Design',
      description: 'We craft bold, context-driven architecture that balances form, function, and feeling.',
      icon: <Building className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 2,
      title: 'Interior Design',
      description: 'Curated spaces that merge comfort, character, and quiet sophistication.',
      icon: <Palette className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 3,
      title: 'Complete Turnkey Projects',
      description: 'From concept to completion — design, build, and deliver. Seamlessly.',
      icon: <Package className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 4,
      title: 'Renovation & Redesign',
      description: 'We transform existing spaces with sensitivity, precision, and purpose.',
      icon: <RefreshCw className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 5,
      title: 'Landscape & Outdoor Design',
      description: 'Creating calm, connected environments where architecture meets nature.',
      icon: <Leaf className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    }
  ];

  const handleNextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Mobile detection
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Auto-scroll for mobile only
  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      handleNextService();
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isMobile, services.length]);

  return (
    <div className="bg-luxury-ivory">
      <section className="py-12">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-8">
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">
              What We Do for You
            </h2>
            <p className="font-poppins text-base sm:text-lg italic text-luxury-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              From concept to creation, we shape spaces that feel effortless, personal, and timeless.
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                >
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>

                  <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-luxury-charcoal mb-4 leading-tight">
                    {service.title}
                  </h3>

                  <p className="font-poppins text-sm text-luxury-charcoal/60 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Carousel View */}
          <div className="lg:hidden relative">
            <div className="flex justify-center items-center min-h-[300px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  className="text-center w-[85vw] sm:w-[45vw] md:w-[30vw]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                >
                  <div className="flex justify-center mb-6">
                    {services[currentServiceIndex].icon}
                  </div>

                  <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-luxury-charcoal mb-4 leading-tight">
                    {services[currentServiceIndex].title}
                  </h3>

                  <p className="font-poppins text-sm text-luxury-charcoal/60 leading-relaxed">
                    {services[currentServiceIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevService}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Previous service"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextService}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Next service"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhatWeDoSection;
