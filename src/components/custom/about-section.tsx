
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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 max-w-7xl mx-auto items-start">
                <div className="lg:col-span-1">
                    <ProfileCard />
                </div>
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I&apos;m a passionate Web Designer & Developer. I blend creative design with precise technical execution to deliver outstanding digital experiences.
                        </p>
                    </div>
                    <Separator className="border-dashed" />
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-muted hover:bg-muted/80 text-muted-foreground font-normal px-4 py-2 text-sm rounded-lg">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                    <Separator className="border-dashed" />
                    <div className="space-y-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-card hover:bg-muted/50 transition-colors">
                                <div className="text-4xl font-black text-primary">{stat.value}</div>
                                <div className="text-muted-foreground text-right">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
