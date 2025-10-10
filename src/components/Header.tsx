import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
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
    path: '#', 
    position: 'left',
    isDropdown: false 
  },
  { 
    id: 'services', 
    name: 'Services', 
    path: '#', 
    position: 'left',
    isDropdown: false 
  },
  // Right navigation items
  { 
    id: 'projects', 
    name: 'Projects', 
    path: '#',
    position: 'right',
    isDropdown: true,
    dropdownItems: [
      { name: 'Residential', path: '#residential' },
      { name: 'Commercial', path: '#commercial' },
      { name: 'Interior Design', path: '#interior-design' }
    ]
  },
  { 
    id: 'about', 
    name: 'About', 
    path: '#',
    position: 'right',
    isDropdown: true,
    dropdownItems: [
      { name: 'Studio', path: '#studio' },
      { name: 'Our Process', path: '#process' }
    ]
  },
  { 
    id: 'contact', 
    name: 'Contact', 
    path: '#', 
    position: 'right',
    isDropdown: true
  }
];

// Layout configuration
const layoutConfig = {
  desktop: {
    container: 'hidden lg:flex items-center justify-between', // Main desktop header layout
    leftNav: 'flex items-center space-x-4', // Left navigation group spacing
    centerWordmark: 'flex-shrink-0 text-center group', // Centered wordmark positioning
    rightNav: 'flex items-center space-x-1', // Right navigation group spacing
    navLink: 'font-poppins px-4 text-sm font-normal text-luxury-charcoal hover:text-luxury-gold uppercase tracking-wide border-0 relative group flex items-center' // Individual nav link styling
  },
  mobile: {
    container: 'flex items-center justify-center lg:hidden relative', // Mobile header layout
    menuPanel: 'fixed top-0 right-0 h-screen w-4/5 sm:w-3/4 bg-white z-50 lg:hidden mobile-menu shadow-2xl' // Mobile menu panel
  }
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdownId, setActiveMobileDropdownId] = useState<string | null>(null);
  const [activeDesktopDropdownId, setActiveDesktopDropdownId] = useState<string | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});
  const location = useLocation();

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
        setHoveredItemId(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (hoveredItemId) {
      timeoutId = setTimeout(() => {
        setActiveDesktopDropdownId(hoveredItemId);
      }, 150);
    } else {
      setActiveDesktopDropdownId(null);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [hoveredItemId]);

  // Simplified menu handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdownId(null);
  };

  const toggleMobileDropdown = (itemId: string) => {
    setActiveMobileDropdownId(activeMobileDropdownId === itemId ? null : itemId);
  };

  // Helper functions to filter navigation items
  const getLeftNavItems = () => navigationItems.filter(item => item.position === 'left');
  const getRightNavItems = () => navigationItems.filter(item => item.position === 'right');
  const getAllNavItems = () => navigationItems;

  // Render individual navigation link
  const renderNavLink = (item: typeof navigationItems[0], isMobile = false) => {
    const baseClasses = isMobile 
      ? 'font-poppins block py-3 text-base font-medium text-luxury-charcoal hover:text-luxury-gold rounded-sm px-3 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-inset relative group'
      : layoutConfig.desktop.navLink;

    if (item.isDropdown && !isMobile) {
      const isOpen = activeDesktopDropdownId === item.id;

      return (
        <div
          key={item.id}
          ref={dropdownRefs.current[item.id]}
          className="relative"
          onMouseEnter={() => setHoveredItemId(item.id)}
          onMouseLeave={() => setHoveredItemId(null)}
        >
          <Link
            to={item.path}
            className="font-poppins flex items-center px-4 text-sm font-normal text-luxury-charcoal hover:text-luxury-gold uppercase tracking-wide border-0 transition-colors duration-300 ease-out relative group"
            style={{height: '100px'}}
            onClick={(e) => e.preventDefault()}
            aria-haspopup="true"
            aria-expanded={isOpen}
            aria-label={`${item.name} menu`}
          >
            <span className="relative z-10">{item.name}</span>
            <ChevronDown
              className={`w-4 h-4 ml-1 transform transition-transform duration-300 ease-out ${
                isOpen ? 'rotate-180' : 'rotate-0'
              }`}
            />
            <span className="absolute bottom-8 left-4 right-4 h-0.5 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </Link>

          <DropdownMenu
            isOpen={isOpen}
            items={item.dropdownItems}
            onClose={() => {
              setActiveDesktopDropdownId(null);
              setHoveredItemId(null);
            }}
            triggerRef={dropdownRefs.current[item.id]}
          />
        </div>
      );
    } else {
      // Regular link (desktop or mobile)
      return (
        <Link
          key={item.id}
          to={item.path}
          className={baseClasses}
          style={!isMobile ? {height: '100px'} : undefined}
          onClick={(e) => {
            e.preventDefault();
            if (isMobile) closeMobileMenu();
          }}
          aria-label={`Navigate to ${item.name}`}
        >
          <span className="relative z-10">{item.name}</span>
          {!isMobile && (
            <span className="absolute bottom-8 left-4 right-4 h-0.5 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          )}
        </Link>
      );
    }
  };

  // Render mobile dropdown
  const renderMobileDropdown = (item: typeof navigationItems[0]) => {
    const isOpen = activeMobileDropdownId === item.id;
    
    return (
      <div key={item.id}>
        <button
          onClick={() => toggleMobileDropdown(item.id)}
          className="font-poppins flex items-center justify-between w-full py-3 px-3 text-base font-medium text-luxury-charcoal hover:text-luxury-gold rounded-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-inset"
          aria-expanded={isOpen}
        >
          <span>{item.name}</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="ml-4 space-y-1 overflow-hidden"
            >
              {item.dropdownItems?.map((dropdownItem) => (
                <Link
                  key={dropdownItem.name}
                  to={dropdownItem.path}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                  }}
                  className="font-poppins block py-2 px-3 text-sm text-luxury-charcoal hover:text-luxury-gold rounded-sm transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-inset relative group"
                >
                  <span className="relative z-10">{dropdownItem.name}</span>
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-ivory premium-gradient overflow-visible w-full h-25" style={{height: '100px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{height: '100px'}}>
          {/* Desktop Header */}
          <div className="hidden lg:grid lg:grid-cols-3 items-center" style={{height: '100px'}}>
            {/* Left Navigation Group */}
            <nav className="flex items-center space-x-4 justify-start" style={{height: '100px'}}>
              {getLeftNavItems().map(item => renderNavLink(item))}
            </nav>

            {/* Centered Wordmark */}
            <div className="flex items-center justify-center" style={{height: '100px'}}>
              <Link to="/" className="flex flex-col items-center justify-center text-center group" style={{height: '100px'}}>
                <h1 className="text-3xl font-bold text-luxury-charcoal tracking-wide leading-tight m-0 group-hover:text-luxury-gold transition-colors duration-300 ease-out">
                  Ajooni Jasleen
                </h1>
                <p className="text-xs text-luxury-charcoal uppercase tracking-widest m-0 leading-tight group-hover:text-luxury-gold/80 transition-colors duration-300 ease-out">Architects</p>
              </Link>
            </div>

            {/* Right Navigation Group */}
            <nav className="flex items-center space-x-1 justify-end" style={{height: '100px'}}>
              {getRightNavItems().map(item => renderNavLink(item))}
            </nav>
          </div>

          {/* Mobile Header */}
          <div className={layoutConfig.mobile.container} style={{height: '75px'}}>
            {/* Left Zone - Logo */}
            <div className="absolute left-2 flex items-center justify-center group" style={{height: '75px'}}>
              <Link to="/" onClick={closeMobileMenu} className="flex items-center h-full">
                <img
                  src="https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/logo.png"
                  alt="Ajooni & Jasleen Logo"
                  className="h-10 w-auto max-w-full group-hover:scale-105 transition-transform duration-300 ease-out"
                />
              </Link>
            </div>

            {/* Center Zone - Brand Name */}
            <div className="flex items-center justify-center group" style={{height: '75px'}}>
              <Link to="/" className="flex flex-col items-center justify-center text-center group">
                <h1 className="text-xl font-bold text-luxury-charcoal tracking-wide leading-tight m-0 group-hover:text-luxury-gold transition-colors duration-300 ease-out">
                  Ajooni Jasleen
                </h1>
                <p className="text-[0.5rem] text-luxury-charcoal uppercase tracking-widest m-0 leading-tight group-hover:text-luxury-gold/80 transition-colors duration-300 ease-out">Architects</p>
              </Link>
            </div>

            {/* Right Zone - Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="absolute right-2 flex items-center justify-center text-luxury-charcoal hover:text-luxury-gold hover:scale-105 focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 rounded-sm p-2 transition-all duration-300 ease-out"
              style={{height: '75px'}}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Backdrop */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMobileMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className={layoutConfig.mobile.menuPanel}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <Link to="/" onClick={closeMobileMenu}>
                  <h2 className="font-cormorant text-xlg font-bold text-luxury-charcoal my-0">MENU</h2>
                </Link>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 text-luxury-charcoal hover:text-luxury-gold focus:outline-none focus:ring-2 focus:ring-luxury-gold rounded-sm"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 px-6 py-4 space-y-2 overflow-y-auto">
                {/* Regular navigation items */}
                {getAllNavItems().filter(item => !item.isDropdown).map(item => renderNavLink(item, true))}

                {/* Dropdown items with expandable sections */}
                <div className="border-t border-gray-200 pt-2 mt-4">
                  {getAllNavItems().filter(item => item.isDropdown).map(item => renderMobileDropdown(item))}
                </div>
              </nav>

              {/* Mobile Contact Button */}
              <div className="p-6 border-t border-gray-200">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    closeMobileMenu();
                  }}
                  className="w-full py-3 px-6 text-base font-medium tracking-wider border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white hover:scale-105 transition-all duration-300 ease-out rounded-sm focus:outline-none focus:ring-2 focus:ring-luxury-gold focus:ring-offset-2 font-poppins"
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