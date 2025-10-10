import React from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  progress?: number;
  isTransitioning?: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress = 0, isTransitioning = false }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-luxury-ivory flex items-center justify-center loading-screen ${isTransitioning ? 'loading-screen-fade-out' : ''}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] bg-repeat" style={{ backgroundSize: '200px 200px' }} />
      
      <div className="text-center">
        {/* Logo Container with Beeping Animation */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: [0, 1, 1, 0.7, 1],
            scale: [0.8, 1, 1.05, 1, 1.02, 1]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.7, 0.9, 1]
          }}
        >
          <img 
            src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/logo.png"
            alt="Ajooni & Jasleen Logo"
            className="h-20 w-auto mx-auto"
            loading="eager"
          />
        </motion.div>

        {/* Company Name with Elegant Typography */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <h1 className="font-cormorant text-3xl font-bold text-luxury-charcoal tracking-wide leading-none mb-2">
            Ajooni Jasleen
          </h1>
          <p className="font-poppins text-sm text-luxury-charcoal uppercase tracking-widest">
            Design Studio
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-64 mx-auto"
        >
          {/* Progress Bar Background */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-luxury-gold to-luxury-gold rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </div>
          
          {/* Loading Text */}
          <motion.p
            className="font-poppins text-xs text-luxury-charcoal uppercase tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Preparing Your Experience
          </motion.p>
        </motion.div>

        {/* Subtle Pulse Ring Animation */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.div
            className="w-96 h-96 border border-luxury-gold/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.05, 0.1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;