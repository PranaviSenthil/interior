import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const CountUp = ({ end, duration = 2, suffix = '' }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-serif text-charcoal">
      {count}{suffix}
    </span>
  );
};

export default function Statistics() {
  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Design Awards', value: 24, suffix: '' },
    { label: 'Years Experience', value: 12, suffix: '+' },
    { label: 'Happy Clients', value: 100, suffix: '%' },
  ];

  return (
    <section className="py-24 bg-charcoal/5 border-y border-charcoal/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm tracking-widest uppercase text-charcoal/60 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
