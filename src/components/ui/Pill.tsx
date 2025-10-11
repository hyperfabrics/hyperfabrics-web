import { PillProps } from "@/types";
import { cn } from "@/utils/cn";

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full",
        // sizing/typography - more substantial
        "px-5 py-2.5 text-sm font-semibold tracking-wide",
        // glass + border - more visible
        "border-2 border-white/40 bg-white/15 backdrop-blur-xl",
        // depth and glow
        "shadow-xl shadow-white/10",
        // ensure crisp text
        "text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
