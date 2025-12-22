




// "use client";
// import React, { useState, useEffect } from 'react';
// import { BookOpen, Atom, Calculator, Globe, TrendingUp, Star, Users, Clock, ChevronLeft, ChevronRight, Award, GraduationCap, ArrowLeft, X, Check, Calendar, Video, FileText, Trophy } from 'lucide-react';

// const CoursesApp = () => {
//     const [currentPage, setCurrentPage] = useState('home'); // 'home', 'all-courses', 'course-detail'
//     const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//     const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

//     useEffect(() => {
//         const handleResize = () => setWindowWidth(window.innerWidth);
//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     const courses = [
//         {
//             id: 1,
//             title: "Mathematics Mastery",
//             description: "From basics to advanced topics including calculus",
//             fullDescription: "Master mathematics from fundamentals to advanced calculus. This comprehensive course covers algebra, geometry, trigonometry, and calculus with real-world applications. Perfect for students preparing for standardized tests or looking to strengthen their mathematical foundation.",
//             icon: Calculator,
//             color: "from-blue-500 to-cyan-500",
//             subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
//             students: 250,
//             rating: 4.9,
//             duration: "12 weeks",
//             lessons: 48,
//             level: "Beginner to Advanced",
//             price: 299,
//             features: [
//                 "Live interactive sessions",
//                 "Practice problem sets",
//                 "Video tutorials",
//                 "Progress tracking",
//                 "Certificate of completion"
//             ],
//             curriculum: [
//                 { week: "Week 1-3", topic: "Algebra Fundamentals" },
//                 { week: "Week 4-6", topic: "Geometry & Trigonometry" },
//                 { week: "Week 7-9", topic: "Pre-Calculus" },
//                 { week: "Week 10-12", topic: "Calculus Basics" }
//             ]
//         },
//         {
//             id: 2,
//             title: "Physics Excellence",
//             description: "Master mechanics, electricity, and modern physics",
//             fullDescription: "Dive deep into the world of physics with hands-on experiments and theoretical understanding. From classical mechanics to quantum physics, this course provides a solid foundation for aspiring scientists and engineers.",
//             icon: Atom,
//             color: "from-purple-500 to-pink-500",
//             subjects: ["Mechanics", "Electricity", "Waves", "Quantum"],
//             students: 180,
//             rating: 4.8,
//             duration: "10 weeks",
//             lessons: 40,
//             level: "Intermediate",
//             price: 279,
//             features: [
//                 "Virtual lab experiments",
//                 "Problem-solving workshops",
//                 "Real-world applications",
//                 "Weekly quizzes",
//                 "Expert Q&A sessions"
//             ],
//             curriculum: [
//                 { week: "Week 1-2", topic: "Mechanics & Motion" },
//                 { week: "Week 3-5", topic: "Energy & Electricity" },
//                 { week: "Week 6-8", topic: "Waves & Optics" },
//                 { week: "Week 9-10", topic: "Modern Physics" }
//             ]
//         },
//         {
//             id: 3,
//             title: "Chemistry Foundations",
//             description: "Organic, inorganic, and physical chemistry",
//             fullDescription: "Explore the fascinating world of chemistry through interactive lessons and virtual lab work. This course covers all major branches of chemistry with emphasis on practical applications and exam preparation.",
//             icon: BookOpen,
//             color: "from-green-500 to-emerald-500",
//             subjects: ["Organic", "Inorganic", "Physical", "Lab Skills"],
//             students: 200,
//             rating: 4.9,
//             duration: "12 weeks",
//             lessons: 45,
//             level: "All Levels",
//             price: 289,
//             features: [
//                 "Virtual chemistry lab",
//                 "3D molecular visualization",
//                 "Safety protocols training",
//                 "Reaction mechanism videos",
//                 "Practice experiments"
//             ],
//             curriculum: [
//                 { week: "Week 1-3", topic: "Inorganic Chemistry" },
//                 { week: "Week 4-6", topic: "Organic Chemistry" },
//                 { week: "Week 7-9", topic: "Physical Chemistry" },
//                 { week: "Week 10-12", topic: "Laboratory Techniques" }
//             ]
//         },
//         {
//             id: 4,
//             title: "Biology Essentials",
//             description: "Cell biology, genetics, and human anatomy",
//             fullDescription: "Journey through the living world from microscopic cells to complex organisms. This comprehensive biology course prepares students for advanced studies in life sciences and medicine.",
//             icon: GraduationCap,
//             color: "from-teal-500 to-green-500",
//             subjects: ["Cell Biology", "Genetics", "Anatomy", "Ecology"],
//             students: 190,
//             rating: 4.8,
//             duration: "12 weeks",
//             lessons: 44,
//             level: "Beginner to Intermediate",
//             price: 279,
//             features: [
//                 "3D anatomy models",
//                 "Genetics simulations",
//                 "Microscopy tutorials",
//                 "Dissection videos",
//                 "Species identification"
//             ],
//             curriculum: [
//                 { week: "Week 1-3", topic: "Cell Structure & Function" },
//                 { week: "Week 4-6", topic: "Genetics & Evolution" },
//                 { week: "Week 7-9", topic: "Human Anatomy" },
//                 { week: "Week 10-12", topic: "Ecology & Environment" }
//             ]
//         },
//         {
//             id: 5,
//             title: "JAMB Preparation",
//             description: "Comprehensive prep for Nigerian university entrance",
//             fullDescription: "Complete JAMB/UTME preparation course covering all subjects with focus on high-yield topics. Includes full-length practice tests and personalized study plans to maximize your score.",
//             icon: TrendingUp,
//             color: "from-orange-500 to-red-500",
//             subjects: ["English", "Math", "Sciences", "Mock Tests"],
//             students: 320,
//             rating: 5.0,
//             duration: "8 weeks",
//             lessons: 40,
//             level: "Test Prep",
//             price: 249,
//             features: [
//                 "Full-length mock exams",
//                 "Subject-specific drills",
//                 "Time management strategies",
//                 "Score improvement guarantee",
//                 "CBT practice interface"
//             ],
//             curriculum: [
//                 { week: "Week 1-2", topic: "English & Comprehension" },
//                 { week: "Week 3-4", topic: "Mathematics Review" },
//                 { week: "Week 5-6", topic: "Science Subjects" },
//                 { week: "Week 7-8", topic: "Mock Tests & Review" }
//             ]
//         },
//         {
//             id: 6,
//             title: "SAT Test Prep",
//             description: "Achieve your target score for US universities",
//             fullDescription: "Comprehensive SAT preparation with proven strategies to boost your score. Covers all sections with emphasis on time management and test-taking techniques.",
//             icon: Globe,
//             color: "from-indigo-500 to-purple-500",
//             subjects: ["Math", "Reading", "Writing", "Practice Tests"],
//             students: 150,
//             rating: 4.9,
//             duration: "10 weeks",
//             lessons: 38,
//             level: "Test Prep",
//             price: 349,
//             features: [
//                 "Official practice tests",
//                 "Score predictor tool",
//                 "Essay writing feedback",
//                 "Video explanations",
//                 "Study schedule planner"
//             ],
//             curriculum: [
//                 { week: "Week 1-3", topic: "Math Fundamentals" },
//                 { week: "Week 4-6", topic: "Reading & Writing" },
//                 { week: "Week 7-8", topic: "Advanced Strategies" },
//                 { week: "Week 9-10", topic: "Full Practice Tests" }
//             ]
//         },
//         {
//             id: 7,
//             title: "WAEC/NECO Success",
//             description: "Excel in your senior school certificate exams",
//             fullDescription: "Targeted preparation for WAEC and NECO examinations with focus on high-scoring techniques and thorough subject coverage. Past questions and marking schemes included.",
//             icon: Award,
//             color: "from-yellow-500 to-orange-500",
//             subjects: ["Core Subjects", "Sciences", "Essay Writing", "Practicals"],
//             students: 400,
//             rating: 4.9,
//             duration: "16 weeks",
//             lessons: 60,
//             level: "Senior Secondary",
//             price: 329,
//             features: [
//                 "Past questions bank",
//                 "Practical exam prep",
//                 "Essay writing mastery",
//                 "Subject-specific tips",
//                 "Exam day strategies"
//             ],
//             curriculum: [
//                 { week: "Week 1-4", topic: "Core Subjects Review" },
//                 { week: "Week 5-8", topic: "Science Subjects" },
//                 { week: "Week 9-12", topic: "Practical Sessions" },
//                 { week: "Week 13-16", topic: "Mock Exams & Revision" }
//             ]
//         },
//         {
//             id: 8,
//             title: "IGCSE Program",
//             description: "International curriculum preparation",
//             fullDescription: "Complete IGCSE preparation following Cambridge curriculum standards. Comprehensive coverage of all subjects with focus on coursework and examination techniques.",
//             icon: Globe,
//             color: "from-pink-500 to-rose-500",
//             subjects: ["English", "Math", "Sciences", "Coursework"],
//             students: 120,
//             rating: 4.8,
//             duration: "14 weeks",
//             lessons: 52,
//             level: "Secondary",
//             price: 399,
//             features: [
//                 "Cambridge-aligned content",
//                 "Coursework guidance",
//                 "International standards",
//                 "Portfolio development",
//                 "Examiner insights"
//             ],
//             curriculum: [
//                 { week: "Week 1-4", topic: "Core IGCSE Subjects" },
//                 { week: "Week 5-8", topic: "Coursework Development" },
//                 { week: "Week 9-11", topic: "Exam Techniques" },
//                 { week: "Week 12-14", topic: "Final Preparation" }
//             ]
//         },
//         {
//             id: 9,
//             title: "CAPE/CSEC Prep",
//             description: "Caribbean examination preparation",
//             fullDescription: "Specialized preparation for Caribbean Advanced Proficiency Examination and Caribbean Secondary Education Certificate. Covers all units with emphasis on internal assessments.",
//             icon: TrendingUp,
//             color: "from-cyan-500 to-blue-500",
//             subjects: ["Math", "Sciences", "Humanities", "Exam Skills"],
//             students: 95,
//             rating: 4.9,
//             duration: "12 weeks",
//             lessons: 46,
//             level: "Advanced",
//             price: 359,
//             features: [
//                 "Unit-based learning",
//                 "SBA support",
//                 "Past papers review",
//                 "Caribbean focus",
//                 "Regional standards"
//             ],
//             curriculum: [
//                 { week: "Week 1-3", topic: "Unit 1 Content" },
//                 { week: "Week 4-6", topic: "Unit 2 Content" },
//                 { week: "Week 7-9", topic: "SBA & IA Preparation" },
//                 { week: "Week 10-12", topic: "Exam Practice" }
//             ]
//         }
//     ];

