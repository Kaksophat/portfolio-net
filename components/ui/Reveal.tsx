"use client";
import React, { useEffect, useRef, useState } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  delayMs?: number;
  durationMs?: number;
  direction?: RevealDirection;
  className?: string;
}

export function Reveal({
  children,
  delayMs = 0,
  durationMs = 600,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const baseHidden = "opacity-0";
  const baseVisible = "opacity-100";

  const translateHiddenByDirection: Record<RevealDirection, string> = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
    none: "",
  };

  const transitionClass = "transition-all ease-out";

  return (
    <div
      ref={ref}
      className={[
        transitionClass,
        isVisible ? baseVisible : baseHidden,
        isVisible ? "translate-x-0 translate-y-0" : translateHiddenByDirection[direction],
        className,
      ].join(" ")}
      style={{ transitionDuration: `${durationMs}ms` }}
    >
      {children}
    </div>
  );
}


