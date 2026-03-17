import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import { Volume2, VolumeX } from 'lucide-react';
import BackToHomeButton from '../components/BackToHomeButton';

const PubPatialaPage = () => {
  const revealRef = useScrollReveal();

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
              Pub Patiala
            </h1>
            <p className="font-cormorant text-2xl sm:text-3xl text-luxury-charcoal/70 italic font-light">
              Where Energy Meets Elegance
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative overflow-hidden rounded-lg shadow-2xl bg-luxury-charcoal">
              <video
                ref={videoRef}
                className="w-full h-auto"
                controls
                autoPlay
                muted
                loop
                playsInline
              >
                <source
                src="https://res.cloudinary.com/doalvffjs/video/upload/v1764077342/_PUB_PATIALA_3D_2_iuncyn.mov"
                  type="video/quicktime"
                />
                <source
                src="https://res.cloudinary.com/doalvffjs/video/upload/v1764077342/_PUB_PATIALA_3D_2_iuncyn.mov"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>

              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-luxury-charcoal/80 hover:bg-luxury-charcoal text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          <div className="reveal-card mt-20 text-center max-w-3xl mx-auto">
            <p className="font-cormorant text-xl sm:text-2xl text-luxury-charcoal/80 italic leading-relaxed">
              An immersive entertainment destination in Patiala that blends vibrant atmosphere with sophisticated design.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PubPatialaPage;
