import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import LazyImage from './LazyImage';

const FeaturedProjectsSection = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      id: 1,
      name: 'Antler Woods',
      category: 'Residential',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Antler%20Woods/WhatsApp%20Image%202025-09-27%20at%2015.34.16_3224fc1e.jpg',
      link: '/projects/antler-woods'
    },
    {
      id: 2,
      name: 'Saidpur Residence',
      category: 'Residential',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/SaidpurResidence/IMG_9211_copy_1212x1516.jpg',
      link: '/projects/saidpur-residence'
    },
    {
      id: 3,
      name: 'Kohzeen',
      category: 'Commercial',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Kohzeen/IMG-20251017-WA0011.jpg',
      link: '/projects/kohzeen'
    }
  ];

  const handleProjectClick = (link: string) => {
    if (link) {
      navigate(link);
    }
  };

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };



  return (
    <section className="py-20 bg-luxury-ivory overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-gold mb-4">
            See what we've built
          </h2>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => handleProjectClick(project.link)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <LazyImage
                  src={project.coverImage}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-cormorant text-2xl font-bold text-white">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View Slider */}
        <div className="lg:hidden relative">
          <div className="flex justify-center items-center min-h-[400px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProjectIndex}
                className="group relative overflow-hidden rounded-xl shadow-2xl cursor-pointer w-[85vw]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                onClick={() => handleProjectClick(featuredProjects[currentProjectIndex].link)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <LazyImage
                    src={featuredProjects[currentProjectIndex].coverImage}
                    alt={featuredProjects[currentProjectIndex].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                  <h3 className="font-cormorant text-3xl font-bold text-white drop-shadow-lg">
                    {featuredProjects[currentProjectIndex].name}
                  </h3>
                  <p className="font-poppins text-sm uppercase tracking-widest text-white/90 mt-2 drop-shadow-md">
                    {featuredProjects[currentProjectIndex].category}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevProject}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={handleNextProject}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 p-4 rounded-full bg-white/30 backdrop-blur-sm text-luxury-gold border border-luxury-gold/10 transition-all duration-300 ease-out hover:bg-luxury-gold/20 hover:scale-105"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center justify-center bg-luxury-gold text-white py-3 px-8 text-base font-semibold tracking-wide shadow-lg hover:bg-luxury-gold/90 transition-all duration-300 font-poppins"
          >
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
