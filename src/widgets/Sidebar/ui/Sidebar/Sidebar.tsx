import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Button, ButtonSizes, ButtonThemes } from 'shared/ui/Button/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import MainPageSVG from 'shared/assets/icons/main-page.svg';
import AboutPageSVG from 'shared/assets/icons/about-page.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { t } = useTranslation();

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  return (
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
      <header className={cls.header}>
        <AppLink className={cls.link} theme={AppLinkTheme.SECONDARY} to='/'>
          <MainPageSVG className={cls.icon} />
          <span className={cls.text}>{t('mainPageBTN')}</span>
        </AppLink>
        <AppLink
          className={cls.link}
          theme={AppLinkTheme.SECONDARY}
          to='/about'
        >
          <AboutPageSVG className={cls.icon} />
          <span className={cls.text}>{t('aboutPageBTN')}</span>
        </AppLink>
      </header>
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
};
