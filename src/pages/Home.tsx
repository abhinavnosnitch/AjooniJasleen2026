import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const slides = [
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/v17ty2th19dacmpndjrt.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/z6kn33y6lpc3acfesoyu.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/i8cadrw3zpiqh1mq6wic.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/sr2puuebfrahd0ebtsql.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/WhatsApp%20Image%202024-09-10%20at%2015.52.09.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/ekbt7zhzpz1r9atnorg7.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/h8s8pfxeqwxguia7wy0n.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/muquwyho6np7csdtvwvu.webp',
      title: 'Architectural Project'
    },
    {
      image: 'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/HeroSlideNew/koxdytbkmz6aohxunesm.webp',
      title: 'Architectural Project'
    }
  ];

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
    <div className="relative overflow-x-hidden w-full mt-[75px] lg:mt-[100px]">
      {/* Hero Slideshow */}
      <div className="relative aspect-square lg:aspect-[3/2] w-full overflow-hidden touch-pan-y">
        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold"></div>
          </div>
        )}

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-black/0"></div>
          </div>
        ))}

        {/* Slide Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 p-2 touch-manipulation"
          aria-label="Previous slide"
        >
          <ChevronLeft size={32} className="sm:w-12 sm:h-12" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300 z-10 p-2 touch-manipulation"
          aria-label="Next slide"
        >
          <ChevronRight size={32} className="sm:w-12 sm:h-12" />
        </button>

      </div>
    </div>
  );
};

export default HeroSection;