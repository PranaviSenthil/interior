import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Statistics from '../components/Statistics';
import BeforeAfterShowcase from '../components/BeforeAfterShowcase';
import Testimonials from '../components/Testimonials';
import AIVisualizer from '../components/AIVisualizer';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Statistics />
      <BeforeAfterShowcase />
      <Testimonials />
      <AIVisualizer />
    </motion.div>
  );
}
