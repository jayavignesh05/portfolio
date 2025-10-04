
"use client";

import { Award, Briefcase, Smile, Phone, Mail, Twitter, Instagram, Dribbble, Github } from "lucide-react";
import { AnimatedStat } from "./animated-stat";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { BehanceIcon } from "./behance-icon";

const stats = [
    {
        icon: null,
        value: 12,
        suffix: "",
        label: "Years of Experience"
    },
    {
        icon: null,
        value: 270,
        suffix: "",
        label: "Completed Projects"
    },
    {
        icon: null,
        value: 50,
        suffix: "+",
        label: "Clients on Worldwide"
    }
];

const socialLinks = [
    { href: "#", icon: <Twitter /> },
    { href: "#", icon: <Instagram /> },
    { href: "#", icon: <BehanceIcon /> },
    { href: "#", icon: <Dribbble /> },
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
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-black tracking-tight uppercase">About Me</h2>
                <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                    Hi, I&apos;m a digital designer and developer passionate about crafting meaningful and impactful digital experiences.
                </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                    <AnimatedStat key={index} stat={stat} />
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16 text-center md:text-left">
                <div>
                    <h3 className="font-semibold text-muted-foreground">Call Today :</h3>
                    <p className="text-lg font-semibold mt-1">+1 (555) 123-4567</p>
                </div>
                <div>
                    <h3 className="font-semibold text-muted-foreground">Email :</h3>
                    <p className="text-lg font-semibold mt-1">designer@example.com</p>
                </div>
            </div>

            <div className="flex justify-center items-center gap-6 mt-12">
                {socialLinks.map((link, index) => (
                    <Link key={index} href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.icon}
                    </Link>
                ))}
            </div>

            <div className="text-center mt-12">
                 <Button asChild variant="outline" className="font-bold text-base rounded-full border-primary/50 hover:bg-primary/10 hover:text-primary" size="lg">
                    <Link href="#">
                      My Story
                    </Link>
                </Button>
            </div>
        </section>
    );
}