//     const coursesPerPage = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
//     const totalPages = Math.ceil(courses.length / coursesPerPage);

//     useEffect(() => {
//         if (!isAutoPlaying || currentPage !== 'home') return;
        
//         const timer = setInterval(() => {
//             setCurrentIndex((prev) => (prev + 1) % totalPages);
//         }, 5000);

//         return () => clearInterval(timer);
//     }, [isAutoPlaying, totalPages, currentPage]);

//     const nextSlide = () => {
//         setIsAutoPlaying(false);
//         setCurrentIndex((prev) => (prev + 1) % totalPages);
//     };

//     const prevSlide = () => {
//         setIsAutoPlaying(false);
//         setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
//     };

//     const goToSlide = (index: React.SetStateAction<number>) => {
//         setIsAutoPlaying(false);
//         setCurrentIndex(index);
//     };

//     const renderStars = (rating: number) => {
//         return Array(5).fill(0).map((_, i) => (
//             <Star
//                 key={i}
//                 className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
//             />
//         ));
//     };

//     const handleViewAllCourses = () => {
//         setCurrentPage('all-courses');
//         window.scrollTo(0, 0);
//     };

//     const handleCourseClick = (course: typeof courses[0]) => {
//         setSelectedCourse(course);
//         setCurrentPage('course-detail');
//         window.scrollTo(0, 0);
//     };

