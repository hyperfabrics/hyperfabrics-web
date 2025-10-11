import { PillProps } from "@/types";

export function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white/90 shadow-lg">
      {children}
    </span>
  );
}
