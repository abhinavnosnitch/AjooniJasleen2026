import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Our Studio', path: '/studio' },
    { name: 'Services', path: '/services' },
    { name: 'Featured Projects', path: '/projects' },
    { name: 'Meet the Team', path: '/team' },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram className="w-5 h-5" />, url: 'https://www.instagram.com/ajooni.jasleen_architects' },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: 'https://www.linkedin.com/company/ajooni-jasleen-architects' },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="font-cormorant text-3xl font-bold tracking-wider">
                AJOONI <span className="text-luxury-gold italic">JASLEEN</span>
              </span>
              <p className="font-poppins text-[10px] tracking-[0.4em] uppercase text-white/60 mt-2">
                Architects & Designers
              </p>
            </Link>
            <p className="font-poppins text-sm text-gray-400 leading-relaxed mb-8 max-w-xs">
              Crafting timeless spaces that balance bold architecture with quiet sophistication. Based in Mohali, serving visionaries everywhere.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-luxury-gold hover:border-luxury-gold transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-8 border-b border-luxury-gold/20 pb-2 inline-block">
              Quick Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="font-poppins text-sm text-gray-400 hover:text-luxury-gold transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 h-[1px] bg-luxury-gold mr-0 group-hover:mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-cormorant text-xl font-semibold text-white mb-8 border-b border-luxury-gold/20 pb-2 inline-block">
              Get In Touch
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                <span className="font-poppins text-sm text-gray-400">
                  E37 Aadh Towers, Phase-8,<br />Mohali, Punjab
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="tel:+917710666651" className="font-poppins text-sm text-gray-400 hover:text-luxury-gold transition-colors">
                  +91 77106 66651
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                <a href="mailto:ajooniandjasleen.design@gmail.com" className="font-poppins text-sm text-gray-400 hover:text-luxury-gold transition-colors">
                  Contact via Email
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/Quote Column - Hidden on Mobile */}
          <div className="hidden lg:block">
            <h4 className="font-cormorant text-xl font-semibold text-white mb-8 border-b border-luxury-gold/20 pb-2 inline-block">
              Newsletter
            </h4>
            <p className="font-poppins text-sm text-gray-400 mb-6">
              Subscribe for design inspiration and studio updates.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 rounded-sm py-3 px-4 text-sm font-poppins focus:outline-none focus:border-luxury-gold transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-luxury-gold hover:text-white transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[11px] font-poppins uppercase tracking-[0.2em] text-gray-500">
          <div className="text-center md:text-left">
            &copy; {currentYear} AJOONI JASLEEN ARCHITECTS. ALL RIGHTS RESERVED.
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/privacy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
          <div className="md:absolute md:left-1/2 md:-translate-x-1/2 relative group">
            <div className="flex items-center space-x-1">
              <span className="text-gray-500 text-[10px] md:text-[13px]">DESIGNED BY</span>
              <button className="text-luxury-gold hover:text-white transition-colors font-bold tracking-[0.2em] text-[10px] md:text-[11px]">
                RAW CURRENCY
              </button>
            </div>

            {/* Premium Designer Popup */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 translate-y-2 group-hover:translate-y-0 z-50">
              <div className="bg-[#1A1A1A] border border-white/10 backdrop-blur-xl p-4 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] min-w-[200px]">
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1A1A1A] border-r border-b border-white/10 rotate-45" />

                <p className="font-poppins text-[9px] text-white/40 mb-4 tracking-[0.3em] uppercase text-center border-b border-white/5 pb-2">Connect with RawCurrency</p>

                <div className="space-y-2">
                  <a
                    href="https://instagram.com/rawcurrencytech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 hover:bg-white/5 transition-colors rounded-md group/item"
                  >
                    <Instagram className="w-4 h-4 text-luxury-gold" />
                    <span className="text-[11px] text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-widest">Instagram</span>
                  </a>

                  <a
                    href="https://x.com/rawcurrency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 hover:bg-white/5 transition-colors rounded-md group/item"
                  >
                    <div className="w-4 h-4 flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-3 h-3 fill-luxury-gold" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                    </div>
                    <span className="text-[11px] text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-widest">X (Twitter)</span>
                  </a>

                  <a
                    href="https://rawcurrency.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-2 hover:bg-white/5 transition-colors rounded-md group/item"
                  >
                    <ArrowUpRight className="w-4 h-4 text-luxury-gold" />
                    <span className="text-[11px] text-gray-400 group-hover/item:text-white transition-colors uppercase tracking-widest">Website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
