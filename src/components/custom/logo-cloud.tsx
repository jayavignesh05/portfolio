
"use client";

import {
  Figma,
  Github,
} from "lucide-react";
import { ImHtmlFive } from "react-icons/im";
import { FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";

const logos = [
  { icon: <Figma className="h-12 w-12" />, name: "Figma" },
  { icon: <Github className="h-12 w-12" />, name: "Github" },
  { icon: <ReactIcon className="h-12 w-12" />, name: "React" },
  { icon: <TypeScriptIcon className="h-12 w-12" />, name: "TypeScript" },
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

function TypeScriptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.361 10.264h4.256v2.016h-4.256v-2.016zm0 4.232h4.256v2.016h-4.256v-2.016zM18.42 5.928H5.58l.736 8.352h11.368l.448-5.024h-2.24l-.224 2.512H8.32l-.24-2.736h10.56l.24-2.736.24-2.736.256-2.624H5.58l.736 8.352.24-2.736z" />
    </svg>
  );
}
