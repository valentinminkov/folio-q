import type { VNode } from 'vue';

export interface Button {
  text: string;
  url?: string;
  onClick?: () => void;
  className?: string;
  icon?: unknown;
  outline?: boolean;
  flat?: boolean;
}

export interface HeroBlock {
  title: string;
  button: Button;
  subtitle?: string;
  className?: string;
  image?: Image;
}

export interface Image {
  src: string;
  alt: string;
  className?: string;
}

type InfoBlockDirection = 'horizontal' | 'vertical';

export interface InfoBlock {
  title: string;
  text: string;
  iconUrl: string;
  direction?: InfoBlockDirection;
  className?: string;
  image?: Image;
  secondColumnContent?: VNode;
}

export interface CardBlock {
  title: string;
  text: string;
  image: Image;
  onClick: unknown;
  layout?: 'stacked' | 'adjacent';
  className?: string;
  seperator?: boolean;
}

export interface Project {
  title: string;
  description: string;
  image: Image;
  onClick: () => void;
}
