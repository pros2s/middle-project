import { ReactElement, SVGProps } from 'react';
import i18n from 'shared/config/i18n/i18n';
import MainPageSVG from 'shared/assets/icons/main-page.svg';
import AboutPageSVG from 'shared/assets/icons/about-page.svg';
import ProfilePageSVG from 'shared/assets/icons/profile-page.svg';
import ArticlesPageSVG from 'shared/assets/icons/articles-page.svg';
import { RoutesPaths } from 'shared/lib/routes/routes';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: (props: SVGProps<SVGElement>) => ReactElement;
  isAuthOnly?: boolean;
}

export const SidebarPagesLinks: SidebarItemType[] = [
  {
    Icon: MainPageSVG,
    path: RoutesPaths.main,
    text: i18n.t('mainPageBTN'),
  },
  {
    Icon: AboutPageSVG,
    path: RoutesPaths.about,
    text: i18n.t('aboutPageBTN'),
  },
  {
    Icon: ProfilePageSVG,
    path: RoutesPaths.profile,
    text: i18n.t('profilePageBTN'),
    isAuthOnly: true,
  },
  {
    Icon: ArticlesPageSVG,
    path: RoutesPaths.articles,
    text: i18n.t('articlesPageBTN'),
    isAuthOnly: true,
  },
];
