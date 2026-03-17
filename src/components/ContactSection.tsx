import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const ContactSection = () => {

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-luxury-gold" />,
      title: 'Office Address',
      details: ['E37 Aadh Towers', 'Phase-8, Mohali, Punjab'],
      link: 'https://www.google.com/maps/place/Aadh+Towers+-+Office+space+for+rent+in+mohali%2Fplug+and+play+office%2F+coworking+%2F+furnished+office+space+in+mohali/@30.7081505,76.7018354,19z/data=!4m6!3m5!1s0x390fef0c6747026b:0xf496e44c1ce8453c!8m2!3d30.7081503!4d76.7023358!16s%2Fg%2F11w49f_v46?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D'
    },
    {
      icon: <Phone className="w-6 h-6 text-luxury-gold" />,
      title: 'Phone',
      details: ['+91 77106 66651'],
      link: 'tel:+917710666651'
    },
    {
      icon: <Mail className="w-6 h-6 text-luxury-gold" />,
      title: 'Email',
      details: ['ajooniandjasleen.design@gmail.com'],
      link: 'mailto:ajooniandjasleen.design@gmail.com'
    },
    {
      icon: <Instagram className="w-6 h-6 text-luxury-gold" />,
      title: 'Instagram',
      details: ['@ajooni.jasleen_architects'],
      link: 'https://www.instagram.com/ajooni.jasleen_architects'
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-luxury-gold" />,
      title: 'WhatsApp',
      details: ['+91 77106 66651'],
      link: 'https://wa.me/917710666651'
    },
    {
      icon: <Linkedin className="w-6 h-6 text-luxury-gold" />,
      title: 'LinkedIn',
      details: ['Ajooni Jasleen Architects'],
      link: 'https://www.linkedin.com/company/ajooni-jasleen-architects'
    }
  ];

  const [currentContactIndex, setCurrentContactIndex] = useState(0);

  const handleNextContact = () => {
    setCurrentContactIndex((prev) => (prev + 1) % contactInfo.length);
  };

  const handlePrevContact = () => {
    setCurrentContactIndex((prev) => (prev - 1 + contactInfo.length) % contactInfo.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextContact();
    }, 5000); // Frequency halved (5s instead of 2.5s)
    return () => clearInterval(interval);
  }, [contactInfo.length]);

  return (
    <div id="contact" className="overflow-x-hidden w-full bg-luxury-ivory py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gold mb-4">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Desktop View */}
          <motion.div
            className="hidden lg:grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link?.startsWith('http') ? '_blank' : undefined}
                  rel={info.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center justify-center bg-white border border-luxury-gold/20 hover:border-luxury-gold text-luxury-charcoal hover:bg-luxury-gold/5 p-6 rounded-lg transition-all duration-300 group shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 p-3 bg-luxury-gold/10 rounded-lg mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-cormorant font-semibold text-lg text-luxury-charcoal mb-2 text-center">
                    {info.title}
                  </h3>
                  {info.details.map((detail, dIdx) => (
                    <p key={dIdx} className="font-poppins text-sm text-luxury-charcoal/70 text-center">{detail}</p>
                  ))}
                </motion.a>
              ))}
          </motion.div>

          {/* Mobile View Slider */}
          <div className="lg:hidden relative">
            <div className="flex justify-center items-center min-h-[200px] relative">
              <AnimatePresence mode="wait">
                <motion.a
                  key={currentContactIndex}
                  href={contactInfo[currentContactIndex].link}
                  target={contactInfo[currentContactIndex].link?.startsWith('http') ? '_blank' : undefined}
                  rel={contactInfo[currentContactIndex].link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex flex-col items-center justify-center bg-white border border-luxury-gold/20 text-luxury-charcoal p-8 rounded-2xl shadow-xl w-[85vw]"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="p-4 bg-luxury-gold/10 rounded-full mb-4">
                    {contactInfo[currentContactIndex].icon}
                  </div>
                  <h3 className="font-cormorant font-bold text-2xl text-luxury-charcoal mb-2 text-center">
                    {contactInfo[currentContactIndex].title}
                  </h3>
                  {contactInfo[currentContactIndex].details.map((detail, dIdx) => (
                    <p key={dIdx} className="font-poppins text-sm tracking-wide text-luxury-charcoal/70 text-center">{detail}</p>
                  ))}
                </motion.a>
              </AnimatePresence>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevContact}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
                aria-label="Previous contact info"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNextContact}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
                aria-label="Next contact info"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.3645526946057!2d76.7023358!3d30.7081503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef0c6747026b%3A0xf496e44c1ce8453c!2sAadh%20Towers%20-%20Office%20space%20for%20rent%20in%20mohali%2Fplug%20and%20play%20office%2F%20coworking%20%2F%20furnished%20office%20space%20in%20mohali!5e0!3m2!1sen!2sin!4v1773746759175!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;