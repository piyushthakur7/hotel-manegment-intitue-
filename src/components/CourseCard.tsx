import React from 'react';
import { Course } from '../types';
import { Clock, GraduationCap, CheckCircle2 } from 'lucide-react';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
          {course.type}
        </span>
        <GraduationCap className="w-6 h-6 text-primary/40" />
      </div>
      
      <h3 className="text-2xl font-bold mb-4 flex-grow">{course.title}</h3>
      
      <div className="space-y-3 mb-8">
        <div className="flex items-center gap-3 text-gray-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{course.duration}</span>
        </div>
        <div className="flex items-center gap-3 text-gray-600">
          <CheckCircle2 className="w-4 h-4" />
          <span className="text-sm">Eligibility: {course.eligibility}</span>
        </div>
        {course.accreditation && (
          <div className="flex items-center gap-3 text-gray-600">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm">{course.accreditation}</span>
          </div>
        )}
      </div>
      
      <a 
        href="#admission" 
        className="w-full py-3 border border-primary text-primary rounded-full text-center font-medium hover:bg-primary hover:text-white transition-all"
      >
        Enquire Now
      </a>
    </div>
  );
}
