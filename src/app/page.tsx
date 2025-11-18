
"use client";

import { HeroSection } from "@/components/custom/hero-section";
import { ServicesSection } from "@/components/custom/services-section";
import { AboutSection } from "@/components/custom/about-section";
import { ProjectsSection } from "@/components/custom/projects-section";
import { ContactSection } from "@/components/custom/contact-section";
import { useEffect, useState } from "react";
import { TechStack } from "@/components/custom/tech-stack";
import Image from "next/image";

export default function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
       <div className="relative w-full h-96">
        <Image
          src="/assets/hands.jpg"
          alt="Hands typing on a laptop"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="bg-background">
        <AboutSection />
        <ProjectsSection />
        <TechStack />
        <ContactSection />
      </div>
    </>
  );
}
