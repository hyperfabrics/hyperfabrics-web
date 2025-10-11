import { IconName } from "@/components/ui/Icon";

export interface NavItem {
  label: string;
  href: string;
  description: string;
  icon: IconName;
  isNew?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface NavColumn {
  column: string;
  sections: NavSection[];
}

export interface PlatformMenu extends Array<NavColumn> {}

export interface LegacyNavItem {
  label: string;
  href: string;
}

export interface LegacyNavCategory {
  title: string;
  items: LegacyNavItem[];
}

export interface LegacyMenu {
  categories: LegacyNavCategory[];
}

export interface MegaMenuData {
  platform: PlatformMenu;
  solutions: LegacyMenu;
  developers: LegacyMenu;
  resources: LegacyMenu;
}
