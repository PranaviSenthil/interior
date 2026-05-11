import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import SmoothScroll from './SmoothScroll';
import Preloader from './Preloader';
import AudioProvider from './AudioProvider';

export default function Layout() {
  const location = useLocation();

  return (
    <AudioProvider>
      <SmoothScroll>
        <Preloader />
        <div className="flex flex-col min-h-screen">
          <CustomCursor />
          <Navigation />
          <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
    </AudioProvider>
  );
}
