import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from './MagneticButton';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [location]);

  const navLinks = [
    { name: 'Home', path: '/', subtitle: 'Return to start' },
    { name: 'Portfolio', path: '/portfolio', subtitle: 'Our selected works' },
    { name: 'Services', path: '/services', subtitle: 'What we do' },
    { name: 'About', path: '/about', subtitle: 'Our philosophy' },
    { name: 'Contact', path: '/contact', subtitle: 'Get in touch' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled && !isMobileMenuOpen ? 'bg-warm-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className={`container mx-auto px-6 md:px-12 flex justify-between items-center relative transition-colors duration-300 ${isMobileMenuOpen ? 'text-warm-white' : 'mix-blend-difference text-warm-white'}`}>
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-tighter z-[60] relative">
          YOUR<span className="text-champagne italic">BRAND</span>
        </Link>

        {/* Center Links (Visible only on desktop when menu is open) */}
        <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center gap-10 z-[60] text-[10px] tracking-[0.2em] font-medium uppercase transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <Link to="/" className="text-champagne relative after:absolute after:-bottom-2 after:left-0 after:w-full after:h-[1px] after:bg-champagne">HOME</Link>
          <Link to="/portfolio" className="text-warm-white hover:text-champagne transition-colors">PORTFOLIO</Link>
          <Link to="/services" className="text-warm-white hover:text-champagne transition-colors">SERVICES</Link>
          <Link to="/about" className="text-warm-white hover:text-champagne transition-colors">ABOUT</Link>
          <Link to="/contact" className="text-warm-white hover:text-champagne transition-colors">CONTACT</Link>
        </div>

        {/* Global Menu Toggle */}
        <button
          className="z-[60] relative group flex items-center gap-3"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={`text-[10px] tracking-[0.2em] uppercase font-medium hidden md:block transition-colors ${isMobileMenuOpen ? 'text-warm-white' : ''} group-hover:text-champagne`}>
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </span>
          <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${isMobileMenuOpen ? 'border-champagne text-champagne' : 'border-current'} group-hover:border-champagne group-hover:text-champagne`}>
            {isMobileMenuOpen ? <X size={14} /> : <Menu size={14} />}
          </div>
        </button>

        {/* Fullscreen Cinematic Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
              animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0)' }}
              exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0)' }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-0 bg-charcoal text-warm-white z-50 overflow-hidden flex flex-col"
            >
              {/* Background */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover" alt="Menu background" />
                <div className="absolute inset-0 bg-black/90" />
              </div>

              {/* Menu Content Container */}
              <div className="relative z-10 w-full h-full flex flex-col max-w-screen-2xl mx-auto pt-32 pb-8 px-6 md:px-16">
                
                {/* Main Links & Contact */}
                <div className="flex-grow flex flex-col lg:flex-row justify-between items-start lg:items-center">
                  
                  {/* Left: Navigation */}
                  <div className="w-full lg:w-1/2 flex flex-col pl-2 lg:pl-12">
                    <span className="text-champagne tracking-[0.25em] uppercase text-[10px] font-medium mb-12">Navigation</span>
                    <div className="flex flex-col gap-10">
                      {navLinks.map((link, i) => (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                          className="w-full max-w-[650px]"
                        >
                          <Link to={link.path} className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                            <span className="text-4xl md:text-6xl font-serif text-warm-white group-hover:text-champagne transition-colors duration-500">
                              {link.name}
                            </span>
                            <div className="h-[1px] bg-champagne/30 group-hover:bg-champagne transition-colors duration-500 w-full"></div>
                            <span className="text-champagne font-sans font-medium text-[10px] tracking-widest">
                              0{i + 1}
                            </span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Contact */}
                  <div className="w-full lg:w-1/3 flex flex-col pr-2 lg:pr-12 mt-20 lg:mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                    >
                      <span className="text-champagne tracking-[0.25em] uppercase text-[10px] font-medium mb-8 block">Contact Us</span>
                      <a href="mailto:hello@yourbrand.com" className="text-3xl md:text-4xl font-serif text-warm-white hover:text-champagne transition-colors block mb-3">
                        hello@yourbrand.com
                      </a>
                      <p className="text-warm-white/60 text-sm mb-12 font-sans tracking-wider">
                        +1 (555) 123-4567
                      </p>

                      <div className="flex gap-4">
                        <MagneticButton>
                          <a href="#" className="w-[50px] h-[50px] rounded-full border border-champagne text-champagne flex items-center justify-center hover:bg-champagne hover:text-charcoal transition-all font-sans text-[10px] tracking-widest">
                            IG
                          </a>
                        </MagneticButton>
                        <MagneticButton>
                          <a href="#" className="w-[50px] h-[50px] rounded-full border border-champagne text-champagne flex items-center justify-center hover:bg-champagne hover:text-charcoal transition-all font-sans text-[10px] tracking-widest">
                            IN
                          </a>
                        </MagneticButton>
                      </div>
                    </motion.div>
                  </div>

                </div>

                {/* Footer */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-warm-white/60 text-[11px] tracking-wide font-sans mt-12 gap-4 md:gap-0 pl-2 lg:pl-12 pr-2 lg:pr-12">
                  <div className="flex items-center gap-3">
                    <span className="text-champagne text-lg leading-none">✦</span>
                    <span>Designing spaces. Elevating lives.</span>
                  </div>
                  <div>
                    &copy; 2024 Your Brand. All rights reserved.
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
