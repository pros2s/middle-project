import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemType } from '../../model/types/SidebarItem';

import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const { authData } = useSelector(getUserAuthData);

  if (item.isAuthOnly && !authData) return null;

  return (
    <AppLink
      className={classNames(cls.link, [], { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.text}>{t(`${item.text}`)}</span>
    </AppLink>
  );
});
