import { FC, ReactNode } from 'react';

import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { useOverlay } from '@/shared/lib/hooks/useOverlay';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';
import { useThemes } from '@/shared/lib/hooks/useThemes';

interface ModalProps {
  className?: string;
  isLazy?: boolean;
  children?: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  isLazy,
  onClose,
}) => {
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
      <div className={classNames(cls.Modal, [className, theme], mods)}>
        <Overlay onClick={close} />
        <div className={cls.content} role='presentation'>
          {children}
        </div>
      </div>
    </Portal>
  );
};
