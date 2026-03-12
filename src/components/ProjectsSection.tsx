import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  // Display only 3 featured projects for a focused, premium presentation
  const featuredProjects = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'A contemporary villa featuring clean lines, large windows, and sustainable design elements.',
      location: 'Chandigarh, Punjab'
    },
    {
      id: 2,
      title: 'Corporate Headquarters',
      category: 'Commercial',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Innovative office space designed to promote collaboration and productivity.',
      location: 'Mohali, Punjab'
    },
    {
      id: 3,
      title: 'Penthouse Interior',
      category: 'Interior Design',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Luxurious penthouse interior with custom furnishing and premium finishes.',
      location: 'Sector 17, Chandigarh'
    }
  ];

  return (
    <div className="bg-luxury-ivory overflow-x-hidden w-full">
      {/* Hero Section */}
      <section className="py-20 overflow-x-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-charcoal mb-6">See what we've built</h1>
          <p className="font-poppins italic text-lg sm:text-xl text-luxury-charcoal max-w-4xl mx-auto leading-relaxed">
            Discover our latest architectural achievements that showcase our commitment to excellence, innovation, and timeless design.
          </p>
        </motion.div>
      </section>

      {/* Premium Projects Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 lg:columns-3 gap-8 lg:gap-10 space-y-8 lg:space-y-10">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group cursor-pointer break-inside-avoid mb-8 lg:mb-10"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.15
                }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ease-out group-hover:shadow-2xl group-hover:-translate-y-2 group-hover:scale-[1.02]">

                  <div className="relative overflow-hidden">
                    <div className="relative aspect-[4/3]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        loading={index === 0 ? "eager" : "lazy"}
                      />
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500 ease-out" />

                    <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/10 via-transparent to-luxury-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-100">
                      <span className="font-poppins text-xs font-medium text-luxury-charcoal uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-200">
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-4 transform scale-75 group-hover:scale-100 transition-transform duration-500 ease-out">
                        <ExternalLink className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <h3 className="font-cormorant text-xl lg:text-2xl font-bold text-luxury-charcoal mb-3 group-hover:text-luxury-gold transition-colors duration-300 ease-out">
                      {project.title}
                    </h3>

                    <p className="font-poppins text-luxury-charcoal/80 text-sm lg:text-base leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center text-luxury-charcoal/60 mb-4">
                      <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-poppins text-sm">{project.location}</span>
                    </div>

                    <div className="flex items-center text-luxury-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-400 ease-out delay-100">
                      <span className="font-poppins text-sm font-medium tracking-wide">View Project</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 ease-out" />
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out origin-left" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subtle "View All" Button - Understated and Secondary */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          >
            <button
              onClick={(e) => e.preventDefault()}
              className="group inline-flex items-center font-poppins text-sm text-luxury-charcoal/60 hover:text-luxury-charcoal border border-luxury-charcoal/20 hover:border-luxury-charcoal/40 px-6 py-3 rounded-full transition-all duration-400 ease-out hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-luxury-gold/20 focus:ring-offset-2"
              aria-label="View all projects in our portfolio"
            >
              <span className="tracking-wide">View All Projects</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300 ease-out opacity-60 group-hover:opacity-100" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsSection;