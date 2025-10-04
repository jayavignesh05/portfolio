
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ProfileCard } from "./profile-card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

const skills = [
    "Product Design", "UX Design", "UI Design", "Framer",
    "Interaction Design", "Branding", "Webflow", "UX Research", "No-Code"
];

const stats = [
    {
        value: "12",
        label: "Years of Experience",
    },
    {
        value: "270",
        label: "Completed Projects",
    },
    {
        value: "50+",
        label: "Clients on Worldwide",
    }
];

export function AboutSection() {
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

    return (
        <section id="about" ref={ref} className={cn("container mx-auto px-4 transition-all duration-1000 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 max-w-7xl mx-auto items-start">
                <div className="lg:col-span-1">
                    <ProfileCard />
                </div>
                <div className="lg:col-span-2 space-y-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">About Me</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          Hello! I'm Alex, a passionate UI/UX Interaction Designer and Frontend Developer based in Berlin. With over a decade of experience, I specialize in creating beautiful, functional, and user-centered digital experiences. I thrive on blending creative design with precise technical execution to build products that not only look great but are also intuitive and a joy to use. From startups to established brands, I've had the pleasure of collaborating with a diverse range of clients to bring their visions to life. When I'm not designing or coding, you can find me exploring new technologies or seeking inspiration in the world around me.
                        </p>
                    </div>
                    <Separator className="border-dashed" />
                    <div className="flex flex-wrap gap-4">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-muted hover:bg-muted/80 text-muted-foreground font-normal px-4 py-2 text-base rounded-lg">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    <Separator className="border-dashed" />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg border border-border/50">
                                <div className="text-5xl font-black text-primary">{stat.value}</div>

                                <div className="text-muted-foreground mt-3 text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
