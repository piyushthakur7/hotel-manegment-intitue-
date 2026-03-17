import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-primary flex items-center gap-2">
              FIHM <span className="text-accent">ONLINE</span>
            </h2>
            <p className="text-primary/60 max-w-sm mb-8 leading-relaxed font-light">
              Vocational Training Partner with Mangalayatan University. Offering UGC & NAAC A+ accredited Online Degrees for the leaders of tomorrow.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl border border-accent/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 shadow-sm">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">University Programs</h4>
            <ul className="space-y-4 text-primary/60 text-sm">
              <li><Link to="/courses" className="hover:text-accent flex items-center gap-2">Online B.A<ExternalLink className="w-3 h-3" /></Link></li>
              <li><Link to="/courses" className="hover:text-accent flex items-center gap-2">Online BCA<ExternalLink className="w-3 h-3" /></Link></li>
              <li><Link to="/courses" className="hover:text-accent flex items-center gap-2">Online BBA<ExternalLink className="w-3 h-3" /></Link></li>
              <li><Link to="/courses" className="hover:text-accent">UG Diploma Courses</Link></li>
              <li><Link to="/courses" className="hover:text-accent">PG Online Courses</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 text-primary uppercase tracking-widest text-xs">Campus Info</h4>
            <ul className="space-y-6 text-primary/60 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="leading-relaxed">Aligarh-Mathura Highway, Beswan, Aligarh, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:+919319888888" className="hover:text-accent font-bold">+91-9319-888-888</a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <a href="mailto:info@muonline.ac.in" className="hover:text-accent block">info@muonline.ac.in</a>
                  <a href="mailto:admissions@muonline.ac.in" className="hover:text-accent block">admissions@muonline.ac.in</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-primary/40 uppercase tracking-widest">
          <div className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
            <p>© 2026 Mangalayatan University Online. All Rights Reserved.</p>
            <p className="flex items-center gap-1">
              Developed by <a href="https://www.webtotalsolution.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-primary transition-colors">Web Total Solution</a>
            </p>
          </div>
          <div className="flex gap-12">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
