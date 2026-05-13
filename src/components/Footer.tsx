import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ArrowRight, Sparkles, Globe, MessageCircle, User } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Globe size={18} />, label: 'Website', href: '#' },
    { icon: <MessageCircle size={18} />, label: 'Message', href: '#' },
    { icon: <User size={18} />, label: 'Profile', href: '#' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-charcoal to-charcoal/95 text-warm-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23D4AF37%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 md:px-12 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <Link to="/" className="group inline-block mb-8">
                <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter">
                  YOUR<span className="text-champagne italic group-hover:text-warm-white transition-colors">BRAND</span>
                </h2>
              </Link>
              
              <p className="text-warm-white/70 leading-relaxed mb-8 max-w-lg">
                Elevating spaces through sophisticated design. We specialize in ultra-premium residential and commercial interiors that blend timeless elegance with modern functionality.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="group relative w-12 h-12 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-all duration-300"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <div className="text-warm-white/80 group-hover:text-charcoal transition-colors">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Explore Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="font-serif text-2xl mb-8 text-champagne flex items-center gap-2">
                <Sparkles size={16} />
                Explore
              </h3>
              <ul className="space-y-4">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <Link 
                      to={link.path} 
                      className="group flex items-center gap-2 text-warm-white/80 hover:text-champagne transition-all duration-300 text-lg font-light"
                    >
                      <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transform translate-x-2 transition-all duration-300" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="font-serif text-2xl mb-8 text-champagne flex items-center gap-2">
                <MapPin size={16} />
                Contact
              </h3>
              <div className="space-y-6">
                <motion.div 
                  className="group flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-champagne/20 rounded-lg flex items-center justify-center group-hover:bg-champagne/30 transition-colors">
                    <MapPin size={18} className="text-champagne" />
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-wider uppercase text-champagne mb-1">Studio</div>
                    <div className="text-warm-white/80 leading-relaxed">
                      123 Design District<br />Metropolis, NY 10001
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-champagne/20 rounded-lg flex items-center justify-center group-hover:bg-champagne/30 transition-colors">
                    <Phone size={18} className="text-champagne" />
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-wider uppercase text-champagne mb-1">Phone</div>
                    <a href="tel:+15551234567" className="text-warm-white/80 hover:text-champagne transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-champagne/20 rounded-lg flex items-center justify-center group-hover:bg-champagne/30 transition-colors">
                    <Mail size={18} className="text-champagne" />
                  </div>
                  <div>
                    <div className="text-xs font-medium tracking-wider uppercase text-champagne mb-1">Email</div>
                    <a href="mailto:hello@yourbrand.com" className="text-warm-white/80 hover:text-champagne transition-colors">
                      hello@yourbrand.com
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Premium Bottom Bar */}
        <div className="relative border-t border-warm-white/10">
          <div className="container mx-auto px-6 md:px-12 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="w-2 h-2 bg-champagne rounded-full"></div>
                <span className="text-warm-white/60 text-sm font-medium">
                  Designing spaces. Elevating lives.
                </span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-warm-white/50 text-sm">
                  &copy; {currentYear} Your Brand. All rights reserved.
                </span>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-warm-white/50 hover:text-champagne transition-colors text-sm">Privacy</a>
                  <a href="#" className="text-warm-white/50 hover:text-champagne transition-colors text-sm">Terms</a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
