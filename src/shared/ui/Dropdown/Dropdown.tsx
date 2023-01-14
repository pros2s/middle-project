import { Menu } from '@headlessui/react';
import { Fragment, memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { AppLink } from '../AppLink/AppLink';

import cls from './Dropdown.module.scss';

interface DropdownItem {
  disabled?: boolean;
  content: ReactNode;
  onclick?: () => void;
  href?: string;
}

interface DropdownProps {
  items: DropdownItem[];
  className?: string;
  trigger: ReactNode;
}

export const Dropdown = memo(({ items, trigger, className }: DropdownProps) => (
  <Menu as='div' className={classNames(cls.Dropdown, [className])}>
    <Menu.Button className={cls.trigger}>{trigger}</Menu.Button>
    <Menu.Items as='div' className={cls.list}>
      {items.map((item) => {
        const content = ({ active }: { active: boolean }) => (
          <Button
            type='button'
            className={classNames(cls.item, [], { [cls.active]: active })}
            disabled={item.disabled}
            onClick={item.onclick}
          >
            {item.content}
          </Button>
        );

        if (item.href) {
          return (
            <Menu.Item
              key={Math.random()}
              as={AppLink}
              className={cls.link}
              to={item.href}
              disabled={item.disabled}
            >
              {content}
            </Menu.Item>
          );
        }

        return (
          <Menu.Item key={Math.random()} as={Fragment} disabled={item.disabled}>
            {content}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  </Menu>
));
