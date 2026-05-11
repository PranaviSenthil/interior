import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero3D from './Hero3D';
import MagneticButton from './MagneticButton';
import RevealText from './RevealText';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-charcoal/90 mix-blend-multiply z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <Hero3D />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-warm-white pointer-events-none">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-champagne tracking-[0.2em] text-sm uppercase mb-6 font-medium">
              Redefining Luxury Spaces
            </h2>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-serif font-medium leading-tight mb-8">
            <RevealText text="Design That Speaks" delay={0.4} /> <br className="hidden md:block" />
            <RevealText text="Volumes." delay={0.6} className="italic font-light" />
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 pointer-events-auto"
          >
            <MagneticButton>
              <Link 
                to="/portfolio" 
                className="bg-champagne hover:bg-warm-white text-charcoal px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-3 font-medium tracking-wide uppercase text-sm h-full"
              >
                View Portfolio
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
            
            <MagneticButton>
              <Link 
                to="/contact" 
                className="border border-warm-white/30 hover:border-warm-white hover:bg-warm-white/10 px-8 py-4 rounded-sm transition-all duration-300 flex items-center justify-center font-medium tracking-wide uppercase text-sm backdrop-blur-sm h-full"
              >
                Consultation
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-warm-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-champagne to-transparent"
        />
      </motion.div>
    </div>
  );
}
