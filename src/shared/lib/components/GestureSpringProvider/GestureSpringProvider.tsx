import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type gestureType = typeof import('@use-gesture/react');
type springType = typeof import('@react-spring/web');

interface GestureSpringProviderProps {
  Gesture?: gestureType;
  Spring?: springType;
  isLoaded?: boolean;
}

const GestureSpringContext = createContext<GestureSpringProviderProps>({});

export const useGestureSpring = () =>
  useContext(GestureSpringContext) as Required<GestureSpringProviderProps>;

const GestureSpringWait = () =>
  Promise.all([import('@use-gesture/react'), import('@react-spring/web')]);

export const GestureSpringProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const gestureRef = useRef<gestureType>();
  const springRef = useRef<springType>();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoaded) {
      GestureSpringWait()
        .then(([gestureLib, springLib]) => {
          gestureRef.current = gestureLib;
          springRef.current = springLib;
        })
        .then(() => setIsLoaded(true));
    }
  }, [isLoaded]);

  const value = useMemo(
    () => ({
      Gesture: gestureRef.current,
      Spring: springRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <GestureSpringContext.Provider value={value}>
      {children}
    </GestureSpringContext.Provider>
  );
};
