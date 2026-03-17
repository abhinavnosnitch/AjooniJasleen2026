import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calendar,
  MapPin,
  Clock,
  Palette,
  Hammer,
  Music,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import SectionDivider from '../components/SectionDivider';

const ShiddatPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0009T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0041T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0051T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0110T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0120T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0128T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0150T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0168T01%20(2).JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0168T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0179T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0206T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0236T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0254T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0325T01.JPG', title: 'Shiddat Event' },
    { image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/ShiddatSlide/C0364T01.JPG', title: 'Shiddat Event' }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const slideTimer = setInterval(nextSlide, 5000);
    return () => {
      clearInterval(slideTimer);
    };
  }, []);

  const eventHighlights = [
    { title: 'Showcase', description: 'Curated selection of artifacts created by local artisans and visionaries.', icon: <Palette className="w-6 h-6" /> },
    { title: 'Workshop Pavilion', description: 'Interactive live demonstrations pushing the boundaries of traditional craft.', icon: <Hammer className="w-6 h-6" /> },
    { title: 'Open-Air performances', description: 'Cultural and literary performances under the Mohali sky.', icon: <Music className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-luxury-ivory overflow-x-hidden w-full">
      {/* Hero Section - High-Impact Architectural Reveal */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "linear" }}
        >
          <div 
            className="w-full h-full bg-cover bg-center grayscale-[30%]" 
            style={{backgroundImage: 'url(https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Shiddat/Background/DSC_7357_copy_1512x1006.jpg)'}}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
          >
            <span className="font-poppins text-[10px] md:text-xs tracking-[0.6em] text-luxury-gold uppercase block mb-8 font-medium">
              An Initiative by Ar. Jasleen
            </span>
            
            <h1 className="font-cormorant italic text-8xl md:text-[12rem] font-light text-white leading-none mb-4 lowercase">
              Shiddat
            </h1>

            <div className="flex items-center justify-center space-x-6 mb-16">
              <div className="h-[1px] w-12 bg-white/40" />
              <h2 className="font-cormorant text-2xl md:text-3xl text-white tracking-[0.1em] font-light uppercase italic">
                Art <span className="not-italic font-bold text-luxury-gold">Exhibit</span> 3.0
              </h2>
              <div className="h-[1px] w-12 bg-white/40" />
            </div>

            {/* Premium Date Badge */}
            <div className="relative inline-block px-12 py-5 border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden group">
              <motion.div 
                className="absolute inset-0 bg-luxury-gold -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"
                style={{ zIndex: -1 }}
              />
              <p className="font-cormorant text-2xl text-white group-hover:text-black transition-colors duration-500 tracking-[0.2em]">
                20 MARCH — 22 MARCH <span className="text-sm opacity-60">2026</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div 
          className="absolute bottom-12 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="font-poppins text-[9px] uppercase tracking-[0.4em] text-white/40 mb-4 italic">Begin Discovery</span>
          <div className="w-px h-16 bg-gradient-to-b from-luxury-gold to-transparent" />
        </motion.div>
      </section>

      {/* Highlights - Editorial Numbered List */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
            {eventHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <div className="absolute -top-12 -left-4 font-cormorant text-8xl italic font-light text-luxury-gold/[0.03] pointer-events-none group-hover:text-luxury-gold/[0.08] transition-all duration-1000">
                  {index + 1}
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-luxury-ivory rounded-full flex items-center justify-center text-luxury-gold mb-8 group-hover:bg-luxury-gold group-hover:text-white transition-all duration-700 shadow-sm shadow-luxury-gold/10">
                    {highlight.icon}
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-luxury-charcoal mb-4 uppercase tracking-widest">{highlight.title}</h3>
                  <div className="w-10 h-px bg-luxury-gold mb-6 group-hover:w-full transition-all duration-1000 ease-out" />
                  <p className="font-poppins text-sm leading-[2] text-luxury-charcoal/60 group-hover:text-luxury-charcoal/80 transition-colors duration-500 italic">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Exhibition Space - Integrated Details & Gallery */}
      <section className="py-32 bg-luxury-ivory relative overflow-hidden">
        {/* Decorative architectural circle */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] border border-luxury-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Event Manifesto & Logistics */}
            <div className="lg:col-span-5">
              <span className="font-poppins text-[10px] tracking-[0.5em] text-luxury-gold uppercase block mb-6">The Exhibition Space</span>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light text-luxury-charcoal mb-12 leading-tight">
                Craftsmanship <br />
                <span className="italic italic-gold italic">in Dialogue</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { icon: <Clock />, label: 'Exhibition Hours', value: '11:00 AM — 07:00 PM' },
                  { icon: <MapPin />, label: 'Venue Location', value: 'Aadh Towers, E37, Phase-8, Mohali' },
                  { icon: <Calendar />, label: 'Exhibition Dates', value: '20th to 22nd March 2026' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    className="flex items-start space-x-6 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center border border-luxury-gold/20 text-luxury-gold rounded-full group-hover:bg-luxury-gold group-hover:text-white transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-poppins text-[10px] uppercase tracking-[0.2em] text-luxury-charcoal/40 mb-1">{item.label}</h4>
                      <p className="font-cormorant text-xl text-luxury-charcoal tracking-wide">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Immersive Slideshow */}
            <div className="lg:col-span-7 relative group">
              <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl relative">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={slides[currentSlide].image}
                    alt="Exhibition View"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-black/5" />
                
                {/* Navigation Overlay */}
                <div className="absolute bottom-8 right-8 flex space-x-4">
                  <button onClick={prevSlide} className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-luxury-gold transition-all duration-500">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextSlide} className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-luxury-gold transition-all duration-500">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
              {/* Image Counter */}
              <div className="absolute -bottom-8 left-0 font-poppins text-[10px] tracking-[0.4em] text-luxury-charcoal/40 uppercase">
                Image {currentSlide + 1} <span className="mx-2">/</span> {slides.length}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Shiddat - Manifesto Style */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-cormorant text-4xl md:text-5xl font-light text-luxury-charcoal mb-12 italic tracking-wide">
              The Manifesto of Shiddat
            </h2>
            <p className="font-poppins text-lg md:text-xl text-luxury-charcoal/70 leading-[2] font-light italic mb-16">
              "Driven by a belief in the power of collaboration, Ar. Jasleen founded Shiddat in 2024. It is her personal initiative to create a dedicated platform for professionals from the architecture, construction, and art communities to connect, share knowledge, and inspire one another."
            </p>
            <div className="w-[1px] h-20 bg-luxury-gold/40 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Vertical Refinement */}
      <section className="py-32 bg-luxury-ivory relative">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-24">
            <span className="font-poppins text-[10px] tracking-[0.5em] text-luxury-gold uppercase block mb-4">Journey of Intent</span>
            <h2 className="font-cormorant text-5xl font-light text-luxury-charcoal uppercase tracking-widest">The Evolution</h2>
          </div>

          <div className="relative">
            {/* Central line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-luxury-gold/20 hidden md:block" />
            
            <div className="space-y-32">
              {[
                { year: '2024', title: 'Shiddat 1.0', desc: 'The Genesis. A flagship gathering for the North Indian creative community.' },
                { year: '2025', title: 'Shiddat 2.0', desc: 'Scaling the vision. Expanding reach while embarking on landmark architecture.' },
                { year: '2026', title: 'Shiddat 3.0', desc: 'The Immersive Exhibit. A celebration of material, form, and cultural dialogue.' }
              ].map((milestone, idx) => (
                <motion.div 
                  key={idx}
                  className={`relative flex items-center justify-center md:justify-between flex-col md:flex-row ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-full md:w-[45%] bg-white p-12 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] border border-luxury-gold/10 group hover:border-luxury-gold/40 transition-all duration-700">
                    <span className="font-cormorant text-luxury-gold text-sm tracking-widest font-bold mb-4 block uppercase italic">Edition {idx + 1}.0</span>
                    <h3 className="font-cormorant text-3xl font-light text-luxury-charcoal mb-6 uppercase tracking-wider">{milestone.title}</h3>
                    <p className="font-poppins text-sm text-luxury-charcoal/60 leading-relaxed font-light">{milestone.desc}</p>
                  </div>

                  {/* Marker */}
                  <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:flex w-16 h-16 rounded-full bg-[#1A1A1A] items-center justify-center text-white border-[6px] border-luxury-ivory z-10 shadow-xl group-hover:bg-luxury-gold transition-colors duration-500">
                    <span className="font-cormorant text-xs font-bold">{milestone.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Closing Quote */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <h2 className="font-cormorant text-3xl md:text-5xl text-luxury-charcoal/80 italic font-light leading-relaxed">
              "Building connections, celebrating craftsmanship, and strengthening the creative community — one event at a time."
            </h2>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ShiddatPage;
