import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our courses or the admission process? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Call Us</h3>
            <p className="text-gray-500 mb-4">Speak directly with our counselors.</p>
            <a href="tel:+919870599777" className="text-lg font-bold text-primary hover:underline">+91 98705 99777</a>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Email Us</h3>
            <p className="text-gray-500 mb-4">Send us your queries anytime.</p>
            <a href="mailto:info@fihm.in" className="text-lg font-bold text-primary hover:underline">info@fihm.in</a>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-4">Visit Us</h3>
            <p className="text-gray-500 mb-4">Our campus is open for visits.</p>
            <p className="text-lg font-bold">A-60C, Sector 63, Noida, UP</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-secondary rounded-[3rem] p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-8">Campus Hours</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-gray-600">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="font-medium">Saturday</span>
                <span className="text-gray-600">10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span className="font-medium">Sunday</span>
                <span className="text-red-500 font-bold">Closed</span>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-2xl flex items-center gap-4">
              <MessageSquare className="w-8 h-8 text-primary" />
              <div>
                <h4 className="font-bold">Chat with us</h4>
                <p className="text-sm text-gray-500">Available on WhatsApp for quick queries.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 min-h-[400px] relative">
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-400 font-medium">Interactive Map Loading...</p>
              </div>
            </div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.712683935245!2d77.314856!3d28.578385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzQyLjIiTiA3N8KwMTgnNTMuNSJF!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 grayscale"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
