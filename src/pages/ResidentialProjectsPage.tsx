import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const ResidentialProjectsPage = () => {
  const revealRef = useScrollReveal();
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: 'Antler Woods', path: '/projects/antler-woods', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Antler%20Woods/WhatsApp%20Image%202025-09-27%20at%2015.34.16_3224fc1e.jpg' },
    { id: 2, name: 'Saidpur Residence', path: '/projects/saidpur-residence', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/SaidpurResidence/IMG_9211_copy_1212x1516.jpg' },
    { id: 3, name: 'Arcadia', path: '/projects/arcadia', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Arcadia/0X1A1605_copy_6720x4480.jpg' },
    { id: 4, name: 'Archmere', path: '/projects/archmere', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB12.JPG_copy_1602x2400.jpg' },
    { id: 5, name: 'Bharat Residence', path: '/projects/bharat-residency', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/BharatResidence/Screenshot_20251017_121854_Drive.jpg' },
    { id: 6, name: 'Interiors Contemporary', path: '/projects/interiors-contemporary', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/InteriorsContemporary/1760764315279_copy_6720x4480.jpg' },
    { id: 7, name: 'Kasauli Cottage', path: '/projects/kasauli-cottage', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Kasauli%20cottage/WhatsApp%20Image%202024-09-10%20at%2015.52.09.jpeg' },
    { id: 8, name: 'AeroCity', path: '/projects/aerocity', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/AeroCity/Enscape_2025-09-26-19-28-20.webp' },
    { id: 9, name: 'Medallion', path: '/projects/medallion', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/medallion/Medallion%203D%20Final%20_page-0002.jpg' },
    { id: 10, name: 'Nahaan', path: '/projects/nahaan', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/nahaan/1.webp' },
    { id: 11, name: 'Nirwana Heights', path: '/projects/nirwana-heights', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/nirmana-heights/Kids%20room%20rework.jpg' }
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
            Residential Projects
          </h1>
          <motion.p
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Homes Designed to Breathe.
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
                        Residential
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

export default ResidentialProjectsPage;
