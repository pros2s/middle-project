import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type reactIconsType = typeof import('react-icons');

interface ReactIconsProviderProps {
  ReactIcons?: reactIconsType;
  isLoaded?: boolean;
}

const ReactIconsContext = createContext<ReactIconsProviderProps>({});

export const useReactIcons = () =>
  useContext(ReactIconsContext) as Required<ReactIconsProviderProps>;

export const ReactIconsProvider = ({ children }: { children: ReactNode }) => {
  const reactIconsRef = useRef<reactIconsType>();

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const asyncReactIcons = async () => {
      reactIconsRef.current = await import('react-icons');
      setIsLoaded(true);
    };

    if (!isLoaded) {
      asyncReactIcons();
    }
  }, [isLoaded]);

  const value = useMemo(
    () => ({
      ReactIcons: reactIconsRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return (
    <ReactIconsContext.Provider value={value}>
      {children}
    </ReactIconsContext.Provider>
  );
};
