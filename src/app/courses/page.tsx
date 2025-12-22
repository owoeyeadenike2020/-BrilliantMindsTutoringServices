import { courses } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12 sm:py-20">
        <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 text-white/90 hover:text-white mb-6 inline-flex">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">All Courses</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
            Explore our complete catalog of {courses.length} premium courses
          </p>
        </div>
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}