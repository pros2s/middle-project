import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useThemes } from 'app/providers/ThemesProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props;
  const { theme } = useThemes();

  return (
    <Portal>
      <div
        className={classNames(cls.Drawer, [className, theme], {
          [cls.opened]: isOpen,
        })}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
