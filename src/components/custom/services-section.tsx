
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const processSteps = [
  {
    number: "[ 01 ]",
    title: "PLANNING",
    description: "We kick things off by diving deep into your vision. In this phase, we'll align on goals, define the scope, and create a strategic plan to ensure your project's success from the start.",
    bullets: [
      "Initial consultation and discovery session",
      "Goal setting and KPI definition",
      "User persona and journey mapping",
      "Competitive analysis and market research",
    ],
  },
  {
    number: "[ 02 ]",
    title: "DESIGN",
    description: "Next, I'll translate our strategy into a stunning and intuitive user interface. This is where creativity meets usability to craft an experience that captivates and converts.",
    bullets: [
      "Wireframing and prototyping",
      "High-fidelity UI/UX design",
      "Brand identity integration",
      "Interactive design mockups",
    ],
  },
  {
    number: "[ 03 ]",
    title: "DEVELOPMENT",
    description: "With the designs approved, I'll bring them to life with clean, efficient code. I focus on building a responsive, performant, and scalable product ready for the modern web.",
    bullets: [
      "Front-end development with React/Next.js",
      "Responsive and mobile-first implementation",
      "Performance optimization",
      "CMS integration and setup",
    ],
  },
];

const DecorativeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-muted-foreground/50">
        <path d="M12 2L2 12L12 22L22 12L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 12L22 12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
)

function AnimatedSection({ children, className }: { children: React.ReactNode, className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInView(entry.isIntersecting);
            },
            {
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <div ref={ref} className={cn("transition-all duration-1000 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", className)}>
            {children}
        </div>
    );
}

function ProcessStep({ step }: { step: (typeof processSteps)[0] }) {
    return (
        <AnimatedSection>
            <div className="space-y-4">
                <div className="flex items-center gap-4">
                    <span className="text-base text-muted-foreground font-mono">{step.number}</span>
                    <h3 className="text-3xl font-bold uppercase text-primary tracking-wider flex-grow">{step.title}</h3>
                    <DecorativeIcon />
                </div>
                <div className="pl-[6.5rem]">
                    <p className="text-lg text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                    <ul className="space-y-2">
                        {step.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-start">
                                <span className="text-muted-foreground/50 mr-3 mt-1.5">&#x25CF;</span>
                                <span className="text-lg text-white flex-1">{bullet}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    );
}


export function ServicesSection() {
    const image = PlaceHolderImages.find(p => p.id === 'strategy-illustration');

    return (
        <section id="services" className="min-h-screen w-full py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4 h-full">
                <div className="grid md:grid-cols-5 md:gap-16">
                    <div className="md:col-span-3 relative">
                        <AnimatedSection className="text-center mb-16">
                            <p className="text-base uppercase text-white mb-2 tracking-widest">[ELEVATE YOUR DESIGN]</p>
                            <h2 className="text-6xl md:text-7xl font-black uppercase text-primary tracking-tighter">Discover <span className="text-foreground">My</span> Method</h2>
                        </AnimatedSection>
                        <div className="space-y-12">
                            {processSteps.map((step, index) => (
                                <ProcessStep key={index} step={step} />
                            ))}
                        </div>
                    </div>
                    <div className="md:col-span-2 hidden md:block">
                        <div className="sticky top-28">
                           <AnimatedSection>
                             <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                {image && (
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.description}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                        data-ai-hint={image.imageHint}
                                    />
                                )}
                             </div>
                           </AnimatedSection>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
