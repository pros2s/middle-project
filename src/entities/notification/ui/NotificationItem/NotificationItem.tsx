import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text';
import { AppLink } from '@/shared/ui/AppLink';
import { Notification } from '../../model/types/Notification';

import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = memo(
  ({ className, notification }: NotificationItemProps) => {
    const content = (
      <Text
        title={notification.title}
        text={notification.description}
        className={classNames(cls.NotificationItem, [className])}
      />
    );

    if (notification.href) {
      return (
        <AppLink to={notification.href} target='_blank' rel='noreferrer'>
          {content}
        </AppLink>
      );
    }
    return content;
  },
);
