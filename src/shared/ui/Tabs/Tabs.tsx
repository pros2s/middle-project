import { ReactNode, useCallback } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Card } from 'shared/ui/Card/Card';

import cls from './Tabs.module.scss';

export interface TabItem<T extends string> {
  value: T;
  content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabItem<T>[];

  activeType: T;
  onChangeTab: (type: T) => void;
}

export const Tabs = <T extends string>({
  className,
  onChangeTab,
  tabs,
  activeType,
}: TabsProps<T>) => {
  const changeTabHandler = useCallback(
    (type: T) => () => onChangeTab?.(type as T),
    [onChangeTab],
  );

  return (
    <div className={classNames(cls.Tabs, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          active={tab.value === activeType}
          onClick={changeTabHandler(tab.value)}
          key={tab.value}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
};
