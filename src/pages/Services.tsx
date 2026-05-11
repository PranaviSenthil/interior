import { motion } from 'framer-motion';
import { Layout, PenTool, Home as HomeIcon, Building } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-8 h-8 text-champagne" />,
    title: 'Space Planning',
    description: 'Strategic layout optimization to maximize flow, function, and aesthetic appeal in any environment.'
  },
  {
    icon: <PenTool className="w-8 h-8 text-champagne" />,
    title: 'Concept Design',
    description: 'Bespoke conceptualization that captures your unique vision through mood boards, 3D renderings, and material curation.'
  },
  {
    icon: <HomeIcon className="w-8 h-8 text-champagne" />,
    title: 'Residential Interiors',
    description: 'Transforming houses into personalized sanctuaries with unparalleled attention to luxury and comfort.'
  },
  {
    icon: <Building className="w-8 h-8 text-champagne" />,
    title: 'Commercial Spaces',
    description: 'Elevating brand identity through innovative workspace design that inspires creativity and productivity.'
  }
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-champagne mb-4 block">Expertise</span>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Our Services</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Comprehensive interior design solutions tailored to bring your most ambitious visions to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-charcoal/5 p-12 rounded-sm border border-charcoal/10 hover:border-champagne/50 transition-colors group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 origin-left">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif text-charcoal mb-4">{service.title}</h3>
              <p className="text-charcoal/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
