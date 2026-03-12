import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
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

  return (
    <section className="py-20 bg-luxury-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-4">
            See what we've built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
