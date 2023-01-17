import { memo } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Flex } from '@/shared/ui/Stack/Flex';
import { Text, TextSize, TextThemes } from '@/shared/ui/Text/Text';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';

import cls from './NotificationList.module.scss';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(({ className }: NotificationListProps) => {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useNotifications(null, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <Flex
        direction='column'
        gap='8'
        className={classNames(cls.NotificationList, [className])}
      >
        <Skeleton height='70px' width='400px' borderRadius='4px' />
        <Skeleton height='70px' width='400px' borderRadius='4px' />
        <Skeleton height='70px' width='400px' borderRadius='4px' />
      </Flex>
    );
  }

  if (isError) {
    return (
      <Text
        text={t('notificationError')}
        size={TextSize.L}
        theme={TextThemes.ERROR}
        className={cls.error}
      />
    );
  }

  return (
    <Flex
      direction='column'
      className={classNames(cls.NotificationList, [className])}
    >
      {data?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </Flex>
  );
});
