import { memo, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import {
  DynamicReducerLoader,
  ReducersList,
} from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { getSidebarCollapsed } from '../../model/selectors/getSidebarState/getSidebarState';
import { SidebarPagesLinks } from '../../model/selectors/getSidebarItems/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import cls from './Sidebar.module.scss';
import { SidebarActions, SidebarReducer } from '../../model/slice/sidebarSlice';

interface SidebarProps {
  className?: string;
}

const reducers: ReducersList = {
  sidebar: SidebarReducer,
};

export const Sidebar = memo(({ className }: SidebarProps) => {
  const dispatch = useAppDispatch();
  const collapsed = useSelector(getSidebarCollapsed);

  const sidebarPagesLinks = useSelector(SidebarPagesLinks);

  const onToggle = () => {
    dispatch(SidebarActions.setCollapsed(!collapsed));
  };

  const pages = useMemo(
    () =>
      sidebarPagesLinks.map((item) => (
        <SidebarItem collapsed={collapsed} item={item} key={item.path} />
      )),
    [collapsed, sidebarPagesLinks],
  );

  return (
    <DynamicReducerLoader removeAfterUnmount={false} reducers={reducers}>
      <menu
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
      </menu>
    </DynamicReducerLoader>
  );
});
