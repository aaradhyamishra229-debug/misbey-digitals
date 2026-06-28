import { cn } from "@/lib/utils";

interface GridOverlayProps {
  className?: string;
}

export function GridOverlay({ className }: GridOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]",
        className
      )}
    />
  );
}
