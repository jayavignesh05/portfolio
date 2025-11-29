
"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const menuLinks = useMemo(() => [
    { name: "Home", href: "#home" },
    { name: "Process", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#projects" },
  ], []);

  useEffect(() => {
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
    handleScroll();
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
          "mx-auto mt-4 flex items-center justify-between transition-all duration-300 ease-in-out bg-background/50 backdrop-blur-lg border border-border/30 shadow-lg shadow-primary/5",
          isMobile
            ? "max-w-xs rounded-full h-14 px-4 justify-end"
            : "max-w-3xl rounded-full h-16 px-5 md:px-6"
        )}
      >
        {isMobile ? (
          <>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full">
                <nav className="flex flex-col items-center gap-6 pt-12">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "transition-colors font-semibold text-lg",
                        activeLink === link.href ? "text-primary" : "text-foreground/80 hover:text-primary"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button asChild className="font-bold text-lg rounded-full" size="lg">
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <>
            <nav className="relative flex items-center gap-1">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative transition-colors font-semibold text-sm px-4 py-2 rounded-full",
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
            <motion.div whileHover={{ y: -4, rotate: -2 }}>
              <Button asChild className="font-bold text-sm rounded-full" size="default">
                <Link href="#contact">
                  <span>Contact</span>
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </motion.div>
    </header>
  );
}
