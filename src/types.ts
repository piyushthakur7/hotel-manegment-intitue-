export interface Course {
  id: string;
  title: string;
  duration: string;
  eligibility: string;
  accreditation?: string;
  type: 'Degree' | 'Diploma' | 'Certificate';
}

export interface StudentSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  courseId: string;
  message: string;
  createdAt: any;
}
