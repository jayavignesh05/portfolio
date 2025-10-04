import { ParallaxCard } from "./parallax-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const developerImage = PlaceHolderImages.find(p => p.id === "developer-photo");

  return (
    <section id="home" className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-4 lg:gap-16 w-full max-w-7xl">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-center md:text-right text-foreground tracking-tighter">
          Digital
        </h1>

        <div className="relative aspect-[3/4] w-full max-w-[300px] sm:max-w-sm mx-auto md:max-w-none">
          {developerImage && (
            <ParallaxCard
              src={developerImage.imageUrl}
              alt={developerImage.description}
              imageHint={developerImage.imageHint}
            />
          )}
          <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 text-primary flex items-center gap-2 animate-wave" style={{ animationDelay: '1s' }}>
             <span className="text-5xl" role="img" aria-label="Waving hand">👋</span>
          </div>
        </div>

        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase text-center md:text-left text-foreground tracking-tighter">
          Designer
        </h1>
      </div>
    </section>
  );
}
