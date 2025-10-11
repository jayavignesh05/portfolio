"use client";

import {
  Figma,
  Github,
} from "lucide-react";

const logos = [
  { icon: <Figma className="h-12 w-12" />, name: "Figma" },
  { icon: <Github className="h-12 w-12" />, name: "Github" },
  { icon: <ReactIcon className="h-12 w-12" />, name: "React" },
  { icon: <TypeScriptIcon className="h-12 w-12" />, name: "TypeScript" },
  { icon: <JavaScriptIcon className="h-12 w-12" />, name: "JavaScript" },
  { icon: <HTML5Icon className="h-12 w-12" />, name: "HTML5" },
  { icon: <CSS3Icon className="h-12 w-12" />, name: "CSS3" },
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

function JavaScriptIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M0 0h24v24H0V0zm22.034 18.262h-2.646v-2.016h2.646v2.016zm-5.292 0h-2.646v-2.016h2.646v2.016zm-5.292 0H8.804v-4.032h2.646v4.032zm-2.646-4.032H6.158v-2.016h2.646v2.016zm5.292 2.016h-2.646v-2.016h2.646v2.016zm-2.646-4.032h-2.646v-2.016h2.646v2.016z" />
    </svg>
  );
}

function HTML5Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.361 5.928h4.256l-.336 3.784h-3.92l.224 2.512h3.472l-.336 3.784-3.136.84-3.136-.84-.224-2.512H7.36l-.336-3.784h7.328l.672-7.568H4.137l.736 8.352h7.328l-.224 2.512-2.128.576-2.128-.576-.144-1.616H5.58l-.448 5.024 6.848 1.896 6.848-1.896.944-10.576H8.805l-.336-3.784h8.288l.336-3.784h-12.72l.448 5.024z" />
    </svg>
  );
}

function CSS3Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.361 5.928h8.288l-.224 2.512H8.805l.224-2.512zm.224 5.024h3.472l-.224 2.512-1.584.432-1.584-.432-.112-1.256h-2.24l.336 3.784 3.584 1.008 3.584-1.008.448-5.024H8.805l.224-2.512h8.288l.448-5.024H5.58l.736 8.352h2.24z" />
    </svg>
  );
}
