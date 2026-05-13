import { motion } from 'framer-motion';
import { Layout, PenTool, Home as HomeIcon, Building, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-champagne" />,
    title: 'Space Planning',
    description: 'Strategic layout optimization to maximize flow, function, and aesthetic appeal in any environment.',
    features: ['Flow Analysis', 'Functional Zones', 'Optimized Layouts'],
    gradient: 'from-blue-50 to-indigo-100'
  },
  {
    icon: <PenTool className="w-8 h-8 text-champagne" />,
    title: 'Concept Design',
    description: 'Bespoke conceptualization that captures your unique vision through mood boards, 3D renderings, and material curation.',
    features: ['Mood Boards', '3D Visualizations', 'Material Curation'],
    gradient: 'from-purple-50 to-pink-100'
  },
  {
    icon: <HomeIcon className="w-8 h-8 text-champagne" />,
    title: 'Residential Interiors',
    description: 'Transforming houses into personalized sanctuaries with unparalleled attention to luxury and comfort.',
    features: ['Custom Furnishings', 'Lighting Design', 'Art Curation'],
    gradient: 'from-green-50 to-emerald-100'
  },
  {
    icon: <Building className="w-8 h-8 text-champagne" />,
    title: 'Commercial Spaces',
    description: 'Elevating brand identity through innovative workspace design that inspires creativity and productivity.',
    features: ['Brand Integration', 'Ergonomic Design', 'Technology Integration'],
    gradient: 'from-orange-50 to-amber-100'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-warm-white via-charcoal/5 to-champagne/5">
      {/* Premium Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne/10 via-charcoal/10 to-champagne/10"></div>
        <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/10 rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={14} className="text-champagne" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-charcoal">Premium Services</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-serif text-charcoal mb-6 leading-tight">
              Our <span className="italic text-champagne">Services</span>
            </h1>
            <p className="text-charcoal/60 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Comprehensive interior design solutions tailored to bring your most ambitious visions to life with uncompromising quality.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Premium Services Grid */}
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                delay: index * 0.15, 
                duration: 0.8,
                type: "spring",
                bounce: 0.2
              }}
              className="group relative"
            >
              {/* Premium Card */}
              <div className={`relative h-full p-12 rounded-2xl border border-charcoal/10 overflow-hidden transition-all duration-700 hover:border-champagne/50 hover:shadow-2xl bg-white/80 backdrop-blur-sm`}>
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border-2 border-champagne/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border border-champagne/10 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 delay-100"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-charcoal rounded-2xl shadow-lg group-hover:bg-champagne transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Title and Description */}
                  <h3 className="text-3xl font-serif text-charcoal mb-6 group-hover:text-champagne transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex}
                        className="flex items-center gap-3 text-charcoal/60 group-hover:text-charcoal transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + featureIndex * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-champagne rounded-full"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button 
                    className="flex items-center gap-3 text-charcoal group-hover:text-champagne font-medium tracking-wider text-sm uppercase transition-all duration-300 group-hover:gap-4"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Service
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-champagne/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Premium CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-charcoal to-charcoal/90 p-16 md:p-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
            </div>
            
            <div className="relative z-10">
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-champagne/20 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Sparkles size={14} className="text-champagne" />
                <span className="text-xs font-medium tracking-[0.3em] uppercase text-champagne">Ready to Begin</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-6xl font-serif text-warm-white mb-6 leading-tight">
                Let's Create Something <span className="italic text-champagne">Extraordinary</span>
              </h2>
              <p className="text-warm-white/70 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
                Transform your vision into reality with our award-winning design team. Your dream space awaits.
              </p>
              
              <motion.button 
                className="inline-flex items-center gap-3 bg-champagne text-charcoal px-8 py-4 rounded-full font-medium tracking-wider text-sm uppercase hover:bg-warm-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
