import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const BackToHomeButton = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <AnimatePresence>
      {!isHomePage && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed top-8 left-8 z-50"
        >
          <button
            onClick={handleBack}
            className="group flex items-center space-x-2 transition-all duration-300 ease-out bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] rounded-full px-5 py-2.5 ring-1 ring-black/5"
            aria-label="Go Back"
          >
            <ArrowLeft
              className="w-4 h-4 text-luxury-charcoal group-hover:text-luxury-gold transform group-hover:-translate-x-0.5 transition-all duration-300 ease-out"
              strokeWidth={2}
            />

            <span className="font-poppins text-sm font-medium tracking-wider uppercase text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300 ease-out">
              Back
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackToHomeButton;