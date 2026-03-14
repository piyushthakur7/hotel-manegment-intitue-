import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Crafting the <span className="text-primary italic">Future</span> of Hospitality
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Founded with a vision to bridge the gap between academic learning and industry requirements, FIHM Noida has evolved into a premier destination for hospitality aspirants.
            </p>
            <p className="text-lg text-gray-500 leading-relaxed">
              Our journey began two decades ago with a simple mission: to provide quality education that is accessible, practical, and globally relevant. Today, we stand proud as a beacon of excellence, with alumni working in some of the world's most prestigious hotel chains.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1000" 
                alt="Institute" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary rounded-full -z-10" />
          </div>
        </div>

        {/* Mission & Vision - Brutalist Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-3xl overflow-hidden mb-32">
          <div className="bg-white p-12">
            <Target className="w-12 h-12 text-primary mb-8" />
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower students with professional skills and ethical values through innovative teaching and global industry exposure.
            </p>
          </div>
          <div className="bg-white p-12">
            <Eye className="w-12 h-12 text-primary mb-8" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be a globally recognized center of excellence in hospitality education, fostering leadership and innovation.
            </p>
          </div>
          <div className="bg-white p-12">
            <Heart className="w-12 h-12 text-primary mb-8" />
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Integrity, Excellence, Diversity, and a Student-First approach guide everything we do at FIHM.
            </p>
          </div>
        </div>

        {/* Why Choose Us - Split Layout */}
        <div className="bg-primary text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="max-w-3xl relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Why FIHM Noida?</h2>
            <div className="grid sm:grid-cols-2 gap-12">
              <div className="flex gap-4">
                <ShieldCheck className="w-8 h-8 shrink-0 text-secondary" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Industry Recognition</h4>
                  <p className="text-white/70 text-sm">Recognized by top hospitality bodies and international universities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-8 h-8 shrink-0 text-secondary" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Expert Faculty</h4>
                  <p className="text-white/70 text-sm">Learn from industry veterans with decades of international experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe className="w-8 h-8 shrink-0 text-secondary" />
                <div>
                  <h4 className="text-xl font-bold mb-2">Global Network</h4>
                  <p className="text-white/70 text-sm">Internships and placements in Maldives, Thailand, and Malaysia.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="w-8 h-8 shrink-0 text-secondary" />
                <div>
                  <h4 className="text-xl font-bold mb-2">100% Placements</h4>
                  <p className="text-white/70 text-sm">Our dedicated placement cell ensures every student gets a head start.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}
