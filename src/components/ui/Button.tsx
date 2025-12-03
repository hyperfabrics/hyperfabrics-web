import { ButtonProps } from "@/types";
import { cn } from "@/utils/cn";

export function Button({
  className,
  children,
  as = "button",
  href,
  type = "button",
  variant = "primary",
  size = "md",
  disabled,
  ...props
}: ButtonProps) {
  const Comp = href ? "a" : as;

  const variantStyles = {
    primary: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white ring-0 shadow-lg shadow-indigo-500/50",
    secondary: "bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/20 backdrop-blur-sm",
    outline: "bg-transparent border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500/10",
    ghost: "bg-transparent hover:bg-white/5 text-white/80",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  // If className includes custom styles, don't apply default variant/size
  const hasCustomStyles = className?.includes("bg-") || className?.includes("text-") || className?.includes("px-") || className?.includes("py-");
  
  return (
    <Comp
      href={disabled ? undefined : href}
      type={href ? undefined : type}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]",
        !hasCustomStyles && variantStyles[variant],
        !hasCustomStyles && sizeStyles[size],
        disabled && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Comp>
  );
}
