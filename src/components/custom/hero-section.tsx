
"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";

const AnimatedTextCharacter = ({ text, className }: { text: string, className?: string }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("inline-block", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};


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
    <section id="home" ref={ref} className="container mx-auto px-4 min-h-screen flex items-center justify-center pt-28 pb-10">
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
            Dedicated to top-notch design, I am a
        </motion.p>
        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-foreground tracking-tighter mt-5 overflow-hidden">
          <div className="block">
            <AnimatedTextCharacter text="UI/UX " />
            <AnimatedTextCharacter text="Designer" className="text-primary" />
            <AnimatedTextCharacter text=" &" />
          </div>
          <div className="block">
            <AnimatedTextCharacter text="Frontend " />
            <AnimatedTextCharacter text="Developer" className="text-primary" />
          </div>
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
            <Button asChild variant="link" className="text-primary p-0 mt-8 h-auto font-semibold text-lg">
                <Link href="#contact">Contact Me<ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
