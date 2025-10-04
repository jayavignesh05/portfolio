
"use client";

import { Award, Briefcase, Smile } from "lucide-react";
import { AnimatedStat } from "./animated-stat";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const stats = [
    {
        icon: <Award className="w-10 h-10 text-primary" />,
        value: 5,
        suffix: "+",
        label: "Years of Experience"
    },
    {
        icon: <Briefcase className="w-10 h-10 text-primary" />,
        value: 80,
        suffix: "+",
        label: "Completed Projects"
    },
    {
        icon: <Smile className="w-10 h-10 text-primary" />,
        value: 50,
        suffix: "+",
        label: "Happy Clients"
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
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">A Little About Me</h2>
                <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                    I'm a passionate and results-driven Frontend Developer and UI/UX Designer with a knack for creating engaging and user-centric digital experiences.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {stats.map((stat, index) => (
                    <AnimatedStat key={index} stat={stat} />
                ))}
            </div>
        </section>
    );
}
