import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const InteriorDesignProjectsPage = () => {
  const revealRef = useScrollReveal();
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: 'Interiors Contemporary', path: '/projects/interiors-contemporary', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/InteriorsContemporary/1760764315279_copy_6720x4480.jpg' }
  ];

  return (
    <div className="min-h-screen bg-luxury-ivory overflow-x-hidden w-full">
      <section className="pt-20 pb-16 bg-luxury-ivory overflow-x-hidden">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl font-bold text-luxury-charcoal mb-6">
            Interior Design Projects
          </h1>
          <motion.p
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Every Space Tells a Story.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={revealRef} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="reveal-card group cursor-pointer break-inside-avoid mb-8"
                onClick={() => navigate(project.path)}
              >
                <div className="relative overflow-hidden rounded-lg bg-luxury-ivory shadow-lg will-change-transform transition-shadow duration-500 ease-out group-hover:shadow-2xl">
                  <div className="relative">
                    <LazyImage
                      src={project.image}
                      alt={project.name}
                      maintainAspectRatio={true}
                      objectFit="cover"
                      className="transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-charcoal/20 to-transparent" />
                  <div className="absolute inset-0 flex items-end justify-start p-6">
                    <div className="text-left">
                      <h3 className="font-cormorant text-2xl font-bold text-white mb-2">
                        {project.name}
                      </h3>
                      <p className="font-poppins text-sm text-white/80 uppercase tracking-wider">
                        Interior Design
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-luxury-gold to-luxury-gold/60 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InteriorDesignProjectsPage;
