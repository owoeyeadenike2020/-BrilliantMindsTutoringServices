import React from "react";
import AboutUs from "@/components/AboutUs/aboutUs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "eLearning",
};

export default function Aboutus() {
  return (
    <main>
    <AboutUs />
    </main>
  );
}