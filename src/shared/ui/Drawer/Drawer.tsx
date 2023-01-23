import { ReactNode, useCallback, useEffect } from 'react';
import { classNames, Mode } from '@/shared/lib/classNames/classNames';
import { useOverlay } from '@/shared/lib/hooks/useOverlay';
import {
  GestureSpringProvider,
  useGestureSpring,
} from '@/shared/lib/components/GestureSpringProvider';
import { Overlay } from '../Overlay/Overlay';
import cls from './Drawer.module.scss';
import { Portal } from '../Portal/Portal';
import { useThemes } from '@/shared/lib/hooks/useThemes';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  isLazy?: boolean;
  onClose: () => void;
}

const height = window.innerHeight - 727;

const DrawerContent = ({
  className,
  children,
  onClose,
  isOpen,
  isLazy,
}: DrawerProps) => {
  const { theme } = useThemes();
  const { Gesture, Spring } = useGestureSpring();
  const { close, isClosing, isMounted } = useOverlay({
    isOpen,
    onClose,
    animationDelay: 100,
  });
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const onGestureOpen = useCallback(() => {
    api.start({
      y: 0,
      immediate: false,
    });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      onGestureOpen();
    }
  }, [isOpen, onGestureOpen]);

  const onGestureClose = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: onClose,
    });
  };

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel();

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          onGestureClose(vy);
        } else {
          onGestureOpen();
        }
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  if (isLazy && !isMounted) return null;

  const mods: Mode = {
    [cls.opened]: isOpen,
    [cls.closing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(cls.Drawer, [className, theme], mods)}>
        <Overlay onClick={close} />
        <Spring.a.div
          className={cls.content}
          style={{ display, bottom: `calc(-100vh + ${height + 234}px)`, y }}
          {...bind()}
        >
          {children}
        </Spring.a.div>
      </div>
    </Portal>
  );
};

const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useGestureSpring();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => (
  <GestureSpringProvider>
    <DrawerAsync {...props} />
  </GestureSpringProvider>
);
