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
        "inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold shadow-sm",
        "bg-white/10 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/15",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
