import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import BackToHomeButton from './components/BackToHomeButton';
import UnifiedHomepage from './pages/UnifiedHomepage';
import OurStudioPage from './pages/OurStudioPage';
import TeamPage from './pages/TeamPage';
import ServicesPage from './pages/ServicesPage';
import AllProjectsPage from './pages/AllProjectsPage';
import ResidentialProjectsPage from './pages/ResidentialProjectsPage';
import CommercialProjectsPage from './pages/CommercialProjectsPage';
import InteriorDesignProjectsPage from './pages/InteriorDesignProjectsPage';
import ShiddatPage from './pages/ShiddatPage';
import AntlerWoodsPage from './pages/AntlerWoodsPage';
import ArcadiaPage from './pages/ArcadiaPage';
import ArchmerePage from './pages/ArchmerePage';
import BashaKabobPage from './pages/BashaKabobPage';
import BharatResidencyPage from './pages/BharatResidencyPage';
import CarDynamicsPage from './pages/CarDynamicsPage';
import ChennaiMarathaPage from './pages/ChennaiMarathaPage';
import ChennaiMarathaPhase5Page from './pages/ChennaiMarathaPhase5Page';
import FagguHomeStayPage from './pages/FagguHomeStayPage';
import HealthyEarthAmbalaPage from './pages/HealthyEarthAmbalaPage';
import HealthyEarthPhase10Page from './pages/HealthyEarthPhase10Page';
import HealthyEarthKharkharaPage from './pages/HealthyEarthKharkharaPage';
import HealthyEarthMogaPage from './pages/HealthyEarthMogaPage';
import KasauliCottagePage from './pages/KasauliCottagePage';
import KohzeenPage from './pages/KohzeenPage';
import PathankotHotelPage from './pages/PathankotHotelPage';
import SaidpurResidencePage from './pages/SaidpurResidencePage';
import InteriorsContemporaryPage from './pages/InteriorsContemporaryPage';
import JadeRestaurantPage from './pages/JadeRestaurantPage';
import LapinozPage from './pages/LapinozPage';
import AeroCityPage from './pages/AeroCityPage';
import MedallionPage from './pages/MedallionPage';
import NahaanPage from './pages/NahaanPage';
import NirwanaHeightsPage from './pages/NirwanaHeightsPage';
import RedbricksOfficePage from './pages/RedbricksOfficePage';
import PubPatialaPage from './pages/PubPatialaPage';
import PunjabiChullahPage from './pages/PunjabiChullahPage';
import RamaStorePage from './pages/RamaStorePage';
import BeautyAndSpaPage from './pages/BeautyAndSpaPage';
import PulseBarPage from './pages/PulseBarPage';
import FitnessBySomaPage from './pages/FitnessBySomaPage';
import RajshreeHotelPage from './pages/RajshreeHotelPage';
import LoadingScreen from './components/LoadingScreen';

import Footer from './components/Footer';

