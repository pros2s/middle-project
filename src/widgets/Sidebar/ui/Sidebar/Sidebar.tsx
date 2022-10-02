import { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'widgets/Button';
import { ButtonSizes, ButtonThemes } from 'widgets/Button/ui/Button';
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
    <div
      data-testid='sidebar'
      className={classNames(cls.Sidebar, [className], {
        [cls.collapsed]: collapsed,
      })}
    >
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
      <div className={cls.footer}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={classNames(cls.lang, [], {
            [cls.collapsedLang]: collapsed,
          })}
        />
      </div>
    </div>
  );
};
