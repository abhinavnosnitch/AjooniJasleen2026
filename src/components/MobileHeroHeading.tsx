import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const MobileHeroHeading = () => {
  return (
    <section className="py-24 px-20 bg-white">
      <div className="max-w-full mx-auto text-center">
        <motion.h2
          className="font-cormorant mobile-hero-heading-size mb-2 tracking-tight text-luxury-charcoal"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            fontWeight: 600,
            letterSpacing: '-0.02em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Build More Than Walls.
        </motion.h2>

        <motion.h2
          className="font-cormorant mobile-hero-heading-size mb-6 tracking-tight text-luxury-gold"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
            lineHeight: '1.1',
            fontWeight: 600,
            letterSpacing: '-0.02em'
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Build a Legacy.
        </motion.h2>

        <motion.p
          className="font-poppins text-luxury-charcoal text-[1.05rem] leading-[1.6] font-normal max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Architecture that speaks your story before you say a word.
        </motion.p>
      </div>
    </section>
  );
};

export default MobileHeroHeading;