//     const handleBackToHome = () => {
//         setCurrentPage('home');
//         setSelectedCourse(null);
//         window.scrollTo(0, 0);
//     };

//     const handleBackToAllCourses = () => {
//         setCurrentPage('all-courses');
//         setSelectedCourse(null);
//         window.scrollTo(0, 0);
//     };

//     const displayedCourses = courses.slice(
//         currentIndex * coursesPerPage,
//         (currentIndex * coursesPerPage) + coursesPerPage
//     );

//     // Course Card Component
//     const CourseCard = ({ course, onClick }: { course: typeof courses[0]; onClick: (course: typeof courses[0]) => void }) => {
//         const Icon = course.icon;
//         return (
//             <div
//                 onClick={() => onClick(course)}
//                 className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
//             >
//                 <div className={`bg-gradient-to-r ${course.color} p-4 sm:p-6 relative overflow-hidden`}>
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
//                     <div className="relative z-10">
//                         <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
//                         <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{course.title}</h3>
//                         <p className="text-white/90 text-xs sm:text-sm">{course.description}</p>
//                     </div>
//                 </div>

//                 <div className="p-4 sm:p-6">
//                     <div className="flex flex-wrap gap-2 mb-4">
//                         {course.subjects.map((subject, idx) => (
//                             <span
//                                 key={idx}
//                                 className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
//                             >
//                                 {subject}
//                             </span>
//                         ))}
//                     </div>

