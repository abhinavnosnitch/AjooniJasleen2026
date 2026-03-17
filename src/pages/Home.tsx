import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/v17ty2th19dacmpndjrt_copy_4096x2729.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/z6kn33y6lpc3acfesoyu_copy_4096x2729.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/i8cadrw3zpiqh1mq6wic_copy_1920x1456.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/sr2puuebfrahd0ebtsql_copy_1918x1920.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/WhatsAppImage2024-09-10at15.52.09_copy_1039x1080.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/ekbt7zhzpz1r9atnorg7_copy_3595x2400.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/h8s8pfxeqwxguia7wy0n_copy_1602x2400.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/muquwyho6np7csdtvwvu_copy_4096x2729.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/HeroSlide/koxdytbkmz6aohxunesm_copy_4096x2729.webp',
      title: 'Architectural Project'
    }
  ];

  useEffect(() => {
    // Reveal text elements shortly after load
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Preload first image
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.src = slides[0].image;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full overflow-hidden mt-[75px] lg:mt-[100px] min-h-[calc(100vh-100px)] flex items-center justify-center px-4 lg:px-12 py-8 lg:py-0">
      <div className="max-w-[1600px] w-full mx-auto flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-16 lg:h-[80vh]">

        {/* Left Column: Image Slideshow */}
        <div className="w-full lg:w-[55%] relative h-[50vh] lg:h-full rounded-[1.5rem] lg:rounded-[1.5rem] overflow-hidden shadow-2xl flex-shrink-0 animate-[imageZoomIn_2s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#9F835A]"></div>
            </div>
          )}

          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover scale-[1.05]"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}

          {/* Slide Navigation inside Image Box */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full backdrop-blur-sm touch-manipulation"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} className="sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-300 z-10 p-2 bg-black/10 hover:bg-black/20 rounded-full backdrop-blur-sm touch-manipulation"
            aria-label="Next slide"
          >
            <ChevronRight size={28} className="sm:w-8 sm:h-8" />
          </button>
        </div>

        {/* Right Column: Text Content */}
        <div
          ref={textContainerRef}
          className="w-full lg:w-[45%] flex flex-col justify-center relative py-8 lg:py-0 min-h-[40vh] lg:h-full isolate"
        >
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 -z-10 opacity-30 mask-radial-gradient">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:60px_60px] lg:bg-[size:100px_100px]"></div>
          </div>

          <div className="px-4 lg:px-8 max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
            <h2 className="mb-4 sm:mb-6">
              <span
                className={`block font-playfair font-normal text-[3.5rem] leading-[1.1] sm:text-[4.5rem] lg:text-[4.5rem] xl:text-[5.5rem] text-[#1C1C1A] transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.05]'
                  }`}
              >
                Build More Than Walls.
              </span>
              <span
                className={`block font-playfair italic font-extralight text-[#9F835A]/90 mt-1 lg:mt-2 text-[3rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] leading-[1] transition-all duration-1000 delay-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-x-0 blur-0' : 'opacity-0 -translate-x-10 blur-sm'
                  }`}
              >
                Build a Legacy.
              </span>
            </h2>

            <p
              className={`font-jost font-light tracking-wide text-[1.1rem] text-[#666663] mb-8 lg:mb-12 max-w-[90%] lg:max-w-[80%] mx-auto lg:mx-0 leading-[1.6] transition-all duration-1000 delay-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-[2px]'
                }`}
            >
              <span className="block lg:inline font-cormorant lg:font-jost lg:not-italic text-lg lg:text-[1.1rem] text-[#666663]">
                Architecture that speaks your story before you say a word.
              </span>
              <span className="hidden lg:inline">
                {" "}We craft spaces that elevate the human experience through meticulous design and timeless aesthetics.
              </span>
            </p>

            <div
              className={`flex justify-center lg:justify-start transition-all duration-1000 delay-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm'
                }`}
            >
              <a
                href="#contact"
                className="font-jost inline-block bg-[#9F835A] color-white text-white px-10 py-4 text-[0.8rem] font-medium tracking-[2px] uppercase transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)] border border-[#9F835A] hover:bg-transparent hover:text-[#1C1C1A]"
              >
                Private Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;