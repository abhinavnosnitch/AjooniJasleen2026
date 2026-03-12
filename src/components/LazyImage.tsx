import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  srcMobile?: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
  maintainAspectRatio?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  srcMobile,
  alt,
  className = '',
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+',
  maintainAspectRatio = false,
  objectFit = 'cover'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setIsLoaded(true);

    if (maintainAspectRatio && e.currentTarget) {
      const img = e.currentTarget;
      const ratio = img.naturalWidth / img.naturalHeight;
      setAspectRatio(ratio);
    }
  };

  const containerStyle = maintainAspectRatio && aspectRatio
    ? { paddingBottom: `${(1 / aspectRatio) * 100}%` }
    : {};

  return (
    <div className={`relative overflow-hidden w-full ${maintainAspectRatio ? '' : 'h-full'} ${className}`} style={maintainAspectRatio ? containerStyle : undefined}>
      {!isLoaded && (
        <div className={`${maintainAspectRatio ? 'absolute inset-0' : 'w-full h-full'} bg-gray-200 animate-pulse flex items-center justify-center`}>
          <div className="w-12 h-12 border-2 border-transparent border-t-luxury-gold rounded-full animate-spin"></div>
        </div>
      )}

      <picture className={maintainAspectRatio ? 'absolute inset-0 w-full h-full' : 'w-full h-full'}>
        {srcMobile && (
          <source
            media="(max-width: 768px)"
            srcSet={isInView ? srcMobile : placeholder}
          />
        )}
        <img
          ref={imgRef}
          src={isInView ? src : placeholder}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          className={`w-full h-full object-${objectFit} transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </picture>
    </div>
  );
};

export default LazyImage;