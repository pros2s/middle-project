import { Popover } from '@headlessui/react';
import { FC, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Popdown.module.scss';
import popupCls from '../../styles/popup.module.scss';

interface PopdownProps {
  className?: string;
  children?: ReactNode;
  trigger?: ReactNode;
}

export const Popdown: FC<PopdownProps> = ({ children, className, trigger }) => (
  <Popover className={classNames(popupCls.popup, [className])}>
    <Popover.Button className={popupCls.trigger}>{trigger}</Popover.Button>

    <Popover.Panel
      className={classNames(cls.panel, [popupCls.list, cls.Popdown])}
    >
      {children}
    </Popover.Panel>
  </Popover>
);
