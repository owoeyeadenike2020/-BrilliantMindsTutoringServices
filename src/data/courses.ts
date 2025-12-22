import { Calculator, Atom, BookOpen, GraduationCap, TrendingUp, Globe, Award } from 'lucide-react';

export type Course = {
  id: number;
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: any;
  color: string;
  subjects: string[];
  students: number;
  rating: number;
  duration: string;
  lessons: number;
  level: string;
  features: string[];
  curriculum: { week: string; topic: string }[];
};

export const courses: Course[] = [
   {
              id: 1,
              slug: "mathematics-mastery",
              title: "Mathematics Mastery",
              description: "From basics to advanced topics including calculus",
              fullDescription: "Master mathematics from fundamentals to advanced calculus. This comprehensive course covers algebra, geometry, trigonometry, and calculus with real-world applications. Perfect for students preparing for standardized tests or looking to strengthen their mathematical foundation.",
              icon: Calculator,
              color: "from-blue-500 to-cyan-500",
              subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
              students: 250,
              rating: 4.9,
              duration: "12 weeks",
              lessons: 48,
              level: "Beginner to Advanced",
            //   price: 299,
              features: [
                  "Live interactive sessions",
                  "Practice problem sets",
                  "Video tutorials",
                  "Progress tracking",
                  "Certificate of completion"
              ],
              curriculum: [
                  { week: "Week 1-3", topic: "Algebra Fundamentals" },
                  { week: "Week 4-6", topic: "Geometry & Trigonometry" },
                  { week: "Week 7-9", topic: "Pre-Calculus" },
                  { week: "Week 10-12", topic: "Calculus Basics" }
              ]
          },
          {
              id: 2,
              slug: "physics-excellence",
              title: "Physics Excellence",
              description: "Master mechanics, electricity, and modern physics",
              fullDescription: "Dive deep into the world of physics with hands-on experiments and theoretical understanding. From classical mechanics to quantum physics, this course provides a solid foundation for aspiring scientists and engineers.",
              icon: Atom,
              color: "from-purple-500 to-pink-500",
              subjects: ["Mechanics", "Electricity", "Waves", "Quantum"],
              students: 180,
              rating: 4.8,
              duration: "10 weeks",
              lessons: 40,
              level: "Intermediate",
              features: [
                  "Virtual lab experiments",
                  "Problem-solving workshops",
                  "Real-world applications",
                  "Weekly quizzes",
                  "Expert Q&A sessions"
              ],
              curriculum: [
                  { week: "Week 1-2", topic: "Mechanics & Motion" },
                  { week: "Week 3-5", topic: "Energy & Electricity" },
                  { week: "Week 6-8", topic: "Waves & Optics" },
                  { week: "Week 9-10", topic: "Modern Physics" }
              ]
          },
          {
              id: 3,
              slug: "chemistry-foundations",
              title: "Chemistry Foundations",
              description: "Organic, inorganic, and physical chemistry",
              fullDescription: "Explore the fascinating world of chemistry through interactive lessons and virtual lab work. This course covers all major branches of chemistry with emphasis on practical applications and exam preparation.",
              icon: BookOpen,
              color: "from-green-500 to-emerald-500",
              subjects: ["Organic", "Inorganic", "Physical", "Lab Skills"],
              students: 200,
              rating: 4.9,
              duration: "12 weeks",
              lessons: 45,
              level: "All Levels",
              features: [
                  "Virtual chemistry lab",
                  "3D molecular visualization",
                  "Safety protocols training",
                  "Reaction mechanism videos",
                  "Practice experiments"
              ],
              curriculum: [
                  { week: "Week 1-3", topic: "Inorganic Chemistry" },
                  { week: "Week 4-6", topic: "Organic Chemistry" },
                  { week: "Week 7-9", topic: "Physical Chemistry" },
                  { week: "Week 10-12", topic: "Laboratory Techniques" }
              ]
          },
          {
              id: 4,
              slug: "biology-essentials",
              title: "Biology Essentials",
              description: "Cell biology, genetics, and human anatomy",
              fullDescription: "Journey through the living world from microscopic cells to complex organisms. This comprehensive biology course prepares students for advanced studies in life sciences and medicine.",
              icon: GraduationCap,
              color: "from-teal-500 to-green-500",
              subjects: ["Cell Biology", "Genetics", "Anatomy", "Ecology"],
              students: 190,
              rating: 4.8,
              duration: "12 weeks",
              lessons: 44,
              level: "Beginner to Intermediate",
              features: [
                  "3D anatomy models",
                  "Genetics simulations",
                  "Microscopy tutorials",
                  "Dissection videos",
                  "Species identification"
              ],
              curriculum: [
                  { week: "Week 1-3", topic: "Cell Structure & Function" },
                  { week: "Week 4-6", topic: "Genetics & Evolution" },
                  { week: "Week 7-9", topic: "Human Anatomy" },
                  { week: "Week 10-12", topic: "Ecology & Environment" }
              ]
          },
          {
              id: 5,
              slug: "jamb-preparation", 
              title: "JAMB Preparation",
              description: "Comprehensive prep for Nigerian university entrance",
              fullDescription: "Complete JAMB/UTME preparation course covering all subjects with focus on high-yield topics. Includes full-length practice tests and personalized study plans to maximize your score.",
              icon: TrendingUp,
              color: "from-orange-500 to-red-500",
              subjects: ["English", "Math", "Sciences", "Mock Tests"],
              students: 320,
              rating: 5.0,
              duration: "8 weeks",
              lessons: 40,
              level: "Test Prep",
              features: [
                  "Full-length mock exams",
                  "Subject-specific drills",
                  "Time management strategies",
                  "Score improvement guarantee",
                  "CBT practice interface"
              ],
              curriculum: [
                  { week: "Week 1-2", topic: "English & Comprehension" },
                  { week: "Week 3-4", topic: "Mathematics Review" },
                  { week: "Week 5-6", topic: "Science Subjects" },
                  { week: "Week 7-8", topic: "Mock Tests & Review" }
              ]
          },
          {
              id: 6,
              slug: "sat-test-prep",
              title: "SAT Test Prep",
              description: "Achieve your target score for US universities",
              fullDescription: "Comprehensive SAT preparation with proven strategies to boost your score. Covers all sections with emphasis on time management and test-taking techniques.",
              icon: Globe,
              color: "from-indigo-500 to-purple-500",
              subjects: ["Math", "Reading", "Writing", "Practice Tests"],
              students: 150,
              rating: 4.9,
              duration: "10 weeks",
              lessons: 38,
              level: "Test Prep",
              features: [
                  "Official practice tests",
                  "Score predictor tool",
                  "Essay writing feedback",
                  "Video explanations",
                  "Study schedule planner"
              ],
              curriculum: [
                  { week: "Week 1-3", topic: "Math Fundamentals" },
                  { week: "Week 4-6", topic: "Reading & Writing" },
                  { week: "Week 7-8", topic: "Advanced Strategies" },
                  { week: "Week 9-10", topic: "Full Practice Tests" }
              ]
          },
          {
              id: 7,
              slug: "waec-neco-success",
              title: "WAEC/NECO Success",
              description: "Excel in your senior school certificate exams",
              fullDescription: "Targeted preparation for WAEC and NECO examinations with focus on high-scoring techniques and thorough subject coverage. Past questions and marking schemes included.",
              icon: Award,
              color: "from-yellow-500 to-orange-500",
              subjects: ["Core Subjects", "Sciences", "Essay Writing", "Practicals"],
              students: 400,
              rating: 4.9,
              duration: "16 weeks",
              lessons: 60,
              level: "Senior Secondary",
              features: [
                  "Past questions bank",
                  "Practical exam prep",
                  "Essay writing mastery",
                  "Subject-specific tips",
                  "Exam day strategies"
              ],
              curriculum: [
                  { week: "Week 1-4", topic: "Core Subjects Review" },
                  { week: "Week 5-8", topic: "Science Subjects" },
                  { week: "Week 9-12", topic: "Practical Sessions" },
                  { week: "Week 13-16", topic: "Mock Exams & Revision" }
              ]
          },
          {
              id: 8,
              slug: "igcse-program",
              title: "IGCSE Program",
              description: "International curriculum preparation",
              fullDescription: "Complete IGCSE preparation following Cambridge curriculum standards. Comprehensive coverage of all subjects with focus on coursework and examination techniques.",
              icon: Globe,
              color: "from-pink-500 to-rose-500",
              subjects: ["English", "Math", "Sciences", "Coursework"],
              students: 120,
              rating: 4.8,
              duration: "14 weeks",
              lessons: 52,
              level: "Secondary",
              features: [
                  "Cambridge-aligned content",
                  "Coursework guidance",
                  "International standards",
                  "Portfolio development",
                  "Examiner insights"
              ],
              curriculum: [
                  { week: "Week 1-4", topic: "Core IGCSE Subjects" },
                  { week: "Week 5-8", topic: "Coursework Development" },
                  { week: "Week 9-11", topic: "Exam Techniques" },
                  { week: "Week 12-14", topic: "Final Preparation" }
              ]
          },
          {
              id: 9,
              slug: "cape-csec-prep",
              title: "CAPE/CSEC Prep",
              description: "Caribbean examination preparation",
              fullDescription: "Specialized preparation for Caribbean Advanced Proficiency Examination and Caribbean Secondary Education Certificate. Covers all units with emphasis on internal assessments.",
              icon: TrendingUp,
              color: "from-cyan-500 to-blue-500",
              subjects: ["Math", "Sciences", "Humanities", "Exam Skills"],
              students: 95,
              rating: 4.9,
              duration: "12 weeks",
              lessons: 46,
              level: "Advanced",
              features: [
                  "Unit-based learning",
                  "SBA support",
                  "Past papers review",
                  "Caribbean focus",
                  "Regional standards"
              ],
              curriculum: [
                  { week: "Week 1-3", topic: "Unit 1 Content" },
                  { week: "Week 4-6", topic: "Unit 2 Content" },
                  { week: "Week 7-9", topic: "SBA & IA Preparation" },
                  { week: "Week 10-12", topic: "Exam Practice" }
              ]
          }
];