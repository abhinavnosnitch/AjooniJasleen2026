import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, Instagram, MessageCircle, Linkedin, MapPin } from 'lucide-react';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const contactLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call',
      href: 'tel:+919306095006',
      text: '+91 9306095006'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      href: 'mailto:ajooniandjasleen.design@gmail.com',
      text: 'ajooniandjasleen.design@gmail.com'
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      label: 'Instagram',
      href: 'https://www.instagram.com/ajooni.jasleen_architects',
      text: '@ajooni.jasleen_architects'
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      href: 'https://wa.me/919306095006',
      text: '+91 9306095006'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/company/ajooni-jasleen-architects',
      text: 'Ajooni Jasleen Architects'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      href: 'https://www.google.com/maps/place/Aadh+Towers+-+Office+space+for+rent+in+mohali%2Fplug+and+play+office%2F+coworking+%2F+furnished+office+space+in+mohali/@30.7081505,76.7018354,19z/data=!4m6!3m5!1s0x390fef0c6747026b:0xf496e44c1ce8453c!8m2!3d30.7081503!4d76.7023358!16s%2Fg%2F11w49f_v46?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D',
      text: 'E37 Aadh Towers, Mohali'
    }
  ];

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
            className="bg-white rounded-lg shadow-2xl w-[90%] max-w-2xl max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b border-luxury-gold/20 p-6 flex items-center justify-between">
              <h2 className="font-cormorant text-3xl font-bold text-luxury-charcoal">
                Get In Touch
              </h2>
              <button
                onClick={onClose}
                className="text-luxury-charcoal hover:text-luxury-gold transition-colors duration-300"
                aria-label="Close popup"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <p className="font-poppins text-luxury-charcoal/80 mb-6 text-center">
                Choose your preferred way to connect with us
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 bg-luxury-ivory border border-luxury-gold/20 hover:border-luxury-gold text-luxury-charcoal hover:bg-luxury-gold/10 py-4 px-5 rounded-sm transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                  >
                    <div className="flex-shrink-0 text-luxury-gold group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <div className="text-left min-w-0 flex-1">
                      <div className="font-poppins font-semibold text-sm">{link.label}</div>
                      <div className="font-poppins text-xs text-luxury-charcoal/70 truncate">{link.text}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
