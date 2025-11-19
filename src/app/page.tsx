
"use client";

import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { AboutSection } from "@/components/custom/about-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { ContactSection } from "@/components/custom/contact-section";
import { useEffect, useState } from "react";
import { TechStack } from "@/components/custom/tech-stack";
import { ZoomOnScrollImage } from "@/components/custom/zoom-on-scroll-image";
import AnimatedContent from "@/components/AnimatedContent";

export default function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ZoomOnScrollImage src="/assets/hands.avif" alt="Hands typing on a laptop" />
      <AboutSection />
      <ProjectsSection />
      <div className="bg-background">
      <TechStack />
      </div>
      <ContactSection />
      
    </>
  );
}
