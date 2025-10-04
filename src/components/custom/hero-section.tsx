
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
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

  useEffect(() => {
    if (inView) {
      setIsMounted(true);
    }
  }, [inView]);

  return (
    <section id="home" ref={ref} className={cn("container mx-auto px-4 min-h-screen flex items-center justify-center transition-opacity duration-1000 ease-in", inView ? "opacity-100" : "opacity-0")}>
      <div className="w-full text-center">
        <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 ease-out",
            isMounted ? "opacity-100" : "opacity-0"
        )}>
            Dedicated to top-notch design, I am a
        </p>
        <h4 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-foreground tracking-tighter mt-5 overflow-hidden">
          <span className={cn("block transition-all duration-700 ease-out", isMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}>
            UI/UX <span className="text-primary">Designer</span> &amp;
          </span>
          <span className={cn("block transition-all duration-700 ease-out delay-200", isMounted ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}>
            Frontend <span className="text-primary">Developer</span>
          </span>
        </h4>
        <p className={cn(
            "mt-6 text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 ease-out delay-300",
            isMounted ? "opacity-100" : "opacity-0"
        )}>
          with a multidisciplinary approach for start-ups and small brand-conscious companies.
        </p>
        <Button asChild variant="link" className={cn(
            "text-primary p-0 mt-8 h-auto font-semibold text-lg transition-all duration-700 ease-out delay-500",
            isMounted ? "opacity-100" : "opacity-0"
        )}>
          <Link href="#contact">Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
}
