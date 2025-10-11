import {
  Box,
  ShieldCheck,
  ArrowRightLeft,
  GitBranchPlus,
  BarChart,
  LayoutDashboard,
  Users,
  Activity,
  Beaker,
  Phone,
  LucideProps,
  LucideIcon,
} from "lucide-react";

export type IconName =
  | "Box"
  | "ShieldCheck"
  | "ArrowRightLeft"
  | "GitBranchPlus"
  | "BarChart"
  | "LayoutDashboard"
  | "Users"
  | "Activity"
  | "Beaker"
  | "Phone";

const icons: { [key in IconName]: LucideIcon } = {
  Box,
  ShieldCheck,
  ArrowRightLeft,
  GitBranchPlus,
  BarChart,
  LayoutDashboard,
  Users,
  Activity,
  Beaker,
  Phone,
};

interface IconProps extends LucideProps {
  name: IconName;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) {
    return null; // Or return a default icon
  }
  return <LucideIcon {...props} />;
};

export default Icon;