// AppContent component that uses useLocation (must be inside Router)
const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Scroll to top or to hash when route changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Scroll to the element
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // After scrolling, remove the hash from the URL without adding to history
          // This keeps the back button working naturally (leading to top of page)
          window.history.replaceState(null, '', window.location.pathname);
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <div className="main-content-fade-in">
        {/* Conditionally render Header only on homepage */}
        {isHomePage && <Header />}
        
        {/* Back to Home button for non-homepage routes */}
        <BackToHomeButton />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<UnifiedHomepage />} />
              <Route path="/studio" element={<OurStudioPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/projects" element={<AllProjectsPage />} />
              <Route path="/projects/residential" element={<ResidentialProjectsPage />} />
              <Route path="/projects/commercial" element={<CommercialProjectsPage />} />
              <Route path="/projects/interior-design" element={<InteriorDesignProjectsPage />} />
              <Route path="/projects/antler-woods" element={<AntlerWoodsPage />} />
              <Route path="/projects/arcadia" element={<ArcadiaPage />} />
              <Route path="/projects/archmere" element={<ArchmerePage />} />
              <Route path="/projects/basha-kabob" element={<BashaKabobPage />} />
              <Route path="/projects/bharat-residency" element={<BharatResidencyPage />} />
              <Route path="/projects/car-dynamics" element={<CarDynamicsPage />} />
              <Route path="/projects/chennai-maratha" element={<ChennaiMarathaPage />} />
              <Route path="/projects/chennai-maratha-phase5" element={<ChennaiMarathaPhase5Page />} />
              <Route path="/projects/faggu-homestay" element={<FagguHomeStayPage />} />
              <Route path="/projects/healthy-earth-ambala" element={<HealthyEarthAmbalaPage />} />
              <Route path="/projects/healthy-earth-phase10" element={<HealthyEarthPhase10Page />} />
              <Route path="/projects/healthy-earth-kharkhara" element={<HealthyEarthKharkharaPage />} />
              <Route path="/projects/healthy-earth-moga" element={<HealthyEarthMogaPage />} />
              <Route path="/projects/kasauli-cottage" element={<KasauliCottagePage />} />
              <Route path="/projects/kohzeen" element={<KohzeenPage />} />
              <Route path="/projects/pathankot-hotel" element={<PathankotHotelPage />} />
              <Route path="/projects/saidpur-residence" element={<SaidpurResidencePage />} />
              <Route path="/projects/interiors-contemporary" element={<InteriorsContemporaryPage />} />
              <Route path="/projects/jade-restaurant" element={<JadeRestaurantPage />} />
              <Route path="/projects/lapinoz" element={<LapinozPage />} />
              <Route path="/projects/aerocity" element={<AeroCityPage />} />
              <Route path="/projects/medallion" element={<MedallionPage />} />
              <Route path="/projects/nahaan" element={<NahaanPage />} />
              <Route path="/projects/nirwana-heights" element={<NirwanaHeightsPage />} />
              <Route path="/projects/redbricks-office" element={<RedbricksOfficePage />} />
              <Route path="/projects/pub-patiala" element={<PubPatialaPage />} />
              <Route path="/projects/punjabi-chullah" element={<PunjabiChullahPage />} />
              <Route path="/projects/rama-store" element={<RamaStorePage />} />
              <Route path="/projects/beauty-and-spa" element={<BeautyAndSpaPage />} />
              <Route path="/projects/pulse-bar" element={<PulseBarPage />} />
              <Route path="/projects/fitness-by-soma" element={<FitnessBySomaPage />} />
              <Route path="/projects/rajshree-hotel" element={<RajshreeHotelPage />} />
              <Route path="/shiddat" element={<ShiddatPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>

        <Footer />
      </div>
    </div>
  );
};

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
      
      // Shiddat page background image
      'https://cdn.jsdelivr.net/gh/abhinavnosnitch/aj-website-assets/Website%20assets/Shiddat/Background/DSC_7357_copy_1512x1006.jpg',
      
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
      
      // Our Studio page image
      'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      
      // Testimonials section images
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    ];

    /**
     * Preload a single image and return a Promise
     * @param {string} src - Image URL to preload
     * @returns {Promise<void>} Promise that resolves when image loads
     */
    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve) => {
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
          document.body.classList.remove('no-scroll');
        }, 1200); // Total transition duration

      } catch (error) {
        console.error('❌ Loading sequence error:', error);

        // Still proceed to main app after error with transition
        setIsTransitioning(true);
        setTimeout(() => {
          setIsLoading(false);
          document.body.classList.remove('no-scroll');
        }, 1200);
      }
    };

    // Prevent body scrolling during loading
    document.body.classList.add('no-scroll');

    // Start the loading sequence
    initializeApp();

    // Fallback timeout (10 seconds) to prevent infinite loading
    const fallbackTimeout = setTimeout(() => {
      console.warn('⏰ Loading timeout reached, proceeding to main app');
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoading(false);
        document.body.classList.remove('no-scroll');
      }, 1200);
    }, 10000);

    // Cleanup function
    return () => {
      clearTimeout(fallbackTimeout);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen progress={loadingProgress} isTransitioning={isTransitioning} />;
  }

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;