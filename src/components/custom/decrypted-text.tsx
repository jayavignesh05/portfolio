
"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const ANIMATION_DURATION_MS = 1000;
const DELAY_PER_CHAR_MS = 30;

export function DecryptedText({ text }: { text: string }) {
    const ref = useRef<HTMLHeadingElement>(null);
    const [displayedText, setDisplayedText] = useState(text);
    const isInView = useInView(ref, { once: true, amount: 0.8 });
    const animationFrameRef = useRef<number | null>(null);
    const startTimeRef = useRef<number | null>(null);

    useEffect(() => {
        const animate = (currentTime: number) => {
            if (!startTimeRef.current) {
                startTimeRef.current = currentTime;
            }

            const elapsedTime = currentTime - startTimeRef.current;

            const newText = text
                .split("")
                .map((char, index) => {
                    if (char === " ") return " ";
                    const charDelay = index * DELAY_PER_CHAR_MS;
                    if (elapsedTime < charDelay) {
                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    }
                    if (elapsedTime >= charDelay && elapsedTime < charDelay + ANIMATION_DURATION_MS) {
                        return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                    }
                    return text[index];
                })
                .join("");

            setDisplayedText(newText);

            if (newText !== text) {
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                startTimeRef.current = null; 
            }
        };

        if (isInView) {
            animationFrameRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            startTimeRef.current = null;
        };
    }, [isInView, text]);

    return (
        <span ref={ref} className="font-mono">
            {displayedText}
        </span>
    );
}
