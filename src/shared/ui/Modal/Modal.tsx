import { useThemes } from 'app/providers/ThemesProvider';
import {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { classNames, Mode } from 'shared/lib/classNames/classNames';
import { Portal } from '../Portal/Portal';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isLazy?: boolean;
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const CLOSING_DELAY = 100;

export const Modal: FC<ModalProps> = ({
  className,
  children,
  isOpen,
  isLazy,
  onClose,
}) => {
  const { theme } = useThemes();
  const closeTimeout = useRef<ReturnType<typeof setTimeout>>();

  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    } else {
      setIsMounted(false);
    }
  }, [isOpen]);

  const closeHandler = useCallback(() => {
    if (isOpen) {
      setIsClosing(true);
      closeTimeout.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, CLOSING_DELAY);
    }
  }, [isOpen, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler],
  );

  const onContentClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(closeTimeout.current);
    };
  }, [isOpen, onKeyDown]);

  const mods: Mode = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  if (isLazy && !isMounted) return null;

  return (
    <Portal>
      <div className={classNames(cls.Modal, [className, theme], mods)}>
        <div className={cls.overlay} role='presentation' onClick={closeHandler}>
          <div
            className={cls.content}
            role='presentation'
            onClick={onContentClick}
          >
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
