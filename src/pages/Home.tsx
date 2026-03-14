import React from 'react';
import Hero from '../components/Hero';
import { motion } from 'motion/react';
import { ArrowUpRight, Globe, Star, ShieldCheck, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const features = [
    { title: 'Culinary Mastery', desc: 'Advanced professional training in global cuisines and pastry arts.', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800' },
    { title: 'Luxury Management', desc: 'Strategic training in five-star hotel operations and guest relations.', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800' },
    { title: 'Global Internships', desc: 'Exclusive opportunities in premium properties across Maldives & Europe.', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800' }
  ];

  return (
    <div className="bg-secondary">
      <Hero />
      
      {/* Editorial Featured Section */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Elite Programs</span>
              <h2 className="text-5xl md:text-7xl font-bold leading-[0.9] text-primary">
                A Curriculum <br />
                <span className="text-accent italic font-serif">Without Boundaries.</span>
              </h2>
            </div>
            <Link to="/courses" className="btn-premium border border-primary/10 text-primary hover:bg-primary hover:text-white mb-2 group">
              Explore All Programs
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {features.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-premium">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-white/70 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - High End Asymmetry */}
      <section className="py-32 bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
                  alt="Philosophy" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2rem] hidden md:block border-accent/20">
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-primary text-lg font-serif italic mb-2">"True luxury is in the details."</p>
                <p className="text-primary/40 text-[10px] font-bold uppercase tracking-widest">— Director's Philosophy</p>
              </div>
            </div>
            
            <div>
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block">Our Vision</span>
              <h2 className="text-5xl md:text-7xl font-bold mb-10 leading-[0.9]">
                Beyond <br />
                <span className="text-accent font-serif italic">Education.</span>
              </h2>
              <p className="text-xl text-white/60 mb-12 font-light leading-relaxed">
                At FIHM, we don't just teach management; we cultivate an obsession for excellence. 
                Our approach blends traditional hospitality values with cutting-edge global innovation.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Global Presence</h4>
                    <p className="text-xs text-white/40 font-light">Worldwide industry tie-ups.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Accredited Elite</h4>
                    <p className="text-xs text-white/40 font-light">International certifications.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
      </section>

      {/* CTA / Final Word */}
      <section className="py-44 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-8 block">Next Enrollment</span>
          <h2 className="text-6xl md:text-8xl font-bold text-primary mb-12 leading-[0.9]">
            The World is <br />
            <span className="text-accent italic font-serif">Waiting.</span>
          </h2>
          <Link to="/admission" className="btn-premium bg-primary text-white px-12 py-6 text-sm uppercase tracking-[0.2em] font-bold hover:bg-accent shadow-2xl transition-all duration-700">
            Apply for Admission 2026
          </Link>
        </div>
      </section>
    </div>
  );
}
