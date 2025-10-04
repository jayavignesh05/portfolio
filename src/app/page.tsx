"use client";

import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { AboutSection } from "@/components/custom/about-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { ContactSection } from "@/components/custom/contact-section";
import { useEffect, useState } from "react";
import Lenis from 'lenis';

export default function Home() {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    const newLenis = new Lenis();

    function raf(time: number) {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    setLenis(newLenis);

    return () => {
      newLenis.destroy();
    };
  }, []);

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
