
"use client";

import {
  Figma,
  Github,
} from "lucide-react";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

const logos = [
  { icon: <Figma className="h-12 w-12" />, name: "Figma" },
  { icon: <Github className="h-12 w-12" />, name: "Github" },
  { icon: <ReactIcon className="h-12 w-12" />, name: "React" },
  { icon: <SiTypescript className="h-12 w-12" />, name: "TypeScript" },
  { icon: <FaJsSquare className="h-12 w-12" />, name: "JavaScript" },
  { icon: <ImHtmlFive className="h-12 w-12" />, name: "HTML5" },
  { icon: <FaCss3Alt className="h-12 w-12" />, name: "CSS3" },
  { icon: <IoLogoNodejs className="h-12 w-12" />, name: "Node.js" },
];

export function LogoCloud() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <div
          className="relative mt-6"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
          }}
        >
          <div className="animate-scroll-x flex items-center justify-center md:justify-start gap-8 md:gap-16">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                title={logo.name}
              >
                {logo.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="-11.5 -10.23174 23 20.46348"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <circle cx="0" cy="0" r="2.05" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}
