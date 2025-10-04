"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
    icon: React.ReactNode;
    value: number;
    suffix: string;
    label: string;
}

export function AnimatedStat({ stat }: { stat: Stat }) {
    const [count, setCount] = useState(0);
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

    useEffect(() => {
        if (!inView) return;

        const duration = 2000; // 2 seconds
        const frameRate = 60; // 60fps
        const totalFrames = (duration / 1000) * frameRate;
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(stat.value * progress);
            setCount(currentCount);

            if (frame === totalFrames) {
                clearInterval(counter);
                 setCount(stat.value);
            }
        }, 1000 / frameRate);

        return () => clearInterval(counter);
    }, [inView, stat.value]);

    return (
        <div ref={ref} className="bg-card p-8 rounded-xl text-center border border-border/50 shadow-sm hover:border-primary/50 transition-colors">
            <div className="flex justify-center mb-4">
                {stat.icon}
            </div>
            <p className="text-5xl font-black text-primary">
                {count}{stat.suffix}
            </p>
            <p className="text-muted-foreground mt-2 text-base">{stat.label}</p>
        </div>
    );
}
