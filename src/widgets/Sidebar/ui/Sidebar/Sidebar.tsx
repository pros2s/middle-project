import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
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
      <Button type='button' onClick={onToggle}>
        Collapse
      </Button>
      <div className={cls.footer}>
        <ThemeSwitcher />
        <LangSwitcher className={classNames(cls.lang, [], { [cls.collapsedLang]: collapsed })} />
      </div>
    </div>
  );
};
