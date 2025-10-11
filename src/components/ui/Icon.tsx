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
  BookOpen,
  Code,
  Package,
  PlaySquare,
  MessagesSquare,
  MessageCircle,
  Calendar,
  Rss,
  LifeBuoy,
  Server,
  FileText,
  File,
  Youtube,
  Info,
  Briefcase,
  Newspaper,
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
  | "Phone"
  | "BookOpen"
  | "Code"
  | "Package"
  | "PlaySquare"
  | "MessagesSquare"
  | "MessageCircle"
  | "Calendar"
  | "Rss"
  | "LifeBuoy"
  | "Server"
  | "FileText"
  | "File"
  | "Youtube"
  | "Info"
  | "Briefcase"
  | "Newspaper";

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
  BookOpen,
  Code,
  Package,
  PlaySquare,
  MessagesSquare,
  MessageCircle,
  Calendar,
  Rss,
  LifeBuoy,
  Server,
  FileText,
  File,
  Youtube,
  Info,
  Briefcase,
  Newspaper,
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
