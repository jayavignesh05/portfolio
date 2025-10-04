"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type TypewriterEffectProps = {
  isMounted: boolean;
  text: string;
  coloredText?: string;
  baseDelay?: number;
};

export function TypewriterEffect({ isMounted, text, coloredText, baseDelay = 0 }: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    if (isMounted) {
      const timer = setTimeout(() => {
        setStartTyping(true);
      }, baseDelay);
      return () => clearTimeout(timer);
    }
  }, [isMounted, baseDelay]);

  useEffect(() => {
    if (startTyping) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [startTyping, text]);
  
  const renderText = () => {
    if (!coloredText) {
      return displayedText;
    }
    const parts = text.split(coloredText);
    const displayedParts = displayedText.split(coloredText);
    
    return (
      <>
        {displayedParts[0]}
        {displayedText.length > parts[0].length && (
            <span className="text-primary">{coloredText.substring(0, displayedText.length - parts[0].length)}</span>
        )}
        {displayedParts.length > 1 && displayedParts[0].length === parts[0].length && (
          <>{coloredText.substring(coloredText.length)}</>
        )}
        {displayedParts[1]}
      </>
    );
  }

  return (
    <span className={cn(
      "block transition-all duration-700 ease-out", 
      isMounted ? "opacity-100" : "opacity-0"
    )}>
      {renderText()}
      <span className="inline-block w-1 h-[0.8em] animate-pulse bg-primary ml-2" />
    </span>
  );
}
