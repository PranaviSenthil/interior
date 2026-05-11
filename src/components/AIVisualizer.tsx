import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const styles = [
  { id: 'minimalist', name: 'Minimalist', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { id: 'brutalist', name: 'Brutalist', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { id: 'midcentury', name: 'Mid-Century', image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
  { id: 'futuristic', name: 'Futuristic', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80' },
];

export default function AIVisualizer() {
  const [activeStyle, setActiveStyle] = useState(styles[0]);

  return (
    <div className="py-32 bg-charcoal text-warm-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-champagne tracking-[0.2em] text-sm uppercase mb-4 block font-medium">Vision Matrix</span>
          <h2 className="text-5xl md:text-7xl font-serif mb-6">AI-Powered <br className="hidden md:block"/> Synthesis.</h2>
          <p className="text-warm-white/60 max-w-2xl mx-auto text-lg">
            Experience the future of spatial planning. Select a design language and watch our neural architecture models reimagine the environment in real-time.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Controls */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setActiveStyle(style)}
                className={`text-left p-6 rounded-sm border transition-all duration-500 relative overflow-hidden group ${
                  activeStyle.id === style.id 
                    ? 'border-champagne bg-champagne/10' 
                    : 'border-warm-white/10 hover:border-warm-white/30'
                }`}
              >
                {/* Liquid Glass gradient background on active/hover */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-champagne/20 to-transparent translate-x-[-100%] transition-transform duration-1000 ${activeStyle.id === style.id ? 'translate-x-[100%]' : 'group-hover:translate-x-[100%]'}`} />
                
                <h3 className={`text-2xl font-serif relative z-10 transition-colors ${activeStyle.id === style.id ? 'text-champagne' : 'text-warm-white'}`}>
                  {style.name}
                </h3>
              </button>
            ))}
          </div>

          {/* Visualizer Display */}
          <div className="w-full lg:w-2/3 aspect-video relative rounded-sm overflow-hidden bg-black shadow-2xl border border-warm-white/10">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeStyle.id}
                src={activeStyle.image}
                alt={activeStyle.name}
                initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Liquid Glass Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
            
            {/* UI Overlay */}
            <div className="absolute bottom-6 left-6 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-champagne animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-medium text-warm-white/80">Rendering: {activeStyle.name} Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
