"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const services = [
  {
    id: "ui-ux",
    title: "UI/UX DESIGN",
    description: "Crafting intuitive and beautiful user interfaces that are both easy to use and delightful to interact with. From wireframes to final mockups, I focus on creating a seamless user journey.",
    imageId: "service-ui-ux"
  },
  {
    id: "web-dev",
    title: "WEB DEVELOPMENT",
    description: "Building responsive, high-performance websites and web applications using modern technologies like React, Next.js, and TypeScript. I write clean, efficient, and scalable code.",
    imageId: "service-web-dev"
  },
  {
    id: "branding",
    title: "BRANDING & IDENTITY",
    description: "Creating a strong brand identity that resonates with your target audience. This includes logo design, color palettes, and typography guidelines to ensure a cohesive and memorable brand presence.",
    imageId: "service-branding"
  }
];

export function ServicesSection() {
  const [activeServiceImage, setActiveServiceImage] = useState(services[0].imageId);
  const activeImage = PlaceHolderImages.find(p => p.id === activeServiceImage);

  return (
    <section id="services" className="bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What I can do for you</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">My range of services to bring your ideas to life with precision and creativity.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="ui-ux"
            onValueChange={(value) => {
              const service = services.find(s => s.id === value);
              if (service) setActiveServiceImage(service.imageId);
            }}
          >
            {services.map((service, index) => (
              <AccordionItem value={service.id} key={service.id} className="border-border">
                <AccordionTrigger className="text-2xl font-semibold hover:no-underline text-left py-6">
                  <span className="text-primary mr-4">0{index+1}</span>{service.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
            {activeImage && (
              <Image
                src={activeImage.imageUrl}
                alt={activeImage.description}
                fill
                className="object-cover transition-opacity duration-500 ease-in-out"
                data-ai-hint={activeImage.imageHint}
                key={activeImage.id}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
