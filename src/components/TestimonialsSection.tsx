import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };



  return (
    <section className="py-20 bg-luxury-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-cormorant text-4xl font-bold text-luxury-gold mb-6">What Our Clients Say</h2>
          <p className="font-poppins italic text-xl text-luxury-charcoal max-w-3xl mx-auto">
            Don't just take our word for it.
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              <div className="absolute top-4 right-4 text-luxury-gold opacity-10">
                <Quote className="w-12 h-12" />
              </div>
              <div className="flex flex-col h-full justify-center">
                <p className="font-cormorant text-luxury-charcoal leading-relaxed italic text-lg mb-4">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-cormorant text-lg font-bold text-luxury-gold">{testimonial.name}</h4>
                  <p className="font-poppins text-xs tracking-widest uppercase opacity-50">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="lg:hidden relative">
          <div className="flex justify-center items-center min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonialIndex} 
                className="bg-white p-8 rounded-2xl shadow-xl relative w-[85vw]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex flex-col h-full justify-center text-center">
                  <p className="font-cormorant text-luxury-charcoal leading-relaxed italic text-xl mb-6">
                    "{testimonials[currentTestimonialIndex].text}"
                  </p>
                  <div>
                    <h4 className="font-cormorant text-xl font-bold text-luxury-gold">{testimonials[currentTestimonialIndex].name}</h4>
                    <p className="font-poppins text-[10px] tracking-widest uppercase opacity-40">{testimonials[currentTestimonialIndex].title}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-5">
                  <Quote className="w-12 h-12" />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevTestimonial}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextTestimonial}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;