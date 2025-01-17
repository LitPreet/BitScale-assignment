import { type FC, type SVGProps } from 'react';
import Database from '@/public/assets/icons/Icon (2).svg';
import Playbook from '@/public/assets/icons/puzzle-piece-01.svg';
import Integrations from '@/public/assets/icons/Icon.svg';
import Subscription from '@/public/assets/icons/credit-card-02.svg';
import Grid from '@/public/assets/icons/Icon (1).svg';

type SidebarItem = {
  name: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

export const sideBarItems: SidebarItem[] = [
  {
    name: 'Grid',
    Icon: Grid,
  },
  {
    name: 'Playbook',
    Icon: Playbook,
  },
  {
    name: 'Integrations',
    Icon: Integrations,
  },
  {
    name: 'Subscription',
    Icon: Subscription,
  },
  {
    name: 'Database',
    Icon: Database,
  }
];