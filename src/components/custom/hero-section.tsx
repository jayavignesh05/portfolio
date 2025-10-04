import { ParallaxCard } from "./parallax-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const developerImage = PlaceHolderImages.find(p => p.id === "developer-photo");

  return (
    <section id="home" className="container mx-auto px-4 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 w-full max-w-6xl">
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase text-foreground tracking-tighter">
            Digital Designer & Frontend Developer
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            I craft beautiful and functional digital experiences. Let's build something amazing together.
          </p>
        </div>

        <div className="relative aspect-[3/4] w-full max-w-[300px] sm:max-w-xs mx-auto">
          {developerImage && (
            <ParallaxCard
              src={developerImage.imageUrl}
              alt={developerImage.description}
              imageHint={developerImage.imageHint}
            />
          )}
          <div className="absolute -top-8 -right-8 text-primary flex items-center gap-2 animate-wave" style={{ animationDelay: '1s' }}>
             <span className="text-4xl" role="img" aria-label="Waving hand">👋</span>
          </div>
        </div>
      </div>
    </section>
  );
}
