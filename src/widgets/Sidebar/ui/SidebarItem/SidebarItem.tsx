import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/user';
import { classNames } from '@/shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { SidebarItemType } from '../../model/types/SidebarItem';

import cls from './SidebarItem.module.scss';
import { SVGIcon } from '@/shared/ui/SVGIcon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
  logoSize?: number;
}

export const SidebarItem = memo(
  ({ item, collapsed, logoSize = 20 }: SidebarItemProps) => {
    const { t } = useTranslation();
    const { authData } = useSelector(getUserAuthData);

    if (item.isAuthOnly && !authData) return null;

    return (
      <AppLink
        className={classNames(cls.link, [], { [cls.collapsed]: collapsed })}
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
      >
        <SVGIcon
          Svg={item.Icon}
          className={cls.icon}
          width={logoSize}
          height={logoSize}
        />

        <span className={cls.text}>{t(`${item.text}`)}</span>
      </AppLink>
    );
  },
);
