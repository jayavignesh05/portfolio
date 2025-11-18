
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function ZoomOnScrollImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[1000px] overflow-hidden">
      <motion.div
        style={{ scale }}
        className="relative w-full h-full"
      >
        <Image
          src={src}
          alt={alt}
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
}
