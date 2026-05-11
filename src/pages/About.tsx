import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Cinematic scroll transforms
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0, 0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const assemblingText1X = useTransform(scrollYProgress, [0.2, 0.4], ["-100%", "0%"]);
  const assemblingText1Opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  
  const assemblingText2X = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const assemblingText2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-warm-white">
      {/* Scroll-Locked Cinematic Sequence */}
      <div ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-charcoal text-warm-white">
          <motion.div 
            style={{ y: imageY, scale: imageScale }}
            className="absolute inset-0 z-0 opacity-40"
          >
            <img 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
              alt="Studio Background" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Intro Text */}
          <motion.div style={{ opacity: textOpacity }} className="relative z-10 text-center px-6 max-w-4xl">
            <span className="text-champagne tracking-[0.2em] text-sm uppercase mb-6 block font-medium">The Studio</span>
            <h1 className="text-5xl md:text-8xl font-serif leading-tight">
              Crafting the <span className="italic font-light">Extraordinary.</span>
            </h1>
          </motion.div>

          {/* Assembling Sequence 1 */}
          <motion.div 
            style={{ x: assemblingText1X, opacity: assemblingText1Opacity }} 
            className="absolute z-20 text-center px-6 max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-warm-white">Spatial Perfection.</h2>
            <p className="text-lg text-warm-white/70">
              Every dimension, every angle, meticulously calculated to harmonize with the human experience. We do not just fill spaces; we define them.
            </p>
          </motion.div>

          {/* Assembling Sequence 2 */}
          <motion.div 
            style={{ x: assemblingText2X, opacity: assemblingText2Opacity }} 
            className="absolute z-20 text-center px-6 max-w-3xl"
          >
            <h2 className="text-4xl md:text-6xl font-serif mb-6 text-champagne italic">Material Excellence.</h2>
            <p className="text-lg text-warm-white/70">
              Sourcing the rarest stones, the richest woods, and the finest textiles. Our materials tell a story of uncompromising quality and global curation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Standard Content Follows */}
      <div className="py-32 container mx-auto px-6 md:px-12 relative z-30 bg-warm-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl font-serif text-charcoal mb-8">Our Heritage</h2>
            <p className="text-charcoal/70 text-lg leading-relaxed mb-6">
              Founded on the principle that spaces should evoke emotion, Anti-Interior challenges the conventions of traditional design. We don't just decorate rooms; we curate experiences.
            </p>
            <p className="text-charcoal/70 text-lg leading-relaxed">
              Our multidisciplinary team of visionaries, architects, and artisans work collaboratively to push boundaries. With a portfolio spanning the globe, we bring a wealth of cultural insight and uncompromising quality to every project.
            </p>
            
            <div className="mt-12 pt-12 border-t border-charcoal/10 flex gap-12">
              <div>
                <span className="block text-4xl font-serif text-charcoal mb-2">15+</span>
                <span className="text-xs uppercase tracking-widest text-charcoal/50 font-medium">Global Awards</span>
              </div>
              <div>
                <span className="block text-4xl font-serif text-charcoal mb-2">50+</span>
                <span className="text-xs uppercase tracking-widest text-charcoal/50 font-medium">Publications</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[500px]">
            {/* Multi-layered Parallax Elements */}
            <motion.div 
              className="absolute inset-0 bg-champagne/10 translate-x-6 translate-y-6 rounded-sm z-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Detail Shot" 
              className="absolute top-0 right-0 w-3/4 h-3/4 object-cover shadow-2xl z-10"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            <motion.img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Material Focus" 
              className="absolute bottom-0 left-0 w-2/3 h-1/2 object-cover shadow-xl z-20"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: -50, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
