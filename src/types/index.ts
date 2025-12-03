import { ReactNode, HTMLAttributes } from "react";

// Data types
export interface Service {
  title: string;
  summary: string;
  tag?: string;
}

export interface SolutionTab {
  key: string;
  title: string;
  blurb: string;
  services: Service[];
}

export interface Industry {
  title: string;
  desc: string;
}

// Component props types
export interface ButtonProps extends Omit<HTMLAttributes<HTMLElement>, "type"> {
  className?: string;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
  type?: "button" | "submit" | "reset";
  // visual variants and sizes
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  // disabled styles/behavior (for anchors, used as aria-disabled + pointer-events)
  disabled?: boolean;
}

export interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export interface CardProps {
  className?: string;
  children: ReactNode;
}

export interface PillProps {
  children: ReactNode;
  className?: string;
}

export interface MetricProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export interface FeatureProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

export interface LIProps {
  children: ReactNode;
}
