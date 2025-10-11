import { IconName } from "@/components/ui/Icon";

export interface MegaMenuItem {
  label: string;
  href: string;
  description: string;
  icon: IconName;
  isNew?: boolean;
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuColumn {
  sections: MegaMenuSection[];
}

export interface DefaultMenuItem {
  label: string;
  href: string;
}

export interface DefaultMenuCategory {
  title: string;
  items: DefaultMenuItem[];
}

export interface DefaultMenu {
  categories: DefaultMenuCategory[];
}

export interface MegaMenuData {
  platform: MegaMenuColumn[];
  solutions: MegaMenuColumn[];
  developers: DefaultMenu;
  resources: DefaultMenu;
}
