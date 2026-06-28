import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "accent" | "outline";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-white/5 text-white border border-white/10",
        variant === "accent" &&
          "bg-[#00f0ff]/[0.06] text-[#00f0ff] border border-[#00f0ff]/30",
        variant === "outline" &&
          "bg-transparent text-[#a1a1aa] border border-white/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
