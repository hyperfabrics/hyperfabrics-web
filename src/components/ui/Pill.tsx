import { PillProps } from "@/types";

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}
