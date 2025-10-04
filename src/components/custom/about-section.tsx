
"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ProfileCard } from "./profile-card";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { AnimatedStat } from "./animated-stat";

const skills = [
    "React JS", "UI Design", "UX Design", "Figma",
    "Interaction Design", "Webflow"
];

const stats = [
    {
        value: 12,
        suffix: "",
        label: "Years of Experience",
    },
    {
        value: 270,
        suffix: "",
        label: "Completed Projects",
    },
    {
        value: 50,
        suffix: "+",
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
                          I'm Jayavignesh, a multi-disciplinary designer and developer dedicated to crafting seamless digital experiences. As a UI/UX Designer, Graphic Designer, and Frontend Developer, I excel at bridging the gap between creative vision and technical execution.  With expertise in design tools like Figma and Canva, I craft engaging user interfaces. I then bring these concepts to life using a modern front-end stack, including HTML, CSS, JavaScript, and React.js. My ultimate goal is to build products that are not only aesthetically pleasing but are also intuitive, functional, and deliver a genuinely enjoyable user experience.
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
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-card p-6 rounded-lg border border-border/50 text-center">
                                <AnimatedStat stat={stat} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
