import React from 'react';
import { motion } from 'framer-motion';

const CallToActionMobile = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 px-6 bg-white">
      <div className="max-w-full mx-auto text-center">
        <motion.h2
          className="font-cormorant font-medium text-4xl mb-2 tracking-tight text-luxury-charcoal"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Build More Than Walls.
        </motion.h2>

        <motion.h2
          className="font-cormorant font-medium text-4xl mb-6 tracking-tight text-luxury-gold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          Build a Legacy.
        </motion.h2>

        <motion.p
          className="font-poppins text-luxury-charcoal text-[0.91rem] italic font-normal max-w-md mx-auto mb-8"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          Architecture that speaks your story
          <br/>before you say a word.
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center bg-luxury-gold text-white py-3 px-6 text-sm font-semibold tracking-wide shadow-lg relative overflow-hidden group font-poppins rounded-sm"
            whileHover={{
              scale: 1.02,
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.25)'
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            aria-label="Book a Private Consultation"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />

            <span className="relative z-10 flex items-center justify-center">
              Book Private Consultation
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionMobile;
