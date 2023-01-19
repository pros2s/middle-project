import { createSelector } from '@reduxjs/toolkit';
import i18n from '@/shared/config/i18n/i18n';
import MainPageSVG from '@/shared/assets/icons/main-page.svg';
import AboutPageSVG from '@/shared/assets/icons/about-page.svg';
import ProfilePageSVG from '@/shared/assets/icons/profile-page.svg';
import ArticlesPageSVG from '@/shared/assets/icons/articles-page.svg';
import { getUserAuthData } from '@/entities/user';
import { SidebarItemType } from '../../types/SidebarItem';
import {
  getAboutRoute,
  getArticlesRoute,
  getMainRoute,
  getProfileRoute,
} from '@/shared/lib/routes/routes';

export const SidebarPagesLinks = createSelector(getUserAuthData, (user) => {
  const SidebarItemsList: SidebarItemType[] = [
    {
      Icon: MainPageSVG,
      path: getMainRoute(),
      text: i18n.t('mainPageBTN'),
    },
    {
      Icon: AboutPageSVG,
      path: getAboutRoute(),
      text: i18n.t('aboutPageBTN'),
    },
  ];

  if (user.authData) {
    SidebarItemsList.push(
      {
        Icon: ProfilePageSVG,
        path: getProfileRoute(user.authData.id),
        text: i18n.t('profilePageBTN'),
        isAuthOnly: true,
      },
      {
        Icon: ArticlesPageSVG,
        path: getArticlesRoute(),
        text: i18n.t('articlesPageBTN'),
        isAuthOnly: true,
      },
    );
  }

  return SidebarItemsList;
});
