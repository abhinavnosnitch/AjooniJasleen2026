import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const CallToActionDesktop = () => {
  return (
    <section className="py-20 px-8 bg-white overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.h2
          className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="text-luxury-charcoal">Build More Than Walls.</span>
          <br />
          <span className="text-luxury-gold">Build a Legacy.</span>
        </motion.h2>

        <motion.p
          className="font-poppins text-luxury-charcoal text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-[1.65] font-normal max-w-3xl mx-auto mb-12 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
        >
          Architecture that speaks your story before you say a word.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        >
          <MotionLink
            to="#contact"
            className="inline-flex items-center justify-center bg-luxury-gold text-white py-5 px-10 text-[1.125rem] font-semibold tracking-wide shadow-xl relative overflow-hidden group font-poppins"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
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
                className="ml-3 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 ease-out"
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

export default CallToActionDesktop;
