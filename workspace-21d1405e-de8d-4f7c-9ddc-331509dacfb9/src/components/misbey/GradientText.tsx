import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  animated?: boolean;
}

export function GradientText({
  animated = true,
  className,
  children,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        animated ? "text-gradient-animated" : "text-gradient-static",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
