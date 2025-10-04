"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const developerImage = PlaceHolderImages.find(p => p.id === "developer-photo");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuLinks = [
    { name: "Work", href: "#projects" },
    { name: "Process", href: "#services" },
    { name: "FAQs", href: "#testimonials" },
    { name: "About Me", href: "#about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "mx-auto mt-4 px-6 md:px-8 bg-background/50 backdrop-blur-lg border border-border/30 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-primary/5 max-w-4xl",
          isScrolled ? "h-16" : "h-20"
        )}
      >
        <div className="flex items-center justify-between h-full">
           <Link href="#home">
              <Avatar className="h-10 w-10 border-2 border-primary">
                {developerImage && <AvatarImage src={developerImage.imageUrl} alt="Developer" />}
                <AvatarFallback>V</AvatarFallback>
              </Avatar>
            </Link>

          <nav className="hidden md:flex items-center gap-14">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-semibold text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Button asChild className="font-bold text-base rounded-full" size="lg">
            <Link href="#contact" className="flex items-center gap-2">
              <span>Book a Call</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
