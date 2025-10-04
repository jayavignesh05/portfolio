
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    {
        id: "project-1",
        title: "Coral Spiral Abstract",
        category: "Branding",
        description: "A visually striking 3D abstract artwork featuring a coral-colored spiral form with smooth, flowing curves and a soft pink gradient background.",
        imageId: "project-1"
    },
    {
        id: "project-2",
        title: "Shopease Redesign Sprint",
        category: "UI / UX Design",
        description: "Redesigned the 'Shopease' e-commerce app to enhance user experience. Focused on simplifying navigation and incorporating a sleek look.",
        imageId: "project-2"
    },
    {
        id: "project-3",
        title: "Black Geometric Prisms",
        category: "Branding",
        description: "A collection of sharp, angular black prisms floating against a dark gradient background, showcasing a modern and sophisticated approach.",
        imageId: "project-3"
    },
    {
        id: "project-4",
        title: "Summer Vibes Festival Campaign",
        category: "Graphic Design",
        description: "Created promotional materials for the 'Summer Vibes Festival,' including posters, flyers, and social media graphics.",
        imageId: "project-4"
    }
];

function ProjectCard({ project, index, scrollYProgress, totalProjects }: { project: any, index: number, scrollYProgress: any, totalProjects: number }) {
    const image = PlaceHolderImages.find(p => p.id === project.imageId);

    const initialScale = 1 - ((totalProjects - 1 - index) * 0.05);
    const scale = useTransform(
      scrollYProgress,
      [index / totalProjects, (index + 1) / totalProjects],
      [initialScale, 1]
    );

    return (
        <motion.div
            style={{ scale }}
            className="sticky top-28 flex justify-center"
        >
            <div className="group relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden bg-card border border-border/50 p-1">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded-xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 text-white w-full">
                    <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-none">{project.category}</Badge>
                    <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
                    <p className="text-white/80 mt-2 line-clamp-2 max-w-2xl">{project.description}</p>
                    <Button asChild variant="link" className="text-white p-0 mt-4 h-auto font-semibold">
                        <Link href="#">View Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}

export function ProjectsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"]
    });

    return (
        <section id="projects" className="bg-background">
            <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground mt-4">A selection of my work that showcases my skills and creativity.</p>
                </div>
                
                <div ref={ref} className="relative" style={{ height: `${projects.length * 100}vh` }}>
                    <div className="sticky top-0 h-screen">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                totalProjects={projects.length}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
