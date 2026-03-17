import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage';
import BackToHomeButton from '../components/BackToHomeButton';

const FitnessBySomaPage = () => {
  const revealRef = useScrollReveal();

  const images = [
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.12.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.14.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.17.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.22.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.23%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.23%20(2).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.23.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.24%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.24%20(2).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.24.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.25%20(1).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.25%20(2).jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.25.jpeg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/fitness-by-soma/WhatsApp%20Image%202025-11-25%20at%2018.16.26.jpeg'
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
              Fitness By Soma
            </h1>
            <p className="font-cormorant text-2xl sm:text-3xl text-luxury-charcoal/70 italic font-light">
              Strength in Design
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
                    alt={`Fitness By Soma - Image ${index + 1}`}
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
              A state-of-the-art fitness center where motivating design inspires peak performance and wellness excellence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FitnessBySomaPage;
