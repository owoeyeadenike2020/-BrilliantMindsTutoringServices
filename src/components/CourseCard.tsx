import Link from "next/link";
import { Star, Users, Clock } from "lucide-react";

function renderStars(rating: number) {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
      />
    ));
}

export default function CourseCard({ course }: { course: import("@/data/courses").Course }) {
  const Icon = course.icon;

  return (
    <Link href={`/courses/${course.slug}`} className="block">
      <div className="group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer">
        <div className={`bg-gradient-to-r ${course.color} p-4 sm:p-6 relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
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
      </div>
    </Link>
  );
}