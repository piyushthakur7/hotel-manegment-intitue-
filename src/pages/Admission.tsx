import React from 'react';
import AdmissionForm from '../components/AdmissionForm';
import { FileText, PhoneCall, Calendar, CheckCircle } from 'lucide-react';

export default function Admission() {
  const steps = [
    { icon: FileText, title: 'Application', desc: 'Fill out the online application form with your details.' },
    { icon: PhoneCall, title: 'Counselling', desc: 'Our experts will call you to discuss your career goals.' },
    { icon: Calendar, title: 'Interview', desc: 'A brief interaction to understand your aptitude.' },
    { icon: CheckCircle, title: 'Enrollment', desc: 'Complete the documentation and secure your seat.' },
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Admission 2026</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Your Future in <span className="text-primary italic">Hospitality</span> Starts Here
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Join the 2026-27 batch of FIHM Noida. We follow a holistic admission process to identify passionate individuals ready for the global stage.
            </p>

            <div className="space-y-12 mb-12">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center shrink-0">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                    <p className="text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-secondary p-8 rounded-3xl border border-gray-100">
              <h4 className="font-bold mb-4">Need Help?</h4>
              <p className="text-gray-600 mb-6">Our admission counselors are available Monday to Saturday, 9 AM to 6 PM.</p>
              <a href="tel:+919870599777" className="text-2xl font-bold text-primary hover:underline">+91 98705 99777</a>
            </div>
          </div>

          <div className="sticky top-32">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
  );
}
