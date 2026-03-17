import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownMenu from './DropdownMenu';

// Navigation configuration
const navigationItems = [
  // Left navigation items
  { 
    id: 'products', 
    name: 'Products', 
    path: '#', 
    position: 'left',
    isDropdown: false 
  },
  {
    id: 'shiddat',
    name: 'Shiddat',
    path: '/shiddat',
    position: 'left',
    isDropdown: false
  },
  {
    id: 'services',
    name: 'Services',
    path: '/services',
    position: 'left',
    isDropdown: false
  },
  // Right navigation items
  {
    id: 'projects',
    name: 'Projects',
    path: '/projects',
    position: 'right',
    isDropdown: true,
    dropdownItems: [
      { name: 'All Projects', path: '/projects' },
      { name: 'Residential', path: '/projects/residential' },
      { name: 'Commercial', path: '/projects/commercial' },
      { name: 'Interior Design', path: '/projects/interior-design' }
    ]
  },
  { 
    id: 'about', 
    name: 'About', 
    path: '#',
    position: 'right',
    isDropdown: true,
    dropdownItems: [
      { name: 'Studio', path: '/studio' },
      { name: 'Our Team', path: '/team' }
    ]
  },
  {
    id: 'contact',
    name: 'Contact',
    path: '#',
    position: 'right',
    isDropdown: true,
    dropdownItems: [
      { name: 'Call', path: 'tel:+917710666651', isExternal: true },
      { name: 'Email', path: 'mailto:ajooniandjasleen.design@gmail.com', isExternal: true },
      { name: 'Instagram', path: 'https://www.instagram.com/ajooni.jasleen_architects', isExternal: true },
      { name: 'WhatsApp', path: 'https://wa.me/917710666651', isExternal: true },
      { name: 'LinkedIn', path: 'https://www.linkedin.com/company/ajooni-jasleen-architects', isExternal: true }
    ]
  }
];



