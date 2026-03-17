import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage';
import BackToHomeButton from '../components/BackToHomeButton';

const ArchmerePage = () => {
  const revealRef = useScrollReveal();

  const images = [
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1094(1)_copy_6720x4480.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1098_copy_6720x4480.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1124(1)_copy_6720x4480.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1131_copy_6720x4480.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1132_copy_5544x3729.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1147_copy_4480x6720.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1150_copy_6720x4480.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1152_copy_4480x4964.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1157(1)_copy_4480x5887.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1165_copy_4480x5373.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1197(1)_copy_6720x4480.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/0X1A1210(1)_copy_3926x3685.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB1_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB10_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB11_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB12.JPG_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB13.JPG(1)_copy_3596x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB15.JPG_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB17.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB18.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB19.JPG_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB2_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB20.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB21.JPG_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB22_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB22.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB23.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB24.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB25.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB26_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB27_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB28_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB3(1)_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB30_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB31_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB34_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB35.JPG_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB4_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB5_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB6_copy_1602x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB7(2)_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB8_copy_3600x2399.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/AJB9_copy_3595x2400.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/DJI_0936(1)_copy_5472x3078.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/DJI_0939_copy_5472x3078.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/DJI_0943(1)_copy_5472x3078.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/DJI_0946_copy_5472x3078.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/Archmere/DJI_0974(1)_copy_5472x3078.jpg'
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
              Archmere
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
                    alt={`Archmere - Image ${index + 1}`}
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
              Where architectural elegance meets modern sophistication, crafting timeless spaces that celebrate refined living.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArchmerePage;
