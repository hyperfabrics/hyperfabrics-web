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
export interface ButtonProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
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
