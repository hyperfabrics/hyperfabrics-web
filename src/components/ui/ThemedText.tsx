import { CSSProperties, ReactNode, ElementType } from "react";

interface ThemedTextProps {
  variant?: "primary" | "secondary" | "muted";
  className?: string;
  children: ReactNode;
  as?: ElementType;
  style?: CSSProperties;
}

export function ThemedText({
  variant = "primary",
  className = "",
  children,
  as: Component = "span",
  style = {},
}: ThemedTextProps) {
  const colorMap = {
    primary: "var(--text-primary)",
    secondary: "var(--text-secondary)",
    muted: "var(--text-muted)",
  };

  return (
    <Component
      className={className}
      style={{
        color: colorMap[variant],
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
