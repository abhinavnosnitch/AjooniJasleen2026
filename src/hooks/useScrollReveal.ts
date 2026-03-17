import { useEffect, useRef } from 'react';

const useScrollReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Small delay to ensure DOM is painted before observing
    const timeout = setTimeout(() => {
      const cards = container.querySelectorAll('.reveal-card');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach((card) => observer.observe(card));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return containerRef;
};

export default useScrollReveal;
