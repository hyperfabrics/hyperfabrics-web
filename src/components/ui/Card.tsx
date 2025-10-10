import { CardProps } from "@/types";
import { cn } from "@/utils/cn";

export function Card({ className, children }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-3xl p-6 shadow-lg transition-colors duration-300",
        className
      )}
      style={{
        borderColor: "var(--card-border)",
        backgroundColor: "var(--card-bg)",
      }}
    >
      {children}
    </div>
  );
}
