import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import UnifiedHomepage from './pages/UnifiedHomepage';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Comprehensive list of all images used throughout the website
    const imageUrls = [
      // Hero slideshow images
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/InShot_20250925_025711704.webp',
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/InShot_20250925_025416891.webp',
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/IMG_20250925_025904.webp',
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/InShot_20250925_030243351.webp',
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/InShot_20250925_025255173.webp',
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/WhatsApp%20Image%202024-09-10%20at%2015.52.09.webp',
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/Hero%20Slide/file_00000000465061f8a080c50ba8b48b82.webp',
      
      // Why Us section image
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/yxu3oqisjgmbaivvixx9.webp',
      
      // Header logo
      'https://cfptjhjukjbqxewmgwxp.supabase.co/storage/v1/object/public/AjooniAndJasleen/logo.png',
      
      // Projects section images (Pexels stock photos)
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      
      // Team section images
      'https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      
      // Testimonials section images
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ];

    /**
     * Preload a single image and return a Promise
     * @param {string} src - Image URL to preload
     * @returns {Promise<void>} Promise that resolves when image loads
     */
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          console.log(`✅ Loaded: ${src}`);
          resolve();
        };
        
        img.onerror = () => {
          console.warn(`⚠️ Failed to load: ${src}`);
          // Resolve anyway to prevent blocking the loading process
          resolve();
        };
        
        // Set crossOrigin for external images (Pexels)
        if (src.includes('pexels.com')) {
          img.crossOrigin = 'anonymous';
        }
        
        img.src = src;
      });
    };

    /**
     * Preload all images with progress tracking
     * @param {string[]} urls - Array of image URLs to preload
     * @returns {Promise<void>} Promise that resolves when all images are loaded
     */
    const preloadAllImages = async (urls: string[]): Promise<void> => {
      const totalImages = urls.length;
      let loadedImages = 0;

      // Create promises for all images
      const imagePromises = urls.map(async (url) => {
        await preloadImage(url);
        loadedImages++;
        
        // Update progress (0-90%, reserve 10% for final transition)
        const progress = Math.round((loadedImages / totalImages) * 90);
        setLoadingProgress(progress);
      });

      // Wait for all images to load
      await Promise.all(imagePromises);
      
      // Complete progress to 100%
      setLoadingProgress(100);
    };

    /**
     * Main loading sequence orchestration
     */
    const initializeApp = async () => {
      try {
        console.log('🚀 Starting loading sequence...');
        
        // Start minimum display timer (2.5 seconds)
        const minDisplayTime = new Promise(resolve => 
          setTimeout(resolve, 2500)
        );
        
        // Start image preloading
        const imageLoadingPromise = preloadAllImages(imageUrls);
        
        // Wait for both minimum time and image loading to complete
        await Promise.all([minDisplayTime, imageLoadingPromise]);
        
        console.log('✅ Loading sequence completed successfully');
        
        // Start the transition sequence
        setIsTransitioning(true);
        
        // Complete loading after transition duration
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'unset';
        }, 1200); // Total transition duration
        
      } catch (error) {
        console.error('❌ Loading sequence error:', error);
        
        // Still proceed to main app after error with transition
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = 'unset';
        }, 1200);
      }
    };

    // Prevent body scrolling during loading
    document.body.style.overflow = 'hidden';
    
    // Start the loading sequence
    initializeApp();
    
    // Fallback timeout (10 seconds) to prevent infinite loading
    const fallbackTimeout = setTimeout(() => {
      console.warn('⏰ Loading timeout reached, proceeding to main app');
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = 'unset';
      }, 1200);
    }, 10000);

    // Cleanup function
    return () => {
      clearTimeout(fallbackTimeout);
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} isTransitioning={isTransitioning} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden w-full">
        <div className="main-content-fade-in">
          <Header />
          <Routes>
            <Route path="/" element={<UnifiedHomepage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;