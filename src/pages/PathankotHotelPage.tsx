import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage';
import BackToHomeButton from '../components/BackToHomeButton';

const PathankotHotelPage = () => {
  const revealRef = useScrollReveal();

  const images = [
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.13%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.13%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.12%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.12%20PM%20(2).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.12%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.11%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.10%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.10%20PM%20(2).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.10%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.09%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.24.09%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.40%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.39%20PM%20(2).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.39%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.40%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.37%20PM.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.39%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.37%20PM%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/PathankotHotel/WhatsApp%20Image%202025-07-10%20at%209.23.37%20PM%20(2).jpeg'
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
              Pathankot Hotel
            </h1>
            <p className="font-cormorant text-2xl sm:text-3xl text-luxury-charcoal/70 italic font-light">
              -
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
                    alt={`Pathankot Hotel - Image ${index + 1}`}
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
              Elevated hospitality design where regional character and modern comfort converge for an exceptional guest experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PathankotHotelPage;