const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdownId, setActiveMobileDropdownId] = useState<string | null>(null);
  const [activeDesktopDropdownId, setActiveDesktopDropdownId] = useState<string | null>(null);
  const [showProductsTooltip, setShowProductsTooltip] = useState(false);
  const dropdownRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      // Don't hide when mobile menu is open
      if (isMobileMenuOpen) {
        lastScrollY.current = currentScrollY;
        return;
      }

      const delta = currentScrollY - lastScrollY.current;

      // Only react to meaningful scroll (10px threshold to prevent jitter)
      if (Math.abs(delta) < 10) return;

      if (delta > 0 && currentScrollY > 800) {
        // Scrolling DOWN and past the hero section
        setIsHidden(true);
      } else if (delta < 0) {
        // Scrolling UP — always show
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  navigationItems.forEach(item => {
    if (item.isDropdown && !dropdownRefs.current[item.id]) {
      dropdownRefs.current[item.id] = React.createRef<HTMLDivElement>();
    }
  });

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDesktopDropdownId(null);
        setActiveMobileDropdownId(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdownId(null);
  };
  const toggleMobileDropdown = (itemId: string) => {
    setActiveMobileDropdownId(activeMobileDropdownId === itemId ? null : itemId);
  };

  const getLeftNavItems = () => navigationItems.filter(item => item.position === 'left');
  const getRightNavItems = () => navigationItems.filter(item => item.position === 'right');
  const getAllNavItems = () => navigationItems;

  const renderNavLink = (item: any, isMobile = false) => {
    const baseClasses = isMobile 
      ? 'font-cormorant flex items-center w-full py-4 text-3xl sm:text-4xl font-light tracking-wide text-luxury-charcoal hover:text-luxury-gold transition-colors duration-500 relative group'
      : '';

    if (item.isDropdown && !isMobile) {
      return (
        <div
          key={item.id}
          className="relative h-full"
          onMouseEnter={() => setActiveDesktopDropdownId(item.id)}
          onMouseLeave={() => setActiveDesktopDropdownId(null)}
        >
          <Link
            to={item.path}
            className={`font-poppins flex items-center px-4 text-[13px] font-medium transition-all duration-500 ease-in-out uppercase tracking-[0.2em] relative group h-full ${
              isScrolled ? 'text-luxury-charcoal' : 'text-luxury-charcoal/80'
            } hover:text-luxury-gold`}
            onClick={(e) => {
              if (item.path === '#') e.preventDefault();
            }}
          >
            <span className="relative z-10">{item.name}</span>
            <ChevronDown
              className={`w-3 h-3 ml-2 transition-transform duration-500 ${
                activeDesktopDropdownId === item.id ? 'rotate-180 text-luxury-gold' : ''
              }`}
            />
            <span className="absolute bottom-1/2 translate-y-4 left-4 right-4 h-[1px] bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
          </Link>

          <DropdownMenu
            isOpen={activeDesktopDropdownId === item.id}
            items={item.dropdownItems}
            onClose={() => setActiveDesktopDropdownId(null)}
            triggerRef={dropdownRefs.current[item.id]}
          />
        </div>
      );
    } else {
      const handleClick = (e: React.MouseEvent) => {
        if (item.id === 'products') {
          e.preventDefault();
          setShowProductsTooltip(true);
          setTimeout(() => setShowProductsTooltip(false), 2000);
        } else if (isMobile) {
          closeMobileMenu();
        }
      };

      return (
        <div key={item.id} className={`relative ${!isMobile ? 'h-full' : ''}`}>
          <Link
            to={item.path}
            className={isMobile ? baseClasses : `font-poppins flex items-center px-4 text-[13px] font-medium transition-all duration-500 ease-in-out uppercase tracking-[0.2em] relative group h-full ${
              isScrolled ? 'text-luxury-charcoal' : 'text-luxury-charcoal/80'
            } hover:text-luxury-gold`}
            onClick={handleClick}
          >
            <span className="relative z-10">{item.name}</span>
            {!isMobile && (
              <span className="absolute bottom-1/2 translate-y-4 left-4 right-4 h-[1px] bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left" />
            )}
          </Link>
          {item.id === 'products' && showProductsTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-luxury-charcoal text-white px-4 py-2 rounded-md text-sm font-poppins whitespace-nowrap shadow-lg z-50"
            >
              Coming Soon!
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-luxury-charcoal rotate-45"></div>
            </motion.div>
          )}
        </div>
      );
    }
  };

  const renderMobileDropdown = (item: any) => {
    const isOpen = activeMobileDropdownId === item.id;
    return (
      <div key={item.id} className="border-b border-luxury-charcoal/10 pb-2">
        <button
          onClick={() => toggleMobileDropdown(item.id)}
          className="font-cormorant flex items-center justify-between w-full py-4 text-3xl sm:text-4xl font-light tracking-wide text-luxury-charcoal hover:text-luxury-gold transition-colors duration-500"
        >
          <span>{item.name}</span>
          <ChevronDown className={`w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180 text-luxury-gold' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
              className="overflow-hidden"
            >
              <div className="pl-6 border-l border-luxury-gold/30 ml-2 mt-2 mb-4 space-y-4">
                {item.dropdownItems?.map((dropdownItem: any) => (
                  dropdownItem.isExternal ? (
                    <a
                      key={dropdownItem.name}
                      href={dropdownItem.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMobileMenu}
                      className="font-jost block py-2 text-[1.1rem] tracking-widest uppercase text-luxury-charcoal/80 hover:text-luxury-gold transition-colors duration-300"
                    >
                      {dropdownItem.name}
                    </a>
                  ) : (
                    <Link
                      key={dropdownItem.name}
                      to={dropdownItem.path}
                      onClick={closeMobileMenu}
                      className="font-jost block py-2 text-[1.1rem] tracking-widest uppercase text-luxury-charcoal/80 hover:text-luxury-gold transition-colors duration-300"
                    >
                      {dropdownItem.name}
                    </Link>
                  )
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ease-in-out w-full font-poppins ${
          isScrolled 
            ? 'lg:bg-white/80 lg:backdrop-blur-xl lg:shadow-[0_4px_30px_rgba(0,0,0,0.03)] lg:border-b lg:border-luxury-gold/10' 
            : 'lg:bg-luxury-ivory lg:border-transparent'
        } ${isHidden ? '-translate-y-full lg:translate-y-0' : 'translate-y-0'}`}
        style={{ height: isScrolled ? (window.innerWidth < 1024 ? '90px' : '80px') : (window.innerWidth < 1024 ? '110px' : '100px') }}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 h-full">
          <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] items-center h-full">
            <nav className="flex items-center space-x-8 justify-start h-full">
              {getLeftNavItems().map(item => renderNavLink(item))}
            </nav>

            <div className="flex items-center justify-center px-24 h-full">
              <Link 
                to="/" 
                className="flex flex-col items-center justify-center text-center group relative py-4"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="flex items-center justify-center mb-1">
                  <h1 className="font-cormorant text-2xl md:text-3xl font-bold text-luxury-charcoal tracking-[0.2em] uppercase transition-colors duration-500 group-hover:text-luxury-gold whitespace-nowrap">
                    AJOONI JASLEEN
                  </h1>
                </div>
                <div className="overflow-hidden relative flex flex-col items-center">
                  <span className="block text-[8px] md:text-[9px] text-luxury-charcoal/50 uppercase tracking-[0.5em] font-medium transition-all duration-500 group-hover:tracking-[0.7em] group-hover:text-luxury-gold/70">
                    Architects & Designers
                  </span>
                </div>
              </Link>
            </div>

            <nav className="flex items-center space-x-8 justify-end h-full">
              {getRightNavItems().map(item => renderNavLink(item))}
            </nav>
          </div>

          <div className={`lg:hidden grid grid-cols-[3rem_1fr_3rem] items-center h-full relative px-4 transition-all duration-500 mx-auto bg-white/80 backdrop-blur-xl rounded-full border border-luxury-gold/20 shadow-lg overflow-hidden ${
            isScrolled ? 'w-[88%] h-[60px] top-2' : 'w-[94%] h-[70px] top-4'
          }`}>
            {/* Architectural Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] mix-blend-multiply" />
            
            {/* Logo area */}
            <div className="flex items-center justify-start group relative z-10">
              <Link to="/" onClick={() => { closeMobileMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center">
                <img
                  src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/logo.png"
                  alt="Logo"
                  className="h-6 w-auto transition-transform duration-300 group-hover:scale-110"
                />
              </Link>
            </div>

            {/* Wordmark Center (Absolute position removed in favor of grid centering) */}
            <div className="flex items-center justify-center relative z-10 w-full overflow-hidden">
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center group">
                <h1 className="font-cormorant text-[14px] xs:text-[15px] sm:text-[16px] font-bold text-luxury-charcoal tracking-[0.2em] uppercase group-hover:text-luxury-gold transition-colors duration-300 whitespace-nowrap">
                  AJOONI JASLEEN
                </h1>
              </Link>
            </div>

            {/* Architectural Dot Grid Toggle (Option A) */}
            <div className="flex items-center justify-end relative z-10 h-full">
              <button 
                onClick={toggleMobileMenu} 
                className="w-10 h-10 flex flex-col justify-center items-center group relative p-0"
                aria-label="Toggle Menu"
              >
                <div className={`grid grid-cols-2 gap-[3px] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? 'rotate-45' : ''}`}>
                  <motion.div 
                    animate={isMobileMenuOpen ? { x: 1.5, y: 1.5 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[3px] h-[3px] rounded-full bg-luxury-charcoal" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { x: -1.5, y: 1.5 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[3px] h-[3px] rounded-full bg-luxury-charcoal" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { x: 1.5, y: -1.5 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[3px] h-[3px] rounded-full bg-luxury-charcoal" 
                  />
                  <motion.div 
                    animate={isMobileMenuOpen ? { x: -1.5, y: -1.5 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-[3px] h-[3px] rounded-full bg-luxury-charcoal" 
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-luxury-ivory z-50 lg:hidden overflow-y-auto"
          >
            {/* Minimalist Noise Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSBiYXNlRnJlcXVlbmN5PSIwLjkiIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI25vaXNlKSIgb3BhY2l0eT0iMC4wMyIvPjwvc3ZnPg==')] mix-blend-multiply" />
            
            <div className="flex flex-col px-8 pt-[120px] pb-12 min-h-screen relative z-10">
              <div className="flex items-center justify-between mb-8 border-b border-luxury-charcoal/10 pb-4">
                <h2 className="font-jost text-xs font-semibold tracking-[0.3em] uppercase text-luxury-charcoal/40">Navigation</h2>
              </div>
              <nav className="flex flex-col space-y-2 flex-grow">
                {getAllNavItems().map(item => item.isDropdown ? renderMobileDropdown(item) : (
                  <div key={item.id} className="border-b border-luxury-charcoal/10 flex items-center">
                    {renderNavLink(item, true)}
                  </div>
                ))}
              </nav>
              <div className="mt-16 pb-8">
                <button
                  onClick={() => {
                    closeMobileMenu();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-5 border border-luxury-gold text-luxury-gold uppercase tracking-[0.3em] text-sm font-medium hover:bg-luxury-gold hover:text-white transition-all duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;