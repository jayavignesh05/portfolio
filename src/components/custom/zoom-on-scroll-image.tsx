
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export function ZoomOnScrollImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale animation for the image
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[800px] overflow-hidden bg-black">
      
      {/* 1. Background Image with Animation */}
      <motion.div
        style={{ scale }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          fill // "layout='fill'" is deprecated in new Next.js, use "fill"
          className="object-cover opacity-60" // Added opacity to make text pop
        />
        {/* Optional: Dark gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* 2. Text Overlay Content (Positioned Absolute) */}
      <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center md:items-end justify-between p-8 md:p-16 pb-20">
        
        {/* Left Side: Big Text */}
        <div className="w-full md:w-1/2">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white/90 uppercase leading-[0.9] tracking-tighter">
            Let&apos;
            <span className="text-[#b4f82a]">work</span><br/>
            <span className="text-white">Together</span>
          </h1>
        </div>

        {/* Right Side: Paragraph & Button */}
        <div className="w-full md:w-1/3 flex flex-col items-start md:items-end gap-6 mt-10 md:mt-0">
          <p className="text-white/70 text-lg md:text-right font-light leading-relaxed">
            Have a project in mind? We&apos;d love to hear about it. Let&apos;s create something great together!
          </p>
          
          <Link href="#contact">
            <button className="px-8 py-3 rounded-full border border-[#b4f82a] text-[#b4f82a] font-semibold tracking-wider hover:bg-[#b4f82a] hover:text-black
            transition-all duration-300 uppercase">
              Get in Touch
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}
