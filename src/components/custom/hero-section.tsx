
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import BlurText from "./blur-text";

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsMounted(true);
                controls.start("visible");
                observer.disconnect();
            }
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
  }, [controls]);

  return (
    <section id="home" ref={ref} className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <motion.div 
        className="w-full text-left sm:text-center"
        initial="hidden"
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          hidden: { opacity: 0, y: 20 },
        }}
      >
        <motion.p 
          className="text-lg text-muted-foreground"
          variants={{
            visible: { opacity: 1, transition: { delay: 0.1 } },
            hidden: { opacity: 0 },
          }}
        >
            Dedicated to top-notch design, <br /> I am a
        </motion.p>
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-foreground tracking-tighter mt-5 overflow-hidden">
           <span className="block">
              <BlurText text="UI/UX " animateBy="words" delay={50} />
              <BlurText text="Designer" className="text-primary" animateBy="words" delay={50} />
              <BlurText text=" &" animateBy="words" delay={50} />
           </span>
           <span className="block">
              <BlurText text="Frontend " animateBy="words" delay={50} />
              <BlurText text="Developer" className="text-primary" animateBy="words" delay={50} />
            </span>
        </h1>
        <motion.p 
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
          variants={{
            visible: { opacity: 1, transition: { delay: 1.2 } },
            hidden: { opacity: 0 },
          }}
        >
          with a multidisciplinary approach for start-ups and small brand-conscious companies.
        </motion.p>
        <motion.div
           variants={{
            visible: { opacity: 1, transition: { delay: 1.4 } },
            hidden: { opacity: 0 },
          }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}
