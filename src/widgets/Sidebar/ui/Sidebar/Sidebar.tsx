import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSizes, ButtonThemes } from '@/shared/ui/Button';
import { SidebarPagesLinks } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/themeSwitcher';
import { LangSwitcher } from '@/features/langSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const sidebarPagesLinks = useSelector(SidebarPagesLinks);

  const onToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const pages = useMemo(
    () =>
      sidebarPagesLinks.map((item) => (
        <SidebarItem collapsed={isCollapsed} item={item} key={item.path} />
      )),
    [isCollapsed, sidebarPagesLinks],
  );

  return (
    <aside
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: isCollapsed,
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
        {isCollapsed ? '>' : '<'}
      </Button>
      <footer className={cls.footer}>
        <ThemeSwitcher />
        <LangSwitcher
          short={isCollapsed}
          className={classNames(cls.lang, [], {
            [cls.collapsedLang]: isCollapsed,
          })}
        />
      </footer>
    </aside>
  );
});
