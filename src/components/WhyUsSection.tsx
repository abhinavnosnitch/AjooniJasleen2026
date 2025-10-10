import React from 'react';
import { motion } from 'framer-motion';

const WhyUsSection = () => {
  return (
    <section className="py-20">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="font-cormorant text-4xl sm:text-4xl font-bold text-luxury-charcoal mb-6">Why Choose Us</h2>
            <p className="font-poppins text-luxury-charcoal mb-6 leading-relaxed">
              Chandigarh isn't just a city, it's a statement. Every home, office, and building here has a rhythm. 
              We design spaces that don't just fit into the city, but stand out in it.
            </p>
            <p className="font-poppins text-luxury-charcoal mb-6 leading-relaxed">
              When you walk into a space we've designed, you don't just see walls.
              <br />
              You feel the light spill across open glass.
              <br />
              You hear the silence of perfect acoustics.
              <br />
              You sense the calm of design done right.
            </p>
            <p className="font-poppins text-luxury-charcoal leading-relaxed">
              This isn't architecture. This is living art.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-0 pb-[100%] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/IMG_20251001_180852.webp" 
                alt="Architectural Design" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Subtle Vignette Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/30 opacity-70" />
              
              {/* Animated Name Appearance */}
              <motion.div
                className="absolute bottom-4 left-4 text-white font-poppins text-2xl font-light drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <span>AR. JASLEEN</span>
                <motion.div
                  className="h-px bg-white/70 mt-1"
                  initial={{ width: 0 }}
                  whileInView={{ width: '80%' }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyUsSection;