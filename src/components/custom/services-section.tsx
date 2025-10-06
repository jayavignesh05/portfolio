"use client";

import { useState, useEffect, useRef } from 'react';
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
import { cn } from '@/lib/utils';

const services = [
  {
    id: "get-in-touch",
    title: "LET'S GET IN TOUCH",
    description:"Start by reaching out through our contact page. Fill out the form or book a call to discuss your project, goals, and ideas in even greater detail.",
    imageId: "get-in-touch"
  },
  {
    id: "graphic-design",
    title: "Grab Your Designs",
    description: "Tell me your unique vision, and I’ll create stunning, functional designs that perfectly align with your goals and bring your ideas to life seamlessly.",
    imageId: "branding-illustration"
  },
  {
    id: "web-design",
    title: "Kickstart Development",
    description: "I expertly transform your designs into a powerful, scalable solution, fully ready to launch and optimized for performance, usability, and growth.",
    imageId: "web-development-illustration"
  },
  {
      id: "branding",
      title: "And Hand Over",
      description: "Receive a fully tested, polished, high-quality product tailored to your needs with support for seamless performance and long-term success.",
      imageId: "project-coral-spiral"
  }
];

const DEFAULT_IMAGE_ID = "strategy-illustration";

export function ServicesSection() {
    const [activeImageId, setActiveImageId] = useState(DEFAULT_IMAGE_ID);
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const handleValueChange = (value: string) => {
        if (value) {
            const service = services.find(s => s.id === value);
            setActiveImageId(service ? service.imageId : DEFAULT_IMAGE_ID);
        } else {
            // When accordion is closed, reset to default
            setActiveImageId(DEFAULT_IMAGE_ID);
        }
    };
    
    const activeImage = PlaceHolderImages.find(p => p.id === activeImageId);

    return (
        <section id="services" ref={ref} className={cn("transition-all duration-1000 ease-out py-16 sm:py-20 md:py-24", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto justify-between">
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">The <span className="text-primary">strategy</span> behind exceptional results</h2>
                            <p className="text-lg text-muted-foreground max-w-lg">
                                As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
                            </p>
                        </div>
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full"
                            onValueChange={handleValueChange}
                        >
                            {services.map((service, index) => (
                                <AccordionItem value={service.id} key={service.id} className="border-border/50 text">
                                    <AccordionTrigger className="text-xl font-bold hover:no-underline text-left py-6">
                                        <span className="text-foreground/50 mr-4">0{index + 1}</span>{service.title}
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
                    <div className="relative hidden md:block w-full aspect-[4/5] max-w-md mx-auto mt-8 md:mt-0">
                        {activeImage && (
                            <ParallaxCard
                                src={activeImage.imageUrl}
                                alt={activeImage.description}
                                imageHint={activeImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
