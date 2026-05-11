import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white py-16">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="text-3xl font-serif font-bold tracking-tighter mb-6 block">
            ANTI<span className="text-champagne italic">INTERIOR</span>
          </Link>
          <p className="text-warm-white/70 max-w-md mb-8">
            Elevating spaces through sophisticated design. We specialize in ultra-premium residential and commercial interiors that blend timeless elegance with modern functionality.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-colors font-sans text-sm font-medium">
              IG
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-warm-white/20 flex items-center justify-center hover:bg-champagne hover:border-champagne transition-colors font-sans text-sm font-medium">
              IN
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-champagne">Explore</h4>
          <ul className="space-y-3">
            <li><Link to="/portfolio" className="hover:text-champagne transition-colors">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-champagne transition-colors">Services</Link></li>
            <li><Link to="/about" className="hover:text-champagne transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl mb-6 text-champagne">Contact</h4>
          <ul className="space-y-4 text-warm-white/80">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-champagne shrink-0 mt-1" />
              <span>123 Design District<br />Metropolis, NY 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-champagne shrink-0" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-champagne shrink-0" />
              <span>hello@anti-interior.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-warm-white/10 text-center text-sm text-warm-white/50">
        <p>&copy; {new Date().getFullYear()} Anti-Interior Design. All rights reserved.</p>
      </div>
    </footer>
  );
}
