
"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  const menuLinks = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "Process", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ], []);

  useEffect(() => {
    // On initial load, scroll to the top
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      for (let i = menuLinks.length - 1; i >= 0; i--) {
        const link = menuLinks[i];
        const section = document.querySelector(link.href) as HTMLElement;
        if (section && window.scrollY >= section.offsetTop - 150) {
          currentSection = link.href;
          break; 
        }
      }
      
      if (currentSection === "" && window.scrollY < 200) {
        currentSection = "#home";
      }

      if (currentSection) {
        setActiveLink(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [menuLinks]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      )}
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "mx-auto mt-4 flex items-center justify-center transition-all duration-300 ease-in-out bg-background/50 backdrop-blur-lg border border-border/30 shadow-lg shadow-primary/5 rounded-full",
          "w-[90%] max-w-sm md:max-w-md", // Responsive width
          "h-14 md:h-16", // Responsive height
          "px-2 md:px-5" // Responsive padding
        )}
      >
        <nav className="relative flex items-center gap-0 md:gap-1">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative transition-colors font-semibold rounded-full",
                "text-xs px-3 py-2", // Smaller text and padding on mobile
                "md:text-sm md:px-4", // Larger text and padding on desktop
                activeLink === link.href ? "text-primary-foreground" : "text-foreground/80 hover:text-primary"
              )}
            >
              {link.name}
              {activeLink === link.href && (
                <motion.div
                  layoutId="active-nav-link"
                  className="absolute inset-0 bg-primary rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
