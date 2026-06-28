"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glowOnHover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = true, glowOnHover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-2xl border border-white/[0.08] bg-[#111111] transition-all duration-300",
          hover &&
            glowOnHover &&
            "hover:border-[#00f0ff]/30 hover:-translate-y-1 hover:bg-[#00f0ff]/[0.02] hover:shadow-[0_0_30px_rgba(0,240,255,0.08)]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
