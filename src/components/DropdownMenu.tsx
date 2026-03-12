import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface DropdownItem {
  name: string;
  path: string;
  isExternal?: boolean;
}

interface DropdownMenuProps {
  isOpen: boolean;
  items?: DropdownItem[];
  onClose: () => void;
  triggerRef?: React.RefObject<HTMLDivElement>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, items = [], onClose, triggerRef }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        triggerRef?.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, triggerRef]);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1]
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  if (items.length === 0) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute top-full left-0 mt-3 w-64 z-50"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="relative">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/90 backdrop-blur-md border-l border-t border-luxury-gold/20 rotate-45 shadow-lg"></div>

            <div className="relative bg-white/90 backdrop-blur-md rounded-xl shadow-2xl border border-luxury-gold/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-luxury-ivory/50 via-white/30 to-luxury-gold/5 pointer-events-none"></div>

              <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-overlay">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, rgba(192, 160, 98, 0.15) 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
                }}></div>
              </div>

              <motion.div
                className="relative py-2 px-1"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={itemVariants}
                    custom={index}
                  >
                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block px-4 py-3 mx-2 my-1 text-sm font-medium text-luxury-charcoal rounded-lg transition-all duration-300 ease-out hover:text-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:ring-inset"
                        onClick={onClose}
                        role="menuitem"
                      >
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/5 to-luxury-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>

                        <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-luxury-gold rounded-full group-hover:h-6 transition-all duration-300 ease-out"></span>

                        <span className="relative z-10 block font-poppins tracking-wide">{item.name}</span>

                        <span className="absolute bottom-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        className="group relative block px-4 py-3 mx-2 my-1 text-sm font-medium text-luxury-charcoal rounded-lg transition-all duration-300 ease-out hover:text-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold/50 focus:ring-inset"
                        onClick={onClose}
                        role="menuitem"
                      >
                        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-luxury-gold/0 via-luxury-gold/5 to-luxury-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>

                        <span className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-0 bg-luxury-gold rounded-full group-hover:h-6 transition-all duration-300 ease-out"></span>

                        <span className="relative z-10 block font-poppins tracking-wide">{item.name}</span>

                        <span className="absolute bottom-2 left-4 right-4 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center"></span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </motion.div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
