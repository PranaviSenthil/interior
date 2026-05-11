import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import type { Category } from '../data/projects';
import { ArrowRight } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Our Portfolio</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            A curated selection of our finest work, showcasing our commitment to unparalleled luxury and design excellence.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-charcoal text-warm-white'
                  : 'bg-transparent border border-charcoal/20 text-charcoal hover:border-charcoal'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden rounded-sm"
              >
                <div className="aspect-[4/5] w-full overflow-hidden bg-charcoal/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="absolute inset-0 bg-charcoal/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-champagne text-xs uppercase tracking-widest font-medium mb-2 block transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {project.category}
                  </span>
                  <h3 className="text-warm-white text-2xl font-serif mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {project.title}
                  </h3>
                  <p className="text-warm-white/70 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.location}
                  </p>
                  
                  <div className="flex items-center gap-2 text-warm-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    <span className="text-sm font-medium uppercase tracking-wider">View Project</span>
                    <ArrowRight size={16} className="text-champagne" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