//                     <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
//                         <div className="flex items-center gap-1">
//                             {renderStars(course.rating)}
//                             <span className="ml-2 text-sm font-semibold text-gray-700">{course.rating}</span>
//                         </div>
//                         <div className="flex items-center gap-1 text-gray-600">
//                             <Users className="w-4 h-4" />
//                             <span className="text-sm">{course.students}</span>
//                         </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
//                         <div className="flex items-center gap-2 text-gray-600">
//                             <Clock className="w-4 h-4" />
//                             <span className="text-sm">{course.duration}</span>
//                         </div>
//                         <button className="w-full sm:w-auto px-4 sm:px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300">
//                             View Details
//                         </button>
//                     </div>
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//             </div>
//         );
//     };

//     // Home Page (Preview)
//     if (currentPage === 'home') {
//         return (
//             <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
//                 <div className='container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 sm:px-6 lg:px-8'>
//                     <div className="text-center mb-16">
//                         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//                             Our Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Courses</span>
//                         </h2>
//                         <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
//                             Personalized tutoring programs designed to help you excel in your academic journey
//                         </p>
//                     </div>

//                     <div className="relative px-8 sm:px-12 lg:px-16">
//                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
//                             {displayedCourses.map((course) => (
//                                 <CourseCard key={course.id} course={course} onClick={handleCourseClick} />
//                             ))}
//                         </div>

//                         {/* Navigation Arrows */}
//                         <button
//                             onClick={prevSlide}
//                             className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-10 group"
//                             aria-label="Previous courses"
//                         >
//                             <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-600 group-hover:text-purple-600" />
//                         </button>
//                         <button
//                             onClick={nextSlide}
//                             className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 z-10 group"
//                             aria-label="Next courses"
//                         >
//                             <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-indigo-600 group-hover:text-purple-600" />
//                         </button>
//                     </div>

//                     {/* Dots Navigation */}
//                     <div className="flex justify-center gap-2 mt-8">
//                         {Array.from({ length: totalPages }).map((_, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => goToSlide(index)}
//                                 className={`transition-all duration-300 rounded-full ${
//                                     index === currentIndex
//                                         ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8 h-3'
//                                         : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
//                                 }`}
//                                 aria-label={`Go to slide ${index + 1}`}
//                             />
//                         ))}
//                     </div>

//                     <div className="text-center mt-16">
//                         <button
//                             onClick={handleViewAllCourses}
//                             className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//                         >
//                             View All Courses →
//                         </button>
//                     </div>
//                 </div>
//             </section>
//         );
//     }

