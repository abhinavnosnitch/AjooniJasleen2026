import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage';
import BackToHomeButton from '../components/BackToHomeButton';

const RedbricksOfficePage = () => {
  const revealRef = useScrollReveal();

  const images = [
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0002.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0004.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0005.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0006.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0007.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0008.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0009.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0010.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0011.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0012.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0013.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0015.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0016.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0017.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0018.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0019.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0021.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0022.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0023.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0024.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0026.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0027.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0028.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0029.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0030.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0032.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0033.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0035.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0036.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0037.webp',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/redbricks/REDBRICKS,%20KHARAR%20(23-10-24)_page-0038.webp'
  ];

  return (
    <div className="min-h-screen bg-luxury-ivory overflow-x-hidden w-full">
      <BackToHomeButton />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-cormorant text-5xl sm:text-6xl lg:text-7xl font-bold text-luxury-charcoal mb-4">
              Redbricks Office
            </h1>
            <p className="font-cormorant text-2xl sm:text-3xl text-luxury-charcoal/70 italic font-light">
              Where Innovation Meets Design
            </p>
          </motion.div>

          <div ref={revealRef} className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="reveal-card group relative overflow-hidden rounded-lg shadow-lg break-inside-avoid mb-6"
              >
                <div className="relative w-full">
                  <LazyImage
                    src={image}
                    alt={`Redbricks Office - Image ${index + 1}`}
                    maintainAspectRatio={true}
                    objectFit="contain"
                  />
                  <div className="absolute inset-0 bg-luxury-charcoal/0 group-hover:bg-luxury-charcoal/10 transition-all duration-500 ease-out" />
                  <div className="absolute inset-0 border-2 border-luxury-gold/0 group-hover:border-luxury-gold/40 transition-all duration-500 ease-out m-4 rounded-lg" />
                </div>
              </div>
            ))}
          </div>

          <div className="reveal-card mt-20 text-center max-w-3xl mx-auto">
            <p className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic leading-relaxed">
              A modern office space in Kharar that redefines productivity through thoughtful design and innovative workspace solutions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RedbricksOfficePage;
