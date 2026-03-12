import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Linkedin, MessageCircle } from 'lucide-react';

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
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-4">
            Contact Us
          </h2>
          <p className="font-poppins text-luxury-charcoal/80 max-w-2xl mx-auto">
            Choose your preferred way to get in touch with our team
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex-shrink-0 p-3 bg-luxury-gold/10 rounded-lg mb-4 group-hover:bg-luxury-gold/20 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-cormorant font-semibold text-lg text-luxury-charcoal mb-2 text-center">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p
                      key={detailIndex}
                      className="font-poppins text-sm text-luxury-charcoal/70 text-center hover:text-luxury-gold transition-colors duration-300"
                    >
                      {detail}
                    </p>
                  ))}
                </motion.a>
              ))}
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.70033%2C30.70615%2C76.70433%2C30.71015&layer=mapnik&marker=30.7081503%2C76.7023358"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              loading="lazy"
              title="Office Location - E37, Aadh Towers, Phase-8 Mohali Punjab India"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;