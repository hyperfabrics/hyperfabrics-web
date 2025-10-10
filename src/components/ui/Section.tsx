import { SectionProps } from "@/types";
import { cn } from "@/utils/cn";

export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </section>
  );
}
