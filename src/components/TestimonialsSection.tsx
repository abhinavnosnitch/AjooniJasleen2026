import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      title: 'Homeowner',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Ajooni and Jasleen transformed our vision into reality. Their attention to detail and innovative design approach exceeded our expectations. Our new home is not just beautiful, but also incredibly functional.'
    },
    {
      name: 'Priya Patel',
      title: 'Business Owner',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'The commercial space they designed for our business has significantly improved our productivity and client experience. The team was professional, creative, and delivered on time and within budget.'
    },
    {
      name: 'Amit Kumar',
      title: 'Property Developer',
      image: 'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      rating: 5,
      text: 'Working with this architectural firm has been a game-changer for our development projects. Their sustainable design solutions and modern aesthetic have made our properties highly sought after in the market.'
    }
  ];

  return (
    <section className="py-20 bg-luxury-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-cormorant text-4xl font-bold text-luxury-charcoal mb-6">What Our Clients Say</h2>
          <p className="font-poppins text-xl text-luxury-charcoal max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className="absolute top-4 right-4 text-luxury-gold">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-luxury-gold/20 flex items-center justify-center mr-4">
                  <svg 
                    className="w-8 h-8 text-luxury-gold" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-cormorant text-lg font-bold text-luxury-charcoal">{testimonial.name}</h4>
                  <p className="font-poppins text-luxury-charcoal/80">{testimonial.title}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-luxury-gold text-luxury-gold" />
                ))}
              </div>

              <p className="font-cormorant text-luxury-charcoal leading-relaxed italic text-lg">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;