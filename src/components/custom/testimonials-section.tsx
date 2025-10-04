
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "CEO, QuantumLeap",
    comment: "Working with them was a game-changer. Our user engagement increased by <span class='text-primary font-bold'>200%</span> within three months of the redesign. Truly outstanding work!",
    imageId: "client-1",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder, Nova Wallet",
    comment: "The level of detail and creativity in the UI/UX design was exceptional. They delivered a product that was not only beautiful but also incredibly intuitive for our users.",
    imageId: "client-2",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Marketing Director, Aether",
    comment: "Their branding expertise gave our company a fresh, modern identity that perfectly captures our ethos. The new design helped us achieve a <span class='text-primary font-bold'>50% increase</span> in conversions.",
    imageId: "client-3",
    rating: 5,
  },
];

export function TestimonialsSection() {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

  return (
    <section id="testimonials" ref={ref} className={cn("container mx-auto px-4 transition-all duration-1000 ease-out", inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}>
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">What My Clients Say</h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
          I'm proud to have collaborated with some amazing clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => {
          const image = PlaceHolderImages.find(p => p.id === testimonial.imageId);
          return (
            <Card key={index} className="bg-card border-border/50 hover:border-primary/50 transition-colors shadow-sm flex flex-col">
              <CardContent className="p-8 flex flex-col flex-grow">
                <p className="text-muted-foreground mb-6 flex-grow" dangerouslySetInnerHTML={{ __html: testimonial.comment }} />
                <div className="flex items-center">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full mr-4"
                      data-ai-hint={image.imageHint}
                    />
                  )}
                  <div className="flex-grow">
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                   <div className="flex">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
