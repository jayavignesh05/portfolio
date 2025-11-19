
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
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <AboutSection />
      </AnimatedContent>
      <ProjectsSection />
      <TechStack />
      <div className="bg-background">
        <ContactSection />
      </div>
    </>
  );
}
