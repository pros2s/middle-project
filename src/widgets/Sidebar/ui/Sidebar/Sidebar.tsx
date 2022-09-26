import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((state) => !state);
  };

  return (
    <div className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}>
      <Button type='button' onClick={onToggle}>
        {t('COLLAPSE')}
      </Button>
      <div className={cls.footer}>
        <ThemeSwitcher />
        <LangSwitcher className={classNames(cls.lang, [], { [cls.collapsedLang]: collapsed })} />
      </div>
    </div>
  );
};
