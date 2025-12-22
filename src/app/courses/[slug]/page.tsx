import { courses } from "@/data/courses";
import { notFound } from "next/navigation";
import { Star, Users, Clock, Video, Check, Calendar } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = courses.find((c) => c.slug === params.slug);

  if (!course) notFound();

  const Icon = course.icon;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <div className={`bg-gradient-to-r ${course.color} text-white py-12 sm:py-20`}>
        <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <Link href="/courses" className="flex items-center gap-2 text-white/90 hover:text-white mb-6 inline-flex">
            <ChevronLeft className="w-5 h-5" />
            Back to All Courses
          </Link>
          <div className="flex flex-col md:flex-row items-start gap-8">
            <Icon className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl">{course.fullDescription}</p>

              <div className="flex flex-wrap gap-6 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  <span className="font-semibold">{course.rating} Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{course.students} Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-5 h-5" />
                  <span>{course.lessons} Lessons</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Curriculum</h2>
              <div className="space-y-4">
                {course.curriculum.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition">
                    <Calendar className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">{item.week}</h3>
                      <p className="text-gray-600">{item.topic}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Subjects */}
            <div className="bg-white rounded-3xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Subjects Covered</h2>
              <div className="flex flex-wrap gap-3">
                {course.subjects.map((s, i) => (
                  <span key={i} className="px-6 py-3 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 font-medium rounded-full">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg p-8 sticky top-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch with a Tutor</h3>
              <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us about your goals or questions..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition"
                >
                  Send Message
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 text-center">
                We’ll connect you with the best tutor for this course.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}