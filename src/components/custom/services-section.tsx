"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ParallaxCard } from "./parallax-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "get-in-touch",
    title: "LET'S GET IN TOUCH",
    description: "Have a project in mind or just want to say hi? I'd love to hear from you. Click the button below to send me a message.",
    imageId: "service-ui-ux"
  },
  {
    id: "graphic-design",
    title: "Grab Your Designs",
    description: "Creating visually stunning assets for digital and print. This includes marketing materials, social media content, and illustrations that align with your brand's message.",
    imageId: "service-branding"
  },
  {
    id: "web-design",
    title: "Kickstart Development",
    description: "Building responsive, high-performance websites and web applications using modern technologies like React, Next.js, and TypeScript. I write clean, efficient, and scalable code.",
    imageId: "service-web-dev"
  },
  {
      id: "branding",
      title: "And Hand Over",
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
                    defaultValue="get-in-touch"
                >
                    {services.map((service, index) => (
                    <AccordionItem value={service.id} key={service.id} className="border-border/50">
                        <AccordionTrigger className="text-xl font-bold hover:no-underline text-left py-6">
                        <span className="text-foreground/50 mr-4">0{index+1}</span>{service.title}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground text-base pb-6 pl-[42px]">
                            {service.description}
                            {service.id === 'get-in-touch' && (
                                <Button asChild variant="link" className="text-primary p-0 mt-4 h-auto font-semibold">
                                    <Link href="#contact">Contact Me <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            )}
                        </AccordionContent>
                    </AccordionItem>
                    ))}
                </Accordion>
            </div>
             <div className="relative w-full aspect-[4/5] max-w-sm mx-auto">
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
