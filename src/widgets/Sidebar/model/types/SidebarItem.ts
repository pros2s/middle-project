import { ReactElement, SVGProps } from 'react';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: (props: SVGProps<SVGElement>) => ReactElement;
  isAuthOnly?: boolean;
}
