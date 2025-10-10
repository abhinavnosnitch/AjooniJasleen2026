import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-luxury-gold" />,
      title: 'Office Address',
      details: ['E37 Aadh Towers', 'Phase-8, Mohali, Punjab']
    },
    {
      icon: <Phone className="w-6 h-6 text-luxury-gold" />,
      title: 'Phone Number',
      details: ['+91 98765 43210', '+91 98765 43211']
    },
    {
      icon: <Mail className="w-6 h-6 text-luxury-gold" />,
      title: 'Email Address',
      details: ['hello@ajoonijasleenarchi.com', 'projects@ajoonijasleenarchi.com']
    },
    {
      icon: <Clock className="w-6 h-6 text-luxury-gold" />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM']
    }
  ];

  return (
    <div className="overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="bg-luxury-ivory py-20 overflow-x-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">Contact Us</h1>
          <p className="font-poppins text-lg sm:text-xl text-luxury-charcoal max-w-3xl mx-auto">
            Ready to start your architectural project? Get in touch with us today to discuss your vision 
            and learn how we can bring it to life.
          </p>
        </motion.div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="font-cormorant text-2xl sm:text-3xl font-bold text-luxury-charcoal mb-8">Get A Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-luxury-charcoal mb-2 font-poppins">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-luxury-charcoal/20 rounded-sm focus:ring-2 focus:ring-luxury-gold focus:border-transparent touch-manipulation font-poppins"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-luxury-charcoal mb-2 font-poppins">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-luxury-charcoal/20 rounded-sm focus:ring-2 focus:ring-luxury-gold focus:border-transparent touch-manipulation font-poppins"
                      inputMode="email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-base font-medium text-luxury-charcoal mb-2 font-poppins">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-luxury-charcoal/20 rounded-sm focus:ring-2 focus:ring-luxury-gold focus:border-transparent touch-manipulation font-poppins"
                      inputMode="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-base font-medium text-luxury-charcoal mb-2 font-poppins">
                      Project Type
                    </label>
                    <select
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleChange}
                      className="w-full px-4 py-4 text-base border border-luxury-charcoal/20 rounded-sm focus:ring-2 focus:ring-luxury-gold focus:border-transparent touch-manipulation font-poppins"
                    >
                      <option value="">Select project type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="interior">Interior Design</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-base font-medium text-luxury-charcoal mb-2 font-poppins">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 text-base border border-luxury-charcoal/20 rounded-sm focus:ring-2 focus:ring-luxury-gold focus:border-transparent touch-manipulation font-poppins"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under ₹50,000</option>
                    <option value="50k-200k">₹50,000 - ₹2,00,000</option>
                    <option value="200k-500k">₹2,00,000 - ₹5,00,000</option>
                    <option value="500k-1m">₹5,00,000 - ₹10,00,000</option>
                    <option value="over-1m">Over ₹10,00,000</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-base font-medium text-luxury-charcoal mb-2 font-poppins">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project vision, requirements, and any specific details..."
                    className="w-full px-4 py-4 text-base border border-luxury-charcoal/20 rounded-sm focus:ring-2 focus:ring-luxury-gold focus:border-transparent touch-manipulation resize-vertical font-poppins"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-luxury-gold text-white py-4 px-6 rounded-sm text-base font-semibold tracking-wider hover:bg-luxury-gold/90 transition-colors duration-300 touch-manipulation font-poppins"
                >
                  SEND MESSAGE
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div>
                <h2 className="font-cormorant text-3xl font-bold text-luxury-charcoal mb-8">Get In Touch</h2>
                <p className="font-poppins text-luxury-charcoal leading-relaxed mb-8">
                  We're here to help bring your architectural vision to life. Whether you have a specific 
                  project in mind or just want to explore possibilities, we'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="flex-shrink-0 p-3 bg-luxury-gold/10 rounded-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-cormorant font-semibold text-luxury-charcoal mb-2">{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="font-poppins text-luxury-charcoal/80">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              >
                <div className="bg-luxury-gold/20 h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-2" />
                    <p className="font-cormorant text-luxury-charcoal">Interactive Map</p>
                    <p className="font-poppins text-sm text-luxury-charcoal/80">Location in Mohali, Punjab</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;