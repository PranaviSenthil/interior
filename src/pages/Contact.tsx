import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, ArrowRight } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "hello@yourbrand.com", href: "mailto:hello@yourbrand.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: <MapPin className="w-5 h-5" />, label: "Studio", value: "123 Design District, NY 10001", href: "#" },
    { icon: <Clock className="w-5 h-5" />, label: "Hours", value: "Mon-Fri 9AM-6PM", href: "#" }
  ];

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
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-charcoal">Get in Touch</span>
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-serif text-charcoal mb-6 leading-tight">
              Let's <span className="italic text-champagne">Talk</span>
            </h1>
            <p className="text-charcoal/60 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Ready to transform your space? We'd love to hear about your project and bring your vision to life.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-serif text-charcoal mb-8">Contact Information</h2>
              <p className="text-charcoal/60 leading-relaxed mb-8">
                Reach out to us through any of these channels. We're here to help bring your design dreams to reality.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="group flex items-start gap-4 p-4 rounded-2xl border border-charcoal/10 hover:border-champagne/30 hover:bg-champagne/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center group-hover:bg-champagne transition-colors duration-300">
                    <div className="text-warm-white group-hover:text-charcoal transition-colors">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="text-xs font-medium tracking-wider uppercase text-champagne mb-1">{info.label}</div>
                    <div className="text-charcoal font-medium">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-sm font-medium tracking-wider uppercase text-charcoal mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {['IG', 'FB', 'LI', 'PI'].map((social, _index) => (
                  <motion.a
                    key={social}
                    href="#"
                    className="w-12 h-12 rounded-full border border-charcoal/20 flex items-center justify-center hover:border-champagne hover:bg-champagne hover:text-charcoal transition-all duration-300 text-charcoal/60 hover:text-charcoal font-medium text-sm"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Premium Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-champagne/5 to-charcoal/5 rounded-3xl"></div>
              
              <motion.form 
                className="relative z-10 p-12 md:p-16 rounded-3xl bg-white/90 backdrop-blur-sm border border-charcoal/10 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="mb-12">
                  <h2 className="text-3xl font-serif text-charcoal mb-4">Start Your Project</h2>
                  <p className="text-charcoal/60">
                    Tell us about your vision and let's create something extraordinary together.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-charcoal/60 flex items-center gap-2">
                      <div className="w-1 h-1 bg-champagne rounded-full"></div>
                      First Name
                    </label>
                    <motion.input 
                      type="text" 
                      className="w-full px-4 py-4 bg-charcoal/5 border border-charcoal/20 rounded-xl focus:outline-none focus:border-champagne focus:bg-white transition-all duration-300"
                      placeholder="Jane"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-charcoal/60 flex items-center gap-2">
                      <div className="w-1 h-1 bg-champagne rounded-full"></div>
                      Last Name
                    </label>
                    <motion.input 
                      type="text" 
                      className="w-full px-4 py-4 bg-charcoal/5 border border-charcoal/20 rounded-xl focus:outline-none focus:border-champagne focus:bg-white transition-all duration-300"
                      placeholder="Doe"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-charcoal/60 flex items-center gap-2">
                      <div className="w-1 h-1 bg-champagne rounded-full"></div>
                      Email Address
                    </label>
                    <motion.input 
                      type="email" 
                      className="w-full px-4 py-4 bg-charcoal/5 border border-charcoal/20 rounded-xl focus:outline-none focus:border-champagne focus:bg-white transition-all duration-300"
                      placeholder="jane@example.com"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-charcoal/60 flex items-center gap-2">
                      <div className="w-1 h-1 bg-champagne rounded-full"></div>
                      Phone Number
                    </label>
                    <motion.input 
                      type="tel" 
                      className="w-full px-4 py-4 bg-charcoal/5 border border-charcoal/20 rounded-xl focus:outline-none focus:border-champagne focus:bg-white transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-xs font-medium uppercase tracking-widest text-charcoal/60 flex items-center gap-2 mb-2">
                    <div className="w-1 h-1 bg-champagne rounded-full"></div>
                    Project Details
                  </label>
                  <motion.textarea 
                    rows={6}
                    className="w-full px-4 py-4 bg-charcoal/5 border border-charcoal/20 rounded-xl focus:outline-none focus:border-champagne focus:bg-white transition-all duration-300 resize-none"
                    placeholder="Tell us about your vision, timeline, budget, and any specific requirements..."
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="mb-8">
                  <label className="text-xs font-medium uppercase tracking-widest text-charcoal/60 flex items-center gap-2 mb-4">
                    <div className="w-1 h-1 bg-champagne rounded-full"></div>
                    Project Type
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Residential', 'Commercial', 'Hospitality', 'Other'].map((type) => (
                      <motion.label
                        key={type}
                        className="relative cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <input type="radio" name="projectType" className="sr-only peer" />
                        <div className="px-4 py-3 bg-charcoal/5 border border-charcoal/20 rounded-xl text-center text-sm font-medium tracking-wider uppercase text-charcoal/60 peer-checked:bg-champagne peer-checked:text-charcoal peer-checked:border-champagne transition-all duration-300 hover:border-champagne/50">
                          {type}
                        </div>
                      </motion.label>
                    ))}
                  </div>
                </div>

                <motion.button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-charcoal to-charcoal/90 text-warm-white py-5 rounded-2xl font-medium tracking-wider uppercase text-sm hover:from-champagne hover:to-champagne/90 transition-all duration-500 flex items-center justify-center gap-3 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                  Submit Inquiry
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
