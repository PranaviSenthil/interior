import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, categories } from '../data/projects';
import type { Category } from '../data/projects';
import { ArrowRight, Eye, Grid3x3, Filter } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');

  const filteredProjects = projects.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-warm-white to-charcoal/5">
      {/* Premium Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-champagne/10 to-charcoal/10"></div>
        <div className="relative container mx-auto px-6 md:px-12 pt-32 pb-16">
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
              <div className="w-2 h-2 bg-champagne rounded-full animate-pulse"></div>
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-charcoal">Curated Excellence</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-serif text-charcoal mb-6 leading-tight">
              Our <span className="italic text-champagne">Portfolio</span>
            </h1>
            <p className="text-charcoal/60 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              A meticulously curated collection of transformative spaces where luxury meets innovation.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Premium Controls */}
      <div className="container mx-auto px-6 md:px-12 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Enhanced Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-6"
          >
            <div className="flex items-center gap-2 text-charcoal/60">
              <Filter size={16} />
              <span className="text-sm font-medium tracking-wider uppercase">Filter</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-6 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-500 overflow-hidden group ${
                    activeCategory === category
                      ? 'bg-charcoal text-warm-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm border border-charcoal/20 text-charcoal hover:border-champagne hover:shadow-md'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory === category && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-champagne to-charcoal"
                      layoutId="activeCategory"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* View Mode Toggle */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-1 border border-charcoal/20"
          >
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'grid' ? 'bg-charcoal text-warm-white' : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <Grid3x3 size={14} />
              Grid
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                viewMode === 'masonry' ? 'bg-charcoal text-warm-white' : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              <Eye size={14} />
              Masonry
            </button>
          </motion.div>
        </div>

        {/* Results Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-charcoal/50 text-sm font-medium tracking-wider">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Project' : 'Projects'} Found
          </p>
        </motion.div>
      </div>

      {/* Enhanced Grid */}
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  bounce: 0.2
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative overflow-hidden rounded-sm ${
                  viewMode === 'masonry' && index % 3 === 0 ? 'md:row-span-2' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Premium Image Container */}
                <div className={`relative overflow-hidden bg-charcoal/5 ${
                  viewMode === 'grid' ? 'aspect-[4/5]' : index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'
                }`}>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                  
                  {/* Image */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-1000"
                    animate={{ 
                      scale: hoveredProject === project.id ? 1.1 : 1,
                      filter: hoveredProject === project.id ? 'brightness(0.7)' : 'brightness(1)'
                    }}
                  />
                  
                  {/* Premium Overlay Content */}
                  <motion.div 
                    className="absolute inset-0 flex flex-col justify-end p-8 z-20"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="space-y-3">
                      <motion.span 
                        className="text-champagne text-xs uppercase tracking-widest font-medium block"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ 
                          x: hoveredProject === project.id ? 0 : -20, 
                          opacity: hoveredProject === project.id ? 1 : 0 
                        }}
                        transition={{ delay: 0.1 }}
                      >
                        {project.category}
                      </motion.span>
                      <motion.h3 
                        className="text-warm-white text-2xl font-serif mb-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ 
                          x: hoveredProject === project.id ? 0 : -20, 
                          opacity: hoveredProject === project.id ? 1 : 0 
                        }}
                        transition={{ delay: 0.2 }}
                      >
                        {project.title}
                      </motion.h3>
                      <motion.p 
                        className="text-warm-white/80 text-sm mb-6 line-clamp-2"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ 
                          x: hoveredProject === project.id ? 0 : -20, 
                          opacity: hoveredProject === project.id ? 1 : 0 
                        }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                      <motion.div 
                        className="flex items-center justify-between"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ 
                          y: hoveredProject === project.id ? 0 : 20, 
                          opacity: hoveredProject === project.id ? 1 : 0 
                        }}
                        transition={{ delay: 0.4 }}
                      >
                        <span className="text-warm-white/70 text-sm">{project.location}</span>
                        <motion.button 
                          className="flex items-center gap-2 bg-champagne text-charcoal px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase hover:bg-warm-white transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View
                          <ArrowRight size={12} />
                        </motion.button>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <motion.div 
                      className="px-3 py-1 bg-champagne/90 backdrop-blur-sm rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 0 : 1,
                        scale: hoveredProject === project.id ? 0.8 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-charcoal text-xs font-medium tracking-wider uppercase">
                        {project.category}
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
