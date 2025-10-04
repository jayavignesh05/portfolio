"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out"
      )}
    >
      <div
        className={cn(
          "mx-auto mt-4 px-4 md:px-6 bg-background/50 backdrop-blur-lg border border-border/30 rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-primary/5 max-w-5xl",
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

          <nav className="hidden md:flex items-center gap-8">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link href="#contact" passHref>
            <Button className="rounded-full font-bold px-6 py-2 text-sm h-auto text-primary-foreground bg-primary hover:bg-primary/90">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
