import { useCallback, useEffect, useRef, useState } from 'react';

interface useOverlayProps {
  isOpen: boolean;
  onClose?: () => void;
  animationDelay?: number;
}

export const useOverlay = ({
  isOpen,
  onClose,
  animationDelay,
}: useOverlayProps) => {
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

  const close = useCallback(() => {
    if (isOpen) {
      setIsClosing(true);
      closeTimeout.current = setTimeout(() => {
        onClose?.();
        setIsClosing(false);
      }, animationDelay);
    }
  }, [animationDelay, isOpen, onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      clearTimeout(closeTimeout.current);
    };
  }, [isOpen, onKeyDown]);

  return {
    isClosing,
    isMounted,
    close,
  };
};
