import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="#home" className="text-xl font-bold text-foreground">
            Visio<span className="text-primary">Folio</span>
          </Link>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Github /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin /></Link>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} VisioFolio. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
