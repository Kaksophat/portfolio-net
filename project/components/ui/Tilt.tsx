"use client";
import React, { useRef } from "react";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  maxTiltDeg?: number; // maximum tilt in degrees
  scale?: number; // scale on hover
}

export function Tilt({ children, className = "", maxTiltDeg = 8, scale = 1.02 }: TiltProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateY = ((x - midX) / midX) * maxTiltDeg; // left/right
    const rotateX = -((y - midY) / midY) * maxTiltDeg; // up/down

    node.style.transform = `perspective(800px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(${scale})`;
  };

  const handleMouseLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleMouseEnter = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transition = "transform 300ms ease";
  };

  return (
    <div
      ref={ref}
      className={["will-change-transform", className].join(" ")}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{ transform: "perspective(800px)" }}
    >
      {children}
    </div>
  );
}