//     // All Courses Page
//     if (currentPage === 'all-courses') {
//         return (
//             <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//                 <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-20">
//                     <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8">
//                         <button
//                             onClick={handleBackToHome}
//                             className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
//                         >
//                             <ArrowLeft className="w-5 h-5" />
//                             <span>Back to Home</span>
//                         </button>
//                         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">All Courses</h1>
//                         <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
//                             Explore our complete catalog of {courses.length} premium courses
//                         </p>
//                     </div>
//                 </div>

//                 <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//                         {courses.map((course) => (
//                             <CourseCard key={course.id} course={course} onClick={handleCourseClick} />
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Course Detail Page
//     if (currentPage === 'course-detail' && selectedCourse) {
//         const Icon = selectedCourse.icon;
//         return (
//             <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//                 <div className={`bg-gradient-to-r ${selectedCourse.color} text-white py-12 sm:py-20`}>
//                     <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8">
//                         <button
//                             onClick={handleBackToAllCourses}
//                             className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
//                         >
//                             <ArrowLeft className="w-5 h-5" />
//                             <span>Back to All Courses</span>
//                         </button>
//                         <div className="flex flex-col md:flex-row items-start gap-6">
//                             <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
//                             <div className="flex-1">
//                                 <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{selectedCourse.title}</h1>
//                                 <p className="text-lg sm:text-xl text-white/90 mb-6">{selectedCourse.fullDescription}</p>
//                                 <div className="flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
//                                     <div className="flex items-center gap-2">
//                                         <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
//                                         <span className="font-semibold">{selectedCourse.rating} Rating</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <Users className="w-5 h-5" />
//                                         <span>{selectedCourse.students} Students</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <Clock className="w-5 h-5" />
//                                         <span>{selectedCourse.duration}</span>
//                                     </div>
//                                     <div className="flex items-center gap-2">
//                                         <Video className="w-5 h-5" />
//                                         <span>{selectedCourse.lessons} Lessons</span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
//                     <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
//                         {/* Main Content */}
//                         <div className="lg:col-span-2 space-y-8 sm:space-y-12">
//                             {/* What You'll Learn */}
//                             <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8">
//                                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
//                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                                     {selectedCourse.features.map((feature, idx) => (
//                                         <div key={idx} className="flex items-start gap-3">
//                                             <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
//                                             <span className="text-gray-700">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Curriculum */}
//                             <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8">
//                                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
//                                 <div className="space-y-4">
//                                     {selectedCourse.curriculum.map((item, idx) => (
//                                         <div key={idx} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                                             <Calendar className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
//                                             <div>
//                                                 <h3 className="font-semibold text-gray-900">{item.week}</h3>
//                                                 <p className="text-gray-600 text-sm sm:text-base">{item.topic}</p>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Subjects Covered */}
//                             <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8">
//                                 <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Subjects Covered</h2>
//                                 <div className="flex flex-wrap gap-3">
//                                     {selectedCourse.subjects.map((subject, idx) => (
//                                         <span
//                                             key={idx}
//                                             className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium rounded-full text-sm sm:text-base"
//                                         >
//                                             {subject}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Sidebar */}
//                         <div className="lg:col-span-1">
//                             <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 sticky top-4">
//                                 <div className="text-center mb-6">
//                                     <div className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
//                                         ${selectedCourse.price}
//                                     </div>
//                                     <p className="text-gray-600">One-time payment</p>
//                                 </div>

//                                 <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 mb-4">
//                                     Enroll Now
//                                 </button>

//                                 <button className="w-full border-2 border-indigo-600 text-indigo-600 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-indigo-50 transition-all duration-300">
//                                     Add to Wishlist
//                                 </button>

//                                 <div className="mt-8 pt-8 border-t border-gray-200 space-y-4">
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-gray-600">Duration</span>
//                                         <span className="font-semibold text-gray-900">{selectedCourse.duration}</span>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-gray-600">Lessons</span>
//                                         <span className="font-semibold text-gray-900">{selectedCourse.lessons}</span>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-gray-600">Level</span>
//                                         <span className="font-semibold text-gray-900">{selectedCourse.level}</span>
//                                     </div>
//                                     <div className="flex items-center justify-between">
//                                         <span className="text-gray-600">Students</span>
//                                         <span className="font-semibold text-gray-900">{selectedCourse.students}</span>
//                                     </div>
//                                 </div>

