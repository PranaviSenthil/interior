import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal text-warm-white pointer-events-none"
      initial={{ opacity: 1 }}
      animate={{ opacity: loading ? 1 : 0, y: loading ? 0 : '-100%' }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: loading ? 0 : -100 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-4xl md:text-6xl font-serif tracking-widest uppercase flex items-center gap-4"
        >
          <span>Anti</span>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            className="w-16 h-px bg-champagne origin-left"
          />
          <span className="text-champagne italic">Interior</span>
        </motion.div>
      </div>
      
      {/* Loading Progress Bar */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-64 h-[2px] bg-warm-white/10 overflow-hidden">
        <motion.div 
          className="h-full bg-champagne"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
