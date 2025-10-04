"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  const menuLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="text-2xl font-bold text-foreground">
            Visio<span className="text-primary">Folio</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          <Link href="#contact" passHref>
            <Button className="rounded-full bg-primary-foreground text-background hover:bg-primary-foreground/90 font-bold px-6">
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
