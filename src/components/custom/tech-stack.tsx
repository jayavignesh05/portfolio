
"use client";

import { LogoLoop } from './logo-loop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFigma, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si';

const techLogos = [
  { node: <SiReact className="h-10 w-10" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="h-10 w-10" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="h-10 w-10" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="h-10 w-10" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma className="h-10 w-10" />, title: "Figma", href: "https://figma.com" },
  { node: <SiJavascript className="h-10 w-10" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { node: <SiHtml5 className="h-10 w-10" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
  { node: <SiCss3 className="h-10 w-10" />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
];


export function TechStack() {
  return (
    <section className="py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight">Tools & Technologies</h2>
                <p className="text-lg text-muted-foreground mt-2">A look at the modern tools I use to build digital experiences.</p>
            </div>
            <LogoLoop
                logos={techLogos}
                speed={100}
                direction="left"
                logoHeight={40}
                gap={60}
                pauseOnHover
                scaleOnHover
                fadeOut
                ariaLabel="Technology partners"
            />
        </div>
    </section>
  );
}
