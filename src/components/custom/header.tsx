
"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  const developerImage = PlaceHolderImages.find(p => p.id === "developer-photo");
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
            ? "max-w-xs rounded-full h-14 px-4"
            : "max-w-5xl rounded-full h-20 px-5 md:px-8"
        )}
      >
        <Link href="#home">
          <Avatar className={cn("h-10 w-10 border-2 border-primary transition-all")}>
            {developerImage && <AvatarImage src={developerImage.imageUrl} alt="Developer" />}
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
        </Link>

        {isMobile ? (
          <>
             <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold">Available for work</span>
            </div>
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
                </nav>
              </SheetContent>
            </Sheet>
          </>
        ) : (
          <>
            <nav className="relative flex items-center gap-2">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative transition-colors font-semibold text-base px-4 py-2 rounded-full",
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
              <Button asChild className="font-bold text-base rounded-full" size="lg">
                <Link href="#contact" className="flex items-center gap-2">
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
