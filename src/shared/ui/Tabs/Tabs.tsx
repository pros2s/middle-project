import { ReactNode, useCallback } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex } from '../Stack/Flex';
import { Card } from '../Card/Card';

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
  'data-testid'?: string;
}

export const Tabs = <T extends string>({
  className,
  onChangeTab,
  tabs,
  activeType,
  'data-testid': dataTestId = 'Tabs',
}: TabsProps<T>) => {
  const changeTabHandler = useCallback(
    (type: T) => () => onChangeTab?.(type as T),
    [onChangeTab],
  );

  return (
    <Flex align='center' gap='16' className={classNames(cls.Tabs, [className])}>
      {tabs.map((tab) => (
        <Card
          className={cls.tab}
          active={tab.value === activeType}
          onClick={changeTabHandler(tab.value)}
          key={tab.value}
          data-testid={`${dataTestId}.${tab.value}`}
        >
          {tab.content}
        </Card>
      ))}
    </Flex>
  );
};
