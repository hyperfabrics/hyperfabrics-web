import { CardProps } from "@/types";
import { cn } from "@/utils/cn";

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}
