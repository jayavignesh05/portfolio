
"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Home, Workflow, User, FolderKanban, Mail } from 'lucide-react';

export function Header() {
  const [activeLink, setActiveLink] = useState("#home");

  const menuLinks = useMemo(() => [
    { name: "Home", href: "#home", icon: <Home className="h-5 w-5" /> },
    { name: "Process", href: "#services", icon: <Workflow className="h-5 w-5" /> },
    { name: "About", href: "#about", icon: <User className="h-5 w-5" /> },
    { name: "Work", href: "#projects", icon: <FolderKanban className="h-5 w-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="h-5 w-5" /> },
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
          "w-auto", // Auto width
          "h-14 md:h-16", // Responsive height
          "px-2" // Base padding
        )}
      >
        <nav className="relative flex items-center justify-center gap-1">
          {menuLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative transition-colors font-semibold rounded-full flex items-center justify-center",
                // Mobile and tablet size for icon
                "h-10 w-10 p-0", 
                // Desktop size with padding for text
                "md:h-auto md:w-auto md:px-4 md:py-2",
                activeLink === link.href ? "text-primary-foreground" : "text-foreground/80 hover:text-primary"
              )}
              aria-label={link.name}
            >
              <span className="md:hidden">{link.icon}</span>
              <span className="hidden md:inline text-sm">{link.name}</span>
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
