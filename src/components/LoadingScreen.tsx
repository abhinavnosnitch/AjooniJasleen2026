import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  progress?: number;
  isTransitioning?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0, isTransitioning = false }) => {
  // We use a local progress state to ensure smooth numerical increments
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    // Smoothen the progress increment
    const interval = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev < progress) return prev + 1;
        return prev;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [progress]);

  const brandName = "AJOONI JASLEEN";
  const brandSubtext = "ARCHITECTS & DESIGNERS";

  // Animation variants
  const containerVariants = {
    exit: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const shutterVariants = {
    initial: { y: 0 },
    exit: { 
      y: "-100%",
      transition: { 
        duration: 1.2, 
        ease: [0.76, 0, 0.24, 1] as any,
      }
    }
  };

  const letterVariants = {
    initial: { y: 40, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.05 * i,
        ease: [0.215, 0.61, 0.355, 1] as any,
      }
    }),
    exit: {
      y: -20,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1] as any,
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isTransitioning && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[100] overflow-hidden bg-white"
        >
          {/* Shutter Layer 1 (Slightly darker ivory) */}
          <motion.div 
            variants={shutterVariants}
            className="absolute inset-0 bg-[#E8E4DB] z-10"
          />
          
          {/* Shutter Layer 2 (Main Luxury Ivory) */}
          <motion.div 
            initial={{ y: 0 }}
            exit={{ 
              y: "-100%",
              transition: { duration: 1.2, delay: 0.1, ease: [0.76, 0, 0.24, 1] as any }
            }}
            className="absolute inset-0 bg-[#F9F7F3] z-20 flex flex-col items-center justify-center"
          >
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] mix-blend-multiply" />

            <div className="relative z-30 flex flex-col items-center">
              {/* Logo with subtle scale and fade */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="mb-12"
              >
                <img 
                  src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/logo.png"
                  alt="Logo"
                  className="h-16 w-auto mix-blend-multiply opacity-80"
                />
              </motion.div>

              {/* Staggered Brand Name */}
              <div className="flex space-x-[1px] mb-4 whitespace-nowrap px-4">
                {brandName.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="font-cormorant text-2xl sm:text-3xl md:text-5xl font-light tracking-[0.15em] text-[#2E2E2E]"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>

              {/* Subtext Reveal */}
              <motion.div
                initial={{ opacity: 0, letterSpacing: "0.1em" }}
                animate={{ opacity: 0.5, letterSpacing: "0.4em" }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                className="font-poppins text-[8px] sm:text-[10px] md:text-xs text-[#2E2E2E] uppercase font-medium text-center"
              >
                {brandSubtext}
              </motion.div>

              {/* Minimalist Progress Counter - Integrated into center flow for better mid-screen position */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="mt-20 md:mt-24 flex items-baseline space-x-4"
              >
                <span className="font-poppins text-[10px] uppercase tracking-[0.3em] opacity-30 text-[#2E2E2E]">Loading</span>
                <div className="w-12 h-[1px] bg-[#2E2E2E] opacity-10" />
                <span className="font-cormorant text-2xl italic font-light min-w-[3rem] text-[#2E2E2E]">
                  {displayProgress.toString().padStart(2, '0')}
                </span>
                <span className="font-cormorant text-sm opacity-20 text-[#2E2E2E]">/ 100</span>
              </motion.div>
            </div>

            {/* Corner Accents (Architectural feel) */}
            <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-[#2E2E2E]/10" />
            <div className="absolute top-12 right-12 w-8 h-8 border-t border-r border-[#2E2E2E]/10" />
            <div className="absolute bottom-12 left-12 w-8 h-8 border-b border-l border-[#2E2E2E]/10" />
            <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-[#2E2E2E]/10" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;