"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowOrbProps {
  color?: string;
  size?: number;
  opacity?: number;
  className?: string;
  style?: React.CSSProperties;
  animate?: boolean;
}

export function GlowOrb({
  color = "#00f0ff",
  size = 400,
  opacity = 0.18,
  className,
  style,
  animate = true,
}: GlowOrbProps) {
  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute rounded-full blur-[100px]",
        className
      )}
      style={{
        width: size,
        height: size,
        background: color,
        opacity,
        ...style,
      }}
      animate={
        animate
          ? {
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }
          : undefined
      }
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
