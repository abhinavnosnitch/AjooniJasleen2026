
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LazyImage from '../components/LazyImage';

import useScrollReveal from '../hooks/useScrollReveal';
const AllProjectsPage = () => {
  const navigate = useNavigate();
  const gridRef = useScrollReveal();

  const projects = [
    {
      id: 1,
      name: 'Antler Woods',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Antler%20Woods/WhatsApp%20Image%202025-09-27%20at%2015.34.16_3224fc1e.jpg',
      link: '/projects/antler-woods'
    },
    {
      id: 2,
      name: 'Arcadia',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Arcadia/IMG-20251027-WA0053.jpg',
      link: '/projects/arcadia'
    },
    {
      id: 3,
      name: 'Archmere',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB12.JPG_copy_1602x2400.jpg',
      link: '/projects/archmere'
    },
    {
      id: 4,
      name: 'Basha Kabob',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/BashaKabob/WhatsApp%20Image%202025-10-11%20at%204.06.37%20PM.jpeg',
      link: '/projects/basha-kabob'
    },
    {
      id: 5,
      name: 'Bharat Residence',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/BharatResidence/Screenshot_20251017_121854_Drive.jpg',
      link: '/projects/bharat-residency'
    },
    {
      id: 6,
      name: 'Car Dynamics',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/CarDynamics/WhatsApp%20Image%202025-10-11%20at%204.11.41%20PM%20(1).jpeg',
      link: '/projects/car-dynamics'
    },
    {
      id: 7,
      name: 'Chennai Maratha',
      category: 'Zirakpur',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/CMZirak/CMZ(5of1)_copy_5918x4000.jpg',
      link: '/projects/chennai-maratha'
    },
    {
      id: 8,
      name: 'Chennai Maratha',
      category: 'Phase 5',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/ChennaiMPhase5/1760775664291_copy_4000x6000.jpg',
      link: '/projects/chennai-maratha-phase5'
    },
    {
      id: 9,
      name: 'Faggu HomeStay',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Faggu/2.webp',
      link: '/projects/faggu-homestay'
    },
    {
      id: 10,
      name: 'Healthy Earth',
      category: 'Ambala',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/HealthyEarthAmbala/9.webp',
      link: '/projects/healthy-earth-ambala'
    },
    {
      id: 11,
      name: 'Healthy Earth',
      category: 'Phase 10',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/HealthyEarthPhase10/001%20(1).jpg',
      link: '/projects/healthy-earth-phase10'
    },
    {
      id: 12,
      name: 'Healthy Earth',
      category: 'Kharkhara',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/HealthyEarthK/001.jpg',
      link: '/projects/healthy-earth-kharkhara'
    },
    {
      id: 13,
      name: 'Healthy Earth',
      category: 'Moga',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Healthy%20Earth%20Moga/2.webp',
      link: '/projects/healthy-earth-moga'
    },
    {
      id: 14,
      name: 'Kasauli Cottage',
      category: 'Kasauli',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Kasauli%20cottage/WhatsApp%20Image%202024-09-10%20at%2015.52.09.jpeg',
      link: '/projects/kasauli-cottage'
    },
    {
      id: 15,
      name: 'Kohzeen',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Kohzeen/IMG-20251017-WA0011.jpg',
      link: '/projects/kohzeen'
    },
    {
      id: 16,
      name: 'Pathankot Hotel',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.13%20PM.jpeg',
      link: '/projects/pathankot-hotel'
    },
    {
      id: 17,
      name: 'Saidpur Residence',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/SaidpurResidence/IMG_9211_copy_1212x1516.jpg',
      link: '/projects/saidpur-residence'
    },
    {
      id: 18,
      name: 'Interiors Contemporary',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/InteriorsContemporary/1760764315279_copy_6720x4480.jpg',
      link: '/projects/interiors-contemporary'
    },
    {
      id: 19,
      name: 'Jade Restaurant',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764721657_copy_4000x6000.jpg',
      link: '/projects/jade-restaurant'
    },
    {
      id: 20,
      name: 'Lapinoz',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Lapinoz/1760764935276_copy_5908x3939.jpg',
      link: '/projects/lapinoz'
    },
    {
      id: 21,
      name: 'AeroCity',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/AeroCity/Enscape_2025-09-26-19-28-20.webp',
      link: '/projects/aerocity'
    },
    {
      id: 22,
      name: 'Medallion',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/medallion/Medallion%203D%20Final%20_page-0002.jpg',
      link: '/projects/medallion'
    },
    {
      id: 23,
      name: 'Nahaan',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/nahaan/1.webp',
      link: '/projects/nahaan'
    },
    {
      id: 24,
      name: 'Nirwana Heights',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/nirmana-heights/Kids%20room%20rework.jpg',
      link: '/projects/nirwana-heights'
    },
    {
      id: 25,
      name: 'Redbricks Office',
      category: 'Kharar',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0006.webp',
      link: '/projects/redbricks-office'
    },
    {
      id: 26,
      name: 'Pub Patiala',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/pub-patiala/Screenshot%20(3).webp',
      link: '/projects/pub-patiala'
    },
    {
      id: 27,
      name: 'Punjabi Chullah',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/punjabi-chullah/WhatsApp%20Image%202025-10-11%20at%204.43.53%20PM%20(1).jpeg',
      link: '/projects/punjabi-chullah'
    },
    {
      id: 28,
      name: 'Rama Store',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/rama-store/001.jpg',
      link: '/projects/rama-store'
    },
    {
      id: 29,
      name: 'Beauty And Spa Salon',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/beauty-and-spa/img123.jpg',
      link: '/projects/beauty-and-spa'
    },
    {
      id: 30,
      name: 'Pulse Bar',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/pulse-bar/IMG-20250802-WA0011.jpg',
      link: '/projects/pulse-bar'
    },
    {
      id: 31,
      name: 'Fitness By Soma',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.14.jpeg',
      link: '/projects/fitness-by-soma'
    },
    {
      id: 32,
      name: 'Rajshree Hotel',
      category: '',
      coverImage: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/rajshree-hotel/1%20RSO_1_11zon.webp',
      link: '/projects/rajshree-hotel'
    }
  ];

  const handleProjectClick = (link: string) => {
    if (link) {
      navigate(link);
    }
  };

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
            All Projects
          </h1>
          <motion.p
            className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Crafting Spaces That Inspire.
          </motion.p>
        </motion.div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={gridRef} className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="reveal-card group cursor-pointer opacity-0 translate-y-6 transition-all duration-500 ease-out"
                onClick={() => handleProjectClick(project.link)}
              >
                <div className="relative overflow-hidden rounded-lg bg-luxury-ivory shadow-lg will-change-transform transition-shadow duration-500 ease-out group-hover:shadow-2xl">
                  {project.coverImage ? (
                    <>
                      <div className="relative">
                        <LazyImage
                          src={project.coverImage}
                          alt={project.name}
                          maintainAspectRatio={true}
                          objectFit="cover"
                          className="transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-luxury-charcoal/20 to-transparent" />
                      <div className="absolute inset-0 flex items-end justify-start p-6">
                        <div className="text-left">
                          <h3 className="font-cormorant text-3xl font-bold text-white mb-2">
                            {project.name}
                          </h3>
                          <p className="font-poppins text-sm text-white/80 uppercase tracking-wider">
                            {project.category}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="aspect-[4/3] flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="font-cormorant text-3xl font-bold text-luxury-charcoal mb-2">
                          {project.name}
                        </h3>
                        <p className="font-poppins text-sm text-luxury-charcoal/60 uppercase tracking-wider">
                          {project.category}
                        </p>
                      </div>
                    </div>
                  )}

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

export default AllProjectsPage;
