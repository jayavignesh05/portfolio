
"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import BlurText from "./blur-text";
import { cn } from "@/lib/utils";
import Link from "next/link";

const projects = [
    {
        id: "project-have-clothing",
        title: "HAVE Clothing Brand",
        category: "Full Stack Development",
        description: "A modern, minimalist clothing brand website developed by me. Features a clean UI, smooth shopping experience, and responsive design.",
        imageId: "project-have-clothing",
        link: "https://have-clothing.vercel.app/"
    },
    {
        id: "project-lms",
        title: "LMS Student Learning",
        category: "Full Stack Development",
        description: "A comprehensive Learning Management System for students. Features course management, progress tracking, and interactive learning tools.",
        imageId: "project-lms",
        link: "https://students-learning-web.vercel.app/"
    },
    {
        id: "project-summer-festival",
        title: "Summer Vibes Festival Campaign",
        category: "Graphic Design",
        description: "Created promotional materials for the 'Summer Vibes Festival,' including posters, flyers, and social media graphics.",
        imageId: "project-summer-festival",
        link: null
    },
    {
        id: "project-coral-spiral",
        title: "Coral Spiral Abstract",
        category: "Branding",
        description: "A visually striking 3D abstract artwork featuring a coral-colored spiral form with a soft pink gradient background.",
        imageId: "project-coral-spiral",
        link: null
    },
    {
        id: "project-shopease-redesign",
        title: "Shopease Redesign Sprint",
        category: "UI / UX Design",
        description: "Redesigned the 'Shopease' e-commerce app to enhance user experience. Focused on simplifying navigation and incorporating a sleek look.",
        imageId: "project-shopease-redesign",
        link: null
    },
    {
        id: "project-black-prisms",
        title: "Black Geometric Prisms",
        category: "Branding",
        description: "A collection of sharp, angular black prisms floating against a dark gradient background, showcasing a modern and sophisticated approach.",
        imageId: "project-black-prisms",
        link: null
    },
];

function AnimatedProjectCard({ project, index }: { project: any, index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: false, amount: 0.2 });
    const image = PlaceHolderImages.find(p => p.id === project.imageId);
    const isOdd = index % 2 !== 0;

    const cardVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: isOdd ? 200 : -200 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const detailsVariants = {
        hidden: { opacity: 0, x: isOdd ? -200 : 200 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeInOut" } },
    };

    const cardContent = (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center group cursor-pointer"
        >
            {/* Image Column */}
            <motion.div variants={imageVariants} className={cn("relative aspect-video rounded-2xl overflow-hidden", { "md:order-2": isOdd })}>
                {image && (
                    <Image
                        src={image.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                )}
            </motion.div>

            {/* Details Column */}
            <motion.div variants={detailsVariants} className={cn("space-y-4", { "md:order-1": isOdd })}>
                <Badge variant="secondary" className="bg-white/20 text-white border-none">{project.category}</Badge>
                <h3 className="text-3xl md:text-4xl font-bold text-white break-words max-w-full group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-white/80 mt-2 text-lg max-w-full break-words">{project.description}</p>
                {project.id === "project-have-clothing" && (
                    <p className="text-sm text-muted-foreground italic">Developed by me</p>
                )}
            </motion.div>
        </motion.div>
    );

    if (project.link) {
        return (
            <Link href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                {cardContent}
            </Link>
        );
    }

    return cardContent;
}

export function ProjectsSection() {
    return (
        <section
            id="projects"
            className="relative bg-transparent"
        >
            <div className="container mx-auto px-4 py-16 sm:py-20 md:py-24 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
                        <BlurText text="Featured Projects" animateBy="words" delay={50} />
                    </h2>
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">A selection of my work that showcases my skills and creativity.</p>
                </div>

                <div className="space-y-16 md:space-y-32">
                    {projects.map((project, index) => (
                        <AnimatedProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
