import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfterShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const onInteractionStart = (clientX: number) => {
    setIsDragging(true);
    handleMove(clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="py-32 bg-warm-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium tracking-[0.2em] uppercase text-champagne mb-4">
            The Transformation
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-charcoal">
            Vision to Reality
          </h3>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-sm cursor-ew-resize select-none shadow-2xl"
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
            onMouseDown={(e) => onInteractionStart(e.clientX)}
            onTouchStart={(e) => onInteractionStart(e.touches[0].clientX)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="After Transformation" 
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-6 right-6 bg-warm-white/80 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-medium tracking-wider uppercase text-charcoal shadow-sm">
                After
              </div>
            </div>

            {/* Before Image (Clipped) */}
            <div 
              className="absolute inset-0 z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Before Transformation" 
                className="w-full h-full object-cover pointer-events-none grayscale sepia-[0.2]"
              />
              <div className="absolute top-6 left-6 bg-charcoal/80 backdrop-blur-sm px-4 py-2 rounded-sm text-sm font-medium tracking-wider uppercase text-warm-white shadow-sm">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute inset-y-0 z-20 w-1 bg-warm-white flex items-center justify-center shadow-[0_0_10px_rgba(0,0,0,0.3)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-10 h-10 bg-warm-white rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 ml-[2px]">
                <div className="flex gap-1">
                  <div className="w-0.5 h-4 bg-charcoal/30 rounded-full" />
                  <div className="w-0.5 h-4 bg-charcoal/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