//                                 <div className="mt-8 pt-8 border-t border-gray-200">
//                                     <h3 className="font-bold text-gray-900 mb-4">This course includes:</h3>
//                                     <div className="space-y-3">
//                                         <div className="flex items-center gap-3 text-gray-700 text-sm">
//                                             <Video className="w-5 h-5 text-indigo-600" />
//                                             <span>HD video lectures</span>
//                                         </div>
//                                         <div className="flex items-center gap-3 text-gray-700 text-sm">
//                                             <FileText className="w-5 h-5 text-indigo-600" />
//                                             <span>Downloadable resources</span>
//                                         </div>
//                                         <div className="flex items-center gap-3 text-gray-700 text-sm">
//                                             <Trophy className="w-5 h-5 text-indigo-600" />
//                                             <span>Certificate of completion</span>
//                                         </div>
//                                         <div className="flex items-center gap-3 text-gray-700 text-sm">
//                                             <Clock className="w-5 h-5 text-indigo-600" />
//                                             <span>Lifetime access</span>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return null;
// };

// export default CoursesApp;




"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, Atom, BookOpen, GraduationCap, TrendingUp, Globe, Award, Star, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    slug: "mathematics-mastery",
    title: "Mathematics Mastery",
    description: "From basics to advanced topics including calculus",
    icon: Calculator,
    color: "from-blue-500 to-cyan-500",
    subjects: ["Algebra", "Geometry", "Calculus", "Statistics"],
    students: 250,
    rating: 4.9,
    duration: "12 weeks",
  },
  {
    id: 2,
    slug: "physics-excellence",
    title: "Physics Excellence",
    description: "Master mechanics, electricity, and modern physics",
    icon: Atom,
    color: "from-purple-500 to-pink-500",
    subjects: ["Mechanics", "Electricity", "Waves", "Quantum"],
    students: 180,
    rating: 4.8,
    duration: "10 weeks",
  },
  {
    id: 3,
    slug: "chemistry-foundations",
    title: "Chemistry Foundations",
    description: "Organic, inorganic, and physical chemistry",
    icon: BookOpen,
    color: "from-green-500 to-emerald-500",
    subjects: ["Organic", "Inorganic", "Physical", "Lab Skills"],
    students: 200,
    rating: 4.9,
    duration: "12 weeks",
  },
  // Add the rest with proper slugs...
  // Example:
  {
    id: 5,
    slug: "jamb-preparation",
    title: "JAMB Preparation",
    description: "Comprehensive prep for Nigerian university entrance",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
    subjects: ["English", "Math", "Sciences", "Mock Tests"],
    students: 320,
    rating: 5.0,
    duration: "8 weeks",
  },
  // ... continue for all 9
];

const CoursesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const coursesPerPage = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const totalPages = Math.ceil(courses.length / coursesPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, totalPages]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const displayedCourses = courses.slice(
    currentIndex * coursesPerPage,
    (currentIndex * coursesPerPage) + coursesPerPage
  );

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Popular <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Courses</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Personalized tutoring programs designed to help you excel in your academic journey
          </p>
        </div>

        <div className="relative px-8 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {displayedCourses.map((course) => {
              const Icon = course.icon;
              return (
                <Link key={course.id} href={`/courses/${course.slug}`} className="block">
                  <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
                    <div className={`bg-gradient-to-r ${course.color} p-4 sm:p-6 relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                      <div className="relative z-10">
                        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white mb-3 sm:mb-4" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{course.title}</h3>
                        <p className="text-white/90 text-xs sm:text-sm">{course.description}</p>
                      </div>
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.subjects.map((subject, idx) => (
                          <span key={idx} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                            {subject}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                        <div className="flex items-center gap-1">
                          {renderStars(course.rating)}
                          <span className="ml-2 text-sm font-semibold text-gray-700">{course.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{course.students}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-indigo-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 sm:p-3 lg:p-4 shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-indigo-600" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-3 rounded-full transition-all ${
                i === currentIndex
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 w-8'
                  : 'bg-gray-300 w-3'
              }`}
            />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link
            href="/courses"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;