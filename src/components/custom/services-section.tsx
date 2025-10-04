"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ParallaxCard } from "./parallax-card";

const services = [
  {
    id: "ui-ux",
    title: "UI/UX DESIGN",
    description: "Crafting intuitive and beautiful user interfaces that are both easy to use and delightful to interact with. From wireframes to final mockups, I focus on creating a seamless user journey.",
    imageId: "service-ui-ux"
  },
  {
    id: "graphic-design",
    title: "GRAPHIC DESIGN",
    description: "Creating visually stunning assets for digital and print. This includes marketing materials, social media content, and illustrations that align with your brand's message.",
    imageId: "service-branding"
  },
  {
    id: "web-design",
    title: "WEB DESIGN",
    description: "Building responsive, high-performance websites and web applications using modern technologies like React, Next.js, and TypeScript. I write clean, efficient, and scalable code.",
    imageId: "service-web-dev"
  },
  {
      id: "branding",
      title: "BRANDING",
      description: "Creating a strong brand identity that resonates with your target audience. This includes logo design, color palettes, and typography guidelines to ensure a cohesive and memorable brand presence.",
      imageId: "service-branding"
  }
];

export function ServicesSection() {
    const activeImage = PlaceHolderImages.find(p => p.id === "service-web-dev");
  return (
    <section id="services" className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">What I can do for you</h2>
                    <p className="text-lg text-muted-foreground max-w-lg">
                        As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
                    </p>
                </div>
                 <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="ui-ux"
                >
                    {services.map((service, index) => (
                    <AccordionItem value={service.id} key={service.id} className="border-border/50">
                        <AccordionTrigger className="text-xl font-bold hover:no-underline text-left py-6">
                        <span className="text-foreground/50 mr-4">0{index+1}</span>{service.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base pb-6 pl-[42px]">
                        {service.description}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
             <div className="relative w-full aspect-[4/5]">
                {activeImage && (
                    <ParallaxCard 
                        src={activeImage.imageUrl}
                        alt={activeImage.description}
                        imageHint={activeImage.imageHint}
                    />
                )}
            </div>
        </div>
    </section>
  );
}