import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-warm-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium tracking-[0.2em] uppercase text-champagne mb-4 block">Get in Touch</span>
          <h1 className="text-5xl md:text-7xl font-serif text-charcoal mb-6">Let's Talk.</h1>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg">
            Ready to transform your space? We'd love to hear about your project.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 md:p-14 rounded-sm shadow-xl border border-charcoal/5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-charcoal/60 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-charcoal/20 py-3 bg-transparent focus:outline-none focus:border-champagne transition-colors"
                  placeholder="Jane"
                />
              </div>
              <div>
                <label className="block text-xs font-medium uppercase tracking-widest text-charcoal/60 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full border-b border-charcoal/20 py-3 bg-transparent focus:outline-none focus:border-champagne transition-colors"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-medium uppercase tracking-widest text-charcoal/60 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full border-b border-charcoal/20 py-3 bg-transparent focus:outline-none focus:border-champagne transition-colors"
                placeholder="jane@example.com"
              />
            </div>

            <div className="mb-12">
              <label className="block text-xs font-medium uppercase tracking-widest text-charcoal/60 mb-2">Project Details</label>
              <textarea 
                rows={4}
                className="w-full border-b border-charcoal/20 py-3 bg-transparent focus:outline-none focus:border-champagne transition-colors resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>

            <button 
              className="w-full bg-charcoal text-warm-white py-4 font-medium tracking-widest uppercase text-sm hover:bg-champagne transition-colors"
            >
              Submit Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
