import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const CallToActionMobile = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-full mx-auto text-center">
        <motion.h2
          className="font-cormorant mobile-hero-heading-size mb-2 tracking-tight text-luxury-charcoal"
          style={{
            fontSize: 'clamp(1.5rem, 5.25vw, 3rem)',
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
            fontSize: 'clamp(1.5rem, 5.25vw, 3rem)',
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
          className="font-poppins text-luxury-charcoal text-[0.95rem] leading-[1.6] font-normal max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Architecture that speaks your story before you say a word.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <MotionLink
            to="#contact"
            className="inline-flex items-center justify-center bg-luxury-gold text-white py-3 px-6 text-sm font-semibold tracking-wide shadow-lg relative overflow-hidden group font-poppins rounded-sm"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-label="Book a Private Consultation"
            role="button"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative z-10 flex items-center justify-center">
              Book a Private Consultation
              <svg
                className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ease-out"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </MotionLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionMobile;
