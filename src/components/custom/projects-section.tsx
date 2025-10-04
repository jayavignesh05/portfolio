
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
    {
        id: "project-1",
        title: "QuantumLeap CRM",
        category: "Web Application",
        description: "A comprehensive CRM platform designed for modern sales teams, featuring an intuitive dashboard and powerful analytics.",
        imageId: "project-1"
    },
    {
        id: "project-2",
        title: "Nova Wallet",
        category: "Mobile App",
        description: "A sleek and secure mobile crypto wallet that simplifies managing digital assets for both beginners and experts.",
        imageId: "project-2"
    },
    {
        id: "project-3",
        title: "Aether E-commerce",
        category: "E-commerce",
        description: "An online storefront for a high-fashion brand, focusing on a minimalist aesthetic and a seamless shopping experience.",
        imageId: "project-3"
    },
    {
        id: "project-4",
        title: "Zenith Landing Page",
        category: "Website",
        description: "A high-converting landing page for a SaaS product, built with a focus on clear messaging and user engagement.",
        imageId: "project-4"
    }
];

function ProjectCard({ project, index, scrollYProgress }: { project: any, index: number, scrollYProgress: any }) {
    const image = PlaceHolderImages.find(p => p.id === project.imageId);
    const scale = useTransform(scrollYProgress, [index * 0.25, 0.1 + index * 0.25], [1, 0.9]);
    const translateY = useTransform(scrollYProgress, [index * 0.25, 0.1 + index * 0.25], [0, -40]);
    const opacity = useTransform(scrollYProgress, [index * 0.25, 0.1 + index * 0.25], [1, 0]);

    return (
        <motion.div
            style={{ scale, translateY, opacity }}
            className="sticky top-28"
        >
            <div className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-card border border-border/50 p-1">
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg transition-transform duration-500 ease-in-out group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                    <Badge variant="secondary" className="mb-2 bg-primary/20 text-primary border-none">{project.category}</Badge>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-white/80 mt-1 line-clamp-2">{project.description}</p>
                    <Button asChild variant="link" className="text-primary p-0 mt-4 h-auto font-semibold">
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

    return (
        <section id="projects" ref={ref} className={cn("bg-card transition-all duration-1000 ease-out", inView ? "opacity-100" : "opacity-0")}>
            <div className="container mx-auto px-4 py-20 sm:py-28 md:py-32">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-lg text-muted-foreground mt-4">A selection of my work that showcases my skills and creativity.</p>
                </div>
                <div ref={ref} className="max-w-xl mx-auto" style={{ height: `${projects.length * 100}vh` }}>
                    <div className="sticky top-28">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
