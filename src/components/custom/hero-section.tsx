import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {

  return (
    <section id="home" className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="w-full text-center">
        <p className="text-lg text-muted-foreground">Dedicated to top-notch design, I am a</p>
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-foreground tracking-tighter mt-4">
          UI/UX <span className="text-primary">Designer</span> &amp; <br /> Frontend Developer
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          with a multidisciplinary approach for start-ups and small brand-conscious companies.
        </p>
        <Button asChild variant="link" className="text-primary p-0 mt-8 h-auto font-semibold text-lg">
          <Link href="#contact">Book a Discovery Call <ArrowRight className="ml-2 h-5 w-5" /></Link>
        </Button>
      </div>
    </section>
  );
}
