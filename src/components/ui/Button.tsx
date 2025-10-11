import { ButtonProps } from "@/types";
import { cn } from "@/utils/cn";

export function Button({
  className,
  children,
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const Comp = href ? "a" : as;

  return (
    <Comp
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        "ring-1 backdrop-blur-sm",
        // Default button styles (theme-aware via CSS variables)
        className
      )}
      style={{
        backgroundColor:
          className?.includes("bg-white") && !className?.includes("text-black")
            ? undefined
            : "var(--card-bg)",
        color: className?.includes("text-black")
          ? undefined
          : "var(--foreground)",
        borderColor: "var(--border)",
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}
