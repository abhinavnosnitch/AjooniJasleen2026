import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

const CommercialProjectsPage = () => {
  const revealRef = useScrollReveal();
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: 'Chennai Maratha', path: '/projects/chennai-maratha', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/CMZirak/CMZ(5of1)_copy_5918x4000.jpg' },
    { id: 2, name: 'Chennai Maratha Phase 5', path: '/projects/chennai-maratha-phase5', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/ChennaiMPhase5/1760775664291_copy_4000x6000.jpg' },
    { id: 3, name: 'Healthy Earth Ambala', path: '/projects/healthy-earth-ambala', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/HealthyEarthAmbala/9.webp' },
    { id: 4, name: 'Healthy Earth Kharkhara', path: '/projects/healthy-earth-kharkhara', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/HealthyEarthK/001.jpg' },
    { id: 5, name: 'Healthy Earth Moga', path: '/projects/healthy-earth-moga', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Healthy%20Earth%20Moga/2.webp' },
    { id: 6, name: 'Healthy Earth Phase 10', path: '/projects/healthy-earth-phase10', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/HealthyEarthPhase10/001%20(1).jpg' },
    { id: 7, name: 'Jade Restaurant', path: '/projects/jade-restaurant', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764721657_copy_4000x6000.jpg' },
    { id: 8, name: 'Kohzeen', path: '/projects/kohzeen', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Kohzeen/IMG-20251017-WA0005.jpg' },
    { id: 9, name: 'Lapinoz', path: '/projects/lapinoz', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Lapinoz/1760764935276_copy_5908x3939.jpg' },
    { id: 10, name: 'Pathankot Hotel', path: '/projects/pathankot-hotel', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.13%20PM.jpeg' },
    { id: 11, name: 'Redbricks Office', path: '/projects/redbricks-office', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0006.webp' },
    { id: 12, name: 'Pub Patiala', path: '/projects/pub-patiala', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/pub-patiala/Screenshot%20(3).webp' },
    { id: 13, name: 'Punjabi Chullah', path: '/projects/punjabi-chullah', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/punjabi-chullah/WhatsApp%20Image%202025-10-11%20at%204.43.53%20PM%20(1).jpeg' },
    { id: 14, name: 'Rama Store', path: '/projects/rama-store', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/rama-store/001.jpg' },
    { id: 15, name: 'Beauty And Spa Salon', path: '/projects/beauty-and-spa', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/beauty-and-spa/img123.jpg' },
    { id: 16, name: 'Pulse Bar', path: '/projects/pulse-bar', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/pulse-bar/IMG-20250802-WA0011.jpg' },
    { id: 17, name: 'Fitness By Soma', path: '/projects/fitness-by-soma', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.14.jpeg' },
    { id: 18, name: 'Rajshree Hotel', path: '/projects/rajshree-hotel', image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/rajshree-hotel/1%20RSO_1_11zon.webp' }
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
            Commercial Projects
          </h1>
          <motion.p
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Spaces That Move People.
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
                        Commercial
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

export default CommercialProjectsPage;
