export interface NavItem {
  to: string;
  label: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  logo: string;
}

export interface AppLayoutProps {
  children?: unknown;
}

export interface SkillItem {
  name: string;
  iconName: string;
  isEffuse?: boolean;
  shouldInvert?: boolean;
  hasPlainVariant?: boolean;
}

export interface SkillCategoryData {
  title: string;
  description?: string;
  items: SkillItem[];
}
