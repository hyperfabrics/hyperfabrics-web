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
  Wallet,
  Mail,
  Coins,
  ClipboardCheck,
  TestTube,
  Layers,
  BarChart3,
  Gamepad2,
  Building,
  Building2,
  Leaf,
  Landmark,
  Globe,
  Shield,
  Lightbulb,
  Film,
  AlertCircle,
  Cloud,
  MessageSquare,
  Headphones,
  FileCheck,
  Lock,
  Scale,
  Eye,
  UserCheck,
  Globe2,
  Zap,
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
  | "Newspaper"
  | "Wallet"
  | "Mail"
  | "Coins"
  | "ClipboardCheck"
  | "TestTube"
  | "Layers"
  | "BarChart3"
  | "Gamepad2"
  | "Building"
  | "Building2"
  | "Leaf"
  | "Landmark"
  | "Globe"
  | "Shield"
  | "Lightbulb"
  | "Film"
  | "AlertCircle"
  | "Cloud"
  | "MessageSquare"
  | "Headphones"
  | "FileCheck"
  | "Lock"
  | "Scale"
  | "Eye"
  | "UserCheck"
  | "Globe2"
  | "Zap";

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
  Wallet,
  Mail,
  Coins,
  ClipboardCheck,
  TestTube,
  Layers,
  BarChart3,
  Gamepad2,
  Building,
  Building2,
  Leaf,
  Landmark,
  Globe,
  Shield,
  Lightbulb,
  Film,
  AlertCircle,
  Cloud,
  MessageSquare,
  Headphones,
  FileCheck,
  Lock,
  Scale,
  Eye,
  UserCheck,
  Globe2,
  Zap,
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
