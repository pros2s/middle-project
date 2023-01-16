import { memo } from 'react';
import { SVGIcon } from 'shared/ui/SVGIcon/SVGIcon';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { NotificationList } from 'entities/notification';
import { Popdown } from 'shared/ui/Popups';

import { classNames } from 'shared/lib/classNames/classNames';

interface NotificationBtnProps {
  className?: string;
}

export const NotificationBtn = memo(({ className }: NotificationBtnProps) => (
  <Popdown
    className={classNames('', [className])}
    trigger={<SVGIcon Svg={NotificationIcon} invertedColor />}
  >
    <NotificationList />
  </Popdown>
));
