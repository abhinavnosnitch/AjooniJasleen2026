import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { Shield, Package, Sparkles, Eye, Infinity, ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesSection = () => {
  const [currentPromiseIndex, setCurrentPromiseIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const promises = [
    {
      id: 1,
      title: 'Hassle-Free Process',
      description: 'From concept to completion, managed with precision.',
      icon: <Shield className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 2,
      title: 'Complete Turnkey Projects',
      description: 'One team, one contract, everything delivered seamlessly.',
      icon: <Package className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 3,
      title: 'Tailored to Your Style',
      description: 'Homes designed around you, never from a template.',
      icon: <Sparkles className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 4,
      title: 'Stunning Results, Guaranteed',
      description: 'Residences built to inspire admiration at first sight.',
      icon: <Eye className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    },
    {
      id: 5,
      title: 'Legacy-Driven Design',
      description: 'Spaces created to outlast trends and generations.',
      icon: <Infinity className="w-8 h-8 text-luxury-charcoal/70" strokeWidth={1.5} />
    }
  ];

  const handleNextPromise = () => {
    setCurrentPromiseIndex((prev) => (prev + 1) % promises.length);
  };

  const handlePrevPromise = () => {
    setCurrentPromiseIndex((prev) => (prev - 1 + promises.length) % promises.length);
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
      handleNextPromise();
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isMobile, promises.length]);

  return (
    <div className="bg-luxury-ivory">
      <section className="py-24">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center mb-20">
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gold mb-6">
              Our Promise to You
            </h2>
            <p className="font-poppins text-base sm:text-lg italic text-luxury-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Excellence in every detail, commitment in every promise.
            </p>
          </div>

          {/* Desktop Grid View */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-8">
              {promises.map((promise, index) => (
                <motion.div
                  key={promise.id}
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
                    {promise.icon}
                  </div>

                  <h3 className="font-cormorant text-lg sm:text-2xl font-semibold text-luxury-charcoal mb-4 leading-tight">
                    {promise.title}
                  </h3>

                  <p className="font-poppins text-sm text-luxury-charcoal/60 leading-relaxed">
                    {promise.description}
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
                  key={currentPromiseIndex}
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
                    {promises[currentPromiseIndex].icon}
                  </div>

                  <h3 className="font-cormorant text-lg sm:text-2xl font-semibold text-luxury-charcoal mb-4 leading-tight">
                    {promises[currentPromiseIndex].title}
                  </h3>

                  <p className="font-poppins text-sm text-luxury-charcoal/60 leading-relaxed">
                    {promises[currentPromiseIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevPromise}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Previous promise"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextPromise}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Next promise"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesSection;