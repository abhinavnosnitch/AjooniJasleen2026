import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-lg shadow-2xl w-[90%] max-w-md p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <h2 className="font-cormorant text-4xl font-bold text-luxury-charcoal mb-4">
                Coming Soon
              </h2>
              <p className="font-poppins text-lg text-luxury-charcoal/80 mb-6">
                Our products section is currently under development. Stay tuned for exciting updates!
              </p>
              <button
                onClick={onClose}
                className="bg-luxury-gold text-white py-3 px-8 rounded-sm font-poppins font-semibold tracking-wider hover:bg-luxury-gold/90 transition-colors duration-300"
              >
                Got It
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComingSoonPopup;
