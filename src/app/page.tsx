"use client";

import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { AboutSection } from "@/components/custom/about-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { ContactSection } from "@/components/custom/contact-section";
import { useEffect, useState } from "react";
import { LogoCloud } from "@/components/custom/logo-cloud";

export default function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <LogoCloud />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
