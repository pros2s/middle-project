import { memo, useState } from 'react';
import { SVGIcon } from '@/shared/ui/SVGIcon/SVGIcon';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import { NotificationList } from '@/entities/notification';
import { Popdown } from '@/shared/ui/Popups';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonThemes } from '@/shared/ui/Button/Button';
import { GestureSpringProvider } from '@/shared/lib/components/GestureSpringProvider';

interface NotificationBtnProps {
  className?: string;
}

export const NotificationBtn = memo(({ className }: NotificationBtnProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  const trigger = <SVGIcon Svg={NotificationIcon} invertedColor />;
  return (
    <>
      <BrowserView>
        <Popdown className={classNames('', [className])} trigger={trigger}>
          <NotificationList />
        </Popdown>
      </BrowserView>
      <MobileView>
        <Button theme={ButtonThemes.CLEAR} onClick={openHandler}>
          {trigger}
        </Button>
        <GestureSpringProvider>
          <Drawer
            className={classNames('', [className])}
            isOpen={isOpen}
            onClose={closeHandler}
          >
            <NotificationList />
          </Drawer>
        </GestureSpringProvider>
      </MobileView>
    </>
  );
});
