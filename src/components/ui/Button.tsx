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
        "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-200",
        "ring-1 backdrop-blur",
        // Default button styles (theme-aware via CSS variables)
        className
      )}
      style={{
        backgroundColor: className?.includes('bg-white') && !className?.includes('text-black') 
          ? undefined 
          : 'var(--card-bg)',
        color: className?.includes('text-black') ? undefined : 'var(--foreground)',
        borderColor: 'var(--border)',
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}
