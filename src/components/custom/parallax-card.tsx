"use client";

import { useState, useEffect, useRef } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

type ParallaxCardProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageHint: string;
};

export function ParallaxCard({ src, alt, className, imageHint }: ParallaxCardProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 });
    };

    const currentCard = cardRef.current;
    window.addEventListener('mousemove', handleMouseMove);
    currentCard?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      currentCard?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={cn("relative w-full h-full transform-style-3d transition-transform duration-300 ease-out", className)}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale(1.05)`
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-2xl shadow-2xl shadow-primary/10"
        data-ai-hint={imageHint}
        priority
      />
       <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 pointer-events-none" />
    </div>
  );
}
