import { ReactNode } from 'react';

type NavItem = {
  title: string;
};

export type HeaderProps = {
  title: string;
  description: ReactNode | string;
  navItems: NavItem[];
};
