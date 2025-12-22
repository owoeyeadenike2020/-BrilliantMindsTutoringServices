import React from "react";
import Hero from "@/components/Home/Hero";
import Companies from "@/components/Home/Companies";
import Courses from "@/components/Home/Courses";
// import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import Gallery from "@/components/Home/Gallery";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "eLearning",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <Courses />
      {/* <Mentor /> */}
      <Gallery />
      <Testimonial />
      <Newsletter />
    </main>
  );
}