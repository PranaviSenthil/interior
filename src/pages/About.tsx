import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Award, Users, Globe, Heart, ArrowRight, Sparkles } from 'lucide-react';

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-100px" });

  // Cinematic scroll transforms
  const textOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 0, 0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const assemblingText1X = useTransform(scrollYProgress, [0.2, 0.4], ["-100%", "0%"]);
  const assemblingText1Opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  
  const assemblingText2X = useTransform(scrollYProgress, [0.4, 0.6], ["100%", "0%"]);
  const assemblingText2Opacity = useTransform(scrollYProgress, [0.4, 0.6, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { icon: <Award className="w-6 h-6" />, value: "15+", label: "Global Awards" },
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries" },
    { icon: <Heart className="w-6 h-6" />, value: "100%", label: "Passion" }
  ];

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

      {/* Premium Stats Section */}
      <div className="relative py-24 bg-gradient-to-br from-charcoal to-charcoal/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12">
          <motion.div 
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/20 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={statsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} className="text-champagne" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-champagne">Our Legacy</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-serif text-warm-white mb-6 leading-tight">
              Excellence in <span className="italic text-champagne">Numbers</span>
            </h2>
            <p className="text-warm-white/60 max-w-2xl mx-auto text-lg">
              A testament to our commitment to exceptional design and client satisfaction.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  duration: 0.6,
                  type: "spring",
                  bounce: 0.2
                }}
                className="text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-champagne/20 rounded-2xl mb-4 group-hover:bg-champagne/30 transition-colors duration-300 group-hover:scale-110">
                  <div className="text-champagne">{stat.icon}</div>
                </div>
                <div className="text-4xl md:text-5xl font-serif text-warm-white mb-2">{stat.value}</div>
                <div className="text-champagne text-sm font-medium tracking-wider uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Standard Content Follows */}
      <div className="py-32 container mx-auto px-6 md:px-12 relative z-30 bg-warm-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-charcoal mb-8 leading-tight">
                Our <span className="italic text-champagne">Heritage</span>
              </h2>
            </motion.div>
            
            <motion.div 
              className="space-y-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                Founded on the principle that spaces should evoke emotion, Anti-Interior challenges the conventions of traditional design. We don't just decorate rooms; we curate experiences that resonate with the soul.
              </p>
              <p className="text-charcoal/70 text-lg leading-relaxed font-light">
                Our multidisciplinary team of visionaries, architects, and artisans work collaboratively to push boundaries. With a portfolio spanning the globe, we bring a wealth of cultural insight and uncompromising quality to every project.
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 px-6 py-3 bg-champagne/10 rounded-full border border-champagne/20">
                <div className="w-2 h-2 bg-champagne rounded-full"></div>
                <span className="text-sm font-medium tracking-wider uppercase text-charcoal">Innovation</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-champagne/10 rounded-full border border-champagne/20">
                <div className="w-2 h-2 bg-champagne rounded-full"></div>
                <span className="text-sm font-medium tracking-wider uppercase text-charcoal">Excellence</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 bg-champagne/10 rounded-full border border-champagne/20">
                <div className="w-2 h-2 bg-champagne rounded-full"></div>
                <span className="text-sm font-medium tracking-wider uppercase text-charcoal">Passion</span>
              </div>
            </motion.div>
          </div>
          
          <div className="relative h-full min-h-[600px]">
            {/* Multi-layered Premium Gallery */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-champagne/20 to-charcoal/20 translate-x-8 translate-y-8 rounded-3xl z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
            />
            
            <motion.img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Detail Shot" 
              className="absolute top-0 right-0 w-4/5 h-4/5 object-cover rounded-2xl shadow-2xl z-10"
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            />
            
            <motion.img 
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" 
              alt="Material Focus" 
              className="absolute bottom-0 left-0 w-3/4 h-3/5 object-cover rounded-2xl shadow-xl z-20"
              initial={{ y: 100, opacity: 0, scale: 0.9 }}
              whileInView={{ y: -30, opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              viewport={{ once: true, margin: "-50px" }}
            />
            
            {/* Floating Elements */}
            <motion.div 
              className="absolute top-10 left-10 w-24 h-24 border-2 border-champagne/30 rounded-full z-30"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              animate={{ rotate: 360 }}
            />
          </div>
        </div>
        
        {/* Premium CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-32"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-champagne to-charcoal p-16 md:p-24">
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-6xl font-serif text-warm-white mb-6 leading-tight">
                Ready to <span className="italic">Transform</span> Your Space?
              </h2>
              <p className="text-warm-white/80 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                Let's create something extraordinary together. Your vision, our expertise.
              </p>
              
              <motion.button 
                className="inline-flex items-center gap-3 bg-warm-white text-charcoal px-8 py-4 rounded-full font-medium tracking-wider text-sm uppercase hover:bg-champagne hover:text-warm-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight size={16} />
              </motion.button>
            </div>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FFFFFF%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
