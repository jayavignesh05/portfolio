"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const isLinkOrButton = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null;
      
      setIsHoveringLink(isLinkOrButton);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        'hidden md:block fixed w-8 h-8 rounded-full border-2 border-primary pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-in-out z-[9999]',
        {
          'scale-150 bg-primary/20': isHoveringLink,
        }
      )}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
}
