// app/components/HomeClientWrapper.jsx
"use client";

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import the client-heavy components here (ssr: false is allowed because this file is a client component)
const HeroSection = dynamic(() => import("./homepage/hero-section"), { ssr: false });
const AboutSection = dynamic(() => import("./homepage/about"), { ssr: false });
const Experience = dynamic(() => import("./homepage/experience"), { ssr: false });
const Skills = dynamic(() => import("./homepage/skills"), { ssr: false });
const Projects = dynamic(() => import("./homepage/projects"), { ssr: false });
const Education = dynamic(() => import("./homepage/education"), { ssr: false });
const ContactSection = dynamic(() => import("./homepage/contact"), { ssr: false });

export default function HomeClientWrapper() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </>
  );
}
