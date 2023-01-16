import { classNames, Mode } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { useThemes } from 'app/providers/ThemesProvider';
import { useOverlay } from 'shared/lib/hooks/useOverlay';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  isLazy?: boolean;
  onClose: () => void;
}

export const Drawer = memo(
  ({ className, children, onClose, isOpen, isLazy }: DrawerProps) => {
    const { theme } = useThemes();
    const { close, isClosing, isMounted } = useOverlay({
      isOpen,
      onClose,
      animationDelay: 100,
    });

    if (isLazy && !isMounted) return null;

    const mods: Mode = {
      [cls.opened]: isOpen,
      [cls.closing]: isClosing,
    };

    return (
      <Portal>
        <div className={classNames(cls.Drawer, [className, theme], mods)}>
          <Overlay onClick={close} />
          <div className={cls.content}>{children}</div>
        </div>
      </Portal>
    );
  },
);
