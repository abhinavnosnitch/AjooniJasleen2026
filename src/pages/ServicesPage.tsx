import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import { Home, Briefcase, RefreshCw, Leaf, Hammer, Camera, Building } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const services = [
  {
    title: 'Architectural Design',
    description: 'We create architecture that feels inevitable — shaped by context, light, and intent. From private residences to commercial developments, our designs are timeless, functional, and deeply responsive to the way people live and interact.',
    icon: <Building className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Interior Design',
    description: 'Every space tells a story. We curate interiors that reflect identity — harmonizing materials, texture, and light to create environments that feel effortless, elegant, and complete.',
    icon: <Home className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Residential Architecture',
    description: 'Homes designed to breathe. Each residence balances comfort, clarity, and individuality — crafted not for trends, but for the lives lived within them.',
    icon: <Home className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Commercial & Hospitality Design',
    description: 'We design spaces that move people and elevate brands — from contemporary offices to boutique restaurants and hotels. Every project is an experience, where design meets function and emotion meets efficiency.',
    icon: <Briefcase className="w-8 h-8 text- luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Renovation & Adaptive Reuse',
    description: 'We reimagine existing spaces with sensitivity and restraint — preserving character while introducing new purpose. Our goal: renewal without compromise.',
    icon: <RefreshCw className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Landscape & Urban Design',
    description: 'Design extends beyond walls. We craft outdoor spaces and urban environments that nurture connection, calm, and sustainability — architecture in dialogue with nature.',
    icon: <Leaf className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: '3D Visualization & Virtual Walkthroughs',
    description: 'Experience your project before it\'s built. Our immersive 3D visualizations and virtual walkthroughs allow you to explore every space, every finish, and every detail in stunning detail, ensuring your vision comes to life exactly as imagined.',
    icon: <Camera className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  },
  {
    title: 'Project Management & Execution',
    description: 'From sketch to completion, every phase is guided with precision. Our team ensures quality, timelines, and seamless delivery — turning vision into reality with quiet assurance.',
    icon: <Hammer className="w-8 h-8 text-luxury-gold" strokeWidth={1.5} />
  }
];

const ServicesPage = () => {
  const revealRef = useScrollReveal();

  const { elementRef: headerRef, isIntersecting: isHeaderVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });
  const { elementRef: introRef, isIntersecting: isIntroVisible } = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 lg:pt-40 pb-24">

        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-light text-luxury-charcoal mb-6 tracking-wide">
            OUR SERVICES
          </h1>
          <p className="font-poppins italic text-xl sm:text-2xl text-luxury-charcoal/70 font-light tracking-wide">
            Design That Connects. Craft That Endures.
          </p>
        </motion.div>

        <motion.div
          ref={introRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isIntroVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="max-w-4xl mx-auto mb-32"
        >
          <p className="font-poppins text-lg sm:text-lg leading-relaxed text-luxury-charcoal/80 text-center">
            At Ajooni Jasleen Architects, we design spaces that go beyond beauty, places that feel personal, purposeful, and alive.
          </p>
        </motion.div>

        <div ref={revealRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="reveal-card group flex flex-col justify-between bg-luxury-ivory/30 p-8 lg:p-12 border border-transparent hover:border-luxury-gold/20 transition-all duration-700 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] relative overflow-hidden"
              >
                {/* Architectural Numbering */}
                <div className="absolute top-8 right-8 font-cormorant text-6xl italic font-light text-luxury-gold/5 group-hover:text-luxury-gold/10 transition-colors duration-500 pointer-events-none">
                  {(index + 1).toString().padStart(2, '0')}
                </div>

                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-luxury-gold/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out" />
                
                <div className="relative z-10">
                  <motion.div
                    className="mb-10"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm ring-1 ring-luxury-gold/10 group-hover:ring-luxury-gold/30 transition-all duration-500">
                      {service.icon}
                    </div>
                  </motion.div>

                  <h2 className="font-cormorant text-lg sm:text-xl md:text-2xl font-semibold text-luxury-charcoal mb-5 tracking-[0.05em] group-hover:text-luxury-gold transition-colors duration-500 ease-out uppercase">
                    {service.title}
                  </h2>
                  
                  <div className="w-12 h-[1px] bg-luxury-gold/30 mb-6 group-hover:w-24 transition-all duration-700" />

                  <p className="font-poppins text-[13px] sm:text-sm leading-[1.8] text-luxury-charcoal/60 group-hover:text-luxury-charcoal/80 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="mt-32 text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/projects"
              className="font-poppins inline-flex items-center justify-center px-12 py-5 text-sm tracking-widest font-medium uppercase bg-luxury-charcoal text-white hover:bg-luxury-gold transition-all duration-500 ease-out w-full sm:w-auto text-center shadow-lg hover:shadow-xl"
            >
              Explore Our Portfolio
            </Link>
            <Link
              to="/#contact"
              className="font-poppins inline-flex items-center justify-center px-12 py-5 text-sm tracking-widest font-medium uppercase border border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white transition-all duration-500 ease-out w-full sm:w-auto text-center"
            >
              Begin Your Project
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default ServicesPage;
