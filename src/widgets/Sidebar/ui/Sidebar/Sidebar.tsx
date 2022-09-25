import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  return (
    <div className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}>
      <button type='button' onClick={onToggle}>
        Collapse
      </button>
      <div className={cls.themeSwitcher}>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
