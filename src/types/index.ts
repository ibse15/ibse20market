export interface Module {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  stats: {
    label: string;
    value: string;
    change?: string;
  }[];
  features: string[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: string;
}