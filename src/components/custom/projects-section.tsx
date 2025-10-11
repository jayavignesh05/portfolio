
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const projects = [
    {
        id: "project-summer-festival",
        title: "Summer Vibes Festival Campaign",
        category: "Graphic Design",
        description: "Created promotional materials for the 'Summer Vibes Festival,' including posters, flyers, and social media graphics.",
        imageId: "project-summer-festival"
    },
    {
        id: "project-coral-spiral",
        title: "Coral Spiral Abstract",
        category: "Branding",
        description: "A visually striking 3D abstract artwork featuring a coral-colored spiral form with smooth, flowing curves and a soft pink gradient background.",
        imageId: "project-coral-spiral"
    },
    {
        id: "project-shopease-redesign",
        title: "Shopease Redesign Sprint",
        category: "UI / UX Design",
        description: "Redesigned the 'Shopease' e-commerce app to enhance user experience. Focused on simplifying navigation and incorporating a sleek look.",
        imageId: "project-shopease-redesign"
    },
    {
        id: "project-black-prisms",
        title: "Black Geometric Prisms",
        category: "Branding",
        description: "A collection of sharp, angular black prisms floating against a dark gradient background, showcasing a modern and sophisticated approach.",
        imageId: "project-black-prisms"
    },
];

function ProjectCardContent({ project }: { project: any }) {
    const image = PlaceHolderImages.find(p => p.id === project.imageId);
    return (
        <div className="group relative w-full max-w-5xl aspect-[13/8] rounded-2xl overflow-hidden bg-card border border-border/50 ">
            {image && (
                <Image src={image.imageUrl} alt={project.title} fill className="object-cover rounded-xl"/>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent " />
            <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-none">{project.category}</Badge>
                <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                <p className="text-white/80 mt-2 line-clamp-2 max-w-2xl">{project.description}</p>
                <Button asChild variant="link" className="text-white p-0 mt-4 h-auto font-semibold">
                    <Link href="#">View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
            </div>
        </div>
    )
}


export function ProjectsSection() {
    return (
        <section id="projects" className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground mt-4">A selection of my work that showcases my skills and creativity.</p>
                </div>
                
                 <Carousel opts={{ align: "start", loop: true, }} className="w-full max-w-4xl mx-auto">
                    <CarouselContent>
                        {projects.map((project) => (
                            <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/1">
                                <div className="p-1">
                                    <ProjectCardContent project={project} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
                    <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}
