import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import LazyImage from '../components/LazyImage';
import BackToHomeButton from '../components/BackToHomeButton';

const JadeRestaurantPage = () => {
  const revealRef = useScrollReveal();

  const images = [
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764721657_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764721748_copy_5683x3789.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764721834_copy_3696x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722346_copy_6000x3892.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764721995_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722124_copy_3870x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722402_copy_6000x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722219_copy_5911x3819.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722482_copy_3912x5868.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722288_copy_6000x3880.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722534_copy_6000x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722596_copy_5880x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722653_copy_6000x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722714_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722776_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722832_copy_6000x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722903_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764722971_copy_6000x3736.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723036_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723121_copy_3854x5782.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723187_copy_6000x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723287_copy_3856x4528.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723329_copy_4000x5648.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723401_copy_3888x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723473_copy_5832x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723540_copy_6000x3724.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723602_copy_5580x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723665_copy_5712x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723741_copy_5744x3829.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723804_copy_6000x4000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723874_copy_4000x6000.jpg',
    'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Projects/JadeRestro/1760764723939_copy_4000x6000.jpg'
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
              Jade Restaurant
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
                    alt={`Jade Restaurant - Image ${index + 1}`}
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
              An exquisite dining sanctuary where Eastern elegance meets modern luxury, crafted for unforgettable culinary journeys.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JadeRestaurantPage;
