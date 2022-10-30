import { memo, useMemo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarPagesLinks } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  const pages = useMemo(
    () =>
      SidebarPagesLinks.map((item) => (
        <SidebarItem collapsed={collapsed} item={item} key={item.path} />
      )),
    [collapsed],
  );

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <header className={cls.header}>{pages}</header>
      <Button
        data-testid='collapsedBTN'
        type='button'
        onClick={onToggle}
        theme={ButtonThemes.INVERTED_BACKGROUND}
        size={ButtonSizes.XL}
        square
        className={cls.collapsedBTN}
      >
        {collapsed ? '>' : '<'}
      </Button>
      <footer className={cls.footer}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={classNames(cls.lang, [], {
            [cls.collapsedLang]: collapsed,
          })}
        />
      </footer>
    </div>
  );
});
