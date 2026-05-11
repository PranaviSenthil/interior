import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Anti-Interior transformed our penthouse into a masterpiece of modern luxury. Their attention to detail and understanding of space is unparalleled.",
    author: "Eleanor Vance",
    role: "Private Client, Manhattan"
  },
  {
    id: 2,
    quote: "The team's ability to blend functionality with breathtaking aesthetics resulted in an office space that completely elevated our company culture.",
    author: "James Sterling",
    role: "CEO, Sterling Tech"
  },
  {
    id: 3,
    quote: "Working with them was a seamless experience. They listened to our vision and executed it with a level of sophistication we didn't know was possible.",
    author: "Sofia Rossi",
    role: "Boutique Hotel Owner"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-charcoal text-warm-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-champagne/5 rounded-l-full blur-3xl transform translate-x-1/4" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={48} className="text-champagne mx-auto mb-12 opacity-50" />
          
          <div className="relative h-[250px] md:h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <p className="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
                  "{testimonials[currentIndex].quote}"
                </p>
                <div>
                  <h4 className="font-medium tracking-wider uppercase text-sm">{testimonials[currentIndex].author}</h4>
                  <p className="text-warm-white/50 text-sm mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-champagne hover:border-champagne hover:text-charcoal transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-champagne hover:border-champagne hover:text-charcoal transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
